import ApiRepositoryImpl from './data/repositories/api-repository-impl';
import FirebaseAdminRepositoryImpl from './data/repositories/firebase-admin-repository-impl';
import TasksRepositoryImpl from './data/repositories/tasks-repository-impl';
import ApiRepository from './domain/repositories/api-repository';
import FirebaseAdminRepository from './domain/repositories/firebase-admin-repository';
import TasksRepository from './domain/repositories/tasks-repository';
import firebaseConfig from './utils/firebase-config';
import UsersRepository from './domain/repositories/users-repository';
import UsersRepositoryImpl from './data/repositories/users-repository-impl';
import {
  getApiRepositoryMock,
  getFirebaseAdminRepository
} from './utils/utils-testing';
import {
  ArgsDependecyInjection,
  DependeciesMock
} from './domain/interfaces/dependecy-injection.interfaces';
import PlacesRepository from './domain/repositories/places-repository';
import PlacesRepositoryImpl from './data/repositories/places-repository-impl';
import CatalogRepositoryImpl from './data/repositories/catalog-repository-impl';
import CatalogRepository from './domain/repositories/catalog-repository';
import CategoriesRepository from './domain/repositories/categories-repository';
import CategoriesRepositoryImpl from './data/repositories/categories-repository-impl';
import InventoryRepository from './domain/repositories/inventory-repository';
import InventoryRepositoryImpl from './data/repositories/inventory-repository-impl';
import BoxRepository from './domain/repositories/box-repository';
import BoxRepositoryImpl from './data/repositories/box-repository-impl';

export default class DependecyInjection {
  apiRepository: ApiRepository | null = null;

  firebaseAdminRepository: FirebaseAdminRepository | null = null;

  tasksRepository: TasksRepository | null = null;

  usersRepository: UsersRepository | null = null;

  placesRepository: PlacesRepository | null = null;

  catalogRepository: CatalogRepository | null = null;

  categoriesRepository: CategoriesRepository | null = null;

  inventoryRepository: InventoryRepository | null = null;

  boxRepository: BoxRepository | null = null;

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
    this.firebaseAdminRepository = new FirebaseAdminRepositoryImpl(
      firebaseConfig
    );
    this.tasksRepository = new TasksRepositoryImpl();
    this.usersRepository = new UsersRepositoryImpl();
    this.placesRepository = new PlacesRepositoryImpl();
    this.catalogRepository = new CatalogRepositoryImpl();
    this.categoriesRepository = new CategoriesRepositoryImpl();
    this.inventoryRepository = new InventoryRepositoryImpl();
    this.boxRepository = new BoxRepositoryImpl();

    // Init FirebaseAdmin
    this.firebaseAdminRepository!.initializeApp();
  }
}

export const repository = DependecyInjection.getInstance();
