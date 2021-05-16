import ApiRepositoryImpl from './data/repositories/api-repository-impl';
import FirebaseAdminRepositoryImpl from './data/repositories/firebase-admin-repository-impl';
import ApiRepository from './domain/repositories/api-repository';
import FirebaseAdminRepository from './domain/repositories/firebase-admin-repository';
import firebaseConfig from './utils/firebase-config';

export default class DependecyInjection {
  apiRepository: ApiRepository | null = null;

  firebaseAdminRepository: FirebaseAdminRepository | null = null;

  private static instance: DependecyInjection;

  constructor() {
    this.init();
  }

  public static getInstance(): DependecyInjection {
    if (!DependecyInjection.instance) {
      DependecyInjection.instance = new DependecyInjection();
    }
    return DependecyInjection.instance;
  }

  init() {
    console.log('INIT DEPENDENCY INJECTION');
    this.apiRepository = new ApiRepositoryImpl();
    this.firebaseAdminRepository = new FirebaseAdminRepositoryImpl(firebaseConfig);

    // Init FirebaseAdmin
    this.firebaseAdminRepository.initializeApp();
  }
}
