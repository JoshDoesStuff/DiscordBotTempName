const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Fetches info about the user and sends it via reply'),
    async execute(interaction) {
        await interaction.reply(`You are ${interaction.user.username}. Your Discord ID is ${interaction.user.id}`);
    },
};