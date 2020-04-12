import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {

  theadElements = [
    {
      'name': 'Plant',
      'colspan': 1
    },
    {
      'name': 'Incidents',
      'colspan': 2
    },
    {
      'name': 'Comunications',
      'colspan': 2
    },
    {
      'name': 'Inverters',
      'colspan': 4
    },
    {
      'name': 'Meters',
      'colspan': 4
    },
    {
      'name': 'Weather stations',
      'colspan': 3
    },
    {
      'name': 'String meters',
      'colspan': 2
    },
    {
      'name': 'Seguidores',
      'colspan': 4
    }
  ];

  theadValues = [
    {
      'name': 'Plant name',
      'icon': null 
    },
    {
      'name': 'Total',
      'icon': null 
    },
    {
      'name': 'New',
      'icon': null 
    },
    {
      'name': null,
      'icon': 'fa fa-bar-chart' 
    },
    {
      'name': null,
      'icon': 'fa fa-exclamation-triangle' 
    },
    {
      'name': null,
      'icon': 'fa fa-bar-chart'
    },
    {
      'name': null,
      'icon': 'fa fa-exclamation-triangle' 
    },
    {
      'name': null,
      'icon': 'fa fa-database' 
    },
    {
      'name': null,
      'icon': 'fa fa-clock-o' 
    },
    {
      'name': null,
      'icon': 'fa fa-bar-chart'
    },
    {
      'name': null,
      'icon': 'fa fa-exclamation-triangle' 
    },
    {
      'name': null,
      'icon': 'fa fa-database' 
    },
    {
      'name': null,
      'icon': 'fa fa-clock-o' 
    },
    {
      'name': null,
      'icon': 'fa fa-bar-chart'
    },
    {
      'name': null,
      'icon': 'fa fa-database' 
    },
    {
      'name': null,
      'icon': 'fa fa-clock-o' 
    },
    {
      'name': null,
      'icon': 'fa fa-bar-chart'
    },
    {
      'name': null,
      'icon': 'fa fa-database' 
    },
    {
      'name': null,
      'icon': 'fa fa-bar-chart'
    },
    {
      'name': null,
      'icon': 'fa fa-exclamation-triangle' 
    },
    {
      'name': null,
      'icon': 'fa fa-map-o'
    },
    {
      'name': null,
      'icon': 'fa fa-database'
    }
  ];

  tableData =[
    {
      'values': ['FONTIVEROS','0','0','0','0','60','25','!','!','24','0','!','!','0','0','0','114','57','0','0','0','0'],
      'color': 'red-background'
    },
    {
      'values': ['VILLAFLORES','0','0','0','0','60','25','!','!','24','0','!','!','0','0','0','114','57','0','0','0','0'],
      'color': 'yellow-background'
    },
    {
      'values': ['CALVARRASA','0','0','0','0','60','25','!','!','24','0','!','!','0','0','0','114','57','0','0','0','0'],
      'color': 'green-background'
    },
    {
      'values': ['FONTIVEROS 2','0','0','0','0','60','25','!','!','24','0','!','!','0','0','0','114','57','0','0','0','0'],
      'color': 'red-background'
    },
    {
      'values': ['VILLAFLORES 2','0','0','0','0','60','25','!','!','24','0','!','!','0','0','0','114','57','0','0','0','0'],
      'color': 'yellow-background'
    },
    {
      'values': ['CALVARRASA 2','0','0','0','0','60','25','!','!','24','0','!','!','0','0','0','114','57','0','0','0','0'],
      'color': 'green-background'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
