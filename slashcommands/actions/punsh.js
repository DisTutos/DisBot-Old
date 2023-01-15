const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
	.setName("punsh")
	.setDescription("Golpear a un usuario.")
	.addUserOption(x => x.setName("usuario").setDescription("Menciona a un usuario.").setRequired(true)),

	async run(client, interaction) {

		let user = interaction.options.getUser("usuario")

		let embed = new EmbedBuilder()
		.setDescription(`${interaction.user} golpeo a ${user}`)
        .setAuthor({ name: "DisBot", iconURL: "https://cdn.discordapp.com/avatars/1051341759285825606/17cd438e625dbda92f59c30d60adc59b.webp?size=2048"})
		.setColor("White")
		.setImage("https://media.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif")
        .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })

		interaction.reply({ embeds: [embed] })
	}
}