import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodigosComponent } from './inicio/codigos/codigos.component';
import { CopiarPegarComponent } from './inicio/copiar-pegar/copiar-pegar.component';
import { LoginCompletoComponent } from './inicio/login-completo/login-completo.component';


const routes: Routes = [
  {path:'codigos', component:CodigosComponent },
  {path:'copiar-pegar', component:CopiarPegarComponent },
  {path:'login-completo', component:LoginCompletoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
