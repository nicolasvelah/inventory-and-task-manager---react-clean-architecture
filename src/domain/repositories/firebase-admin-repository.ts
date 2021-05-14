/* eslint-disable no-unused-vars */
/* eslint-disable semi */
export default interface FirebaseAdminRepository {
  initializeApp(): void;
  actualStateOfTheSession(): Promise<boolean>;
  sign(token: string): Promise<any | null>;
  getFirebaseToken(forceRefresh?: boolean): Promise<string | null>;
}
