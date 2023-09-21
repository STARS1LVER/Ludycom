import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  getDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Empleado } from '../interfaces/empleado.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LudycomEmpleadosService {
  // Inyectos el firestone
  constructor(private firestone: Firestore) {}


  /**
   *  Este metodo nos permite agregar un empleado a la tabla
   * @param empleado Tipo Empleado
   * @returns void no retorna nada
   */
  public addDataTable(empleado: Empleado) {
    const collectionInstance = collection(this.firestone, 'empleados');

    addDoc(collectionInstance, empleado)
      .then(() => {
        console.log('la data a sido agregada');
      })
      .catch((err) => {
        console.log('hay un error', err);
      });
  }

  /**
   * Este metodo nos permite actualizar el empleado
   * @param id string
   * @param empleado el tipado es any pero viene siendo un DocumentReference<DocumentData>
   */
  public updateEmpleado(id: string, empleado: any) {
    const docIntance = doc(this.firestone, 'empleados', id);

    updateDoc(docIntance, empleado)
      .then(() => {
        console.log('empleado actualizado');
      })
      .catch((err) => {
        console.log(err);
      });
  }



  /**
   * Este metodos nos permite obtener la data de la tabla por
   * medio del id
   * @param id tipo string
   *
   */

  public async getEmpleadoData(id: string) {
    const docRef = doc(this.firestone, 'empleados', id);

    const docSnap = await getDoc(docRef);

    if (!docSnap) return;

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  }


  /**
   * Este metodo nos permite eliminar por medio del id
   * @param id tipo string
   */
  public deleteEmpleadoById(id: string) {
    const docInstance = doc(this.firestone, 'empleados', id);
    
    deleteDoc(docInstance)
      .then(() => {
        console.log('empleado eliminado');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
