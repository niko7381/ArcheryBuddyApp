import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore, enableIndexedDbPersistence } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TrainingService } from './services/training/training.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/Auth/auth.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { PERSISTENCE } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    {
      provide: FIREBASE_OPTIONS, useValue: environment.firebase,
      useClass: IonicRouteStrategy
    }, {
      provide: PERSISTENCE, useValue: 'session'
    },
    AuthService,
    TrainingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
