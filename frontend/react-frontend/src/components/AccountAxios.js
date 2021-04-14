import service from './RequestInterceptor';

export function LoginRequest(data) {
    return service.request({  //返回给调用此方法的caller
        url: "/user/login/",
        method: "post",
        data: data,
    })
}


export function RegisterRequest(data) {
    return service.request({  //返回给调用此方法的caller
        url: "/user/register/",
        method: "post",
        data: data,

    })
}

export function LogoutRequest() {
    return service.request({
        url: "/user/logout/",
        method: "get",
    })
}

export function ClassifyRequest(data) {
    return service.request({
        url: '/email/classify/',
        method: "post",
        data: data
    })
}