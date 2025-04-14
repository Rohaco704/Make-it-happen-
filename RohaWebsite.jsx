
import React from 'react';

export default function RohaWebsite() {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Roha Advertising and Travel Solution</h1>
        <p className="text-xl">Bridging Talent and Opportunity</p>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="mb-2">Founded by Habtemariam Dejen in Lalibela, Ethiopia, Roha Advertising and Travel Solution connects Ethiopian job seekers with international employers in Canada, Germany, and the UK.</p>
        <p className="italic">“Building Partnerships for Mutual Success”</p>
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">Job Placement</h3>
            <p>Support for skilled and unskilled workers finding international jobs.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">Travel Assistance</h3>
            <p>Visa support, flight bookings, and relocation guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">Advertising</h3>
            <p>Promotion services including flyers and event advertising.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">For Job Seekers</h2>
        <p className="mb-2">We help you apply and succeed abroad with full support for document preparation and training.</p>
        <ul className="list-disc list-inside">
          <li>Canada</li>
          <li>Germany</li>
          <li>United Kingdom</li>
        </ul>
      </section>
      <section className="bg-gray-100 py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">For Employers and Partners</h2>
        <p className="mb-2">Partner with Roha for screened candidates and smooth communication.</p>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>Email: rohafamily1219@gmail.com</p>
        <p>Phone: +251 912 620 744</p>
        <p>Website: www.rohatravelsolution.com</p>
        <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/habtemariam-dejen">Habtemariam Dejen</a></p>
      </section>
    </div>
  );
}
