const createPostValidator = (req, res, next) => {
  // image
  // topic
  // body

  const post = req.body;
  const schema = Joi.object({
    topic: Joi.string().min(3).max(250).trim().required(),
    body: Joi.string().trim().required(),
  });

  const result = schema.validate(post);

  if (result.error) {
    res.status(400).json({ errors: result.error });
    return;
  }

  next();
};

export { createPostValidator };
