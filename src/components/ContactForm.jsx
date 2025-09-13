import { useState } from 'react'
import { storage } from '../utils/storage'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const messages = storage.get('messages') || []
    messages.push(form)
    storage.set('messages', messages)
    setForm({ name: '', email: '', message: '' })
    setSuccess(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />
      <button
        type="submit"
        className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-cyan-500"
      >
        Send
      </button>
      {success && <p className="text-green-500">Message sent!</p>}
    </form>
  )
}
