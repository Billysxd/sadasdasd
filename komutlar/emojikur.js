const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const conf = require('../ayarlar.json')
module.exports = {
	name: 'emojikur',
	description: 'Emoji kur',
	execute(message, args, client) {
        if(message.author.id !== conf.sahipid) return;
const row = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('onays')
    .setEmoji(`✅`)
    .setLabel('Kur')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('iptals')
    .setEmoji(`❎`)
    .setLabel(`İptal Et`)
    .setStyle('DANGER'))
    const emd = new MessageEmbed()
    .setDescription(`Emojileri kurmak isterseniz **Kur** butonuna basınız. Eğer işlemi iptal etmek istiyorsanız`)
    message.reply({embeds: [emd], components: [row]})

    }}