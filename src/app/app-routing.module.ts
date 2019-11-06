import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasPComponent } from './components/mas-p/mas-p.component';
import { ListFriendsComponent } from './Catalogs/list-friends/list-friends.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';


const routes: Routes = [
{path: 'Mas', component: MasPComponent},
{path: 'ListFriends', component: ListFriendsComponent},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegisterComponent},
{
  path: 'Mas',
  component: MasPComponent,
  data: { title: 'Publicar nuevo Contenido'}
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
