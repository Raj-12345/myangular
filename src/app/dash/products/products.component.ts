import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Object=[ 
    { id:"1",name:"cpu",price:"200"},
  { id:"2",name:"mouse",price:"200"},
  { id:"3",name:"keywords",price:"200"},
  { id:"4",name:"bottal",price:"200"},
  { id:"5",name:"ram",price:"200"},
  { id:"6",name:"cup",price:"200"},
  { id:"7",name:"pen",price:"200"},
];

  constructor() { }

  ngOnInit(): void {
  }

}

