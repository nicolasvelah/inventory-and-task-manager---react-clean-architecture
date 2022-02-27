import ApiRepositoryImpl from './data/repositories/api-repository-impl';
import FirebaseAdminRepositoryImpl from './data/repositories/firebase-admin-repository-impl';
import TasksRepositoryImpl from './data/repositories/tasks-repository-impl';
import ApiRepository from './domain/repositories/api-repository';
import FirebaseAdminRepository from './domain/repositories/firebase-admin-repository';
import TasksRepository from './domain/repositories/tasks-repository';
import firebaseConfig from './utils/firebase-config';
import UsersRepository from './domain/repositories/users-repository';
import UsersRepositoryImpl from './data/repositories/users-repository-impl';
import { getApiRepositoryMock, getFirebaseAdminRepository } from './utils/utils-testing';
import {
  ArgsDependecyInjection,
  DependeciesMock
} from './domain/interfaces/dependecy-injection.interfaces';

export default class DependecyInjection {
  apiRepository: ApiRepository | null = null;

  firebaseAdminRepository: FirebaseAdminRepository | null = null;

  tasksRepository: TasksRepository | null = null;

  usersRepository: UsersRepository | null = null;

  private static instance: DependecyInjection;

  private isTest: boolean = true;

  constructor(args?: ArgsDependecyInjection) {
    this.init(args);
  }

  public static getInstance(args?: ArgsDependecyInjection): DependecyInjection {
    if (!DependecyInjection.instance) {
      DependecyInjection.instance = new DependecyInjection(args);
    }

    return DependecyInjection.instance;
  }

  setMocksTest(dependecies?: DependeciesMock) {
    if (this.isTest) {
      this.apiRepository = getApiRepositoryMock(dependecies?.apiRepository);
      this.firebaseAdminRepository = getFirebaseAdminRepository(
        dependecies?.firebaseAdminRepository
      );
    }
  }

  init(args?: ArgsDependecyInjection) {
    if (args?.isTest) {
      console.log('INIT DEPENDENCY INJECTION TEST');

      this.isTest = true;
      const { values } = args;

      this.setMocksTest(values);
      return;
    }

    console.log('INIT DEPENDENCY INJECTION');
    this.apiRepository = new ApiRepositoryImpl();
    this.firebaseAdminRepository = new FirebaseAdminRepositoryImpl(firebaseConfig);
    this.tasksRepository = new TasksRepositoryImpl();
    this.usersRepository = new UsersRepositoryImpl();

    // Init FirebaseAdmin
    this.firebaseAdminRepository!.initializeApp();
  }
}
