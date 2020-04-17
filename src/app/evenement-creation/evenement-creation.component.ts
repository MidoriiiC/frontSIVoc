import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../objets/evenement';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-evenement-creation',
  templateUrl: './evenement-creation.component.html',
  styleUrls: ['./evenement-creation.component.scss']
})
export class EvenementCreationComponent implements OnInit {


    private nom = new FormControl('');
    private contenuArticle = new FormControl('');
    private image = new FormControl('');
    private lienVideo = new FormControl('');
    private date = new FormControl('');
    private heure = new FormControl('');
    private lieu = new FormControl('');
    private organisateur = new FormControl('');

    private mode: number;
    protected evenement = new Evenement();
    protected titre = '';

  constructor(private evenementService: EvenementService, private route: ActivatedRoute, private router: Router) {
    if (!this.route.snapshot.paramMap.get('id')) {
      this.mode = 0;
      console.log('creation');
      this.titre = 'Création d\'évènement'
    } else {
      this.mode = 1;
      this.getEvenement();
      console.log('edition');
    }
   }

  creer(){
    let aCreer = new Evenement();
    aCreer.nom = this.nom.value;
    aCreer.contenuArticle = this.contenuArticle.value;
    aCreer.image = this.image.value;
    aCreer.lienVideo = this.lienVideo.value;
    aCreer.date = this.date.value;
    aCreer.heure = this.heure.value;
    aCreer.organisateur = this.organisateur.value;
    aCreer.lieu = this.lieu.value;
    if (this.mode === 0) {
      this.evenementService.creerEvenement(aCreer).subscribe(data => {
        this.router.navigate(['/evenement/' + data.id])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    } else {
      aCreer.id = this.evenement.id;
      this.evenementService.modifierEvenement(aCreer).subscribe(data => {
        this.router.navigate(['/evenement/' + data.id])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    }
  }



  getEvenement(){
    this.evenementService.getEvenementParId(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
    {
      this.evenement = data; this.titre = 'Modifier ' + this.evenement.nom;
      this.nom.setValue(this.evenement.nom);
      this.date.setValue(this.evenement.date);
      this.heure.setValue(this.evenement.heure);
      this.organisateur.setValue(this.evenement.organisateur);
      this.image.setValue(this.evenement.image);
      this.contenuArticle.setValue(this.evenement.contenuArticle);
      this.lienVideo.setValue(this.evenement.lienVideo);
      this.lieu.setValue(this.evenement.lieu);
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
