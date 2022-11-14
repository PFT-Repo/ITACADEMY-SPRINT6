import { Component, OnInit } from '@angular/core';
import {p} from './p';
import { titles } from './mock_p';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {

  Data = titles;
  constructor() { }

  ngOnInit(): void {
  }

}
