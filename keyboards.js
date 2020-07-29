import Markup from 'telegraf/markup.js';

export function getMainMenu() {
    return Markup.inlineKeyboard([[
        Markup.callbackButton("Run test","TEST"),
    ],
    [
        Markup.callbackButton("Add word","ADD_WORD"),
        Markup.callbackButton("My dictionary","DICTIONARY"),
        Markup.callbackButton("Remuve word","REM_WORD")
    ]]).extra()
}