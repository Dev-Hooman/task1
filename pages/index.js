import Layout from '@/components/Layout';
import { getStaticProps } from './MongodbDrivers/sideBarData';


export default function Home({ menu }) {

  return (
    <Layout menuLinks={menu}>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-red-200  text-black p-6 rounded-lg shadow-lg text-center animate-bounce">
          <h1 className="text-4xl font-bold">Testing Phase</h1>
          <p className="mt-4">This Application is in testing phase. Please do not change anything.</p>
        </div>
      </div>

    </Layout>
  )
}


export { getStaticProps }
