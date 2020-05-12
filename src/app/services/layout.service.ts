import {Injectable} from '@angular/core';

@Injectable()
export class LayoutService {

  public usItem: HTMLElement;
  public servicesItem: HTMLElement;
  public contactItem: HTMLElement;
  public jumbotronItem: HTMLElement;
  public technologyItem: HTMLElement;

  constructor() { }

  public scrollToElement(name: string ): void {
    switch (name)  {
      case  'usItem':
        this.scrollIntoView(this.usItem);
         break;
      case 'servicesItem':
        this.scrollIntoView(this.servicesItem);
         break;
      case 'contactItem':
        this.scrollIntoView(this.contactItem);
        break;
      case 'technologyItem':
        this.scrollIntoView(this.technologyItem);
        break;
      case 'jumbotronItem':
        this.scrollIntoView(this.jumbotronItem);
        break;
      default:
        break;
    }
  }

  private scrollIntoView(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth', inline: 'nearest'});
  }
}
