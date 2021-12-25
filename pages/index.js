import { Fragment } from 'react'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/footer'

export default function Home() {
  return (
	  <Fragment>
		  <Header/>
		  <Layout/>
		  <Footer/>
	  </Fragment>
  )
}
