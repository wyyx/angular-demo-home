import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() imageUrl: string
  @Input() appName: string
  @Input() buttonColor: string

  constructor() {}

  ngOnInit() {}
}
