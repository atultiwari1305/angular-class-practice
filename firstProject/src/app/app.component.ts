import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtulComponent } from './atul/atul.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AtulComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
}
