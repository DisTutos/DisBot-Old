require("colors");
const Discord = require("discord.js")
const fs = require("fs")
const { Client, GatewayIntentBits, Partials, ActivityType, EmbedBuilder, Events } = require("discord.js");
const client = new Client ({ intents: 3276799 })
const config = require("./config.json")
client.on('shardError', error => {
    console.error('A websocket connection encountered an error:', error);
});



process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});
/////////////////estado
client.on("ready", async () => {

    const time = (200*5);

    let status = [
    [{
        name: "Actividad Jugando",
        type: ActivityType.Playing
    }],
    [{
        name: "Actividad Viendo",
        type: ActivityType.Watching
    }],
    [{
        name: "Actividad Compitiendo",
        type: ActivityType.Competing
    }]
    ];
    setInterval(() => {
        function randomStatus() {
            let astatus = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ activities: astatus, status: "online"});
    }
    randomStatus();
   }, time)
    console.log(`Conectado como ${client.user.username}`.green)
});



/////////////////MenssageCreate/PrefixCommands
let prefix = config.prefix;

client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

	////ConPrefix
	if(message.content.startsWith(prefix + "prueba")) {//nombre del comando
		message.channel.send(":)")//respuesta del comando
	}

    if(message.content.startsWith(prefix + "ping")) {//nombre del comando
    let ping = new EmbedBuilder()
    .setColor("White")
    .setTitle(`Pong!`)
    .setDescription(`Ping: ${client.ws.ping}ms`)
    message.channel.send({ embeds: [ping] })
    }

	if(message.content.startsWith(prefix + "help")) {//nombre del comando
		let help1 = new EmbedBuilder()
		.setColor("White")
        .setTitle(`Comandos`)
		.setDescription("`/help` - Te muestra los comandos del bot.\n`/ping` - Latencia del Bot.\n`/avatar` - Te muestra tu avatar.\n`/say` - Copia tu mensaje.\n`/server-icon` - Muestra el ícono del servidor.\n`/rol-info` - Muestra la info de un rol.")
        let help2 = new EmbedBuilder()
		.setColor("White")
        .setTitle(`Comandos de prefijo`)
		.setDescription("`:help` - Te muestra los comandos del bot.\n`:ping` - Latencia del Bot.")
		message.channel.send({ embeds: [help1, help2] })
	}

})

/////////////////SlashCommands
client.slashcommand = new Discord.Collection()

fs.readdirSync("./slashcommands").forEach(async(categorys) => {
	const commandFilesSlash = fs.readdirSync(`./slashcommands/${categorys}`).filter((archivo) => archivo.endsWith("js"))
	for(const archivo of commandFilesSlash) {
		const command = require(`./slashcommands/${categorys}/${archivo}`)
		client.slashcommand.set(command.data.name, command)
	}
})

require("./slashcommands")

client.on("interactionCreate", async(interaction) => {
	if(interaction.isCommand()) {
		const cmd = client.slashcommand.get(interaction.commandName)
		if(!cmd) return;
		await cmd.run(client, interaction)
	}
})



////////////////////////////////////////////////////Token
client.login(config.token);