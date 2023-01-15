const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Te muestra tu avatar.")
    .addUserOption(a => a.setName("user").setDescription("Avatar de algun usuario")),
    async run(client, interaction) {
        
        const user = interaction.options.getUser("user")
        
        if(user) {
            const avat = new EmbedBuilder() 
            .setTitle(`Avatar de ${user.tag}`)
            .setDescription(`[PNG](${user.displayAvatarURL({size: 2048})}) | [GIF](${user.displayAvatarURL({dynamic: true, size: 2048})})`)
            .setImage(user.displayAvatarURL({dynamic: true, size: 2048}))
            .setColor("White")
            .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            return interaction.reply({ embeds: [avat] })
            } else {
                const avat2 = new EmbedBuilder()
            .setTitle(`Tu avatar`)
            .setDescription(`[PNG](${interaction.user.displayAvatarURL({size: 2048})}) | [GIF](${interaction.user.displayAvatarURL({dynamic: true, size: 2048})})`)
            .setImage(interaction.user.displayAvatarURL({dynamic: true, size: 2048}))
            .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setColor("White")
            return interaction.reply({ embeds: [avat2] })
                }
        }
    }