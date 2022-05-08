import { ObjectId } from "mongodb";

export interface ContactInterface {
    first_name: string,
    last_name: string,
    title: string,
    email: string,
    message: string,
    id?: ObjectId
}