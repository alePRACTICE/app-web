import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';


@NgModule({
  declarations: [
    TransferComponent,
    CreateTransferComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
