import React from 'react';

export default function ContactPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-700 mb-4">Feel free to reach out to me!</p>
      <ul className="mb-4 text-gray-700">
        <li><strong>Email:</strong> <a href="mailto:chandra.bhanu065@gmail.com" className="text-blue-600 underline">chandra.bhanu065@gmail.com</a></li>
        <li><strong>Phone:</strong> 7827323189</li>
        <li><strong>Location:</strong> Bangalore</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chandra-bhanu-284b9176/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Profile</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/chandrabhanu065" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">chandrabhanu065</a></li>
        <li><strong>Portfolio:</strong> <a href="https://chandrabhanu065.github.io" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">chandrabhanu065.github.io</a></li>
      </ul>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </main>
  );
}
