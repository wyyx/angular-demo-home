import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() url: string
  @Input() imageUrl: string
  @Input() appName: string
  @Input() buttonColor: string
  @Input() ingredients: [{ label: string; imgUrl: string }]
  constructor() {}

  ngOnInit() {}

  open() {
    window.open(this.url, '_blank')
  }
}
