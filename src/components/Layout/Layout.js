import NavBar from '@components/NavBar/NavBar'
import Footer from '@components/Footer/Footer'

function Layout({ children }) {
	return (
		<>
			<div className="bg-slate-900 mx-auto  max-w-7xl">
				<NavBar />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
