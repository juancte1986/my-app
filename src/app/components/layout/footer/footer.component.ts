import {Component, OnInit} from '@angular/core';

import {LayoutService} from '@services/layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor(
    private layoutService: LayoutService) { }

  public ngOnInit(): void { }

  public scrollToElement(element: string): void {
    this.layoutService.scrollToElement(element);
  }
}
