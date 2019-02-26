import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialCollectionModule } from '../material-collection/material-collection.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LayoutModule } from '@angular/cdk/layout'

@NgModule({
  imports: [CommonModule, MaterialCollectionModule, LayoutModule, FlexLayoutModule],
  declarations: [],
  exports: [MaterialCollectionModule, LayoutModule, FlexLayoutModule]
})
export class SharedModule {}
