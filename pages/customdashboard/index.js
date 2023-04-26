import React from 'react'
import Layout from '@/components/Layout'
import { getStaticProps } from '../api/api';

function CustomDashboard({ menu }) {
  return (
    <Layout menuLinks={menu}>
      
      CustomDashboard
      
      </Layout>
  )
}

export default CustomDashboard
export { getStaticProps }