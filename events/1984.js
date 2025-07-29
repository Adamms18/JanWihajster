const { Events } = require('discord.js');
const { badWord, ignoredChannelsID } = require('../config.json');

module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        // Ignoruj wiadomości od botów
        if (message.author.bot) return;

        // Sprawdź, czy kanał nie jest na liście ignorowanych
        if (ignoredChannelsID.includes(message.channel.id)) {
            return;
        }

        // Sprawdź, czy treść wiadomości zawiera zdefiniowane słowo (ignorując wielkość liter)
        if (message.content.toLowerCase().includes(badWord.toLowerCase())) {
            // Reakcja bota
            message.reply(`Wykryto słowo "${badWord}"!`).catch(console.error);
            console.log(`Wykryto słowo "${badWord}" na kanale "${message.channel.name}" od użytkownika "${message.author.tag}".`);
        }
    },
};