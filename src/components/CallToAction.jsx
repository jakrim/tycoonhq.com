import { useId, useRef, useState } from 'react'
import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Button } from '@/components/Button'

export function CallToAction() {
  const [emailValue, setEmailValue] = useState('')

  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            {/* You don’t know <br/>who you don’t know. */}
            Morals will guide you in finding your purpose.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have questions about your career or your life?
            <br/>
            Learn from experts who have been in your shoes.
          </p>
          <div className="mt-8 flex justify-center">
            {/* <AppStoreLink color="white" /> */}
            <form
                data-netlify="true"
                name="newsletter-hero"
                method="POST"
                className="flex w-full justify-center md:w-auto">
                <TextField
                  input-name="email"
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="w-60 min-w-0 shrink"
                  value={emailValue}
                  name="email"
                  onChange={((e) => setEmailValue(e.target.value))}
                  />
                <input type="hidden" name="form-name" value="newsletter-hero" />
                {/* <input
                  input-name="email"
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="w-60 min-w-0 shrink"
                  value={emailValue}
                  type='text'
                  name="emailInput"
                  onChange={((e) => setEmailValue(e.target.value))}
                /> */}
                {/* <input type="submit" className="ml-4 flex-none"/> */}
                <Button type="submit" color="blue" className="ml-4 flex-none">
                  <span className="hidden lg:inline">Join our newsletter</span>
                  <span className="lg:hidden">Join newsletter</span>
                </Button>
              </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
