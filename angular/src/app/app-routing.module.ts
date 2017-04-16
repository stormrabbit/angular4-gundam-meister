import {
  NgModule
} from '@angular/core';
import { RouterModule, Route }   from '@angular/router';
import { GundamDetailComponent } from './component/detail/gundam-detail.component';
import { GundamHostComponent } from './component/host/gundam-host.component';

const routes: Route[] = [
    {
      path: '',
      component: GundamHostComponent
    },
    {
      path: 'detail/:id',
      component: GundamDetailComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  })

export class AppRoutingModule {

}
