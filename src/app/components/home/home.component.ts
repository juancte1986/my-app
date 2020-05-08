import {Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

import {LayoutService} from '@services/layout.service';
import {EmailService} from '@services/email.service';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('usItem')
  public usItem: ElementRef;
  @ViewChild('servicesItem')
  public servicesItem: ElementRef;
  @ViewChild('contactItem')
  public contactItem: ElementRef;
  @ViewChild('carouselItem')
  public carouselItem: ElementRef;

  public message = '';
  public email = '';
  public name  = '';
  public sending = false;


  constructor(
    private layoutService: LayoutService,
    private messageService: MessageService,
    private emailService: EmailService) {
  }

  public ngAfterViewInit(): void {
    this.layoutService.contactItem = this.contactItem.nativeElement;
    this.layoutService.contactItem = this.contactItem.nativeElement;
    this.layoutService.servicesItem = this.servicesItem.nativeElement;
    this.layoutService.usItem = this.usItem.nativeElement;
    this.layoutService.carouselItem = this.carouselItem.nativeElement;
  }

  public ngOnInit(): void { }

  public sendMail(): void {
    this.sending = true;
    this.emailService.sendMail({email: this.email, name: this.name, message: this.message}).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Servicio de Email', detail: 'El correo se envio correctamente.'});
      this.sending = false;
     }, (err) => {
      console.log(err);
      this.sending = false;
      this.messageService.add({severity: 'error', summary: 'Servicio de Email', detail: 'El correo no se envio correctamente.'});
    });
  }

}
