import { IO, Nsp, Socket, SocketService, SocketSession } from "@tsed/socketio";
import * as SocketIO from "socket.io";

@SocketService("/test")
export class MySocketService {

  @Nsp nsp: SocketIO.Namespace;

  constructor(@IO private io: SocketIO.Server) {
  }

  /**
   * Triggered the namespace is created
   */
  $onNamespaceInit(nsp: SocketIO.Namespace) {
    console.log('socket init');
    
  }
  
  /**
   * Triggered when a new client connects to the Namespace.
   */
  $onConnection(@Socket socket: SocketIO.Socket, @SocketSession session: SocketSession) {
    console.log('front end connected');

  }

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  $onDisconnect(@Socket socket: SocketIO.Socket) {

  }
}