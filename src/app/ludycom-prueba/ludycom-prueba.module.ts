import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LudycomRoutingModule } from './ludycom-prueba-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// Componentes
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { RegisterAreasComponent } from './pages/register-areas/register-areas.component';
import { RegisterEmpleadoComponent } from './pages/register-empleado/register-empleado.component';
import { TableAreasComponent } from './pages/table-areas/table-areas.component';
import { TableEmpleadosComponent } from './pages/table-empleados/table-empleados.component';
import { EditAreaComponent } from './pages/edit-area/edit-area.component';
import { EditEmpleadoComponent } from './pages/edit-empleado/edit-empleado.component';

import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormAreasComponent } from './components/form-areas/form-areas.component';



@NgModule({
  declarations: [
    EditAreaComponent,
    EditEmpleadoComponent,
    LayoutPageComponent,
    RegisterAreasComponent,
    RegisterEmpleadoComponent,
    TableAreasComponent,
    TableEmpleadosComponent,
    FormRegisterComponent,
    FormAreasComponent
  ],
  imports: [
    CommonModule,
    LudycomRoutingModule,
    ReactiveFormsModule

  ]
})
export class LudycomPruebaModule { }
