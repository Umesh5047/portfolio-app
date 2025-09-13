import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const stored = JSON.parse(localStorage.getItem('messages')) || []
    stored.push(formData)
    localStorage.setItem('messages', JSON.stringify(stored))
    setFormData({ name: '', email: '', message: '' })
    alert('Message saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-xl shadow">
      <input type="text" name="name" placeholder="Your Name"
        value={formData.name} onChange={handleChange}
        className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Your Email"
        value={formData.email} onChange={handleChange}
        className="w-full border p-2 rounded" />
      <textarea name="message" placeholder="Your Message"
        value={formData.message} onChange={handleChange}
        className="w-full border p-2 rounded" />
      <button type="submit" className="bg-accent text-white px-4 py-2 rounded">Send</button>
    </form>
  )
}
