/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: any
  title?: string
  description?: string
  keywords?: string
}


const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  description = 'This is the default description',
  keywords = 'This is the default keywords',

}) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
    <header>
    </header>
    <section className="dashboard">{children}</section>
    <footer className="p-5">
    Footer
    </footer>
  </div>
)

export default Layout
