import { Component } from '@angular/core';
import { article } from 'app/Models/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {

  titre = "Les articles du jour";

  listArticles: article[] = [
    {
      titre:'Le championnat du monde',
      contenu:'Le champion du monde de cette année est ',
      auteur:'Med Taher',
      date:'12/12/2005',
      categorie:'Sport'
    },
    {
      titre:'Les nouveau parents',
      contenu:'Les nouveau parents',
      auteur:'Ahmed Said',
      date:'11/11/2018',
      categorie:'Education'
    },
    {
      titre:'Comment ecrire votre CV',
      contenu:'Pour réussir a decraucher un emploi ',
      auteur:'Marie Elsa',
      date:'02/04/2017',
      categorie:'Travail'
    }
  ]
  }


