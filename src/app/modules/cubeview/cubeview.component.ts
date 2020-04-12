import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubeview',
  templateUrl: './cubeview.component.html',
  styleUrls: ['./cubeview.component.css']
})
export class CubeviewComponent implements OnInit {

  cardsData = [
    {
      'name' : 'TOTAL', 
      'classes' : 'cube-data total-card',
      'incidents' : '36',
      'new' : '12',
      'invertersFailed' : '224',
      'invertersInstant' : '73'
    },
    {
      'name' : 'FONTIVEROS', 
      'classes' : 'cube-data error-card',
      'incidents' : '0',
      'new' : '0',
      'invertersFailed' : '25',
      'invertersInstant' : '0'
    },
    {
      'name' : 'VILLAFLORES', 
      'classes' : 'cube-data warning-card',
      'incidents' : '0',
      'new' : '0',
      'invertersFailed' : '2',
      'invertersInstant' : '0'
    },
    {
      'name' : 'FONTIVEROS 2', 
      'classes' : 'cube-data error-card',
      'incidents' : '4',
      'new' : '3',
      'invertersFailed' : '12',
      'invertersInstant' : '0'
    },
    {
      'name' : 'VILLAFLORES 2', 
      'classes' : 'cube-data warning-card',
      'incidents' : '3',
      'new' : '2',
      'invertersFailed' : '22',
      'invertersInstant' : '0'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
