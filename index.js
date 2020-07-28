import Telegraf from 'telegraf';
import session from 'telegraf/session.js';
import Stage from 'telegraf/stage.js';

import { getMainMenu } from './keyboards.js';
import { addWordScene } from './scenes.js';
 
const bot = new Telegraf(process.env.BOT_TOKEN_ENG)

bot.start((ctx) => ctx.reply(
    `How can I help you, ${ctx.from.first_name}?`,getMainMenu()));

// Создаем менеджер сцен
const stage = new Stage();
// Регистрируем сцену создания нового слова
stage.register(addWordScene());


bot.use(session());
bot.use(stage.middleware());

bot.action("ADD_WORD", (ctx) => ctx.scene.enter("create"));

bot.launch()

