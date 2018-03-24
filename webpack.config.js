var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');

var bannerPlugin = new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" }\n',
    raw: true
})

function getBaseConfig() {
    return {
        entry: {
            'index': path.resolve('src', 'entry.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules(?!(\/|\\).*(weex).*)/
            },
            
            {
                test: /\.vue(\?[^?]+)?$/
            }]
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
            bannerPlugin,

            new CopyWebpackPlugin([
                { from: 'src/imgs', to: 'imgs' },
                // { from: 'src/htmls', to: 'htmls' },
                // { from: 'src/json', to: 'json' }
            ], {})
        ],
        //配置webpack开发服务功能
        devServer: {
            contentBase: path.resolve(__dirname, './'),
            compress: true,
            host: "0.0.0.0",
            port: "1337",
            // open:true
        }
    }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[1].loader = 'vue-loader'
/**
 * important! should use postTransformNode to add $processStyle for
 * inline style normalization.
 */
webConfig.module.rules[1].options = {
    compilerModules: [
        {
            postTransformNode: el => {
                el.staticStyle = `$processStyle(${el.staticStyle})`
                el.styleBinding = `$processStyle(${el.styleBinding})`
            }
        }
    ]
}

var nativeConfig = getBaseConfig()
nativeConfig.output.filename = '[name].weex.js'
nativeConfig.module.rules[1].loader = 'weex-loader'

module.exports = [webConfig, nativeConfig]