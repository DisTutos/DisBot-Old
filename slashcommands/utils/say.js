const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Copia tu mensaje.")
    .setDMPermission(true)
    .addStringOption(option => option.setName("input").setDescription("Tu mensaje").setRequired(true)),

    async run(client, interaction, args) {
const input = interaction.options.getString("input")
if(!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) return interaction.reply({ content: "No tienes permisos suficientes.", ephemeral: true })

        interaction.reply({ content: `${input}` })
    },
};