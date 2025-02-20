declare module 'simple-oauth2' {
    export class ClientCredentials {
        constructor(config: any);
        getToken(params: any): Promise<any>;
    }
}