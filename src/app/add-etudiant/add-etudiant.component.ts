import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/Etudiant';
import { EtudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html'
})
export class AddEtudiantComponent implements OnInit {
newEtudiant = new Etudiant();
message :string;
constructor(private etudiantService: EtudiantService){ }

  
  addEtudiant(){
    //console.log(this.newEtudiant);
this.etudiantService.ajouterEtudiant(this.newEtudiant);    
}
ngOnInit(): void {
}
  
}
