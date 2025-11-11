import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosMainComponent } from "./features/productos/pages/productosMain/productos-main/productos-main.component";

@Component({
  selector: 'app-root',
  imports: [ProductosMainComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular';
}
