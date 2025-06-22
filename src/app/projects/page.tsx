import React from 'react';

export default function ProjectsPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Projects & Open Source</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">PytestFramework</h2>
        <a href="#" className="text-blue-600 underline">Link</a>
        <p className="text-gray-700">This repository is regarding personal project solved by Chandra Bhanu.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">personal_project</h2>
        <a href="#" className="text-blue-600 underline">Link</a>
        <p className="text-gray-700">Personal Projects</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Portfolio Website</h2>
        <a href="https://chandrabhanu065.github.io" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">chandrabhanu065.github.io</a>
      </section>
    </main>
  );
}
