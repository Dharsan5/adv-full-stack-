import { useState } from 'react'

const MOCK_USERS = [
  { id: 'USR001', name: 'Anita Sharma', email: 'anita@example.com', phone: '9876543210', city: 'Chennai' },
  { id: 'USR002', name: 'Ravi Kumar', email: 'ravi@example.com', phone: '8765432109', city: 'Coimbatore' },
  { id: 'USR003', name: 'Priya Patel', email: 'priya@example.com', phone: '7654321098', city: 'Madurai' },
]

function GetUser() {
  const [formState, setFormState] = useState({ searchType: 'id', searchValue: '' })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = formState.searchValue.trim()
    if (!value) {
      setError('Enter a value to search for.')
      setResult(null)
      return
    }

    const match = MOCK_USERS.find((user) => {
      const target = value.toLowerCase()
      switch (formState.searchType) {
        case 'email':
          return user.email.toLowerCase() === target
        case 'phone':
          return user.phone === value
        case 'name':
          return user.name.toLowerCase() === target
        default:
          return user.id.toLowerCase() === target
      }
    })

    if (!match) {
      setError('No user found. Check the details and try again.')
      setResult(null)
      return
    }

    setResult(match)
    setError('')
  }

  return (
    <section className="card">
      <h1>Find a User</h1>
      <p className="helper-text">Submit the form to retrieve exact user details.</p>
      <form className="form-grid" onSubmit={handleSubmit}>
        <label htmlFor="search-type">Search by</label>
        <select
          id="search-type"
          name="searchType"
          value={formState.searchType}
          onChange={handleChange}
        >
          <option value="id">ID</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="name">Full name</option>
        </select>

        <label htmlFor="search-value">Search term</label>
        <input
          id="search-value"
          name="searchValue"
          type={formState.searchType === 'phone' ? 'tel' : 'search'}
          placeholder="Enter the exact value"
          value={formState.searchValue}
          onChange={handleChange}
          required
        />

        <button type="submit">Get user</button>
      </form>

      {error && <p className="feedback error" role="alert">{error}</p>}

      {result && (
        <div className="summary">
          <h2>User details</h2>
          <ul>
            <li><strong>ID:</strong> {result.id}</li>
            <li><strong>Name:</strong> {result.name}</li>
            <li><strong>Email:</strong> {result.email}</li>
            <li><strong>Phone:</strong> {result.phone}</li>
            <li><strong>City:</strong> {result.city}</li>
          </ul>
        </div>
      )}
    </section>
  )
}

export default GetUser
