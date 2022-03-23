import User from '../domain/models/user';
import ApiRepository from '../domain/repositories/api-repository';
import FirebaseAdminRepository from '../domain/repositories/firebase-admin-repository';
import TasksRepository from '../domain/repositories/tasks-repository';
import UsersRepository from '../domain/repositories/users-repository';

const user: User = {
  _id: '123',
  dateOfBirth: '',
  email: '',
  enabled: true,
  lastName: '',
  name: '',
  permissions: [''],
  phone: '',
  role: 'administrator'
};

const callbackPromiseEmptyArray = () => Promise.resolve([]);

export const apiRepository: ApiRepository = {
  login: () => {
    return Promise.resolve({
      user,
      token: ''
    });
  },
  getUserById: () => Promise.resolve(user)
};

export const getApiRepositoryMock = (
  values?: Partial<ApiRepository>
): ApiRepository => ({
  login: values?.login ?? apiRepository!.login,
  getUserById: values?.getUserById ?? apiRepository!.getUserById
});

export const firebaseAdminRepository: FirebaseAdminRepository = {
  sign: () => Promise.resolve({}),
  signOut: () => Promise.resolve(true),
  currentSessionState: () => Promise.resolve({} as any),
  getFirebaseToken: () => Promise.resolve(''),
  initializeApp: () => {}
};

export const getFirebaseAdminRepository = (
  values?: Partial<FirebaseAdminRepository>
): FirebaseAdminRepository => ({
  sign: values?.sign ?? (() => Promise.resolve({})),
  signOut: values?.signOut ?? (() => Promise.resolve(true)),
  currentSessionState:
    values?.currentSessionState ?? (() => Promise.resolve({} as any)),
  getFirebaseToken: values?.getFirebaseToken ?? (() => Promise.resolve('')),
  initializeApp: values?.initializeApp ?? (() => {})
});

export const tasksRepository: TasksRepository = {
  getTasks: () => {
    return Promise.resolve({
      tasks: {
        itemsPerPage: 0,
        pages: 0,
        task: [],
        total: 0
      }
    });
  },
  getAllByIdUser: callbackPromiseEmptyArray,
  getAllByIdUserAndRangeDates: callbackPromiseEmptyArray
};

export const usersRepository: UsersRepository = {
  findByValue: callbackPromiseEmptyArray,
  getCoordinatorsAndTechnicals: callbackPromiseEmptyArray,
  update: () => Promise.resolve(user)
};

export const mockRepositoriesMock = {
  apiRepository,
  firebaseAdminRepository,
  tasksRepository,
  usersRepository
};
