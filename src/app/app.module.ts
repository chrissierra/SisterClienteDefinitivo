import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from "angular2-image-upload";

// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatMomentDateModule} from '@angular/material-moment-adapter';
 import {MatNativeDateModule} from '@angular/material';

//Guards

// Angular maps
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

// rutas:
import { peo } from './app.routes';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';
import { PasounoComponent } from './components/ingresa/pasos/pasouno/pasouno.component';
import { PasodosComponent } from './components/ingresa/pasos/pasodos/pasodos.component';
import { PasotresComponent } from './components/ingresa/pasos/pasotres/pasotres.component';
import { PlanillaComponent } from './components/planilla/planilla.component';
import { PerfilTrabajadorComponent } from './components/perfil-trabajador/perfil-trabajador.component';
import { TurnosVariablesComponent } from './components/perfil-trabajador/turnos-variables/turnos-variables.component';
import { TurnosFijosComponent } from './components/perfil-trabajador/turnos-fijos/turnos-fijos.component';
import { PerfilComponent } from './components/perfil-trabajador/perfil/perfil.component';
import { HistorialTurnosComponent } from './components/perfil-trabajador/historial-turnos/historial-turnos.component';
import { LiberarTurnosComponent } from './components/perfil-trabajador/liberar-turnos/liberar-turnos.component';
import { DashBoardComponent } from './components/dashboard/dash-board/dash-board.component';
import { PerfilEmpleadorComponent } from './components/dashboard/perfil-empleador/perfil-empleador.component';
import { IngresoSucursalComponent } from './components/dashboard/ingreso-sucursal/ingreso-sucursal.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
import { MarcajeComponent } from './components/perfil-trabajador/marcaje/marcaje.component';
import { SueldosComponent } from './components/dashboard/sueldos/sueldos.component';
import { LiberarSueldosComponent } from './components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component';
import { HaberNoImponibleComponent } from './components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component';
import { SueldosLiberadosComponent } from './components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component';
import { ResumenComponent } from './components/perfil-trabajador/resumen/resumen.component';
import { VisualizacionLiquidacionesComponent } from './components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component';
import { ActualizarTurnosFijosComponent } from './components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component';
import { RepasistenciadiarioComponent } from './components/dashboard/reportes/repasistenciadiario/repasistenciadiario.component';
import { RepasistenciamensualComponent } from './components/dashboard/reportes/repasistenciamensual/repasistenciamensual.component';
import { EditarPerfilTrabajadorComponent } from './components/perfil-trabajador/editar-perfil-trabajador/editar-perfil-trabajador.component';
import { EditarFotoComponent } from './components/perfil-trabajador/editar-foto/editar-foto.component';
import { SelectSucursalesComponent } from './components/shared/select-sucursales/select-sucursales.component';
import { ConfiguracionComponent } from './components/dashboard/configuracion/configuracion.component';
import { ActualizarFotoComponent } from './components/dashboard/actualizar-foto/actualizar-foto.component';
import { ClientesComponent } from './components/dashboard/clientes/clientes.component';
import { CargosComponent } from './components/dashboard/cargos/cargos.component';

// servicios
import { EmpleadoService } from './components/ingresa/interfaces/empleado.service';
import { IngresoUsuarioServidorService } from './services/ingreso-usuario-servidor.service';
import { LoginservicesService } from './services/loginservices.service';
import { RutasservidorService } from './services/rutasservidor.service';
import { PlanillaservicesService } from './services/planillaservices.service';
import { PerfilTrabajadorServiceService } from './services/perfil-trabajador-service.service';
import { LiberarTurnosService } from './services/liberar-turnos.service';
import { GuardarSucursalService } from './services/guardar-sucursal.service';
import { MarcajeServiceService } from './services/marcaje-service.service';
import { AppService } from './app.service';
import { SueldosService } from './services/sueldos.service';
import { MensajesSwalService } from './services/mensajes-swal.service';
import { LibroremuneracionesService } from './services/libroremuneraciones.service';
import { GeolocalizacionService } from './services/geolocalizacion.service';
import { contrasenias } from './components/dashboard/configuracion/Interfaces/claves.interface'
import { ClavesService } from './services/claves.service';
import { MandantesService } from './services/mandantes.service';
import { CargosService } from './services/cargos.service';
//Pipes
import { EntradaosalidaPipe } from './pipes/entradaosalida.pipe';
import { NombreDelDiaDelMesPipe } from './pipes/nombre-del-dia-del-mes.pipe';
import { getHoraPipe } from './pipes/getHoraPipe.pipe';
import { getDiaPipe } from './pipes/getDia.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    IngresaComponent,
    PasounoComponent,
    PasodosComponent,
    PasotresComponent,
    PlanillaComponent,
    PerfilTrabajadorComponent,
    TurnosVariablesComponent,
    TurnosFijosComponent,
    PerfilComponent,
    HistorialTurnosComponent,
    LiberarTurnosComponent,
    EntradaosalidaPipe,
    NombreDelDiaDelMesPipe,
    getHoraPipe,
    getDiaPipe,
    DashBoardComponent,
    PerfilEmpleadorComponent,
    IngresoSucursalComponent,
    ReportesComponent,
    MarcajeComponent,
    SueldosComponent,
    LiberarSueldosComponent,
    HaberNoImponibleComponent,
    SueldosLiberadosComponent,
    ResumenComponent,
    VisualizacionLiquidacionesComponent,
    ActualizarTurnosFijosComponent,
    RepasistenciadiarioComponent,
    RepasistenciamensualComponent,
    EditarPerfilTrabajadorComponent,
    EditarFotoComponent,
    SelectSucursalesComponent,
    ConfiguracionComponent,
    ActualizarFotoComponent,
    ClientesComponent,
    CargosComponent
  ],
  imports: [
    BrowserModule,
    peo,
    FormsModule,
    ImageUploadModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSnackBarModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
  
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNSFFyJn6a_AIm44b_7atfg_ml4NI6ReY'
    })
  ],
  providers: [EmpleadoService,
              IngresoUsuarioServidorService,
              LoginservicesService,
              RutasservidorService,
              PlanillaservicesService,
              PerfilTrabajadorServiceService,
              LiberarTurnosService,
              ClavesService,
              GoogleMapsAPIWrapper,
              GuardarSucursalService,
              MarcajeServiceService,
              CargosService,
              AppService,
              contrasenias,
              SueldosService,
              MensajesSwalService,
              LibroremuneracionesService,
              MandantesService,
              GeolocalizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
