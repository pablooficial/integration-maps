import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ListLotacaoComponent } from './list-lotacao/list-lotacao.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../pages/routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    ListLotacaoComponent
  ],
  exports:[
    HeaderComponent,
    ListComponent,
    ListLotacaoComponent
  ],
  imports: [
    RoutingModule,
    CommonModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class SharedModule { }
