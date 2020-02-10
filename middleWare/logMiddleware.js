const logMiddleware = (req, res, next) => {
    console.log("request received at " + new Date());
    next();
  };

module.exports = logMiddleware;