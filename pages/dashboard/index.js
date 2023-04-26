import React from 'react'
import Layout from '@/components/Layout'
import { getStaticProps } from '../api/api';

function Dashboard({ menu }) {
  return (
    <Layout menuLinks={menu}>
      
      Dashboard
      
      </Layout>
  )
}

export default Dashboard
export { getStaticProps }