import {HttpHeaders} from '@angular/common/http';

import {environment} from '@envs/environment';
import {HttpOptions} from '@utils/api';

export class RequestUtils {

  private constructor() {}

  public static getApiUrl(url: string): string {
    return environment.backendUrl + url;
  }

  public static getAuthUrl(url: string): string {
    return environment.authUrl + url;
  }

  public static getJsonOptions(customHeaders?: any): HttpOptions {
    return RequestUtils.getOptions({
      ...customHeaders,
      'Content-Type': 'application/json',
    });
  }

  public static getOptions(customHeaders?: any): HttpOptions {
    const headers: any = {...customHeaders};
    return {headers: new HttpHeaders(headers)};
  }
}
