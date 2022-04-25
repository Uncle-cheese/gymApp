import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{environment} from '../../environments/environment' 

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  baseurl: string = environment.BASEURL;

  constructor(private http:HttpClient) { }

  signUp(registerObj:any){
    return this.http.post<any>(`${this.baseurl}/users`,registerObj)
  }
}
