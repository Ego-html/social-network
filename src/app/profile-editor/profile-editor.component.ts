import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  avatarPreview: string | ArrayBuffer | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveData(form: any) {
    const data = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      about: form.value.about,
      skills: form.value.skills,
      telegram: form.value.telegram,
      avatar: this.avatarPreview
    }
    console.log(data.telegram);
    this.userService.setUserData(data);
    this.router.navigate(['/main'])
  }
}


