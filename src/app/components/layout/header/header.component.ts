import {Component, OnInit} from '@angular/core';

import {environment} from '@envs/environment';
import {LayoutService} from '@services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor(
    private layoutService: LayoutService) { }

  public ngOnInit(): void {
    this.title = environment.title;
  }

  public scrollToElement(element: string): void {
    this.layoutService.scrollToElement(element);
  }
}
