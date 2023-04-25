import { Inter } from 'next/font/google'
import Layout from '@/components/Layout';
import { getStaticProps } from './api/api';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ menu }) {
  console.log(
    "menuItems : ", menu
  );
  return (



    <Layout menuLinks={menu}>
      Homepage
       
    </Layout>
  )
}



export { getStaticProps }
