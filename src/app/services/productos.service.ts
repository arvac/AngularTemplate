import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Productos } from '../interfaces/productos.interfaces';
import { timeout } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
cargando=true;
productos:Productos[]=[];
productosFiltrado: Productos[]=[];
constructor(private http :HttpClient) { 
this.cargarProductos();

  }
  cargarProductos(){

    return new Promise((resolve,reject)=>{
      this.http.get('https://angulartemplate-31dff.firebaseio.com/productos_idx.json')
      .subscribe((resp:Productos[])=>{console.log(resp)
        this.productos=resp;
        //this.cargando=false;
        resolve();
      setTimeout(()=>{this.cargando=false;},)
      });

    });
 
  }
  getProducto(id: string){
   return this.http.get(`https://angulartemplate-31dff.firebaseio.com/productos/${id}.json`);
  }
  buscarProductos(termino:string){
    if(this.productos.length === 0){
      //cargar los productos 
 this.cargarProductos().then(()=>{
//se ejecuta despues de cargar los productos
this.filtrarProductos(termino);
 });
    }else{
//aplicar el filtrado
this.filtrarProductos(termino);
    }
/*this.productosFiltrado = this.productos.filter(producto=>{
      return true;
    });
    console.log(this.productosFiltrado);*/
 
  }

private filtrarProductos(termino:string){
console.log(this.productos);
this.productosFiltrado=[];
termino=termino.toLocaleLowerCase();//function para habilitar mayuscula y minisculas
this.productos.forEach(prod=>{
  const tituloLower = prod.titulo.toLocaleLowerCase();
  if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
    this.productosFiltrado.push(prod);
  }
})
  }
}
