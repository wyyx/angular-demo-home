import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Subject } from 'rxjs'
import { tap, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
  constructor(private breakpoint: BreakpointObserver) {}
  kill$: Subject<any> = new Subject()

  @Input() url: string
  @Input() imageUrl: string
  @Input() appName: string
  @Input() buttonColor: string
  @Input() ingredients: [{ label: string; imgUrl: string }]

  techListTitle = ''

  ngOnInit() {
    this.breakpoint
      .observe([`${Breakpoints.Handset}`, `${Breakpoints.Small}`])
      .pipe(
        tap(state => {
          if (state.matches) {
            this.techListTitle = 'Related'
          } else {
            this.techListTitle = 'Related Technologies'
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

  open() {
    window.open(this.url, '_blank')
  }
}
