import { Link } from 'react-router-dom'

export default function WhatIHaveDone() {
  return (
    <div>
      <h1>A few of my experiences</h1>
      <h2>Creative Solutions</h2>
      <p>
        This job was my 101 to programing. I learned to setup a entire site using a blank WordPress
        theme. A looot of CSS ("A Complete Guide to Flexbox" was a fixed page for me). And a few
        uses of copied JS and PHP that{' '}
        <del>took me days to figure out how to use then properly</del> just worked.
      </p>
      <h2>Neolife</h2>
      <p>
        Where all the magic happened. I learned so much in my time in this company. HTML, CSS, JS,
        WordPress, React, Node, Next.js... but most important: programing concepts and good
        practices. I had to deal for the first time with legacy code and services/sites that already
        was in production. One big achievement was to migrate a couple of WordPress sites, slow and
        very hard to maintain, to a JAM Stack structure composed by Strapi as our CMS and Next.js
        for theming. New features now can be delievered in matter of minutes and other people of the
        company can add/edit contents in a more resilient and fast way.
      </p>
      <h2>Firebase – "Imobiliária" &amp; "Tradições &amp; Pãezinhos"</h2>
      <p>
        "Imobiliária" was a intense project made for "Programação para Web" class at UFSC. We had a
        month to make a{' '}
        <a
          href="https://jorgekunrath.github.io/INE5646-projeto-final-imobiliaria/"
          rel="noreferrer"
        >
          webapp for a real state business <small>(admin access in the footer)</small>
        </a>{' '}
        folowing a set of predefined features. We decided to use React and Firebase as our stack.
        God, the excruciating pain to understand a few concepts of Firebase! (or maybe of database
        modeling 🤔). But I after this first impact, Firebase actually got a place in my heart. Then
        I made another app with it, a{' '}
        <a href="https://tradicoespaezinhos.com.br/" target="_blank" rel="noreferrer">
          menu for "Tradições &amp; Pãezinhos"
        </a>{' '}
        that allow the clients to make their order and send it with WhatsApp.
      </p>
      <p>
        <Link to="/profile">Ok, but then, who are you?</Link>
      </p>
    </div>
  )
}
