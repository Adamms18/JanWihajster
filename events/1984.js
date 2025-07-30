const { Events } = require('discord.js');
const { fuckingChannel } = require('../config.json');

const badWord = /\bf+u+c+k+/i;

function isLink(text) {
    return text.startsWith('http://') || text.startsWith('https://');
}

function emojisOnly(text) {
    const customEmojiRegex = /<a?:\w+:\d+>/g;
    const unicodeEmojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}\p{Emoji_Modifier})/gu;
    text = text.replace(customEmojiRegex, '').replace(unicodeEmojiRegex, '').trim();
    console.log(`Emojis only check: "${text}"`);
    return text.length === 0;
}


module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        if (message.channel.id == fuckingChannel) {
            if (!badWord.test(message.content) && !isLink(message.content) && !emojisOnly(message.content)) {
                // Reakcja bota
                message.reply(`https://tenor.com/view/1984-gif-19260546`).catch(console.error);
                console.log(`XD "${message.channel.name}" od użytkownika "${message.author.tag}".`);
            }
            return;
        }
        else {
          if (badWord.test(message.content) && !isLink(message.content) && !emojisOnly(message.content)) {
            message.reply(`https://tenor.com/view/1984-gif-19260546`).catch(console.error);
            console.log(`Wykryto słowo na kanale "${message.channel.name}" od użytkownika "${message.author.tag}".`);
          }
        }
    },
};