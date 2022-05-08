import 'dotenv/config';
import { Collection, Db, MongoClient } from 'mongodb';

// Collections
export const collections: {Lorem?:Collection, Contact?:Collection} = {};

// Init DB connection

export async function connectToMongo() {

    const client:MongoClient = new MongoClient(process.env.URI);
    try{
        await client.connect();
        console.log('Connected to Server!');

        const db:Db = client.db(process.env.DB_NAME);

        db.command({
            collMod: "Contact",
            validator: { $jsonSchema: {
                bsonType: "object",
                required: [ "first_name", "last_name", "title", "email", "message"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    first_name: {
                        bsonType: "string",
                        description: "first_name must be a string and is required"
                    },
                    last_name: {
                        bsonType: "string",
                        description: "last_name must be a string and is required"
                    },
                    title: {
                        bsonType: "string",
                        description: "title must be a string and is required"
                    },
                    email: {
                        bsonType: "string",
                        description: "email must be a string and is required"
                    },
                    message: {
                        bsonType: "string",
                        description: "message must be a string and is required"
                    },
                }
            }}
        })
        
        const loremCollection:Collection = db.collection(process.env.MIDWESTERN_SEEDED_COLLECTION_NAME);
        collections.Lorem = loremCollection;

        const contactCollection:Collection = db.collection(process.env.MIDWESTERN_CONTACT_COLLECTION_NAME);
        collections.Contact = contactCollection;

        console.log('Connected to DB!');

    } catch(err) {
        console.error(err)
    }
}
/*
        first_name: string,
    last_name: string,
    title: string,
    email: string,
    message: string,
    id?: ObjectId
*/