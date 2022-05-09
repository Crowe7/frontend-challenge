import { Db, MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config';

describe("can post valid data", () => {
    let connection: MongoClient;
    let db: Db;
    let objectid = new ObjectId() 
    beforeAll(async () => {
        connection = await MongoClient.connect(process.env.URI);
        db = await connection.db(process.env.DB_NAME);
    });

    afterAll(async () => {
        await connection.close();
    });

    test('can insert data into contact collection', async () => {
        const contact = db.collection('Contact');

        const mockContact = {_id: objectid, first_name: "Jacob", last_name: "Crowe", email: "jacobocrowe@gmail.com", message: "Exists", title: "Hello Midwestern!"};
        await contact.insertOne(mockContact);

        const insertedContact = await contact.findOne({_id: objectid});
        expect(insertedContact).toEqual(mockContact);
    })
})