import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPowerOff, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPowerOff = faPowerOff;
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit() {
  }

}
