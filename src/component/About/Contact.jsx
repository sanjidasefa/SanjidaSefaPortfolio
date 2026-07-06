import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Copy, Check ,Linkedin} from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const myEmail = "sanjidasefa@gmail.com";
  const myPhone = "01735802904";
  const linkedinUrl = "https://www.linkedin.com/in/kazisanjidasefa";
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#1B3C53]" />,
      label: "Email Me",
      value: myEmail,
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`,
    },
    {
      icon: <Phone className="text-green-500" />,
      label: "Call Me",
      value: myPhone,
      link: `tel:${myPhone}`,
    },
   {
      icon: <Linkedin className="text-[#1B3C53" />,
      label: "LinkedIn",
      value: "sanjidasefa",
      link: linkedinUrl
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-white text-slate-800 border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold mb-4 uppercase italic tracking-tighter">
          Get In <span className="text-[#1B3C53]">Touch</span>
        </h2>

        <div className="mb-10 inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
          <span className="text-slate-600 text-sm">{myEmail}</span>
          <button
            onClick={handleCopyEmail}
            className="text-[#1B3C53] hover:text-[#1B3C53]"
          >
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
              className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-[#1B3C53]/50 transition-all hover:-translate-y-2 group shadow-sm hover:shadow-[#1B3C53]/10"
            >
              <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">
                {info.label}
              </h3>
              <p className="text-lg font-semibold">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1B3C53] rounded-2xl font-bold text-lg text-white hover:bg-[#1B3C53] shadow-lg shadow-[#1B3C53]/20 transition-all active:scale-95"
          >
            Say Hello <Send size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
