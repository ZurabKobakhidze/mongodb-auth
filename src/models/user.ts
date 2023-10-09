import mongoose from "mongoose";
import { UserType } from "types";

const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});
