const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName("ping")//nombre del comando
	.setDescription("Latencia de DisBot."),//descripcion del comando

	async run(client, interaction){

		let embed = new EmbedBuilder()
		.setColor("White")
        .setTitle(`Pong!`)
		.setDescription(`Ping: ${client.ws.ping}ms`)
		.setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })

		interaction.reply({ embeds: [embed] })
	}
}