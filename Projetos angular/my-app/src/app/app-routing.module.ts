import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { Page1Component } from './pages/sub-route/page1/page1.component';
import { Page2Component } from './pages/sub-route/page2/page2.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { autorizadoGuard } from './guards/autorizado.guard';
import { DetalheComponent } from './detalhe/detalhe/detalhe.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ModalComponent } from './pages/modal/modal.component';
import { LestarComponent } from './pages/lestar/lestar.component';

const routes: Routes = [
{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'listar',component:ListarComponent},
{path:'lestar',component:LestarComponent},
{path:'listar-simples',component:ListaSimplesComponent},
{path:'cadastro',component:CadastroComponent},
{path:'editar',component:EditarComponent},
{path:'json',component:ManipulandoJsonComponent},
{path:'login',component:LoginComponent},
{path:'modal',component:ModalComponent},
{path:'detalhe/:id/:phone',component:DetalheComponent},
{path:'subroute',component:SubRouteComponent, 
  children:[
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component}
  ]
},
{path:'privado',component:PrivadoComponent, canActivate:[autorizadoGuard]},
{ path: 'pages/lazy', loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
