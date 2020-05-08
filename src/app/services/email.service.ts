import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import {RequestUtils} from '@utils/request-utils';
import {RequestBuilder} from '@utils/builder/request-builder';

@Injectable()
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  public sendMail(obj: any): Observable<void> {
    const reqBuilder = new RequestBuilder(this.getEndpoint(`/send`), RequestUtils.getJsonOptions());
    return this.httpClient.post<void>(reqBuilder.toUriString(), obj, reqBuilder.options).pipe(
      map(() => null),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error(error);
    return throwError(error);
  }

  private getEndpoint(path: string): string {
    return RequestUtils.getApiUrl(path);
  }

}
