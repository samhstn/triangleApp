const Hapi = require('hapi');
const Inert = require('inert')

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.register(Inert, err => {
  if(err){
    throw err;
  }

  server.route([{
      method: 'GET',
      path:'/', 
      handler: function (request, reply) {
        reply.file('./production/index.html');
      }
  },
  {
      method: 'GET',
      path:'/bundle.js', 
      handler: function (request, reply) {
        reply.file('./production/bundle.js');
      }
  },
  {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: 'assets'
      }
    }
  }]);

  // Start the server
  server.start((err) => {

      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });
});
