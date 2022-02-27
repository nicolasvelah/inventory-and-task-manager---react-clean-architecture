import { act, renderHook } from '@testing-library/react-hooks';
import { message } from 'antd';
import useLogin from './useLogin';

import DependecyInjection from '../../../../dependecy-injection';

const mockPush = jest.fn();
jest.mock('react-router', () => ({
  useHistory: () => ({
    push: mockPush
  })
}));

jest.mock('antd', () => {
  const ant = jest.requireActual('antd');
  return {
    ...ant,
    message: {
      error: jest.fn()
    }
  };
});

describe('useLogin', () => {
  const instanceDependecyInjection = DependecyInjection.getInstance();

  beforeEach(() => {
    jest.resetAllMocks();
    instanceDependecyInjection.setMocksTest();
  });

  it('Should executed push when the data is correct', async () => {
    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.actions.onFinish({
        password: '123',
        remember: true,
        username: 'test'
      });
    });

    expect(mockPush).toBeCalledWith('/task/list');
  });

  it('Should executed message.error when login failed', async () => {
    instanceDependecyInjection.setMocksTest({
      apiRepository: {
        login: () => Promise.reject(new Error('TEST_ERROR'))
      }
    });

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.actions.onFinish({
        password: '123',
        remember: true,
        username: 'test'
      });
    });

    expect(message.error).toBeCalledWith('Usuario o contraseña incorrectas');
  });

  it('Should executed message.error when sign failed', async () => {
    instanceDependecyInjection.setMocksTest({
      firebaseAdminRepository: {
        sign: () => Promise.reject(new Error('TEST_ERROR'))
      }
    });

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.actions.onFinish({
        password: '123',
        remember: true,
        username: 'test'
      });
    });

    expect(message.error).toBeCalledWith('Usuario o contraseña incorrectas');
    expect(mockPush).not.toBeCalled();
  });
});
