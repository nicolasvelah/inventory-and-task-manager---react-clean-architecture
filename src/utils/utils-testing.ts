import Task from '../domain/models/task';
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

const task: Task = {
  type: 'installation',
  catalogToInstall: [
    {
      id: '6228bdae146556e1b2d6abe8',
      quantity: 2
    }
  ],
  _id: '62310ead77e7c80d804f2081',
  technical: '6214416bc341eaa648916b15',
  coordinator: '621441aec341eaa648916b16',
  place: '6214495bc341eaa648916b17',
  scheduledDate: '2022-03-15T22:09:49.773Z',
  description: 'Esto es una descripci??n',
  createdAt: '2022-03-15T22:09:49.841Z',
  updatedAt: '2022-03-15T22:09:49.841Z'
};

export const tasksRepository: TasksRepository = {
  createTask: () => {
    return Promise.resolve(task);
  },
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
  getAllByIdUserAndRangeDates: callbackPromiseEmptyArray,
  delete: () => Promise.resolve(true),
  update: () => Promise.resolve(task)
};

export const usersRepository: UsersRepository = {
  findByValue: callbackPromiseEmptyArray,
  getCoordinatorsAndTechnicals: callbackPromiseEmptyArray,
  getTechnicals: callbackPromiseEmptyArray,
  update: () => Promise.resolve(user),
  create: () => Promise.resolve(user),
  delete: () => Promise.resolve(true),
  updatePass: () => Promise.resolve(true)
};

export const mockRepositoriesMock = {
  apiRepository,
  firebaseAdminRepository,
  tasksRepository,
  usersRepository
};
