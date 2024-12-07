import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuerpoComponent } from './admin/home/cuerpo/cuerpo.component';
import { HeaderComponent } from './admin/home/header/header.component';
import { FooterComponent } from './admin/home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CuerpoComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Software';
}
