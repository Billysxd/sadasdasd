const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const conf = require('../ayarlar.json')
module.exports = {
	name: 'ping',
	description: 'Gecikme',
	execute(message, args, client) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setCustomId('dsadas')
			.setDisabled(true)
			.setEmoji(`🚀`)
			.setLabel(`Billys was here!`)
			.setStyle('DANGER')
		)
		let msj = new Date().getTime() - message.createdTimestamp
		const emd = new MessageEmbed()
		.addField(`🤖 **Bot Gecikmesi:**`, `\`${client.ws.ping}\``)
		.addField(`💬 **Mesaj Gecikmesi:**`, `\`${msj.toFixed(0)}\``)

      message.reply({ embeds: [emd], components: [row]});
	},
};