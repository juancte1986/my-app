import {Injectable} from '@angular/core';

@Injectable()
export class LayoutService {

  public usItem: HTMLElement;
  public servicesItem: HTMLElement;
  public contactItem: HTMLElement;
  public carouselItem: HTMLElement;

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
      case 'carouselItem':
        this.scrollIntoView(this.carouselItem);
        break;
      default:
        break;
    }
  }

  private scrollIntoView(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth', inline: 'nearest'});
  }
}
