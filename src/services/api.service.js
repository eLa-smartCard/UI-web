import ListTable from './listTable';

const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const ioClient = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');

const socket = ioClient(global.config.LANGF_API);
const app = feathers();


// Setup the transport (Rest, Socket, etc.) here
app.configure(socketio(socket));

// Available options are listed in the "Options" section
app.configure(auth())

export default app