/* eslint-disable no-underscore-dangle */
import { Socket, io } from 'socket.io-client';
import DependecyInjection from '../dependecy-injection';
import INotification from '../domain/models/generic/notification';

export default class SocketClient {
  private static _instance: SocketClient | null = null;

  private socket: Socket | null = null;

  static getInstance(): SocketClient {
    if (SocketClient._instance === null) {
      SocketClient._instance = new SocketClient();
    }
    return SocketClient._instance;
  }

  connected = false;

  connect = async () => {
    if (this.socket !== null) return; // si ya tenemos una conexion anterior

    const { firebaseAdminRepository } = DependecyInjection.getInstance();
    const token = await firebaseAdminRepository.getFirebaseToken();

    const URI = `${process.env.REACT_APP_API_URL!}/v1`;
    console.log('URI -->', URI);
    this.socket = io(URI, {
      query: {
        token
      },
      reconnection: true,
      transports: ['websocket'],
    });

    console.log('this.socket -->', this.socket);

    this.socket.on('connected', () => {
      console.log('ws connected');
      this.connected = true;
    });
    this.socket.on('error', (data: any) => {
      console.log('ws error', data);
    });

    this.socket.on('disconnect', () => {
      console.log('ws disconnect', this.socket);
      this.connected = false;
    });
    this.socket.on('on-notification', (data: INotification) => {
      console.log('data -->', data);
    });
  };

  disconnect = () => {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  };
}
