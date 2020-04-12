import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  menu = [
    {
      'id'   : 'mapViewId',
      'name' : 'Map view', 
      'icon' : 'fa fa-map icon',
      'link' : 'mapview' 
    },
    { 
      'id'   : 'tableViewId',
      'name' : 'Table view', 
      'icon' : 'fa fa-table icon',
      'link' : 'tableview'
    },
    {
      'id'   : 'cubeViewId',
      'name' : 'Cube view', 
      'icon' : 'fa fa-cubes icon',
      'link' : 'cubeview'
    }
  ];

  menuItem = "menu-item";
  selectedItem = null;

  constructor() { }

  ngOnInit(): void {
  }

  setItemClickedClass(id){
    let element = document.getElementById(id);
    element.classList.add("item-clicked");
    this.setUncheckItem(id);
    this.selectedItem = element;
  }

  setUncheckItem(id){
    if(this.selectedItem != null && this.selectedItem != id){
      this.selectedItem.classList.remove("item-clicked");
    }
  }

}
