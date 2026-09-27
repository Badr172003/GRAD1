import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, Clock, Users, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inquiryTypes = [
  'General Inquiry',
  'Cybersecurity Assessment',
  'Firewall Configuration',
  'Threat Detection',
  'Incident Response',
  'Security Monitoring',
  'Penetration Testing',
  'Partnership',
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  inquiryType: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.subject.trim()) next.subject = 'Subject is required.';
    if (!form.message.trim()) next.message = 'Message is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (!response.ok) {
        throw new Error('Server error');
      }
      
      setFormState('success');
      setForm({ name: '', email: '', subject: '', inquiryType: '', message: '' });
    } catch (err) {
      console.error(err);
      setFormState('error');
    }
  };

  const inputBase =
    'w-full bg-[#111719] border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1';
  const inputIdle = 'border-white/[0.08] focus:border-brand-500/60 focus:ring-brand-500/20';
  const inputError = 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20';

  return (
    <main className="pt-16 bg-[radial-gradient(circle_at_top,rgba(53,230,162,0.08),transparent_30%),linear-gradient(180deg,#0a1010_0%,#070b0c_100%)]">
      {/* Page hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden" aria-label="Contact page header">
        <div className="absolute inset-0 bg-line-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(94,231,166,0.06) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.07] mb-8">
              <Mail className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
              <span className="text-brand-400 text-xs font-semibold tracking-[0.18em] uppercase">Contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Talk to Our{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 via-brand-300 to-accent-400">
                Security Team
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Have questions about protecting your infrastructure? Ready to get started?
              Reach out and we'll respond within 24–48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-24 sm:pb-32" aria-label="Contact form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-green-500/20 bg-green-500/5"
                  >
                    <CheckCircle2 className="w-14 h-14 text-green-400 mb-5" aria-hidden="true" />
                    <h2 className="text-white font-bold text-2xl mb-3">Message Received</h2>
                    <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                      Thank you for reaching out. Our security team will review your inquiry and respond within 24–48 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState('idle')}
                      className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : formState === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-red-500/20 bg-red-500/5"
                  >
                    <AlertCircle className="w-14 h-14 text-red-400 mb-5" aria-hidden="true" />
                    <h2 className="text-white font-bold text-2xl mb-3">Submission Failed</h2>
                    <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                      We couldn't securely transmit your message. Please try again later or use the direct contact methods on the right.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState('idle')}
                      className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-200"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                    aria-label="Contact form"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2">
                          Full Name <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`${inputBase} ${errors.name ? inputError : inputIdle}`}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="mt-1.5 text-red-400 text-xs flex items-center gap-1.5">
                            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2">
                          Email Address <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className={`${inputBase} ${errors.email ? inputError : inputIdle}`}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="mt-1.5 text-red-400 text-xs flex items-center gap-1.5">
                            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject + Inquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="subject" className="block text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2">
                          Subject <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Brief subject"
                          className={`${inputBase} ${errors.subject ? inputError : inputIdle}`}
                          aria-required="true"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                        />
                        {errors.subject && (
                          <p id="subject-error" role="alert" className="mt-1.5 text-red-400 text-xs flex items-center gap-1.5">
                            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                            {errors.subject}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="block text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2">
                          Inquiry Type
                        </label>
                        <div className="relative">
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            value={form.inquiryType}
                            onChange={handleChange}
                            className={`${inputBase} ${inputIdle} appearance-none pr-10 cursor-pointer`}
                          >
                            <option value="" disabled className="bg-surface-800">Select a service</option>
                            {inquiryTypes.map((t) => (
                              <option key={t} value={t} className="bg-surface-800">{t}</option>
                            ))}
                          </select>
                          <ChevronDown
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2">
                        Message <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your security needs or questions..."
                        className={`${inputBase} ${errors.message ? inputError : inputIdle} resize-none`}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="mt-1.5 text-red-400 text-xs flex items-center gap-1.5">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full py-3.5 bg-brand-400 hover:bg-brand-300 disabled:bg-brand-400/50 disabled:cursor-not-allowed text-[#05070A] font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-brand-400/20 flex items-center justify-center gap-2"
                      aria-label={formState === 'loading' ? 'Sending message…' : 'Send message'}
                    >
                      {formState === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
              aria-label="Contact information"
            >
              {/* Secure comms panel */}
              <div className="p-6 rounded-2xl border border-brand-500/15 bg-brand-500/4">
                <div className="flex items-center gap-2.5 mb-5">
                  <ShieldCheck className="w-4 h-4 text-brand-400" aria-hidden="true" />
                  <span className="text-brand-400 text-xs font-semibold tracking-[0.16em] uppercase">
                    Direct Contact
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-white text-sm font-medium">Response Time</p>
                      <p className="text-slate-500 text-xs mt-0.5">24 – 48 hours on business days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-white text-sm font-medium">Security Team</p>
                      <p className="text-slate-500 text-xs mt-0.5">All inquiries are reviewed by our team directly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="p-6 rounded-2xl border border-white/7 bg-white/2.5">
                <h3 className="text-white text-sm font-semibold mb-4">What Happens Next</h3>
                <ol className="space-y-3" role="list">
                  {[
                    'Your message is received and assigned to the relevant team.',
                    'We review your security needs or questions in detail.',
                    'We respond with the information or next steps needed.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-400 text-[9px] font-bold font-mono">
                        {i + 1}
                      </span>
                      <span className="text-slate-500 text-xs leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}