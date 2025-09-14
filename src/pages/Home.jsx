import React from 'react';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p>This is the home page.</p>
      <ContactForm />
    </div>
  );
}

export default Home;
