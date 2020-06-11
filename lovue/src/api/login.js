import request from '../utils/request'
// const BAST_URL ='https://elm.cangdu.org'
export function login(username, password, captcha_code) {
    return request({
        url: '/v2/login',
        method: 'post',
        data: {
            username,
            password,
            captcha_code
        }
    })

}
export function getCode() {
    return request({
        url: '/v1/captchas',
        method: 'post',
    })

}
