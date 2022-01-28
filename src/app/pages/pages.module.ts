import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { KEY_MAPS_PATCH } from 'src/environments/environment';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: KEY_MAPS_PATCH
    }),
    RoutingModule,
    SharedModule,
    Ng2SearchPipeModule

  ],
})
export class PagesModule { }
