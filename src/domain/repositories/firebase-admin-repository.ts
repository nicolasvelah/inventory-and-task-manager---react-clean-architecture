import firebase from 'firebase';
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
export default interface FirebaseAdminRepository {
  initializeApp(): void;
  currentSessionState(): Promise<firebase.User | null>;
  sign(token: string): Promise<any>;
  getFirebaseToken(forceRefresh?: boolean): Promise<string | null>;
  signOut(): Promise<boolean>
}
