
import Layout from '@/components/Layout';
import React from 'react'
import { getStaticProps } from './api/api';

const User = ({ menu }) => {
  return (

    <Layout menuLinks={menu}>
      user

    </Layout>
  )


}

export default User
export { getStaticProps }
