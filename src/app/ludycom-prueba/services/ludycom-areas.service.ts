import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, getDoc, deleteDoc } from '@angular/fire/firestore';



@Injectable({providedIn: 'root'})

export class LudycomAreasService {

   // Inyectos el firestone
   constructor( private firestone: Firestore ) {

   }


   /**
   *  Este metodo nos permite agregar una area a la tabla
   * @param area
   * @returns void no retorna nada
   */
  public addDataTable( area:any ){

    const collectionInstance =  collection( this.firestone, 'areas' )

    addDoc( collectionInstance, area ).then( () => {
      console.log( 'la data a sido agregada' )
    })
    .catch((err) => {
      console.log('hay un error', err)
    })

  }


   /**
   * Este metodo nos permite actualizar el empleado
   * @param id string
   * @param empleado el tipado es any pero viene siendo un DocumentReference<DocumentData>
   */
   public updateArea( id:string, area: any ){
    const docIntance = doc( this.firestone, 'areas', id )

    updateDoc( docIntance, area )
    .then(() => {
      console.log('empleado actualizado')
    })
    .catch((err) => {
      console.log(err)
    })


  }


  public async getAreaData(id: string){
    const docRef = doc(this.firestone, 'areas', id);
    const docSnap = await getDoc(docRef);

    if(!docSnap) return

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  }


  public deleteAreaById( id: string ){

    const docInstance = doc(this.firestone, 'areas', id)

    deleteDoc( docInstance )
    .then(() => {
      console.log('empleado eliminado')
    })
    .catch((err)=>{
      console.log(err)
    })

  }


}
