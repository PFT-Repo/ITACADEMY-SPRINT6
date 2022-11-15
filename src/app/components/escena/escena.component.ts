import { Component, OnInit, Input } from '@angular/core';
import { p } from '../home/home.component';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {


  @Input() titols: p[] = [];
  currentSentence: p | undefined;
  i : number = 0;
  bg = document.getElementById("body");
  constructor() {
  }
  next() {
    this.i +=1;
    if(this.i>3){this.i = 3}
    this.changback();
  }
  prev() {
    this.i-=1
    if(this.i < 0){this.i=0}
    this.changback();
  }
  ngOnInit(): void {
    this.currentSentence = this.titols[this.i]
      let bu =document.getElementById('body');
      if (bu){
        let y = <HTMLImageElement> bu;
        y.src= "assets/img/"+this.titols[this.i].img;
        bu.style.backgroundImage ="url(assets/img/"+this.titols[this.i].img+")";
      }
      
  }
  changback(){
    let bu =document.getElementById('body');
      if (bu){
        let y = <HTMLImageElement> bu;
        y.src= "assets/img/"+this.titols[this.i].img;
        bu.style.backgroundImage ="url(assets/img/"+this.titols[this.i].img+")";
  }
}

}