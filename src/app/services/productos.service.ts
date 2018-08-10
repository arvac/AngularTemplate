import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import {Productos} from '../interfaces/productos.interfaces'
import { timeout } from '../../../node_modules/@types/q';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
cargando=true;
productos:Productos[]=[];
constructor(private http :HttpClient) { 
this.cargarProductos();
  }
  cargarProductos(){
    this.http.get('https://angulartemplate-31dff.firebaseio.com/productos_idx.json')
    .subscribe((resp:Productos[])=>{console.log(resp)
      this.productos=resp;
      
    setTimeout(()=>{this.cargando=false;},)
    });
  }
}
