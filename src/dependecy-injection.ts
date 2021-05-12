import ApiRepositoryImpl from './data/repositories/api-repository-impl';
import ApiRepository from './domain/repositories/api-repository';

export default class DependecyInjection {
  apiRepository: ApiRepository | null = null;

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
  }
}
