import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosMainComponent } from "./features/productos/pages/productosMain/productos-main/productos-main.component";
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule} from '@angular/material/sidenav'; 

@Component({
  selector: 'app-root',
  imports: [ProductosMainComponent, RouterOutlet, MatIconModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular';
}
