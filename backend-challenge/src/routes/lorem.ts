import express, { query } from 'express';
import { collections } from '../services/mongo.service.js';
// Config and JSON middleware
export const loremRouter = express.Router();
loremRouter.use(express.json());

//get all documents in lorem
loremRouter.get('/', async (req, res) => {
    try {
        // could typecast this.. would need to type out the lorem itself into an interface then set this to  as lorem[]!
        const lorem = (await collections.Lorem?.find({}).toArray())
    } catch (err) {
        if(err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            console.error('Unexpected error!', err);
        }
    }
});

// gets all documents that match the page you choose. Contact = all documents with a title of "Heading One, Home = all documents with a title of "Heading Two"
loremRouter.get('/:page', async (req, res) => {
    // there is a better way to do this... probably could hold the page type in the documents themselves instead of checking like this?
    let loremQuery: {title: string} =  {title: "Undefined"};
    try {
        if(req.params.page === "Contact") {
            loremQuery = { title: "Heading One"};
        }
        else if(req.params.page === "Home") {
            loremQuery = { title: "Heading Two"};
        } else {
            throw res.status(404).send(`Unable to find a page matching ${req.params.page}`);
        }

        const lorem = (await collections.Lorem?.find(loremQuery).project({_id: 0}).toArray());

        if (lorem?.length !== 0) {
            res.status(200).send(lorem)
        } else {
            throw res.status(404).send(`Unable to find documents matching ${loremQuery}`);
        }
    } catch (err) {
        console.error(err)
    }
});