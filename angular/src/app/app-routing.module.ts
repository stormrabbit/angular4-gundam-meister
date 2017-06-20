import {
  NgModule
} from '@angular/core';
import { RouterModule, Route }   from '@angular/router';
import { GundamDetailComponent } from './component/detail/gundam-detail.component';
import { GundamHostComponent } from './component/host/gundam-host.component';
import { DemoComponent } from './component/demo/demo';

const routes: Route[] = [
    {
      path: '',
      component: GundamHostComponent
    },
    {
      path: 'detail/:id',
      component: GundamDetailComponent
    },
    {
      path: 'demo',
      component: DemoComponent
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
