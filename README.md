This is a Dynamic Sidebar .

![image](https://github.com/Dev-Hooman/task1/assets/80707427/ab2d9ed8-9e94-49e5-9297-8f640f59b760)




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



