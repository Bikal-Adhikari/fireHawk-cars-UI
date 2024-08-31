import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firehawk-cars';
  cars = [
    {
      name: 'Toyota Camry',
      description: 'A reliable and comfortable sedan.',
      year: '2000',
      origin: 'Japan',
      cylinder: '4',
      imageUrl: 'assets/toyota-camry.jpeg',
    },
    {
      name: 'Ford Mustang',
      description: 'A classic American muscle car.',
      year: '2000',
      origin: 'Japan',
      cylinder: '4',
      imageUrl: 'assets/ford-mustang.jpeg',
    },
    {
      name: 'Tesla Model S',
      description: 'A modern electric car with autopilot.',
      year: '2000',
      origin: 'Japan',
      cylinder: '4',
      imageUrl: 'assets/tesla-model-s.jpeg',
    },
  ];
}
