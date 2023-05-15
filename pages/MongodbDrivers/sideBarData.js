import { MongoClient } from 'mongodb';

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("test");
    const menuCollection = db.collection('menu');
    const menu = await menuCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        menu: JSON.parse(JSON.stringify(menu)),
      },
    };
  }
  