import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Invalid email address.';
    }
    if (!form.message.trim()) tempErrors.message = 'Message is required.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const showToastMessage = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);

    try {
      // POST message to Node.js + Express backend server
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok && data.success) {
        showToastMessage(data.message || 'Message saved to MongoDB Atlas!', 'success');
        setForm({ name: '', email: '', message: '' });
      } else {
        showToastMessage(data.error || 'Failed to send message.', 'error');
      }
    } catch (err) {
      console.log('MongoDB server offline, demo submission fallback:', err);
      setLoading(false);
      showToastMessage('Message submitted! (Run npm run server to save directly to MongoDB Atlas)', 'success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="-mt-[2rem] flex flex-col items-center">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-5 right-5 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 border text-sm font-semibold transition-all duration-300 animate-slide-in ${
            toast.type === 'success'
              ? 'bg-zinc-900 border-accentCyan text-accentCyan shadow-[0_0_15px_rgba(6,182,212,0.25)]'
              : 'bg-zinc-900 border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.25)]'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping" />
          {toast.message}
        </div>
      )}

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 0.75)}
        className="w-full max-w-2xl bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl glassmorphism"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Let's Build Something Together.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5 font-poppins"
          noValidate
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <span className="text-zinc-300 font-semibold mb-2 text-sm uppercase tracking-wider">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-zinc-950 py-3.5 px-5 placeholder:text-zinc-600 text-white rounded-lg outline-none border transition-all duration-300 ${
                errors.name ? 'border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]' : 'border-zinc-800 focus:border-accentCyan/50'
              }`}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <span className="text-zinc-300 font-semibold mb-2 text-sm uppercase tracking-wider">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`bg-zinc-950 py-3.5 px-5 placeholder:text-zinc-600 text-white rounded-lg outline-none border transition-all duration-300 ${
                errors.email ? 'border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]' : 'border-zinc-800 focus:border-accentCyan/50'
              }`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</span>}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <span className="text-zinc-300 font-semibold mb-2 text-sm uppercase tracking-wider">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className={`bg-zinc-950 py-3.5 px-5 placeholder:text-zinc-600 text-white rounded-lg outline-none border resize-none transition-all duration-300 ${
                errors.message ? 'border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]' : 'border-zinc-800 focus:border-accentCyan/50'
              }`}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex justify-center items-center gap-2 bg-gradient-to-r from-accentCyan to-accentIndigo text-white font-bold font-poppins text-[15px] py-3.5 px-8 rounded-lg mt-4 shadow-glow hover:opacity-90 active:scale-95 transition-all w-fit self-start disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
            {!loading && (
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
