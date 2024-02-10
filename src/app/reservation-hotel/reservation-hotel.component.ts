import { Component } from '@angular/core';
import { Inscription } from '../shared/classes/inscription';

@Component({
  selector: 'app-reservation-hotel',
  templateUrl: './reservation-hotel.component.html',
  styleUrl: './reservation-hotel.component.css'
})
export class ReservationHotelComponent {
  inscription={} as Inscription;
  constructor(){
    this.inscription.reservation="none";
    this.inscription.duree=1;
    this.inscription.numberenfant=0;
    this.inscription.type="monome";
  }

}
