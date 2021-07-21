import BlockContent from '../components/BlockContent'
import { Btn, Wrapper } from '../components/GlobalStyles'

export default function WhatIHaveDone() {
  return (
    <Wrapper>
      <h1>A few of my experiences</h1>
      <div>
        <BlockContent title="Creative Solutions">
          This one was my 101 to programming. I learned to setup an entire site using a blank
          WordPress theme as base. A lot of CSS ("A Complete Guide to Flexbox" page was a constant
          visit for me), and a few uses of copied JS and PHP that{' '}
          <del>took me days to figure out how to use properly</del> worked just fine.
        </BlockContent>
        <BlockContent title="Neolife">
          Where all the magic happened. I learned so much in my time in this company. HTML, CSS, JS,
          WordPress, React, Node, Next.js... but most important: programming concepts and good
          practices.
          <br />
          <br />I had to deal for the first time with legacy code and services/sites that already
          were in production. One big achievement was to move a couple of WordPress sites (that were
          slow and very hard to maintain) to a JAM Stack structure composed by Strapi as our CMS,
          and Next.js for theming. New features now can be delievered in a matter of minutes, and
          other people of the company can add/edit content faster and with less effort.
        </BlockContent>
        <BlockContent title='Firebase: "Imobiliária" &amp; "Tradições &amp; Pãezinhos"'>
          "Imobiliária" was an intense project I made during "Programação para Web" class at UFSC.
          We had a month to make a{' '}
          <a
            href="https://jorgekunrath.github.io/INE5646-projeto-final-imobiliaria/"
            target="_blank"
            rel="noreferrer"
          >
            webapp for a real state business <small>(admin access in the footer)</small>
          </a>
          , while following a set of predefined features. We decided to use React and Firebase as
          our stack. God, it was excruciating to understand a few concepts of Firebase! (or maybe of
          database modeling 🤔). But after this first rocky start, Firebase actually got a place in
          my heart. Now I'm more confident, and I've made another app with it:{' '}
          <a href="https://tradicoespaezinhos.com.br/" target="_blank" rel="noreferrer">
            a delivery menu for "Tradições &amp; Pãezinhos"
          </a>{' '}
          that allow the clients to make their order and send it via WhatsApp.
        </BlockContent>
        <p style={{ textAlign: 'center' }}>
          <Btn to="/profile">Ok, but then, who are you?</Btn>
        </p>
      </div>
    </Wrapper>
  )
}
