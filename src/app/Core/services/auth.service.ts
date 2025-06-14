import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';     

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  
    login(userData: { username: string; password: string }): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', JSON.stringify(userData),{
       headers: { 'Content-Type': 'application/json' }
    })
    
  }
}
