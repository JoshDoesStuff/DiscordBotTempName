const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Used to test if the bot is online and can recive commands | Replies with Pong.'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};