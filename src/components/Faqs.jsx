import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Why is this different than other platforms?',
      answer:
        'By only allowing experts in various industries to post, we’re eliminating the waste of time experienced on current platforms.',
    },
    {
      question: 'What will this platform accomplish if successful?',
      answer:
        'Our mission is to bridge the gap between you and the world’s most successful individuals, and create one monumental space that will live on forever after these greats have passed on.',
    },
    {
      question: 'What will these experts gain from posting here?',
      answer:
      'Expanding their audience, influence, and message, by introducing them to people who may have never heard of them before.',
      // 'Our goal is to be the most effective way for the world’s most successful individuals to share a message to the people who would love to listen to them speak.',
      // 'By building a product so pleasurable to use, we will draw large audiences that have never heard of some ',
    },
  ],
  [
    {
      question: 'What is the criteria to become a "Tycoon"?',
      answer:
        'A Tycoon is anyone who dominates their field in terms of knowledge, influence, wealth, or success. We believe there is a magic in bringing this caliber of people together in one place.',
    },
    {
      question: 'Are you hiring?',
      answer:
        'We are hiring exceptional people passionate about helping others find their purpose in life. Send us an email!',
    },
    {
      question: 'How will Tycoon make money?',
      answer:
        'We are pursuing a freemium model where users will gain access to special features based on a subscription to the platform.',
    },
  ],
  [
    {
      question: 'What kind of content will Tycoon’s post?',
      answer:
        'It’s entirely up to them and their audience, our goal is only to platform them and increase their reach. We believe learning from the best will help others achieve individual success!',
    },
    {
      question: 'What is the strategy for bringing Tycoons on to post?',
      answer:
        'v1 of the product is to build an encyclopedia of Tycoons who you may not know and allow you to find them across the web. v2 is to allow them to post original content on the platform.',
    },
    {
      question: 'How do I join the beta?',
      answer:
        'We’ll be releasing v1 in the next few months. Join the waitlist by entering your email!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:jesse@tycoonhq.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
