import Joi from "joi";

// name: "",
// phone: "",
// email: "",
// role: "",
// password: "",
// confirmPassword: "",

const registerValidator = (req, res, next) => {
  const user = req.body;
  const schema = Joi.object({
    name: Joi.string()
      .pattern(new RegExp("^[a-zA-Z ]{3,250}$"))
      .min(3)
      .max(30)
      .trim()
      .required(),
    phone: Joi.string().pattern(new RegExp("^[0-9]{11}$")).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")) // don't use this
      .required(),
    confirmPassword: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        // tlds: { allow: ["com", "net"] },
      })
      .required(),
  });

  const result = schema.validate(user);
  // console.log("result", result);
  if (result.error) {
    res.status(400).json({ errors: result.error });
    return;
  }

  next();
};

const loginValidator = (req, res, next) => {
  const loginDetails = req.body;
  const schema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")) // don't use this
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        // tlds: { allow: ["com", "net"] },
      })
      .required(),
  });

  const result = schema.validate(loginDetails);
  // console.log("result", result);
  if (result.error) {
    res.status(400).json({ errors: result.error });
    return;
  }

  next();
};

export { registerValidator, loginValidator };
