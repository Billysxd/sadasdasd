const { MessageActionRow, MessageButton, MessageEmbed, Message, Collector } = require("discord.js");
const conf = require('../register.json')
module.exports = {
	name: 'kayıt',
	description: 'Kayıt et',
	execute(message, args, client) {
		const erkekemoji = message.guild.emojis.cache.find(emoji => emoji.name === 'billysman');
		const das = erkekemoji.id
		const kızemoji = message.guild.emojis.cache.find(emoji => emoji.name === 'billyswomen');
		
		const iptalemoji = message.guild.emojis.cache.find(emoji => emoji.name === 'billyscarpi');
		const selamemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysselam');
		const emd = new MessageEmbed()
        if (!message.member.roles.cache.has(conf.kayıtyt) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.kayıtyt}> rolüne ihtiyacın var!**`)]})
		if(message.channel.id !== conf.kayıtkanal) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **Bu komutu yanlızca <#${conf.kayıtkanal}> kanalında kullanılabilir**`)]})
   const kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	if(!kullanıcı) return message.reply({embeds: [emd.setDescription(`**${iptalemoji} Bir kullanıcıyı etiketlemen gerekiyor!**`).setColor('RED')]})
	let isim = args[1]
	if(!isim) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **Bir isim belirtmeniz gerekiyor**`).setColor('RED')]})
	let yas = args[2]
	if(!yas) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **Bir yaş belirtmeniz gerekiyor**`).setColor('RED')]})
	if(isNaN(yas)) return message.reply({embeds: [emd.setDescription( `${iptalemoji} **Geçerli bir yaş belirtmeniz gerekiyor**`).setColor('RED')]})
const row = new MessageActionRow()
.addComponents(
	new MessageButton()
	.setCustomId('erkekk')
	.setEmoji(`${erkekemoji.id}`)
	.setLabel(`Erkek`)
	.setStyle('PRIMARY'),
	new MessageButton()
	.setCustomId('kızk')
	.setEmoji(`${kızemoji.id}`)
	.setLabel('Kız')
	.setStyle('SECONDARY'),
	new MessageButton()
	.setCustomId('iptalk')
	.setEmoji(`${iptalemoji.id}`)
	.setLabel('İptal et')
	.setStyle('DANGER')
)

message.channel.send({embeds: [emd.setDescription(`**${kullanıcı} adlı kullanıcıyı kayıt etmek istiyorsanız aşşağıdaki butonlarla kayıt edebilirsiniz <:billysselam:${selamemo.id}>**`).setColor("AQUA")], components: [row]})
const filter = i => i.user.id === message.member.id;
const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async b => {
	if (b.isButton()) {
   if(b.customId == 'erkekk') {
	if (!message.member.roles.cache.has(conf.kayıtyt) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.kayıtyt}> rolüne ihtiyacın var!**`)]})

	await message.guild.members.cache.get(kullanıcı.id).setNickname(`${conf.tag} ${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()} | ${yas}`)
	await kullanıcı.roles.set([conf.erkekrol])
	message.reply({embeds: [emd.setDescription(`**${kullanıcı} adlı kullanıcı \`Erkek\` olarak kayıt edildi**`)], components: []})
   }
   if(b.customId == 'kızk') {
	if (!message.member.roles.cache.has(conf.kayıtyt) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.kayıtyt}> rolüne ihtiyacın var!**`)]})

	await message.guild.members.cache.get(kullanıcı.id).setNickname(`${conf.tag} ${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()} | ${yas}`)
	await kullanıcı.roles.set([conf.kızrol])
	message.update({embeds: [emd.setDescription(`**${kullanıcı} adlı kullanıcı \`Kız\` olarak kayıt edildi**`)], components: []})
	message.guild.channels.cache.get(conf.genelchat).send(`${kullanıcı} aramıza katıldı hoşgeldin! ${selamemo}`)

   }
   if(b.customId == 'iptalk') {
	if (!message.member.roles.cache.has(conf.kayıtyt) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.kayıtyt}> rolüne ihtiyacın var!**`)]})

	message.update({embeds: [emd.setDescription(`${iptalemoji} **İşlem başarıyla iptal edildi!`)], components: []})
   }
	}

})

    }}