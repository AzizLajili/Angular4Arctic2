import { Component } from '@angular/core';
import { Emploi } from '../Models/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {

  emplois: Emploi[] = [
    {
      reference: 'REF001',
      titre: 'Développeur Web',
      entreprise: '123 Ltd.',
      etat: true,
    },
    {
      reference: 'REF002',
      titre: 'Designer Graphique',
      entreprise: '123 Ltd.',
      etat: false,
    },
    {
      reference: 'REF003',
      titre: 'Chef de Projet',
      entreprise: '123 Ltd.',
      etat: true,
    },
  ];

  entrepriseRecherchee: string = '';
  emploisAffiches: Emploi[] = this.emplois;
  nombreNonCloturees: number = 0;

  calculerNonCloturees() {
    this.nombreNonCloturees = this.emplois.filter((emploi) => emploi.etat === true).length;
  }
  rechercher() {
    if (this.entrepriseRecherchee.trim() === '') {
      this.emploisAffiches = this.emplois;
    } else {
      this.emploisAffiches = this.emplois.filter((emploi) =>
        emploi.entreprise.toLowerCase().includes(this.entrepriseRecherchee.toLowerCase())
      );
    }
  }
}
