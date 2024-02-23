import React, { useState } from 'react';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Log form data
    try {
      const response = await fetch('https://getform.io/f/penLwRb7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">
                Contact <span>Me</span>
              </h1>
              <p className="text-normal text-lg text-gray-400 mt-2">
                Let's connect to LinkedIn <br /> or send me an Email
              </p>
              <div className="flex items-center mt-2 text-gray-400">
                <div className="ml-4 text-md tracking-wide w-40">
                  <p>Solomon</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center max-w-[700px]">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                ></textarea>
              </div>
              <button type="submit" className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
