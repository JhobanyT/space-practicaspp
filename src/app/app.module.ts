import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
<<<<<<< HEAD
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MatIconModule } from '@angular/material/icon';
=======
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
// import { TokenInterceptorService } from './services/token-interceptor.service';
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    MatIconModule,
=======
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832
  ],
  providers: [
    AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
