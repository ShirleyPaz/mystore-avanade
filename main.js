const server =  require('./config/server');

async function main() {
    const server = new server;
    await server.conectar(3000)
}

main()

