import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleStrokedPath, handFilled } from "./paint";
import { handlePlayerUpdate } from "./players";

let socket = null;

export const getSocket = () => socket;

export const initSockets = aSocket => {
     const { events } = window;
     socket = aSocket;
     socket.on(events.newUser, handleNewUser);
     socket.on(events.disconnected, handleDisconnected);
     socket.on(events.newMsg, handleNewMessage);
     socket.on(events.beganPath, handleBeganPath);
     socket.on(events.strokedPath, handleStrokedPath);
     socket.on(events.filled, handFilled);
     socket.on(events.playerUpdate, handlePlayerUpdate);
};