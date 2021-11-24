import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../model/Etudiant';
@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [
  ]
})
export class UpdateEtudiantComponent implements OnInit {
currentEtudiant = new Etudiant();
  constructor(private activatedRoute: ActivatedRoute,
              private etudiantService: EtudiantService,
              private router :Router) { }

  ngOnInit(): void {
this.currentEtudiant=this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params.id);
console.log(this.currentEtudiant) ; }
updateEtudiant()
    { //console.log(this.currentProduit);
    this.etudiantService.updateEtudiant(this.currentEtudiant);
    this.router.navigate(['etudiants']);
    }
  }


   

