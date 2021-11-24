import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/Etudiant';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html'
})
export class EtudiantsComponent implements OnInit {

  etudiants : Etudiant[];

  constructor(private etudiantService: EtudiantService) {
   this.etudiants = etudiantService.listeEtudiants();
   }

  ngOnInit(): void {
  }
  supprimerEtudiant(prod: Etudiant)
{
//console.log(prod);
let conf = confirm("Etes-vous sur ?");
if (conf)
  this.etudiantService.supprimerEtudiant(prod);
}

}
