/* eslint-disable class-methods-use-this */
import firebase from 'firebase';
import FirebaseConfig from '../../domain/models/generic/firebase-config';
import FirebaseAdminRepository from '../../domain/repositories/firebase-admin-repository';

export default class FirebaseAdminRepositoryImpl implements FirebaseAdminRepository {
  private firebaseConfig: FirebaseConfig;

  constructor(firebaseConfig: FirebaseConfig) {
    this.firebaseConfig = firebaseConfig;
  }

  initializeApp(): void {
    firebase.initializeApp(this.firebaseConfig);
  }

  // eslint-disable-next-line class-methods-use-this
  async currentSessionState(): Promise<firebase.User | null> {
    try {
      const resp = await this.onAuthStateChanged();
      return resp;
    } catch (error) {
      console.log('Error en actualStateOfTheSession', error.message);
      return null;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async sign(token: string): Promise<any> {
    const respSign = await firebase.auth().signInWithCustomToken(token);
    return respSign;
  }

  // eslint-disable-next-line class-methods-use-this
  async getFirebaseToken(forceRefresh?: boolean): Promise<string | null> {
    try {
      const idToken = await firebase.auth().currentUser?.getIdToken(forceRefresh ?? true);
      if (!idToken) return null;
      return idToken;
    } catch (error) {
      return null;
    }
  }

  async signOut(): Promise<boolean> {
    try {
      await firebase.auth().signOut();
      return true;
    } catch (error) {
      return false;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private onAuthStateChanged(): Promise<firebase.User | null> {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('User is signed in. -->', user);
        } else {
          console.log('No user is signed in');
        }
        resolve(user);
      });
    });
  }
}
