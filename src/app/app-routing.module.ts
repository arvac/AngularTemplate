import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { PortafolioComponent } from './page/portafolio/portafolio.component';
import { AboutComponent } from './page/about/about.component';
import { ItemComponent } from './page/item/item.component';
import { SearchComponent } from './page/search/search.component';
const app_routes :Routes = [
{path:'',component:PortafolioComponent},
{path:'about',component:AboutComponent},
{path:'item/:id',component:ItemComponent},
{path:'search/:termino',component:SearchComponent},
{path:'**',pathMatch :'full',redirectTo:''}
];
@NgModule({
    imports:[
    RouterModule.forRoot(app_routes,{useHash:true})//el hash se usa cuando no tenemos acceso al directorio htaccess
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouting{

}