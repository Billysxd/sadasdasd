const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const conf = require('../moderasyon.json')
const conf2 = require('../register.json')
const fetch = require('node-fetch');
const ms = require('ms');
module.exports = {
	name: 'af',
	description: 'Cezalandırma sistemi',
	execute(message, args, client) {
        const emd = new MessageEmbed()
        if(!message.member.roles.cache.has(conf.modkomutyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.komutyt}> rolüne ihtiyacın var!**`)], ephemeral: true})

        const iptalemoji = message.guild.emojis.cache.find(emoji => emoji.name === 'billyscarpi');
        const jailemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysjail');
        const muteemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysmute');
        const banemo = message.guild.emojis.cache.find(emoji => emoji.name === 'billysban');
        const kullanıcı = message.mentions.users.first() || client.users.cache.get(args[0]);
               
        if(!kullanıcı) return message.reply({embeds: [emd.setDescription(`**${iptalemoji} Bir kullanıcı ID'si girmen gerekiyor!**`).setColor('RED')]})
  
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('jailk')
            .setEmoji(`${jailemo.id}`)
            .setLabel('Jail Kaldır')
            .setStyle('SECONDARY'),
            new MessageButton()
            .setCustomId('mutek')
            .setEmoji(`${muteemo.id}`)
            .setLabel('Mute kaldır')
            .setStyle('SECONDARY'),
            new MessageButton()
            .setCustomId('bank')
            .setEmoji(`${banemo.id}`)
            .setLabel('Ban Kaldır')
            .setStyle('SECONDARY')
        )
        const embed = new MessageEmbed()
.setDescription(`<@${kullanıcı.id}> kullanıcısına ceza veriyorsunuz!`)
.addField(`${jailemo} Jail`, "```" + "Kullanıcıya bir rol vererek konuşma etkileşimde bulunmasına izin verir" + "```")
.addField(`${muteemo} Mute`, "```" + "Yazı yazma ve sese girmesine izin verir" + "```")
.addField(`${banemo} Ban`, "```" + "Kullanıcının sunucudaki yasağını kaldırır!" + "```")
message.reply({embeds: [embed], components: [row]})
const filter = i => i.user.id === message.member.id;
const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async b => {
    if (b.isButton()) {
    if(b.customId == 'jailk') {
        if(!message.member.roles.cache.has(conf.modkomutyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.jailyt}> rolüne ihtiyacın var!**`)], ephemeral: true})
let rol = conf2.kayıtsızrol
message.guild.members.cache.get(kullanıcı.id).roles.set([`${rol}`])
        b.reply({embeds: [emd.setDescription(`${jailemo} **<@${kullanıcı.id}> kullanıcısının jail cezası kaldırıldı ve kayıtsıza atıldı!**`)]})
    }
    if(b.customId == 'mutek') {
        if(!message.member.roles.cache.has(conf.modkomutyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.muteyt}> rolüne ihtiyacın var!**`)], ephemeral: true})
        message.guild.members.cache.get(kullanıcı.id).timeout(0500)
        b.reply({embeds: [emd.setDescription(`${muteemo} **<@${kullanıcı.id}> kullanıcısının mute cezası kaldırıldı!**`)]})
    }
    if(b.customId == 'bank') {
        if(!message.member.roles.cache.has(conf.modkomutyt) && !message.member.permissions.has("ADMINISTRATOR")) return b.reply({embeds: [emd.setDescription(`${iptalemoji} **<@&${conf.banyt}> rolüne ihtiyacın var!**`)], ephemeral: true})
        message.guild.members.unban(kullanıcı, {reason: "Ceza kaldırma!" })
        b.reply({embeds: [emd.setDescription(`${banemo} **<@${kullanıcı.id}> kullanıcısının yasaklanma cezası kaldırıldı!**`)]})
    }   
    }


})
    }}