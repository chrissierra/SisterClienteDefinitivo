import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-actualizar-foto',
  templateUrl: './actualizar-foto.component.html',
  styleUrls: ['./actualizar-foto.component.css']
})
export class ActualizarFotoComponent     {
  public url:any;
  
  constructor(private param: ActivatedRoute, private router: Router) { 
  	  	this.url = "https://sister.cl/recepcionimagenclientesrrhh.php?rut=" + this.param.snapshot.paramMap.get('rut');
        console.log(this.url)
        console.log( this.param.snapshot.paramMap.get('rut'))
  }


  onUploadFinished(file) {
  console.log(file);
  console.log("Tamaño de la foto...", file.file.size);

  if(file.file.size > 400000){
      this.mensajeError();
      
  }else{
      this.mensaje();
      this.router.navigate(['./Dashboard/']);
  }


}

onRemoved(file) {
  console.log(file);
}

onUploadStateChanged(state: boolean) {
  console.log(state);
}



 public mensaje(){
       swal({
          title: 'Proceso Exitoso',
          text: 'Se ingresó correctamente al trabajador',
          type: 'success',
          confirmButtonText: 'Ok'
        })
   }


    public mensajeError(){
       swal({
          title: 'Imagen muy pesada',
          text: 'La imagen debe pesar como máximo 400 KB. Reducir el tamaño ayuda también a que sea mas liviana.',
          type: 'error',
          confirmButtonText: 'Ok'
        })
   }
}
