
import Layout from '@/components/Layout';
import React from 'react'
import { getStaticProps } from './MongodbDrivers/sideBarData';

const User = ({ menu }) => {
  return (

    <Layout menuLinks={menu}>
      user

    </Layout>
  )


}

export default User
export { getStaticProps }
