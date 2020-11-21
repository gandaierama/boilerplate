
import React from 'react'
import Layout from 'components/Layout'
import Header from 'components/Header'

const description = '';
const title= '';
const keywords= '';


export default () => (
  <Layout title={title} description={description} keywords={keywords} >
  	<Header></Header>
  	<div className='cms'>
  	<div className="container p-5 clearfix ">
    	<h3>Título</h3>
      <p>Texto</p>

    </div>
    </div>

  </Layout>
)
