const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const conf = require('../moderasyon.json')
const fetch = require('node-fetch');
const ms = require('ms');
module.exports = {
	name: 'cezalandır',
	description: 'Cezalandırma sistemi',
	execute(message, args, client) {
        const emd = new MessageEmbed()

        if(!message.member.roles.cache.has(conf.komutyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.komutyt}> rolüne ihtiyacın var!**`)], ephemeral: true})

        const iptalemoji = message.guild.emojis.cache.find(emoji => emoji.name === 'billyscarpi');
        // if (!message.member.roles.cache.has(conf.modkomutyt) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.modkomutyt}> rolüne ihtiyacın var!**`)]})
        const kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!kullanıcı) return message.reply({embeds: [emd.setDescription(`**${iptalemoji} Bir kullanıcıyı etiketlemen gerekiyor!**`).setColor('RED')]})
        const jailemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysjail');
const muteemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysmute');
const banemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysban');

const row = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('jail')
    .setEmoji(`${jailemo.id}`)
    .setLabel('Jail')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('mute')
    .setEmoji(`${muteemo.id}`)
    .setLabel('Mute')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('ban')
    .setEmoji(`${banemo.id}`)
    .setLabel('Ban')
    .setStyle('PRIMARY'),
    new MessageButton()
	.setCustomId('iptalk')
	.setEmoji(`${iptalemoji.id}`)
	.setLabel('İptal et')
	.setStyle('DANGER'),
)
const embed = new MessageEmbed()
.setDescription(`<@${kullanıcı.id}> kullanıcısına ceza veriyorsunuz!`)
.addField(`${jailemo} Jail`, "```" + "Kullanıcıya bir rol vererek konuşma etkileşimde bulunmasını engeller chat kanalında görünmesini engeller" + "```")
.addField(`${muteemo} Mute`, "```" + "Kullanıcının sohbet kanallarını görmesine izin verir ama yazı yazma ve sese girmesini engeller" + "```")
.addField(`${banemo} Ban`, "```" + "Kullanıcıyı sunucudan yasaklar ve girişini engeller" + "```")

message.reply({embeds: [embed], components: [row]})
const filter = i => i.user.id === message.member.id;
const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async b => {
    if (b.isButton()) {
        if(b.customId == 'jail') {
            if(!message.member.roles.cache.has(conf.jailyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.jailyt}> rolüne ihtiyacın var!**`)], ephemeral: true})
message.reply({embeds: [emd.setDescription(`${jailemo} <@${kullanıcı.id}> başarıyla cezalandırıldı!`).setColor('RED')]})
await kullanıcı.roles.set([conf.jailrol], `Cezalı, Yetkili: ${message.author.tag}`)
}
    if(b.customId == 'mute') {
        if(!message.member.roles.cache.has(conf.muteyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.muteyt}> rolüne ihtiyacın var!**`)],  ephemeral: true})
        kullanıcı.timeout(300000)
    message.reply({embeds: [emd.setDescription(`${muteemo} <@${kullanıcı.id}> (*5 Dakika*) başarıyla susturuldu!`).setColor('RED')]})

    }
    if(b.customId == 'ban') {
        if(!message.member.roles.cache.has(conf.banyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.banyt}> rolüne ihtiyacın var!**`)],  ephemeral: true})
        message.guild.members.cache.get(kullanıcı.id).ban({reason: "Banlayan:"+ message.author.id})
        message.reply({embeds: [emd.setDescription(`${banemo} <@${kullanıcı.id}> **başarıyla yasaklandı!**`).setColor('RED')]})

    }

}

})
    }}