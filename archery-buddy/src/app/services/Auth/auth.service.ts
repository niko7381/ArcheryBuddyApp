import { Injectable } from '@angular/core';
import { getAuth, updateEmail} from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { AlertController } from '@ionic/angular';
import { Collection } from 'src/app/helpers/collections';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import IUser from 'src/app/types/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated$: Observable<boolean>;
  private usersCollection: AngularFirestoreCollection<IUser>;

  private userIdSubject = new BehaviorSubject<string | null>(null);
  private userId$ = this.userIdSubject.asObservable();

  constructor(
    private auth: AngularFireAuth,
    private alertController: AlertController,
    private db: AngularFirestore,
    private router: Router
  ) {
    this.usersCollection = db.collection(Collection.users);
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    );
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      this.userIdSubject.next(storedId);
    }
  }

  setuserId(id: string) {
    localStorage.setItem('userId', id);
    this.userIdSubject.next(id);
  }

  getuserId(): string | void {
    return this.userIdSubject.value;
  }

  clearUser() {
    return this.userIdSubject.next(null);
  }

  // register new user
  async register(userData: IUser) {
    if(!userData.password) {
      throw new Error('Password was not provided');
    }

    const user = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!user.user) {
        throw new Error('User cannot be found');
    }

    await this.usersCollection.doc(user.user.uid).set({
        displayName: userData.displayName,
        // goal: userData.goal,
        email: userData.email,
    });

    this.router.navigateByUrl('/frontpage', { replaceUrl: true });
  }

  // logs user in
  async login({ email, password }) {
    try {
      const user = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return user.user.uid;
    } catch (error) {
      return null;
    }
  }

  // logout user and clear localstorage
  logout() {
    this.clearUser();
    this.router.navigate(['/auth/login']);
  }

  // updates email not quite working
  public async updateEmail(newEmail: string) {
    const auth = getAuth();
    updateEmail(auth.currentUser, newEmail).then(() => {
      this.showAlert('Email', 'Email Has been updated');
    }).catch((error) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    });
  }

  // shows Alert
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
