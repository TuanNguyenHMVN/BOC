import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {
    public baseUrl: string;

    constructor() {
        const port = environment.apiPort === '' ? '' : (':' + environment.apiPort);
        this.baseUrl = environment.apiUrl + port;
    }
}
