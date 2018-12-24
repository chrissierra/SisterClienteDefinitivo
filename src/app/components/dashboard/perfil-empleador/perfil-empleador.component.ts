import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil-empleador',
  templateUrl: './perfil-empleador.component.html'
})
export class PerfilEmpleadorComponent  {


  nombre:string;
  apellido:string;
  nombreEmpresa:string;
  rut:any;
  url:any;
  constructor(private router : Router) {
  	
     this.nombre = localStorage.getItem('nombre_rep');
     this.nombreEmpresa = localStorage.getItem('nombre_empresa');
     this.rut = localStorage.getItem('rut_empresa');
    this.url = "https://sister.cl/clientes_rrhh/"+ this.rut + "/registro/" + this.rut + ".jpg"
   }

   FuncionActualizarFoto(){
        this.router.navigate(['./DashBoard/ActualizarFoto/'+this.rut ]);
   }

}
