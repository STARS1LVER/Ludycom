import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { TableEmpleadosComponent } from './pages/table-empleados/table-empleados.component';
import { TableAreasComponent } from './pages/table-areas/table-areas.component';
import { RegisterEmpleadoComponent } from './pages/register-empleado/register-empleado.component';
import { RegisterAreasComponent } from './pages/register-areas/register-areas.component';
import { EditEmpleadoComponent } from './pages/edit-empleado/edit-empleado.component';
import { EditAreaComponent } from './pages/edit-area/edit-area.component';

// rutas
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path:'register-empleado',  component: RegisterEmpleadoComponent },
      { path:'table-empleados',    component: TableEmpleadosComponent   },
      { path:'table-areas',        component: TableAreasComponent       },
      { path:'register-areas',     component: RegisterAreasComponent    },
      { path:'edit-empleados/:id', component: EditEmpleadoComponent     },
      { path:'edit-areas/:id',     component: EditAreaComponent         },
      { path:'**',                 redirectTo: 'register-empleado'                },
    ]
  }
]





@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],

})
export class LudycomRoutingModule { }
