import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social-network';
}
