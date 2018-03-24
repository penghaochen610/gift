// import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)




import Lottery from './views/Lottery.vue'






export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/Lottery', component: Lottery },

        // { path: '/login', component: LoginView },
        // { path: '/fingerprintlogin', component: FingerprintLoginView },
        // { path: '/gestureslogin', component: GesturesLoginView },
        // { path: '/forgetpwdone', component: ForgetPwdOneView },
        // { path: '/forgetpwdtwo', component: ForgetPwdTwoView },
        // { path: '/forgetpwdthree', component: ForgetPwdThreeView },
        // { path: '/forgetpwdfour', component: ForgetPwdFourView },
        // { path: '/register', component: RegisterOneView },
        // { path: '/registertwo', component: RegisterTwoView },
        // { path: '/registerthree', component: RegisterThreeView },
        // { path: '/registerfour', component: RegisterFourView },
        // { path: '/earegister', component: EARegisterOneView },
        // { path: '/earegistertwo', component: EARegisterTwoView },
        // { path: '/earegisterthree', component: EARegisterThreeView },
        // { path: '/earegisterfour', component: EARegisterFourView },
        // { path: '/earegisterfive', component: EARegisterFiveView },
        // { path: '/earegistersix', component: EARegisterSixView },
        // { path: '/setpwd', component: SetPwdView },
        // { path: '/agreement', component: Agreement },
        { path: '/', redirect: '/Lottery' }
    ]
})