import events from "./events";

const socketController = socket => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        broadcast(events.newUser, { nickname });
    });

    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, { nickname: socket.nickname });
    });

    socket.on(events.sendMsg, () => 
        broadcast(event.newMsg, { message, nickname: socket.nickname })
    );

    socket.on(events.strokePath, ({ x, y, color }) => {
        broadcast(events.strokedPath, { x ,y, color });
        console.log(x,y);
    });

    socket.on(events.fill, ({ color }) => {
        broadcast(events.filled, { color });
    });
};

export default socketController;