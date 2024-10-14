import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import { Router } from '@angular/router';
import {UserService} from "../user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  userData: any = {};  // Инициализируем пустой объект
  private userDataSubscription!: Subscription;  // Переменная для хранения подписки
  private dataSavedSubscription!: Subscription;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.dataSavedSubscription = this.userService.getDataSavedStatus().subscribe(isSaved => {
      if (isSaved) {
       this.userData = this.userService.getUserData();
       console.log('Полученные данные: ', this.userData);
      }
    });
  }

  loadUserData() {
    // Подписываемся на поток данных из сервиса

  }

  navigatorToProfile() {
    this.router.navigate(['/profile']);
  }

  onSave() {

  }
  ngOnDestroy() {
    // Отписываемся от потока при уничтожении компонента
    if (this.userDataSubscription) {
      this.userDataSubscription.unsubscribe();
    }
  }
}
