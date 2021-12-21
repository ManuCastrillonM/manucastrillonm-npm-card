#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.hex('#ffab91').bold('Manu Castrillon'),
  handle: chalk.hex('#ffab91').bold(' manucastrillonm '),
  work: chalk.white.bold('Software Engineer'),
  twitter: chalk.hex('#ab91ff')('https://twitter.com/manucastrillonm'),
  github: chalk.hex('#ab91ff')('https://github.com/manucastrillonm'),
  linkedin: chalk.hex('#ab91ff')('https://linkedin.com/in/manuelacastrillon'),
  web: chalk.hex('#ab91ff')('https://www.manuela.dev'),
  npx: chalk.hex('#ab91ff')('npx manucastrillonm'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `👩🏻‍💻 ${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.hex('#91ffab')(boxen(output, options)))
