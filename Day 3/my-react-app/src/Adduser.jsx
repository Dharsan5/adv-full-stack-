import { useState } from 'react'

function AddUser() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        city: '',
    })
    const [submitted, setSubmitted] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((current) => ({ ...current, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted({ ...formData })
        setFormData({ name: '', email: '', phone: '', gender: '', age: '', city: '' })
    }

    return (
        <section className="card">
            <h1>Add User</h1>
            <form className="form-grid" onSubmit={handleSubmit}>
                <label htmlFor="add-name">Name</label>
                <input
                    id="add-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="add-email">Email</label>
                <input
                    id="add-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="add-phone">Phone</label>
                <input
                    id="add-phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10-digit number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="add-gender">Gender</label>
                <select
                    id="add-gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not">Prefer not to say</option>
                </select>

                <label htmlFor="add-age">Age</label>
                <input
                    id="add-age"
                    name="age"
                    type="number"
                    min="0"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="add-city">City</label>
                <input
                    id="add-city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div className="summary">
                    <h2>Latest submission</h2>
                    <ul>
                        <li><strong>Name:</strong> {submitted.name}</li>
                        <li><strong>Email:</strong> {submitted.email}</li>
                        <li><strong>Phone:</strong> {submitted.phone}</li>
                        <li><strong>Gender:</strong> {submitted.gender}</li>
                        <li><strong>Age:</strong> {submitted.age}</li>
                        <li><strong>City:</strong> {submitted.city}</li>
                    </ul>
                </div>
            )}
        </section>
    )
}

export default AddUser