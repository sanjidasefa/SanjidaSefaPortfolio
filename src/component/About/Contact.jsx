import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  
  // আপনার রেজুমের সঠিক তথ্য [cite: 2, 3]
  const myEmail = "sanjidasefa@gmail.com"; 
  const myPhone = "01735802904"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" />,
      label: "Email Me",
      value: myEmail,
      // সরাসরি জিমেইল কম্পোজ উইন্ডো ওপেন করার লিঙ্ক
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`
    },
    {
      icon: <Phone className="text-green-500" />,
      label: "Call Me",
      value: myPhone,
      link: `tel:${myPhone}`
    },
    {
      icon: <MessageSquare className="text-emerald-500" />,
      label: "WhatsApp",
      value: myPhone,
      link: `https://wa.me/8801735802904` 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#020617] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 uppercase italic tracking-tighter">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        
        {/* ইমেইল কপি করার অপশন (যদি লিঙ্ক কাজ না করে) */}
        <div className="mb-10 inline-flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
          <span className="text-gray-400 text-sm">{myEmail}</span>
          <button onClick={handleCopyEmail} className="text-blue-500 hover:text-blue-400">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <a 
              key={index}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-600/50 transition-all hover:-translate-y-2 group shadow-xl"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">{info.label}</h3>
              <p className="text-lg font-semibold">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all active:scale-95"
          >
            Say Hello <Send size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;