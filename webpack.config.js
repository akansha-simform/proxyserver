module.exports = {
  // other webpack configurations...

  devServer: {
    setupMiddlewares: (devServer) => {
      // Your middleware setup logic here
      // For example, to add a custom middleware:
      devServer.app.use((req, res, next) => {
        // Your middleware logic here
        next();
      });
    },
  },
};
