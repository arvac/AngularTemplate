import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,public search_productosServic:ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(params=>{
      console.log(params['termino']);
      this.search_productosServic.buscarProductos(params['termino']);
    })
  }

}
