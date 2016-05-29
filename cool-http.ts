import { provide } from '@angular/core';

import { CoolHttp } from './src/cool-http.service'
export { CoolHttp } from './src/cool-http.service'

export { HttpHeader } from './src/http-header.model'
export { IRequestInterceptor } from './src/request-interceptor.interface'
export { IResponseInterceptor } from './src/response-interceptor.interface'

export const COOL_HTTP_PROVIDERS: any[] = [
    CoolHttp
];
