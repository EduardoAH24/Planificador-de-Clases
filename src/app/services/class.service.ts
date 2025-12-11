import { Injectable } from '@angular/core';
import {
  Firestore, collection, addDoc, deleteDoc, updateDoc,
  doc, collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Clase } from '../models/clase.model';

@Injectable({ providedIn: 'root' })
export class ClassService {
  constructor(private firestore: Firestore) {}

  private getCollection() {
    return collection(this.firestore, 'clases');
  }

  createClass(data: Clase) {
    return addDoc(this.getCollection(), data);
  }

  getClasses(): Observable<Clase[]> {
    return collectionData(this.getCollection(), { idField: 'id' }) as Observable<Clase[]>;
  }

  updateClass(id: string, data: Partial<Clase>) {
    const ref = doc(this.firestore, `clases/${id}`);
    return updateDoc(ref, data);
  }

  deleteClass(id: string) {
    const ref = doc(this.firestore, `clases/${id}`);
    return deleteDoc(ref);
  }
}
