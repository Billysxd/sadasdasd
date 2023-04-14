const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const conf = require('../moderasyon.json')
module.exports = {
	name: 'sil',
	description: 'Sil',
	async execute(message, args, client) {
        const iptalemoji = message.guild.emojis.cache.find(emoji => emoji.name === 'billyscarpi');
		const selamemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysselam');
        const copemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billyscop');

const emd = new MessageEmbed()
        if(!message.member.roles.cache.has(conf.komutyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.modkomutyt}> rolüne ihtiyacın var!**`)], ephemeral: true})
        var sayı = args[0] 
        if(!sayı){
            return message.reply({ content: "Silinecek sayı miktarını belirtmelisin."})
        } else {
            const purgeEmbed = new MessageEmbed() 
                .setColor("Blue")
                .setDescription(`${sayı} mesaj silindi`)
                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('mesajsil')
                    .setEmoji(`${copemo.id}`)
                    .setStyle('DANGER')
                    .setLabel('Mesajı Sil')
                )
            await message.channel.bulkDelete(sayı)
           let mesaj = await message.channel.send({ embeds: [purgeEmbed], components: [row] })
           
           const filter = i => i.user.id === message.member.id;
const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async b => {
    if (b.isButton()) {
        if(b.customId == 'mesajsil') {
            mesaj.delete()
        }}})
        }
    }}