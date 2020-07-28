import Telegraf from 'telegraf';
import { getMainMenu } from './keyboards.js';
 
const bot = new Telegraf(process.env.BOT_TOKEN_ENG)

bot.start((ctx) => ctx.reply(
    `How can I help you, ${ctx.from.first_name}?`,getMainMenu()));

    bot.launch()

