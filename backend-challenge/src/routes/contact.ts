import { collections } from "../services/mongo.service";
import { ContactInterface } from "../models/contactInfo";
import express from "express";

export const contactRouter = express.Router();

contactRouter.use(express.json());

contactRouter.post('/', async (req, res) => {
    try {
        // const newContact:ContactInterface = req.????

        // const postResult = await collections.Contact.insertOne(newContact);

        /*
            if(postResult) {
                res.status(201).send('Successfully sent contact info!')
            } else {
                res.status(500).send('Could not send contact info...')
            }
        */
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
});

