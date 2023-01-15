const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName("help")//nombre del comando
	.setDescription("Te muestra los comandos del bot."),//descripcion del comando

	async run(client, interaction){

		let embed1 = new EmbedBuilder()
		.setColor("White")
        .setTitle(`Comandos`)
		.setDescription("`/help` - Te muestra los comandos del bot.\n`/ping` - Latencia del Bot.\n`/avatar` - Te muestra tu avatar.\n`/say` - Copia tu mensaje.\n`/server-icon` - Muestra el ícono del servidor.\n`/rol-info` - Muestra la info de un rol.")
        .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
		let embed2 = new EmbedBuilder()
		.setColor("White")
        .setTitle("Servidores de DisTutos")
        .setDescription("**Servidor del Bot:** [DisWorld](https://discord.gg/H9UBxzcQJx)\n\n**Servidor del Creador:** [DisServer/GameServer](https://discord.gg/uUUAfK5yf5)")
        .setFooter({ text: 'Informacion del Bot', iconURL: 'https://i.imgur.com/wO4wZR8.png' })
		interaction.reply({ embeds: [embed1, embed2] })
	}
}