import { MongoClient } from 'mongodb';

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://devhooman:zindagififa2016@cluster0.bohpfoe.mongodb.net/?retryWrites=true&w=majority");
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
  