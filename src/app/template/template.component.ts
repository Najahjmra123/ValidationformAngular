import { Component } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  user={} as User;
  pass?:string;
  acceptation:boolean=false;
    constructor() { 
      this.user.redoublement=0;
      
    }

}
