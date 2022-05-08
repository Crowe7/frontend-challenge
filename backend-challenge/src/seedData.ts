import 'dotenv/config'
import { Collection, Db, MongoClient } from 'mongodb';

const dataToSeed = [
    {
        name: "Talkie",
        title: "Heading Two",
        paragraph: "Integer accumsan molestie nisl, id faucibus uma accumsam quis. Prion vulputate, mauris semper maximus.",
        imageUrl: "https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Talkie.png"
    },
    {
        name: "Rabbit",
        title: "Heading Two",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        imageUrl: "https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png"
    },
    {
        name: "Shield",
        title: "Heading Two",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        imageUrl: "https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Shield.png"
    },
    {
        name: "Contact",
        title: "Heading One",
        paragraph: "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.",
        paragraphTwo: "Proin sagittis nisl rhoncus mattis rhoncus. At argue eget arcu dictum varius duis at consectetur lorem."
    }
];

async function seedDB() {
    const uri:string = process.env.URI;
    const client:MongoClient = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to server!');

        const db:Db = client.db(process.env.DB_NAME);
        const loremCollection:Collection = db.collection(process.env.MIDWESTERN_SEEDED_COLLECTION_NAME);
        console.log(db);
        loremCollection.drop();

        //closes connection after all documents are inserted
        await loremCollection.insertMany(dataToSeed);
        console.log('Database Seeded!');
        client.close();
    } catch (err) {
        console.error(err)
    }
}

seedDB();

// export blank so TS has this as its own module to avoid block-scope errors
export {}