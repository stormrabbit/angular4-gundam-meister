import { Injectable } from '@angular/core';
import { Gundam } from '../model/gundam';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GundamService {
  private api = 'http://localhost:4000'; // 服务器地址
  private gundamList = '/gundamlist';  // 获取全部
  private getGundam = '/detail';
  constructor(private http: Http) {};

   // 获得全部数据
   getGundams(): Promise<Gundam[]> {
     return this.http.get(this.api + this.gundamList)
              .toPromise()
              .then(response => response.json() as Gundam[])
              .catch(this.handleError);
   }

   // 根据Id查询高达
   getGundamById(id: number): Promise<Gundam> {
     console.log(this.api + this.getGundam + '?id=' + id);
    return this.http.get(this.api + this.getGundam + '?id=' + id)
                    .toPromise()
                    .then( response => response.json() as Gundam)
                    .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
   }
}
