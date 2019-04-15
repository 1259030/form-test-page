import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/operators';
@Injectable()
export class FormsubmitService {

  constructor(private http: HttpClient) { 

  }

  submitData(formGroup) {
    const URL = '';
    const Res = this.http.post(URL, formGroup).pipe(map((res: Response ) => res.json()));
    return Res;
  }
}
