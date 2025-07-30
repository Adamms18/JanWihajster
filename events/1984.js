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
    // Debugging
    // console.log(`Text after removing emojis: "${text}"`);
    return text.length === 0;
}


module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.channel.id == fuckingChannel) {
            if (!badWord.test(message.content) && !isLink(message.content) && !emojisOnly(message.content)) {
                try {
                    message.reply(`https://tenor.com/view/1984-gif-19260546`).catch(console.error);
                    // Debugging
                    // console.log(`XD "${message.channel.name}" from user "${message.author.tag}".`);

                    await message.member.timeout(10 * 60 * 1000, 'Fuck you');
                } catch (error) {
                    if (error.code === 50013) {
                        return;
                    } else {
                        console.error('Error applying timeout:', error);
                    }
                }
            }
            return;
        }
        else {
            if (badWord.test(message.content) && !isLink(message.content) && !emojisOnly(message.content)) {
                try {
                    message.reply(`https://tenor.com/view/1984-gif-19260546`).catch(console.error);
                    // console.log(`Detected word on channel "${message.channel.name}" from user "${message.author.tag}".`);

                    await message.member.timeout(10 * 60 * 1000, 'Fuck you');
                } catch (error) {
                    if (error.code === 50013) {
                        return;
                    } else {
                        console.error('Error applying timeout:', error);
                    }
                }
            }
        }
    },
};