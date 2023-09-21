import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { LudycomAreasService } from '../../services/ludycom-areas.service';
import { deleteDoc } from '@firebase/firestore';

@Component({
  selector: 'app-table-areas',
  templateUrl: './table-areas.component.html',
  styleUrls: ['./table-areas.component.css']
})
export class TableAreasComponent {


  areasData!: Observable<any>

  constructor(
    private firestone: Firestore ,
    private areaService: LudycomAreasService)
  {
    this.getEmpleadosData()
  }


  public getEmpleadosData(){
    const collectionInstance =  collection( this.firestone, 'areas' )
    collectionData( collectionInstance, {idField: 'id'} )
    .subscribe( value => {
        console.log(value)
    } )

    this.areasData = collectionData( collectionInstance, {idField: 'id'} )

  }


  public deleteAreaById( id: string ){

    const docInstance = doc(this.firestone, 'areas', id)

    deleteDoc( docInstance )
    .then(() => {
      console.log('area eliminada')
    })
    .catch((err)=>{
      console.log(err)
    })

  }



}
