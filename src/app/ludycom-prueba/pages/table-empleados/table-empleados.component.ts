import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { LudycomEmpleadosService } from '../../services/ludycom-empleados.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-empleados',
  templateUrl: './table-empleados.component.html',
  styleUrls: ['./table-empleados.component.css']
})
export class TableEmpleadosComponent  {

  empleadosData!: Observable<any>

  constructor(
    private firestone: Firestore ,
    private empleadoService: LudycomEmpleadosService)
  {
    this.getEmpleadosData()
  }


  public getEmpleadosData(){
    const collectionInstance =  collection( this.firestone, 'empleados' )
    collectionData( collectionInstance, {idField: 'id'} )
    .subscribe( value => {
        console.log(value)
    } )

    this.empleadosData = collectionData( collectionInstance, {idField: 'id'} )

  }


  public deleteEmpleadoById(id:string){
    this.empleadoService.deleteEmpleadoById(id)
  }




}
