import { FormEvent, useState } from 'react';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [contactPrivacy, contactHomeCalc] = PAGE_KEYWORD_LINKS['/contact-us'];

const contactFaqs = [
  {
    question: 'How can I report a calculator issue?',
    answer:
      'Use the contact details on this page and include the page URL, your input values, expected result, and actual output so the issue can be reproduced quickly.',
  },
  {
    question: 'Can I request a new calculator feature?',
    answer:
      'Yes. Share your use case, target audience, and preferred workflow. Clear feature requests help prioritize updates that provide real student value.',
  },
  {
    question: 'Do you provide official academic advice?',
    answer:
      'No. This site provides informational tools only. For official academic guidance, please consult Monash University or your faculty advisors.',
  },
  {
    question: 'How long does it take to get a response?',
    answer:
      'Response times can vary, but genuine feedback and bug reports are reviewed as quickly as possible during active maintenance periods.',
  },
];

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General Feedback');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          company,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (response.ok && payload.success) {
        setStatus('Message sent successfully. We will get back to you soon.');
        setName('');
        setEmail('');
        setTopic('General Feedback');
        setMessage('');
        setCompany('');
      } else {
        setStatus(
          payload.message ||
            'Submission failed. Please email us directly at monashwamcalculator@gmail.com.'
        );
      }
    } catch {
      setStatus('Submission failed. Please email us directly at monashwamcalculator@gmail.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Us | Monash WAM Calculator"
        description="Contact Monash WAM Calculator for feedback, issue reports, and feature suggestions related to WAM and GPA tools."
        canonicalPath="/contact-us"
        faqItems={contactFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Have feedback, found an issue, or want to suggest improvements? We welcome constructive input that helps make
          these student tools more accurate and useful. Our{' '}
          <a href={absoluteUrl(contactPrivacy.path)} className={INLINE_LINK_CLASS}>{contactPrivacy.keyword}</a>
          {' '}explains how we handle information, and you can jump back to the{' '}
          <a href={absoluteUrl(contactHomeCalc.path)} className={INLINE_LINK_CLASS}>{contactHomeCalc.keyword}</a>
          {' '}anytime you want fresh estimates.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">General Contact</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Email: <a href="mailto:monashwamcalculator@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">monashwamcalculator@gmail.com</a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Please include the page URL and a short description when reporting any issue.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="company"
              value={company}
              onChange={e => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Topic</label>
              <select
                value={topic}
                onChange={e => setTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
              >
                <option>General Feedback</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Partnership</option>
                <option>Write For Us Query</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`text-xs ${status.startsWith('Message sent') ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <PageFaq title="Contact FAQs" items={contactFaqs} />
    </>
  );
}
