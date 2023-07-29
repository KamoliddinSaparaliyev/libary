class BadRequestError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

class NotFoundError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }
  }
}

class UnauthorizedError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnauthorizedError);
    }
  }
}

class ForbiddenError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ForbiddenError);
    }
  }
}

const errorMiddlewareFunc = (req, res, next, err) => {
  let status = 500;

  if (err instanceof BadRequestError) status = 400;
  else if (err instanceof UnauthorizedError) status = 401;
  else if (err instanceof ForbiddenError) status = 403;
  else if (err instanceof NotFoundError) status = 404;

  console.log(err.msg);

  res.status(status).json({ error: err.message });
};

module.exports = {
  errorMiddlewareFunc,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  UnauthorizedError,
};
