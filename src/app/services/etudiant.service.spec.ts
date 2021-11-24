import { TestBed } from '@angular/core/testing';
import { Etudiant } from '../model/Etudiant';

import { EtudiantService } from './etudiant.service';

describe('EtudiantService', () => {
  let service: EtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

  
