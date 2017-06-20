import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
import {
  AppComponent
} from './component/appcomponent/app.component';
import { GundamDetailComponent } from './component/detail/gundam-detail.component';
import { GundamHostComponent } from './component/host/gundam-host.component';
import { GundamHostItemComponent } from './component/host-item/gundam-host-item.component';
import { DemoComponent } from './component/demo/demo';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { GundamService } from './service/gundam.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    GundamDetailComponent,
    GundamHostComponent,
    GundamHostItemComponent,
    DemoComponent
  ],
  providers: [GundamService],
  bootstrap: [AppComponent],
})
export class AppModule {}
