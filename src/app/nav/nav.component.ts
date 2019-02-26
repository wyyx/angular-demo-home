import { Component, ElementRef } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  ngTaskIngredients = [
    { label: 'JavaScript', imageUrl: '/assets/javascript_logo.png' },
    { label: 'TypeScript', imageUrl: '/assets/typescript_logo.png' },
    { label: 'Angular', imageUrl: '/assets/angular_logo.png' },
    { label: 'Rxjs', imageUrl: '/assets/rxjs_logo.png' },
    { label: 'Ngrx', imageUrl: '/assets/ngrx_logo.png' },
    { label: 'Angular Router', imageUrl: '/assets/angular_router_logo.png' },
    { label: 'Sass', imageUrl: '/assets/sass_logo.png' }
  ]

  vueMusicIngredients = [
    { label: 'JavaScript', imageUrl: '/assets/javascript_logo.png' },
    { label: 'Vue', imageUrl: '/assets/vue_logo.png' },
    { label: 'Vuex', imageUrl: '/assets/vuex_logo.png' },
    { label: 'Vue Router', imageUrl: '/assets/vue_router_logo.png' },
    { label: 'Sass', imageUrl: '/assets/sass_logo.png' }
  ]
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(private breakpointObserver: BreakpointObserver) {}

  scrollIntoView(el: Element) {
    el.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
