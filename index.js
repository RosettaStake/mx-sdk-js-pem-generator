#!/usr/bin/env node

import figlet from 'figlet';
import chalk from 'chalk';

const args = process.argv.slice(2);
import library from './src/index.js';

const init = async (args) => {
  if ( args.length < 1 ) {
    console.warn("invalid number of arguments provided..");
    return;
  }

  let func = camelCase(args[0]);
  if ( !library.hasOwnProperty(func) ) {
    throw Error("Invalid function provided");
  }

  await library[func](...args.slice(1));
};

init(args)
  .then(_ => {
    console.log(
      chalk.red(
        figlet.textSync('Your keys, your money!', {
          font: 'Ghost',
          horizontalLayout: 'full'
        })
      )
    );
  })
  .catch(err => console.warn(err));


function camelCase(input) {
  return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
    return group1.toUpperCase();
  });
}
