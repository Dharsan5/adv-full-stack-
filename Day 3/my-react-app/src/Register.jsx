import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
  })
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState('success')
  const [registeredUsers, setRegisteredUsers] = useState([])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setFeedback('Passwords do not match. Please try again.')
      setFeedbackType('error')
      return
    }
    const newEntry = {
      id: Date.now().toString(36),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      newsletter: formData.newsletter,
    }
    setRegisteredUsers((current) => [newEntry, ...current])
    setFeedback(`Thanks for registering, ${formData.fullName}!`)
    setFeedbackType('success')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      newsletter: false,
    })
  }

  return (
    <section className="card">
      <h1>Register</h1>
      <p className="helper-text">Create an account to add and manage users.</p>
      <form className="form-grid" onSubmit={handleSubmit}>
        <label htmlFor="reg-name">Full name</label>
        <input
          id="reg-name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="reg-email">Email</label>
        <input
          id="reg-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="reg-phone">Phone</label>
        <input
          id="reg-phone"
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          placeholder="10-digit number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="reg-password">Password</label>
        <input
          id="reg-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          minLength={8}
          required
        />

        <label htmlFor="reg-confirm">Confirm password</label>
        <input
          id="reg-confirm"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          minLength={8}
          required
        />

        <label className="checkbox">
          <input
            name="newsletter"
            type="checkbox"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Subscribe to product updates
        </label>

        <button type="submit">Create account</button>
      </form>
      {feedback && (
        <p className={feedbackType === 'error' ? 'feedback error' : 'feedback'} role="alert">
          {feedback}
        </p>
      )}
      {registeredUsers.length > 0 && (
        <div className="summary">
          <h2>Recent registrations</h2>
          <ul>
            {registeredUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.fullName}</strong> — {user.email} · {user.phone}
                {user.newsletter ? ' (subscribed)' : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Register
