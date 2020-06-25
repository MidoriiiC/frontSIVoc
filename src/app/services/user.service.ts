import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../objets/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(name: string, password: string): Observable<User> {
    return this.http.get<User>('http://127.0.0.1:8080/connexion');
  }
  getUserById(id: number): Observable<User> { // non utilisé pour le moment
    return this.http.get<User>('http://127.0.0.1:8080/users/'+id);
  }
  createUser(user: User): Observable<User>{
    return this.http.post<User>('http://127.0.0.1:8080/connexion/creation', user);
  }
  modifyUser(user: User): Observable<User>{
    return this.http.put<User>('http://127.0.0.1:8080/users/'+user.id, user);
  }
  getAll(){
    return this.http.get<Array<User>>('http://127.0.0.1:8080/users');
  }
  delete(id: number){
    return this.http.delete<any>('http://127.0.0.1:8080/users/'+id);
  }
  getInfoUser ():Observable<any> {
    return this.http.get('http://127.0.0.1:8080/connexion/infos');
  }
  createUserRole(user: User): Observable<User>{
    return this.http.post<User>('http://127.0.0.1:8080/users/createUserWithAuthority', user);
  }
}
