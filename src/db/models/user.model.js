import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

// const userSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   phone: { type: String, required: true },
//   role: { type: String, required: true, enum: ["ADMIN", "USER"] },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// userSchema.pre("save", function (next) {
//   const user = this;

//   if (!user.isModified("password")) return next();

//   // generate a salt
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return next(err);
//       // override the cleartext password with the hashed one
//       user.password = hash;
//       next();
//     });
//   });
// });

// const UserModel = model("User", userSchema);

// export { UserModel };
