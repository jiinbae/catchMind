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

    socket.on(events.strokePath, ({ x, y }) => {
        broadcast(events.strokedPath, { x ,y });
        console.log(x,y);
    });
};

export default socketController;