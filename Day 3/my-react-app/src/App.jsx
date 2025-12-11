import { useMemo, useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Register from './Register.jsx'
import AddUser from './Adduser.jsx'
import GetUser from './GetUser.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'

const PAGE_COMPONENTS = {
	home: Home,
	register: Register,
	addUser: AddUser,
	getUser: GetUser,
	contact: Contact,
	about: About,
}

function App() {
	const [activePage, setActivePage] = useState('home')

	const ActiveComponent = useMemo(() => {
		return PAGE_COMPONENTS[activePage] ?? Home
	}, [activePage])

	return (
		<div className="app-shell">
			<Nav activePage={activePage} onNavigate={setActivePage} />
			<main className="page-body">
				<ActiveComponent />
			</main>
		</div>
	)
}

export default App
