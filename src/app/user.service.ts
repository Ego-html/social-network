import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData = {
    firstName: '',
    lastName: '',
    telegram: '',
    about: '',
    avatar: '',
  };

  private userDataSubject = new BehaviorSubject<any>(this.userData);
  private dataSavedSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  setUserData(data: any) {
    this.userData = { ...this.userData, ...data};
    this.userDataSubject.next(this.userData);

    this.dataSavedSubject.next(true)
    console.log('Updated userData: ', this.userData);
  }

  getUserData() {
    return this.userData;
  }

  getDataSavedStatus() {
    return this.dataSavedSubject.asObservable(); // Метод для подписки на сохранение данных
  }
}
