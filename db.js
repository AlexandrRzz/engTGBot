let myDictinory = [
    {
        user_id: 70831583,
        word: 'Mother',
        transcription: 'ˈmʌðər',
        translate: 'мама'
    },
    {
        user_id: 70831583,
        word: 'Dad',
        transcription: 'dæd',
        translate: 'тато'
    },
    {
        user_id: 70831583,
        word: 'Brother',
        transcription: 'ˈbrʌðər',
        translate: 'брат'
    },
    {
        user_id: 70831583,
        word: 'Sister',
        transcription: 'ˈsɪstər',
        translate: 'сестра'
    },

];

export function addWord(newWord) {
    myDictinory.push(newWord);
}

export function showDictionary(user_id) {
    let html_result = "";
    for (let index = 0; index < myDictinory.length; index++) {
        html_result += `<b>${index + 1}.</b>  <b>${myDictinory[index].word}</b> [<i>${myDictinory[index].transcription}</i>] - <b>${myDictinory[index].translate}</b> \r\n`
    }
    console.log(myDictinory);
    return html_result;
}