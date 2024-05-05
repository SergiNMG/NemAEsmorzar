import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { DescriptionComponent } from './components/description/description.component';
import { RequestComponent } from './components/request/request.component';



@NgModule({
  declarations: [
    AboutComponent,
    DescriptionComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
