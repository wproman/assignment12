"use client"
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can implement form submission logic here
        console.log('Form data:',formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
         

            <main>
                <section className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="website">Website</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full border p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full border p-2"
                                rows="4"
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </main>

         
        </div>
    );
}
