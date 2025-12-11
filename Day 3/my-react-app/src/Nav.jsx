const NAV_LINKS = [
	{ id: 'home', label: 'Home' },
	{ id: 'register', label: 'Register' },
	{ id: 'addUser', label: 'Add User' },
	{ id: 'getUser', label: 'Get User' },
	{ id: 'contact', label: 'Contact' },
	{ id: 'about', label: 'About' },
]

function Nav({ activePage, onNavigate }) {
	return (
		<header className="nav-shell">
			<span className="brand">Team Portal</span>
			<nav>
				<ul className="nav-list">
					{NAV_LINKS.map((link) => (
						<li key={link.id}>
							<button
								type="button"
								className={link.id === activePage ? 'nav-btn active' : 'nav-btn'}
								onClick={() => onNavigate(link.id)}
							>
								{link.label}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Nav
