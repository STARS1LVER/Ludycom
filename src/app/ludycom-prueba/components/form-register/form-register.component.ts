import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LudycomEmpleadosService } from '../../services/ludycom-empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {



  public isInvalid: boolean = false


  public id?: string

  // controlar mi formulario reactivo
  public dataForm: FormGroup =  this.formB.group({
    id:               [ ''],
    nombres:          [ '',       [ Validators.required, Validators.maxLength(50)] ],
    apellidos:        [ '',       [ Validators.required, Validators.maxLength(50)] ],
    fecha_nacimiento: [ '',       [ Validators.required]                           ],
    email:            [ '',       [ Validators.required]                          ],
    numero_documento: [ (0),      [ Validators.required, Validators.maxLength(7)]  ],
    salario:          [ (0),      [ Validators.required]                           ],
    estado:           [ 'activo', [ Validators.required]                           ]

  })


  constructor(
    private activateRoute: ActivatedRoute,
    private formB: FormBuilder,
    private empleadoService: LudycomEmpleadosService,
    private router: Router
  ){}


  ngOnInit(): void {
    if( !this.router.url.includes('edit')) return;

    this.activateRoute.params
    .pipe(
      tap(({id}) => this.id = id ),
      switchMap(({id}) => this.empleadoService.getEmpleadoData(id) )
    )
    .subscribe( register => {
      this.dataForm.reset(register )

    }
    )

  }


  public onSubmit(){

    if(this.dataForm.invalid){
      this.isInvalid = true
      return
    }

    if( this.id ){
      this.empleadoService.updateEmpleado(this.id, this.dataForm.value)
      this.router.navigateByUrl('/ludycom/table-empleados')
      return
    }

    this.empleadoService.addDataTable( this.dataForm.value )

    this.router.navigateByUrl('/ludycom/table-empleados')
  }


  public deleteEmpleadoById(id:string){
    this.empleadoService.deleteEmpleadoById(id)
  }




}
