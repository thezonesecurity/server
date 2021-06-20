import { Schema, model, Document} from "mongoose";
interface IUser extends Document {
    userName: string;
    email: string,
    password: string;
}
const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String ,  required: true },
    password: { type: String ,  required: true },
});

export default model<IUser>("user", userSchema);