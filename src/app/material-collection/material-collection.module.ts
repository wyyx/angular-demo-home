import { NgModule } from '@angular/core'
import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule,
  MatMenuModule
} from '@angular/material'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatMenuModule
  ]
})
export class MaterialCollectionModule {}
