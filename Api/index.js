
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  try {
    server.listen(process.env.PORT, () => {
      console.log(`Backend deployed on the port - ${process.env.PORT}`); // eslint-disable-line no-console
  });
  } catch (error) {
    console.log(error);
    throw new Error('Error starting database');
  }

});
