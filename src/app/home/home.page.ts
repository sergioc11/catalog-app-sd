import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { peopleOutline, receiptOutline, cubeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({ peopleOutline, receiptOutline, cubeOutline });
  }
}
