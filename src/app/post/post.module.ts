import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListComponent, ContentComponent } from './containers';
import { CardComponent, DetailComponent } from './components';

import { PostService, BaseService } from '../services';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: ContentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListComponent,
    ContentComponent,
    CardComponent,
    DetailComponent
  ],
  providers: [
    PostService,
    BaseService
  ],
})
export class PostModule { }
