import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/* Modules */
import {AppRoutingModule} from '@app/app-routing.module';
import {ToastModule} from 'primeng/toast';

/* Font Awesome */
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faUsersCog} from '@fortawesome/free-solid-svg-icons/faUsersCog';
import {faUserClock} from '@fortawesome/free-solid-svg-icons/faUserClock';
import {faCommentDots} from '@fortawesome/free-solid-svg-icons/faCommentDots';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons/faBusinessTime';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons/faChevronCircleLeft';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import {faNetworkWired} from '@fortawesome/free-solid-svg-icons/faNetworkWired';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import {faTv} from '@fortawesome/free-solid-svg-icons/faTv';
import {faDatabase} from '@fortawesome/free-solid-svg-icons/faDatabase';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons/faBriefcase';

import {faCloud} from '@fortawesome/free-solid-svg-icons/faCloud';
import {faHtml5} from '@fortawesome/free-brands-svg-icons/faHtml5';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons/faBootstrap';
import {faAngular} from '@fortawesome/free-brands-svg-icons/faAngular';
import {faCss3} from '@fortawesome/free-brands-svg-icons/faCss3';
import {faJs} from '@fortawesome/free-brands-svg-icons/faJs';
import {faJava} from '@fortawesome/free-brands-svg-icons/faJava';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons/faNodeJs';
import {faDocker} from '@fortawesome/free-brands-svg-icons/faDocker';

/* Components */
import {AppComponent} from '@app/app.component';
import {LayoutComponent} from '@components/layout/layout.component';
import {HomeComponent} from '@components/home/home.component';
import {HeaderComponent} from '@components/layout/header/header.component';
import {ContentComponent} from '@components/layout/content/content.component';
import {FooterComponent} from '@components/layout/footer/footer.component';
import {FormsModule} from '@angular/forms';

/* Services */
import {MessageService} from 'primeng/api';
import {LayoutService} from '@services/layout.service';
import {EmailService} from '@services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    LayoutService,
    EmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public library: FaIconLibrary) {
    library.addIcons(faHome,
      faEnvelope,
      faUsers,
      faUsersCog,
      faUserClock,
      faCommentDots,
      faBusinessTime,
      faUser,
      faComment,
      faPaperPlane,
      faPaperPlane,
      faChevronCircleLeft,
      faChevronCircleRight,
      faCheck,
      faPhone,
      faInstagram,
      faWhatsapp,
      faLaptopCode,
      faNetworkWired,
      faMobileAlt,
      faTv,
      faDatabase,
      faFacebook,
      faBriefcase,
      faCloud,
      faHtml5,
      faBootstrap,
      faAngular,
      faCss3,
      faJs,
      faJava,
      faNodeJs,
      faDocker);
    }
}
