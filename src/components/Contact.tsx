/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, MessageSquare, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e:any) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form data:", {
      name: formRef.current?.name.valueOf() as string,
      email: formRef.current?.email.value as string,
      message: formRef.current?.message.value as string
    });

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.VITE_EMAILJS_SERVICE_ID as string,
        process.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  const contactInfo = [
{
  icon: <Mail className="w-5 h-5" />,
  label: "Email",
  value: "shariful.islam666778@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=shariful.islam666778@gmail.com"
},
    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "+88 01739-666778", href: "https://wa.me/8801739666778" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "github.com/Shariful-Islam-CoU", href: "https://github.com/Shariful-Islam-CoU" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "shariful-islam-cou", href: "https://linkedin.com/in/shariful-islam-cou" }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-bold">Get In Touch</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
              Let's build <br />
              <span className="text-white/40 italic">the future.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-md mb-12">
              Ready to collaborate on a new project or just want to say hi? 
              I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5 hover:border-accent/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[48px] glass border-white/10 bg-surface/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <MessageSquare className="w-32 h-32" />
            </div>
            
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 relative z-10 py-12"
              >
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-white/60 max-w-xs">
                  Your message has been successfully sent. I will get back to you soon.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                className="space-y-6 relative z-10"
                onSubmit={sendEmail}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Shariful Islam"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="hello@world.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-all placeholder:text-white/20 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-accent text-primary font-bold flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,229,255,0.2)] hover:shadow-[0_15px_30px_rgba(0,229,255,0.4)] transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
