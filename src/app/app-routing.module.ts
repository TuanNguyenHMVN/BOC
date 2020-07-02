import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full'},
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  { path: '**', redirectTo: 'post' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
