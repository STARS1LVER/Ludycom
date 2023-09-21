import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {


  // Propiedades
  public isMenuOpen: boolean = false;

  empleadosData!: Observable<any>

  public totalEmpleados!: number
  public totalArea!: number



  constructor(
    private firestone: Firestore,
    private router: Router ){
    this.getAreaData()
    this.getEmpleadosData()
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Cerrar el menú cuando se navega a una nueva ruta
        this.closeMenu();
      }
    });

  }

  // Metodos:

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu() {
    this.isMenuOpen = false;
  }


  public getEmpleadosData(){
    const collectionInstance =  collection( this.firestone, 'empleados' )
    collectionData( collectionInstance, {idField: 'id'} )
    .subscribe( value => {
        console.log(value)
    } )

    this.empleadosData = collectionData( collectionInstance, {idField: 'id'} )

    this.empleadosData.subscribe(data =>{
      this.totalEmpleados = data.length
    })
  }

  public getAreaData(){
    const collectionInstance =  collection( this.firestone, 'areas' )
    collectionData( collectionInstance, {idField: 'id'} )
    .subscribe( value => {
        console.log(value)
    } )

    this.empleadosData = collectionData( collectionInstance, {idField: 'id'} )

    this.empleadosData.subscribe(data =>{
      this.totalArea = data.length
    })
  }


}
