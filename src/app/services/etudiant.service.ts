import { Injectable } from '@angular/core';
import { Etudiant } from '../model/Etudiant';
@Injectable({
providedIn: 'root'
})
export class EtudiantService {
etudiants : Etudiant[];
constructor() {
this.etudiants = [
  {idEtudiant : 1, nomEtudiant : "Fedi", prenomEtudiant : "Fazaa", dateNaissance : new Date("04/15/2000")},
  {idEtudiant : 2, nomEtudiant : "Fedi", prenomEtudiant : "Fazaa", dateNaissance : new Date("04/15/2000")},
  {idEtudiant : 3, nomEtudiant : "Fedi", prenomEtudiant : "Fazaa", dateNaissance : new Date("04/15/2000")},
];
}
listeEtudiants():Etudiant[] {


return this.etudiants;
}
ajouterEtudiant( prod: Etudiant){
this.etudiants.push(prod);
}
supprimerEtudiant( prod: Etudiant){
  const index = this.etudiants.indexOf(prod, 0);
  if (index > -1) {
  this.etudiants.splice(index, 1);
  }

  }
  consulterEtudiant(id:number): Etudiant{
    return  this.etudiants.find(p => p.idEtudiant == id);
    //return this.etudiant;
    }
    updateEtudiant(p:Etudiant)
     {
       this.supprimerEtudiant(p);
       this.ajouterEtudiant(p);
       this.trierEtudiants();

  
     }
     trierEtudiants(){
      this.etudiants = this.etudiants.sort((n1,n2) => {
      if (n1.idEtudiant > n2.idEtudiant) {
      return 1;
      }
      if (n1.idEtudiant < n2.idEtudiant) {
      return -1;
      }
      return 0;
      });
      }
    }