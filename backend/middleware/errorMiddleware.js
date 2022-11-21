const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: proccess.env.NODE_ENV === "Production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
