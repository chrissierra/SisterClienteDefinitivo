import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as moment from 'moment';
import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import { GeolocalizacionService } from '../../../../services/geolocalizacion.service';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
declare var google: any;
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-repasistenciadiario',
  templateUrl: './repasistenciadiario.component.html',
  styleUrls: ['./repasistenciadiario.component.css']
})
export class RepasistenciadiarioComponent  {
	public nombreEmpresa:any;	
	public calendario:any;
	public movimiento:any;
  public arrayDirecciones:any;
  public geocoder:any;
  public movimientos: any[] = [];
  public mes:any = 'mes';
  public anio:any;
  @ViewChild('TABLE') table: ElementRef;
  constructor(public servicioLibroDiario:LibroremuneracionesService,
              public geolocalizacion: GeolocalizacionService,
              public mapsApiLoader: MapsAPILoader,
              private wrapper: GoogleMapsAPIWrapper) {
           this.mapsApiLoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
          });
  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");

   }


exportAsExcel()
    {

       this.exportAsExcelFile(this.movimientos, 'Asistencia'); 
      let ws: XLSX.WorkSheet= XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
      let wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Asistencia mensual');

      /* save to file */  
      XLSX.writeFile(wb, 'Asistencia'+this.mes+'_'+this.anio+'.xlsx');

    }


      public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        XLSX.writeFile(workbook, this.toExportFileName(excelFileName));
      }


      public toExportFileName(excelFileName: string): string {
        return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
      }

      ActualizarFecha(){

           // this.geolocalizacion.findAddressByCoordinates( -33.4067802, -70.668223);     
           // this.arrayDirecciones = this.geolocalizacion.array_direccion;

            const FORMATO_ENTRADA = 'MM-DD-YYYY';
            const FORMATO_SALIDA = 'MM-DD-YYYY';
            const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
          //  alert(fecha1.format(FORMATO_SALIDA));
            this.servicioLibroDiario.GetLibroDiario({'id': this.nombreEmpresa, 'dia': fecha1.format(FORMATO_SALIDA) }).subscribe( (data)=> {
            	console.log(data);
            	this.movimiento = data;
            } );


      }





}
