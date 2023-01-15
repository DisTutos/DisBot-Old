const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { enable } = require("colors");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server-icon") //nombre del comando
    .setDescription("Muestra el ícono del servidor.")
    .setDMPermission(true),
    
    async run(client, interaction, args) {

        const svicon = new EmbedBuilder()
            .setTitle(`Icono del servidor: ${interaction.guild.name}`)
            .setImage(interaction.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("White")
            .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })

        interaction.reply({ embeds: [svicon]})

    }
}