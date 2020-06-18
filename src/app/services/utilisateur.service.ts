import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Utilisateur } from '../objets/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http: HttpClient) { }

  getUtilisateur(nom: string, mdp: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>('http://127.0.0.1:8080/connexion');
  }
  getUtilisateurParId(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>('http://127.0.0.1:8080/evenements/'+id);
  }
  creerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>('http://127.0.0.1:8080/connexion/creation', utilisateur);
  }
  modifierUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.put<Utilisateur>('http://127.0.0.1:8080/utilisateurs/'+utilisateur.id, utilisateur);
  }
  getAll(){
    return this.http.get<Array<Utilisateur>>('http://127.0.0.1:8080/utilisateurs');
  }
  delete(id: number){
    //return this.http.delete<Utilisateur>('http://127.0.0.1:8080/utilisateur/'+utilisateur.id
    return this.http.delete('aaaa');
  }
  getInfoUtilisateur ():Observable<any> {
    return this.http.get('http://127.0.0.1:8080/connexion/infos');
  }
  creerUtilisateurRole(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>('http://127.0.0.1:8080/utilisateurs/roled', utilisateur);
  }
}
