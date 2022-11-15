import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstTime = true;
  constructor() { }

  ngOnInit(): void {
  }
  changeFirst(){
    this.firstTime= false;
  }
  
  titles: p[] = [
    {
      title: "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
      img:"1.jpg"
    },
    {
      title: "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
      img:"2.jpg"
    },
    {
      title: "El héroe decidió atravesar la puerta que le llevaba a casa",
      img:"3.jpg"
    },
    {
      title: "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...",
      img:"4.jpg"
    }
  ]

}

export interface p {
    id?: number;
    title?:string;
    img?:string;
}