import {Request, Response} from "express";
import User from "../models/userModel"
class userControllers {
    public async index(request: Request, response: Response) {
        response.send("Assignment5, sever running");
    }
    public async getUser(request: Request, response: Response) {
        const users = await User.find({});
        response.send(users);
    }
    public async createUser(request: Request, response: Response) {
        const {userName, email, password} = request.body;
        const newUser = new User(request.body);
        await newUser.save();
        response.send("User registered");
    }
}
export const indexC = new userControllers();