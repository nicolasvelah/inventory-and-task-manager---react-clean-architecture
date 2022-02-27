import ApiRepository from '../repositories/api-repository';
import FirebaseAdminRepository from '../repositories/firebase-admin-repository';

export interface DependeciesMock {
  apiRepository?: Partial<ApiRepository>;
  firebaseAdminRepository?: Partial<FirebaseAdminRepository>;
}

export interface ArgsDependecyInjection {
  isTest?: boolean;
  values?: DependeciesMock;
}
