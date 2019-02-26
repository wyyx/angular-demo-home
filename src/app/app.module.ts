import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'
import { SharedModule } from './shared/shared.module'
import { PageComponent } from './nav/page/page.component'

@NgModule({
  declarations: [AppComponent, NavComponent, PageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
