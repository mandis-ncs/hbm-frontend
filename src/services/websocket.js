const socketUrl = import.meta.env.SOCKET_URL

export const connectWebSocket = (onMessage) => {
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => console.log("WebSocket Connected!");
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
    };
    socket.onerror = (error) => console.error("WebSocket Error: ", error);
    socket.onclose = () => console.log("WebSocket Disconnected!");

    return socket;
};