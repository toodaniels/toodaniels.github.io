import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '@components/Layout/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Daniel Torres - Software Engineer</title>
				<meta name="description" content="Daniel Torres" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
