import React from 'react';

export default function ExperiencePage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Experience</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Cisco Systems | Software Engineer II</h2>
        <p className="text-gray-700">Bangalore | Till Now</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Part of Security Business Unit (BU), working on AnyConnect VPN automation using Python.</li>
          <li>Automated new features, contributed to framework development, and ran test suites on Linux, Windows, and Mac.</li>
          <li>Developed automation for installation/uninstallation of AnyConnect modules from scratch.</li>
          <li>Created client-server tool to optimize test suite runtime.</li>
          <li>Developed log parsing libraries for Windows, Mac, and Linux clients.</li>
          <li>Completed automation for "revert to latest snapshot" project.</li>
          <li>Collaborated with stakeholders and worked in Agile methodologies.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Infoblox | Software Engineer I</h2>
        <p className="text-gray-700">January 2018 - July 2019</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Automation Engineer for API/UI testing of CSP on AWS platform using Python, pytest, and Selenium WebDriver.</li>
          <li>Worked with REST APIs, XML, JSON, and Jenkins jobs.</li>
          <li>Built test automation frameworks for SaaS applications in DNS product line.</li>
          <li>Experience with Pytest and Unittest frameworks.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Wipro Ltd | Project Engineer</h2>
        <p className="text-gray-700">Sept 2014 - Jan 2018</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Virtualization of blade servers using VMWare ESXi.</li>
          <li>Upgrade, migration, and installation of telecom servers.</li>
          <li>Automated test cases using Python scripting.</li>
          <li>Coordinated with design teams and managed test bed environments.</li>
          <li>Reviewed software documentation and tracked bugs.</li>
        </ul>
      </section>
    </main>
  );
}
