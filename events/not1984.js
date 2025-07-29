const { Events } = require('discord.js');
const { fuckingChannel } = require('../config.json');

const badWord = /\bf+u+c+k+/i;

module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        // Ignoruj wiadomości od botów
        if (message.author.bot) return;

        // Sprawdź, czy kanał nie jest na liście ignorowanych
        if (!fuckingChannel.includes(message.channel.id)) {
            return;
        }

        // Sprawdź, czy treść wiadomości zawiera zdefiniowane słowo (ignorując wielkość liter)
        if (!badWord.test(message.content)) {
            // Reakcja bota
            message.reply(`Idz sie zabic`).catch(console.error);
            console.log(`XD "${message.channel.name}" od użytkownika "${message.author.tag}".`);
        }
    },
};