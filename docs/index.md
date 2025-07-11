---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'My Test CLI'
  text: 'for unit tests'
  tagline: a command-line utility
  actions:
    - theme: brand
      text: Getting Started
      link: /docs/getting-started
    - theme: alt
      text: What Is This?
      link: /docs/introduction

features:
  - icon: 🧪
    title: Pick Tests
    details: >-
      Execute a command to select multiple tests within 
      working directory to run using Jest.

  - icon: 🧩
    title: Test Coverage
    details: >-
      Helps target specific files, ensuring controlled 
      test coverage within the defined scope.

  - icon: 🔃
    title: Retest
    details: >-
      Quickly run previously selected tests 
      using only 1 command and need not select again.
---
