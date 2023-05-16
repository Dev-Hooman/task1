## This is a Dynamic Sidebar .

![image](https://github.com/Dev-Hooman/task1/assets/80707427/ba9835c2-b87f-4b1d-933a-1519417b62d3)

# Working
![ezgif-1-99489772d3](https://github.com/Dev-Hooman/task1/assets/80707427/86b4a1d2-9866-4db2-9ff9-6712719ba9c6)


## Getting Started

First, Import the mock data in your monogodb database with collection name 'menu' or any :

### Mock data is located in `Mock/menu.json`

`/pages/MonogodbDrivers/sideBarData.js`
```bash
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
  
```



