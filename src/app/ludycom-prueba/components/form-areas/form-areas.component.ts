import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap, Observable } from 'rxjs';
import { Empleado } from '../../interfaces/empleado.interface';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { LudycomEmpleadosService } from '../../services/ludycom-empleados.service';
import { LudycomAreasService } from '../../services/ludycom-areas.service';

@Component({
  selector: 'form-areas',
  templateUrl: './form-areas.component.html',
  styleUrls: ['./form-areas.component.css']
})
export class FormAreasComponent implements OnInit {


  public isInvalid: boolean = false

  public id?: string

  empleadosData!: Observable<any>

  public dataArea: FormGroup =  this.formB.group({
    codigo:           [ ''        ],
    nombre:           [ '',       [ Validators.required, Validators.maxLength(50)] ],
    lider:            [ '',       [ Validators.required, Validators.maxLength(50)] ],
    estado:           [ 'activo', [ Validators.required]                           ]

  })


  constructor(
    private firestone: Firestore ,
    private activateRoute: ActivatedRoute,
    private formB: FormBuilder,
    private areaService: LudycomAreasService,
    private router: Router
  ){
    this.getEmpleadosData()
  }


  ngOnInit(): void {
    if( !this.router.url.includes('edit')) return;

    this.activateRoute.params
    .pipe(
      tap(({id}) => this.id = id ),
      switchMap(({id}) => this.areaService.getAreaData(id) )
    )
    .subscribe( register => {

      if( !register ) return this.router.navigateByUrl('')

      this.dataArea.reset(register)
      return

    }
    )
  }




  public getEmpleadosData(){
    const collectionInstance =  collection( this.firestone, 'empleados' )
    collectionData( collectionInstance, {idField: 'id'} )
    .subscribe( value => {
        console.log(value)
    } )

    this.empleadosData = collectionData( collectionInstance, {idField: 'id'} )
    console.log(this.empleadosData)

  }


  public onSubmit(){

    if(this.dataArea.invalid){
      this.isInvalid = true
      return
    }

    if( this.id ){
      this.areaService.updateArea(this.id, this.dataArea.value)
      this.router.navigateByUrl('/ludycom/table-areas')
      return
    }


    this.areaService.addDataTable(this.dataArea.value)

    this.router.navigateByUrl('/ludycom/table-areas')
  }


  public deleteAreaById(id:string){
    this.areaService.deleteAreaById(id)
  }



}
