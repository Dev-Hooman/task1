import React from 'react'
import Layout from '@/components/Layout'
import { getStaticProps } from '../MongodbDrivers/sideBarData';

function QuickStartGuide({ menu }) {
  return (
    <Layout menuLinks={menu}>
      
      QuickStartGuide
      
      </Layout>
  )
}

export default QuickStartGuide
export { getStaticProps }