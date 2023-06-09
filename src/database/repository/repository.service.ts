import { Injectable } from '@nestjs/common';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { get } from 'http';
import { db } from 'src/config/firebase.config';

@Injectable()
export class RepositoryService {
  async create(data: any, collectionName: string) {
    const docRef = await addDoc(collection(db, collectionName), {
      data,
    });
    return docRef;
  }

  async findOneById(collectionName: string, id: any) {
    const docRef = doc(collection(db, collectionName), id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      // Faça algo com os dados do documento
      return data;
    }
  }

  async update(collectionName: string, data: any, id: string) {
    const docRef = doc(collection(db, collectionName), id);
    await updateDoc(docRef, { data });
  }

  async delete(collectionName: string, id: string) {
    const docRef = doc(collection(db, collectionName), id);
    return await deleteDoc(docRef);
  }
}
