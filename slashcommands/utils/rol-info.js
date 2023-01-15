const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("rol-info")
    .setDescription("Muestra la info de un rol.")
    .setDMPermission(true)
    .addRoleOption(a => a.setName("rol").setDescription("Escoje el rol.").setRequired(true)),

    async run(client, interaction) {
        const rol = interaction.options.getRole("rol")

        if(!rol){
            rol = interaction.rol
            }
        
        const embed = new EmbedBuilder()
        .setDescription(`**Informacion del rol** <@&${rol.id}>`)
        .addFields({ name: "Nombre:", value: `${rol.name}`})
        .addFields({name: "ID:", value: `${rol.id}`})
        .addFields({name: "Creado:", value: `<t:${parseInt(rol.createdTimestamp / 1000)}:f> (<t:${parseInt(rol.createdTimestamp / 1000)}:R>)`})
        .addFields({name: "Color (HEX):", value: `${rol.hexColor}`})
        .addFields({name: "Usuarios con el Rol:", value: `${rol.members.size} Usuario(s)`})
        .addFields({name: "Mencionable:", value: `${rol.mencionable ? "Si" : "No"}`})
        .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setColor("White")
        
        interaction.reply({ embeds: [embed], allowedMentions: { repliedUser: false }})
        }
    }