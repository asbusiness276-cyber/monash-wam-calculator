import type { ReactNode } from 'react';
import { AlertCircle, Mail, MessageSquare, Wrench } from 'lucide-react';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import SiteSocialLinks from '../components/SiteSocialLinks';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS, SOCIAL_LINK_BUTTON_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [contactPrivacy, contactHomeCalc] = PAGE_KEYWORD_LINKS['/contact-us'];

const contactFaqs = [
  {
    question: 'How can I report a calculator issue?',
    answer:
      'Email us with the page URL, your input values (marks, credit points, year levels), expected result, and actual output. Screenshots help. We reproduce bugs against automated tests before fixing.',
  },
  {
    question: 'Can I request a new calculator feature?',
    answer:
      'Yes. Share your use case, who would use it (e.g. pharmacy coursework, double degree), and the Monash rule you are trying to model. Clear feature requests help us prioritise student value.',
  },
  {
    question: 'Do you provide official academic advice?',
    answer:
      'No. This site provides informational tools only. For enrolment, progression, supp eligibility, or grade disputes, contact Monash Connect or your faculty student services team.',
  },
  {
    question: 'How long does it take to get a response?',
    answer:
      'Response times vary. Bug reports and accuracy issues are prioritised during active maintenance. General feedback may take longer during peak university periods.',
  },
  {
    question: 'Can I ask you to verify my WAM against WES?',
    answer:
      'We can help you understand the maths if your inputs match WES but results differ — often year level, credit points, or excluded units are the cause. We cannot access your student record or speak to Monash on your behalf.',
  },
  {
    question: 'Do you accept guest posts or partnerships?',
    answer:
      'Education-focused guest pitches are welcome via our write-for-us page. We do not sell paid links, calculator sponsorships, or guaranteed article placement.',
  },
];

const helpRows = [
  ['Calculator bug or wrong formula', 'Yes — include inputs and expected output', '1–5 business days (typical)'],
  ['Feature idea for a new tool', 'Yes — describe Monash workflow', 'Reviewed in maintenance cycles'],
  ['Article correction or typo', 'Yes — link the section', 'Usually quick'],
  ['Official enrolment / grade appeal', 'No — use Monash Connect', 'N/A'],
  ['Scholarship eligibility decision', 'No — faculty or scholarship office', 'N/A'],
  ['Privacy or data request', 'Yes — see privacy policy first', 'Case by case'],
];

const emailTemplates = [
  {
    title: 'Bug report template',
    lines: [
      'Subject: Bug — [calculator name]',
      'Page URL: …',
      'Inputs: unit marks, CP, year levels (or paste screenshot)',
      'Expected result: …',
      'Actual result: …',
      'WES value (if comparing): …',
    ],
  },
  {
    title: 'Feature request template',
    lines: [
      'Subject: Feature — [short idea]',
      'Who needs this: e.g. honours year engineering students',
      'Problem: what is hard to model today',
      'Ideal output: what the calculator should show',
    ],
  },
];

function ContactCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Mail;
  children: ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        <Icon size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us | Monash WAM Calculator"
        description="Contact Monash WAM Calculator for bug reports, feature requests, article corrections, and privacy questions. Email templates and response expectations for Monash WAM & GPA tools."
        canonicalPath="/contact-us"
        faqItems={contactFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Independent student resource · Not Monash University · We reply by email
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Have feedback, found an issue, or want to suggest a calculator? Email us directly — constructive input helps
          keep these tools accurate for Monash students.           Read{' '}
          <a href={absoluteUrl('/about-us')} className={INLINE_LINK_CLASS}>
            about us
          </a>{' '}
          for site background, our{' '}
          <a href={absoluteUrl(contactPrivacy.path)} className={INLINE_LINK_CLASS}>
            {contactPrivacy.keyword}
          </a>{' '}
          for data handling, and the{' '}
          <a href={absoluteUrl(contactHomeCalc.path)} className={INLINE_LINK_CLASS}>
            {contactHomeCalc.keyword}
          </a>{' '}
          when you need fresh estimates.
        </p>

        <div className="space-y-6">
          <ContactCard title="Email" icon={Mail}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              The fastest way to reach us. Use a clear subject line so your message lands in the right queue.
            </p>
            <a
              href={`mailto:${ARTICLE_AUTHOR.email}?subject=${encodeURIComponent('Monash WAM Calculator — Website enquiry')}`}
              className={SOCIAL_LINK_BUTTON_CLASS}
            >
              <Mail size={16} className="shrink-0" aria-hidden />
              Email {ARTICLE_AUTHOR.name}
            </a>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              We do not offer phone support or live chat. For urgent academic matters, contact Monash Connect directly.
            </p>
          </ContactCard>

          <ContactCard title="What We Can Help With" icon={MessageSquare}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Use this table before emailing — it saves time for you and helps us route messages correctly.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60">
                    <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Topic</th>
                    <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Contact us?</th>
                    <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Typical response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                  {helpRows.map(row => (
                    <tr key={row[0]}>
                      <td className="px-3 py-2 font-medium">{row[0]}</td>
                      <td className="px-3 py-2">{row[1]}</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContactCard>

          <ContactCard title="Email Templates" icon={Wrench}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Copy and fill in the fields below — detailed reports get fixed faster.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {emailTemplates.map(template => (
                <div
                  key={template.title}
                  className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/30 p-4"
                >
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{template.title}</h3>
                  <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400 font-mono leading-relaxed">
                    {template.lines.map(line => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ContactCard>

          <ContactCard title="Before You Email About WAM vs WES" icon={AlertCircle}>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              If our calculator differs from WES, check these common causes before reporting a bug:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
              <li>Year level set wrong (Year 1 uses 0.5 weight in official Monash WAM)</li>
              <li>Credit points do not match your transcript (6 vs 12 cp units)</li>
              <li>In-progress units included before results are final</li>
              <li>Repeat attempts, WN, or faculty exclusions not modelled in a simple WAM calculator</li>
              <li>Planning WAM entered on a form that expects official cumulative WAM</li>
            </ul>
            <p className="mt-4 text-sm">
              Guides:{' '}
              <a href={absoluteUrl('/articles/how-to-find-wam-on-monash-transcript')} className={INLINE_LINK_CLASS}>
                find WAM on transcript
              </a>
              ,{' '}
              <a href={absoluteUrl('/articles/how-to-calculate-wam')} className={INLINE_LINK_CLASS}>
                how to calculate WAM
              </a>
              .
            </p>
          </ContactCard>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Follow MonashWAMCalculator</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Updates, guides, and calculator tips on our official channels.
            </p>
            <SiteSocialLinks variant="buttons" />
          </div>

          <div className="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Official Monash Support</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              We are an independent student resource and cannot change grades, enrolment, or faculty decisions. For
              official academic support, use Monash Connect, your unit coordinator, or faculty student services. See our{' '}
              <a href={absoluteUrl('/disclaimer')} className={INLINE_LINK_CLASS}>
                disclaimer
              </a>{' '}
              for full limits of liability.
            </p>
            <p className="mt-3 text-sm">
              Want to contribute content? Visit{' '}
              <a href={absoluteUrl('/write-for-us')} className={INLINE_LINK_CLASS}>
                write for us
              </a>{' '}
              for editorial guidelines.
            </p>
          </div>
        </div>
      </section>

      <PageFaq title="Contact FAQs" items={contactFaqs} />
    </>
  );
}
