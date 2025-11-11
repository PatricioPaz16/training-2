import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../../../../Servicios/Produtos/productos.service';
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule} from '@angular/material/sidenav'; 



@Component({
  selector: 'app-productos-main',
  imports: [MatSidenavModule, MatIconModule],
  templateUrl: './productos-main.component.html',
  styleUrl: './productos-main.component.css'
})
export class ProductosMainComponent implements OnInit {

  productos: Producto[] =[];

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

}
