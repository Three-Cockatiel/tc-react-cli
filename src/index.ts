#! /usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import create from './order/craete';

program
  .command('create [name]')
  .description('创建一个新项目（create a new project）')
  .option('-f, --force', '强制替换当前目录')
  .action((...arg) => {
    create(...arg);
  });

program.on('--help', () => {
  console.log(
    '\r\n' +
      figlet.textSync('seres', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      }),
  );
  console.log(`\r\n ${chalk.cyan('联系我： github@Culaccino9')}\r\n`);
});

program.version(`v${require('../package.json').version}`).usage('<command> [option]');

program.parse(process.argv);
