import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiGithub, SiFacebook, SiTiktok, SiYoutube, SiInstagram } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý submit form ở đây
    console.log(formData);
    // Có thể thêm logic gửi email, hiển thị thông báo, v.v.
  };

  const socialLinks = [
    {
      icon: SiGithub,
      link: "https://github.com/minproducer",
      hoverColor:
        "hover:ring-2 hover:ring-gray-400 hover:bg-gray-200 dark:hover:ring-gray-600 dark:hover:bg-gray-800 text-gray-900 dark:text-white",
    },
    {
      icon: SiFacebook,
      link: "https://facebook.com/minproducer.fb",
      hoverColor:
        "hover:ring-2 hover:ring-blue-400 hover:bg-blue-100 dark:hover:ring-blue-600 dark:hover:bg-blue-800 text-blue-600 dark:text-white",
    },
    {
      icon: SiTiktok,
      link: "https://tiktok.com/@minproducer_tiktok",
      hoverColor:
        "hover:ring-2 hover:ring-gray-500 hover:bg-gray-200 dark:hover:ring-gray-700 dark:hover:bg-black text-gray-900 dark:text-white",
    },
    {
      icon: SiYoutube,
      link: "https://youtube.com/@minproducer_yt",
      hoverColor:
        "hover:ring-2 hover:ring-red-400 hover:bg-red-100 dark:hover:ring-red-600 dark:hover:bg-red-800 text-red-600 dark:text-white",
    },
    {
      icon: SiInstagram,
      link: "https://instagram.com/minproducer",
      hoverColor:
        "hover:ring-2 hover:ring-purple-400 hover:bg-gradient-to-tr from-pink-300 via-purple-300 to-yellow-300 dark:hover:ring-purple-600 dark:hover:bg-gradient-to-tr dark:from-pink-500 dark:via-purple-500 dark:to-yellow-500 text-purple-600 dark:text-white",
    },
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center transition-colors duration-300 pt-20 pb-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="grid grid-cols-1 md:grid-cols-2 bg-gray-400 dark:bg-gray-900 shadow-2xl rounded-3xl overflow-hidden"
        >
          {/* Contact Information Side */}
          <div className="bg-gradient-to-b from-blue-700 via-gray-100 to-orange-400 dark:bg-gradient-to-br dark:from-red-600 dark:to-purple-900 dark:text-white p-12 flex flex-col justify-between relative">
            <div>
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-6 tracking-tight"
              >
                Liên Hệ
              </motion.h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { 
                    icon: <Mail className="w-6 h-6 dark:text-white/80" />, 
                    text: "minhhai113he@gmail.com",
                    link: "mailto:minhhai113he@gmail.com"
                  },
                  { 
                    icon: <Phone className="w-6 h-6 dark:text-white/80" />, 
                    text: "(+84) 773448750",
                    link: "tel:+84773448750"
                  },
                  { 
                    icon: <MapPin className="w-6 h-6 dark:text-white/80" />, 
                    text: "Hội An, Quảng Nam, Việt Nam",
                    link: "https://maps.app.goo.gl/igdbdgC1QUrJs83S6"
                  }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4 bg-white/10 p-3 rounded-xl"
                  >
                    {contact.icon}
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        className="hover:text-white dark:hover:text-black transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-4 mt-8"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`dark:text-white/70 ${social.hoverColor} transition-all transform hover:scale-120 bg-white/10 p-4 rounded-xl`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />
            <div 
              className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"
            />
          </div>

          {/* Form Side */}
          <div className="p-12 flex items-center bg-gray-400 dark:bg-gray-800 bg-white relative">
            <form 
              onSubmit={handleSubmit}
              className="w-full space-y-6"
            >
              {[
                { 
                  name: "name", 
                  label: "Họ tên", 
                  placeholder: "Nguyễn Văn A",
                  type: "text",
                  required: true
                },
                { 
                  name: "email", 
                  label: "Email", 
                  placeholder: "nguyenvana@gmail.com",
                  type: "email",
                  required: true
                },
                { 
                  name: "message", 
                  label: "Tin nhắn", 
                  placeholder: "Bạn Min quá đẹp zai!",
                  type: "textarea",
                  required: true
                }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-bold">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full min-h-[150px] p-3 border-2 border-blue-100 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 focus:border-blue-500 dark:focus:border-blue-500 transition-all rounded-xl"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full p-3 border-2 border-blue-100 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 focus:border-blue-500 dark:focus:border-blue-500 transition-all rounded-xl"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button 
                  type="submit" 
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white transition-all rounded-xl flex items-center justify-center group"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                  Gửi tin nhắn
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-3xl overflow-hidden shadow-2xl p-0"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111107.94059086328!2d108.33467070463624!3d15.918441559923135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420dd4e1353a7b%3A0xae336435edfcca3!2zVHAuIEjhu5lpIEFuLCBRdeG6o25nIE5hbSwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1704577768800!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}