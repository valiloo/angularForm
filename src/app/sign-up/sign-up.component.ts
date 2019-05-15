import { Component, OnInit } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  model : Order = new Order();

  onSubmit() {
    console.log(this.model);
  }

  ngOnInit() {
  }

}
