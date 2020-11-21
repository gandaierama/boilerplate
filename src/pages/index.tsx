
import React from 'react'
import Layout from 'components/Layout'
import Home from 'components/Home'

const description = '';
const title= '';
const keywords= '';

export default () => (
  <Layout title={title} description={description} keywords={keywords} >
    <Home></Home>
  </Layout>
)
