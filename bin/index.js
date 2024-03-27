#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const craete_1 = __importDefault(require("./order/craete"));
commander_1.program
    .command('create [name]')
    .description('创建一个新项目（create a new project）')
    .option('-f, --force', '强制替换当前目录')
    .action((...arg) => {
    (0, craete_1.default)(...arg);
});
commander_1.program.on('--help', () => {
    console.log('\r\n' +
        figlet_1.default.textSync('seres', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true,
        }));
    console.log(`\r\n ${chalk_1.default.cyan('联系我： github@Culaccino9')}\r\n`);
});
commander_1.program.version(`v${require('../package.json').version}`).usage('<command> [option]');
commander_1.program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEseUNBQW9DO0FBQ3BDLGtEQUEwQjtBQUMxQixvREFBNEI7QUFDNUIsNERBQW9DO0FBRXBDLG1CQUFPO0tBQ0osT0FBTyxDQUFDLGVBQWUsQ0FBQztLQUN4QixXQUFXLENBQUMsK0JBQStCLENBQUM7S0FDNUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7S0FDakMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRTtJQUNqQixJQUFBLGdCQUFNLEVBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUMsQ0FBQztBQUVMLG1CQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxNQUFNO1FBQ0osZ0JBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksRUFBRSxPQUFPO1lBQ2IsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixjQUFjLEVBQUUsU0FBUztZQUN6QixLQUFLLEVBQUUsRUFBRTtZQUNULGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FDTCxDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLGVBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDLENBQUM7QUFFSCxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFdEYsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDIn0=