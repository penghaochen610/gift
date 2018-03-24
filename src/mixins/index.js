//客户端扩展模块
const context = weex.requireModule('context')

export default {
    methods: {
        //json转字符串，用在stream的body
        toParams(obj) {
            var param = ""
            for (const name in obj) {
                if (typeof obj[name] != 'function') {
                    param += "&" + name + "=" + encodeURI(obj[name])
                }
            }
            return param.substring(1)
        },
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        //返回按钮
        goBack() {
            if (this.$router) {
                if (this.$route.path == "/EopenAccountPre") {
                    context.finish()
                } else {
                    this.$router.back()
                }
            }
        },
        goHome(){
            context.finish()
        }
    }
}