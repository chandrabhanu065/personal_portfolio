import React from 'react';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        Individual contributor with expertise in cross-platform automation development, system configuration, and execution end-to-end using Agile Scrum. Possess 8+ years of solid experience in Software Quality Assurance and Test Automation.
      </p>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Cross-platform automation development</li>
          <li>System configuration and execution</li>
          <li>Software Quality Assurance</li>
          <li>Test Automation (UI & API, Python, Selenium WebDriver)</li>
          <li>REST APIs, JSON, Linux, SDLC</li>
          <li>Software debugging, Curl, Packet/Send</li>
          <li>Firewall configuration, HTTP/HTTPS, VPN Stack</li>
          <li>Agile methodology</li>
          <li>Cloud: Basic AWS (S3, EC2)</li>
          <li>Pytest, SaaS automation, Page Object Model</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Adaptability</h2>
        <p className="text-gray-700">Demonstrated ability to quickly learn and adapt to new technologies.</p>
      </section>
    </main>
  );
}
