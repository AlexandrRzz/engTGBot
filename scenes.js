import WizardScene from 'telegraf/scenes/wizard/index.js';
import { getMainMenu } from './keyboards.js';
export function addWordScene() {
    return new WizardScene(
        "create", // Имя сцены
        (ctx) => {
            ctx.reply('Enter a word in English');
            return ctx.wizard.next(); // Переходим к следующему обработчику.
        },
        (ctx) => {
            ctx.wizard.state.wordInEnglish = ctx.message.text;  
            ctx.replyWithHTML(`Enter transcription for <b>'${ctx.wizard.state.wordInEnglish}'</b>`);
            return ctx.wizard.next(); // Переходим к следующему обработчику.
        },
        (ctx) => {
            if (ctx.message.text === "Назад") {
                ctx.wizard.back(); // Вернуться к предыдущиму обработчику
            }
            ctx.wizard.state.wordTranscription = ctx.message.text;  
            ctx.replyWithHTML(`Enter Ukrainian translation for <b>'${ctx.wizard.state.wordInEnglish}'</b>`);
            return ctx.wizard.next(); // Переходим к следующему обработчику.
        },
        (ctx) => {
            ctx.wizard.state.wordInUkrainian = ctx.message.text;
            ctx.replyWithHTML(`You have added a new word: <b>${ctx.wizard.state.wordInEnglish}</b> [<i>${ctx.wizard.state.wordTranscription}</i>] - <b>${ctx.wizard.state.wordInUkrainian}</b>`,getMainMenu()
            );
            console.log(`You have added a new word: ${ctx.wizard.state.wordInEnglish} [${ctx.wizard.state.wordTranscription}>] - ${ctx.wizard.state.wordInUkrainian}`);
            return ctx.scene.leave(); // Выход.
        } 
    )
}