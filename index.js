const { Client, Intents,Collection, MessageEmbed, Message } = require('discord.js');
const fs = require('fs')
const ayarlar = require("./ayarlar.json")
const conf = require('./register.json')
const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_WEBHOOKS","GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES","GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "MESSAGE_CONTENT", "GUILD_SCHEDULED_EVENTS", "AUTO_MODERATION_CONFIGURATION", "AUTO_MODERATION_EXECUTION"],  }); 
client.commands = new Collection();
const moment = require('moment')
const commandFiles = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
moment.locale('tr')
for (const file of commandFiles) {
	const command = require(`./komutlar/${file}`);
	client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(ayarlar.token)
client.on('guildMemberAdd', async member => {
	await member.roles.set([conf.kayıtsızrol], `Test`)
	const selamemo = member.guild.emojis.cache.find(emoji => emoji.name === 'billysselam');
	const saatemo = member.guild.emojis.cache.find(emoji => emoji.name === 'billyssaat');
	const hgemd = new MessageEmbed()
	client.channels.cache.get("1095749445318082651").send({content: `${selamemo} ${member} <@&${conf.kayıtyt}>`})
})

client.on("interactionCreate", async interaction => {
	if(interaction.guild.id !== '1095737757030154311') return;
    if (!interaction.isButton()) return;
if(interaction.customId == 'onays') {
	interaction.update({embeds: [new MessageEmbed().setDescription(`Emojiler kuruluyor...`)]})
	const emoji1 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1087032645520720036/1091395807456002148/discotools-xyz-icon.png', 'billystik');
    const emoji2 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1087032645520720036/1091397160295215105/discotools-xyz-icon_1.png', 'billyscarpi');
    const emoji3 = await interaction.guild.emojis.create('https://cdn.discordapp.com/emojis/1091406425793773639.webp?size=96&quality=high', 'billysselam');
	const emoji4 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1091413979169042586/1091415700570112090/discotools-xyz-icon_2.png', 'billyswomen');
    const emoji5 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1091413979169042586/1091415847035207880/discotools-xyz-icon_3.png', 'billysman');
	const emoji6 = await interaction.guild.emojis.create('https://cdn.discordapp.com/emojis/814786948476043282.webp?size=44&quality=high', 'billysjail');
	const emoji7 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1091413979169042586/1091744241035784303/discotools-xyz-icon_4.png', 'billysmute');
	const emoji8 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1091413979169042586/1092763882621243392/discotools-xyz-icon_28.png', 'billysban');
	const emoji9 = await interaction.guild.emojis.create('https://cdn.discordapp.com/emojis/1095708290744340560.webp?size=96&quality=high', 'billyscop');
	const emoji10 = await interaction.guild.emojis.create('https://cdn.discordapp.com/attachments/1091413979169042586/1096053815213559828/discotools-xyz-icon_69.png', 'billyssaat');

	interaction.channel.send(`"${emoji1.name}" (${emoji1}) **oluşturuldu**`),
	interaction.channel.send(`"${emoji2.name}" (${emoji2}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji3.name}" (${emoji3}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji4.name}" (${emoji4}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji5.name}" (${emoji5}) **oluşturuldu**`)
    interaction.channel.send(`"${emoji6.name}" (${emoji6}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji7.name}" (${emoji7}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji8.name}" (${emoji8}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji9.name}" (${emoji9}) **oluşturuldu**`)
	interaction.channel.send(`"${emoji10.name}" (${emoji10}) **oluşturuldu**`)

}

})
const invite = require('invite-module');
invite.inviteCounter(client); 
client.on("memberJoin", async(member, invite, inviter, guild) => {
let kanal = client.channels.cache.get(conf.invitec)
let mesaj = `<:yildiz:1096118316977885205> ${member} sunucumuza giriş yaptı. Davet eden: ${inviter.username}`
kanal.send(mesaj)
})

client.on("memberLeave", async(member, invite, inviter, guild) => {
let kanal = client.channels.cache.get(conf.invitec)
let mesaj = `<:ayrildi:1096124139951095889> ${member} sunucumuzdan ayrıldı. Davet eden: ${inviter.username}`
kanal.send(mesaj)
	})