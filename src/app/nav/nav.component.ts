import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  AfterViewInit,
  Renderer2,
  OnInit
} from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable, Subject } from 'rxjs'
import { map, tap, takeUntil } from 'rxjs/operators'
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core'
import { DOCUMENT } from '@angular/common'
import { MatSidenavContent } from '@angular/material'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit, OnInit {
  kill$: Subject<any> = new Subject()

  mode: string = 'side'
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer: ElementRef
  @ViewChild('toolbar', { read: ElementRef }) toolbar: ElementRef

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: any,
    private pageScrollService: PageScrollService,
    private renderer: Renderer2,
    private breakpoint: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpoint
      .observe([`${Breakpoints.Handset}`, `${Breakpoints.Small}`])
      .pipe(
        tap(state => {
          if (state.matches) {
            this.mode = 'over'
          } else {
            this.mode = 'side'
          }
        }),
        takeUntil(this.kill$)
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.kill$.next()
    this.kill$.complete()
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.scrollContainer.nativeElement, 'scroll', event => {
      const top = this.scrollContainer.nativeElement.scrollTop

      if (top > 200) {
        this.renderer.addClass(this.toolbar.nativeElement, 'scrolled-nav')
      } else {
        this.renderer.removeClass(this.toolbar.nativeElement, 'scrolled-nav')
      }
    })
  }

  scrollIntoView(el: Element) {
    el.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  scrollToAppsPage(scrollContainer: MatSidenavContent) {
    const pageScrollInstance: PageScrollInstance = this.pageScrollService.create({
      document: this.document,
      scrollTarget: '#app1',
      scrollViews: [scrollContainer.getElementRef().nativeElement],
      duration: 500,
      easingLogic: function(t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
        t--
        return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b
      },
      scrollOffset: 50
    })
    this.pageScrollService.start(pageScrollInstance)
  }
}
