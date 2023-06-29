import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getSolarHistorical(addr : string, capacity : string)
  {
    let httpParams = new HttpParams()
      .set('api_key', 'znH0p5oA9ddPKelFZxeVAfdcvufsXp2lst3rW3Xq')
      .set('system_capacity', capacity)
      .set('module_type', '0')
      .set('losses', '0')
      .set('tilt', '0')
      .set('azimuth', '0')
      .set('array_type', '2') //1
      .set('address', addr);

    return this.http
      .get<any>('https://developer.nrel.gov/api/pvwatts/v8.json?', { params: httpParams })
  }
}
