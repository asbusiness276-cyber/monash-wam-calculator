import { Mail } from 'lucide-react';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS, SOCIAL_LINK_BUTTON_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [writeContactPage, writeHomeCalc] = PAGE_KEYWORD_LINKS['/write-for-us'];

const writeForUsFaqs = [
  {
    question: 'What niche do you accept?',
    answer: 'We only accept education-focused content relevant to student success, academic planning, calculators, and study strategy.',
  },
  {
    question: 'Do you charge a publishing fee?',
    answer:
      'No. We do not sell guest posts or paid link placement. Accepted articles are published on editorial merit when they genuinely help students.',
  },
  {
    question: 'Are promotional links allowed?',
    answer:
      'Authors may include one relevant link in a short bio when the article is accepted. Paid, excessive, or manipulative linking is not permitted.',
  },
  {
    question: 'Which topics are rejected?',
    answer: 'We do not accept spammy, gambling, pornographic, illegal, or drug-related content.',
  },
];

export default function WriteForUs() {
  return (
    <>
      <Seo
        title="Write For Us | Monash WAM Calculator"
        description="Contribute education-focused guest content. Read our editorial quality standards, accepted topics, and contributor guidelines."
        canonicalPath="/write-for-us"
        faqItems={writeForUsFaqs}
      />

      <section className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Write For Us</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          We welcome education writers, teachers, student mentors, and academic professionals who can contribute
          practical, original, and trustworthy content for students. If you want to publish a guest post on our
          website, please read all guidelines below before sending your pitch.
        </p>

        <img
          src="/write-for-us-featured.jpeg"
          alt="Write For Us Education"
          className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 mb-6"
          loading="lazy"
        />

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Editorial Quality Standards</h2>
            <p className="mb-2">
              Our platform is designed for students who need clear, dependable academic guidance. Because of that, every
              submitted article is reviewed for quality, clarity, originality, and practical value before it can be
              accepted. We prefer content that solves a real student problem instead of generic list-style filler.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Real experience:</strong> Show practical examples students can apply immediately.</li>
              <li><strong>Topic expertise:</strong> Keep facts accurate and specific to the education niche.</li>
              <li><strong>Credible writing:</strong> Use trustworthy sources where claims need support.</li>
              <li><strong>Honest intent:</strong> No misleading statements, fake claims, or clickbait writing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accepted Content</h2>
            <p>
              We accept only education niche content. Suitable topics include study planning, exam preparation systems,
              assignment workflow, academic productivity, note-taking frameworks, university application strategy,
              student-friendly technology, grading interpretation, WAM/GPA planning guides, and educational tool
              explainers.
            </p>
            <p className="mt-2">
              We especially value content that gives students a step-by-step structure. For example, how to build a
              weekly revision system, how to recover from low marks with a realistic plan, how to convert academic
              results for applications, or how to avoid common university mistakes during semester transitions.
            </p>
            <p className="mt-2">
              Articles should be written for a real reader, not just for search engines. If your article sounds like it
              was generated only to rank, it will not be accepted. We are looking for educational writing that is useful,
              readable, and actionable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contributor & Link Guidelines</h2>
            <p>
              We welcome original education writing from teachers, mentors, and students with real experience. We do not
              sell guest posts, paid dofollow links, or sponsored placements disguised as editorial content. Submissions
              are reviewed for usefulness, accuracy, and fit with our student audience.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>One contextual author bio link may be included when an article is accepted.</li>
              <li>In-article links should support the reader — official university pages, cited sources, or our calculators.</li>
              <li>Commercial, affiliate, or SEO-only linking is not accepted.</li>
            </ul>
            <p className="mt-2">
              If link placement appears manipulative or unrelated to student learning, the article will be rejected or
              returned for revision. Mention your background and any bio link in your initial pitch so review stays
              transparent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strictly Not Accepted</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Spammy/AI-spun/duplicate content</li>
              <li>Gambling-related content</li>
              <li>Porn/adult content</li>
              <li>Illegal activity promotion</li>
              <li>Drug-related content</li>
            </ul>
            <p className="mt-2">
              We also reject plagiarism, paraphrased copies, AI-spun drafts without human quality control, keyword
              stuffing, and any content that can harm students through inaccurate academic claims.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submission & Review Process</h2>
            <p>
              Before sending a full draft, share a short pitch first. Include your proposed topic, a 5-8 point outline,
              target audience, and your relevant background. This makes topic approval faster and prevents rewrite
              cycles.
            </p>
            <p className="mt-2">
              If your topic is approved, submit a clean article draft with proper heading structure, clear examples, and
              concise paragraphs. We may request edits for readability, factual precision, or policy alignment. Final
              publishing depends on successful editorial review.
            </p>
            <p className="mt-2">
              Typical checks include originality, usefulness, topical relevance, and writing quality. We reserve the
              right to reject submissions that do not match our educational standards even after initial communication.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Formatting Requirements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Minimum depth expected: substantial article with strong educational value.</li>
              <li>Use clear H2/H3 structure and short paragraphs for readability.</li>
              <li>Avoid filler intros; focus on direct, practical guidance.</li>
              <li>Use examples, frameworks, or checklists where helpful.</li>
              <li>No copied media, no copyright violations, no deceptive claims.</li>
            </ul>
            <p className="mt-2">
              If your article includes statistics or policy claims, cite reliable and recent sources. Unsupported claims
              are a common reason for rejection. We prioritize accurate content that students can trust.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How to Contact Us</h2>
            <p>
              Send your topic pitch, sample outline, and author profile via{' '}
              <a href={`mailto:${ARTICLE_AUTHOR.email}`} className={SOCIAL_LINK_BUTTON_CLASS}>
                <Mail size={16} className="shrink-0" aria-hidden />
                Email
              </a>
              . We review quality, relevance, originality, and policy compliance before approval.
            </p>
            <p className="mt-2">
              You can also route submission queries through our{' '}
              <a href={absoluteUrl(writeContactPage.path)} className={INLINE_LINK_CLASS}>{writeContactPage.keyword}</a>
              . While drafting, keep the{' '}
              <a href={absoluteUrl(writeHomeCalc.path)} className={INLINE_LINK_CLASS}>{writeHomeCalc.keyword}</a>
              {' '}open if you need to reference live calculator workflows.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Editorial Checklist Before You Submit</h2>
            <p>
              Please review your article using a strict quality checklist before sending it. Start with intent clarity:
              what exact student problem does your article solve, and what practical outcome should the reader get by the
              end? If this is not clear, revise the structure first. Next, verify factual accuracy line-by-line, then
              simplify wording so a student can understand the message quickly without needing advanced context.
            </p>
            <p className="mt-2">
              Strong submissions usually include a practical framework, real examples, and realistic steps that can be
              executed in the same week. Avoid vague motivational writing that does not explain implementation. If you
              recommend a strategy, explain when it works, when it fails, and how to adapt it. Practical boundaries
              increase trust and help students make informed decisions.
            </p>
            <p className="mt-2">
              Keep language clear, neutral, and reader-focused. Over-promising phrases such as guaranteed marks,
              guaranteed admissions, or guaranteed outcomes are not accepted. Educational publishing requires responsible
              framing. Helpful writing is realistic, transparent, and careful about uncertainty. If your guidance depends
              on university-specific rules, say so clearly and suggest official verification where appropriate.
            </p>
            <p className="mt-2">
              Final drafting tip: read your article once as an editor and once as a first-year student. During the editor
              pass, check logical flow and evidence quality. During the student pass, remove jargon and simplify dense
              sections. This two-pass process dramatically improves acceptance rates.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Examples of Topics We Prefer</h2>
            <p>
              We prefer topics with direct student utility. Good examples include how to recover after low quiz scores,
              how to build a weekly revision planner, how to balance coursework with part-time work, how to prepare for
              final exams in a 4-week sequence, and how to estimate realistic grade targets using calculator workflows.
              We also welcome clear explainers on academic metrics when written responsibly and with practical context.
            </p>
            <p className="mt-2">
              Topic framing matters as much as topic choice. For example, a weak title may say "How to study better." A
              stronger educational title would be "A 6-step weekly study system for overloaded semesters." Specificity
              helps readers decide quickly whether the content is relevant, and it improves overall article quality.
            </p>
            <p className="mt-2">
              If you are submitting a strategy article, include templates, checklists, or ready-to-use structures. If
              you are submitting an explainer article, include practical examples and common mistakes. If you are
              submitting a planning article, include at least one realistic scenario to show how decisions change based
              on constraints such as time, exam weighting, and workload.
            </p>
            <p className="mt-2">
              We strongly encourage writers to avoid generic listicles written only for keywords. Our audience values
              depth, clarity, and actionable guidance. Articles that demonstrate thoughtful educational intent perform
              better for readers and are more likely to be approved quickly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Rights, Revisions, and Publishing Notes</h2>
            <p>
              Once a draft is approved, editorial revisions may be required for consistency, readability, formatting, and
              policy alignment. We may adjust headlines, section ordering, or examples to better match student needs.
              Authors should be open to reasonable edits that improve clarity and quality. Major meaning changes are not
              made without communication.
            </p>
            <p className="mt-2">
              Please submit only content you have the right to publish. You are responsible for ensuring that text, data,
              visuals, and references do not violate copyright, licensing rules, or third-party rights. If you include
              sourced material, use proper attribution and keep excerpts limited and compliant.
            </p>
            <p className="mt-2">
              We reserve the right to reject, unpublish, or edit content that later violates our quality policies or
              platform standards. This includes undisclosed promotional intent, link manipulation, or content that no
              longer matches our education-first scope. Maintaining quality for readers is our top editorial priority.
            </p>
            <p className="mt-2">
              If you agree with these guidelines, send your pitch through email or via the Contact Us page and we will
              respond with next steps.
            </p>
          </div>
        </div>
      </section>

      <PageFaq title="Write For Us FAQs" items={writeForUsFaqs} />
    </>
  );
}
