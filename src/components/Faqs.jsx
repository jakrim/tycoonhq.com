import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Why is this different than other platforms?',
      answer:
        'We curate a space dedicated to genuine growth, where industry leaders share their knowledge without the clutter of ads or irrelevant content.',
    },
    {
      question: 'What will this platform accomplish if successful?',
      answer:
        'Our mission is to help young people overcome their fears and anxieties and live a happier, healthier life. We want to help spread great ideas and change society for the better.',
    },
    {
      question: 'What will these experts gain from posting here?',
      answer:
      'Experts expand their legacy by reaching an engaged audience eager for authentic guidance and mentorship.',
      // 'Expanding their audience, influence, and message, by introducing them to people who may have never heard of them before.',
      // 'Our goal is to be the most effective way for the world’s most successful individuals to share a message to the people who would love to listen to them speak.',
      // 'By building a product so pleasurable to use, we will draw large audiences that have never heard of some ',
    },
  ],
  [
    {
      question: 'What is the criteria to become an Expert?',
      answer:
      'Our experts excel in their domain, offering unparalleled expertise and vision, handpicked to inspire and lead within our community.',
        // 'A Tycoon is anyone who dominates their field in terms of knowledge, influence, wealth, or success. We believe there is a magic in bringing this caliber of people together in one place.',
    },
    {
      question: 'Are you hiring?',
      answer:
        'We are hiring exceptional people passionate about helping others find their purpose in life. Send us an email!',
    },
    {
      question: 'How will Morals make money?',
      answer:
        'Through a subscription model, we provide an ad-free experience with premium access to exclusive mentorship and content.',
    },
  ],
  [
    {
      question: 'What kind of content will Moral’s post?',
      answer:
        'Content that inspires action and growth, ranging from personal success stories to practical life lessons.',
    },
    // {
    //   question: 'What is the strategy for bringing Tycoons on to post?',
    //   answer:
    //     'v1 of the product is to build an encyclopedia of Tycoons who you may not know and allow you to find them across the web. v2 is to allow them to post original content on the platform.',
    // },
    {
      question: 'How do I join the beta?',
      answer:
        'Stay tuned for our upcoming release. Join the waitlist today to be part of the transformative journey from the start!',
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
