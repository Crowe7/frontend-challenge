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
        
        const loremCollection:Collection = db.collection(process.env.MIDWESTERN_SEEDED_COLLECTION_NAME);
        collections.Lorem = loremCollection;

        const contactCollection:Collection = db.collection(process.env.MIDWESTERN_CONTACT_COLLECTION_NAME);
        collections.Contact = contactCollection;

        console.log('Connected to DB!');

    } catch(err) {
        console.error(err)
    }
}
connectToMongo();
console.log(collections.Contact);