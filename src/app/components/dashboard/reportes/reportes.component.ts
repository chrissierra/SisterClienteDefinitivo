import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html'
})
export class ReportesComponent implements OnInit {
	
	public nombreEmpresa:any;

  constructor() {

  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");

   }

  ngOnInit() {
  }





  
}
