const Discord = require('discord.js');
const client = new Discord.Client();
const figlet = require('figlet');
const YouTube = require("simple-youtube-api");
const ytdl = require('ytdl-core');
const ms = require("ms");
const prefix = process.env.Prefix;
const logchannel = process.env.LOG;
const botlog = process.env.BOTLOG;
const error = process.env.ERROR;
const re = process.env.RE;
const acmd = process.env.Acmd;
const Dav = process.env.Dav;
const Staff = process.env.Staff;
const Dm = process.env.DM;
const Status = `${prefix}help `;
const serverlink = `https://discord.gg/7uU3MDD`;
const server1 = process.env.server1;
const server2 = process.env.server2;
const server3 = process.env.server3;
const server4 = process.env.server4;
const server5 = process.env.server5;
const server6 = process.env.server6;
const youtube = new YouTube(process.env.YT);
let colors = [`#1d00ff`, `#8300ff`, `#ff00f6`, `#ff0000`, `#ff6600`, `#ffdd00`, `#35a008`, `#04c5cc`,`#000000`,`#ffffff`];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.channels.get(logchannel).send(`**Bot Logged in as ${client.user.tag}\, ${client.guilds.size} Servers \, ${client.users.size} Users Dav-ID:${Dav} !** `);
    client.user.setPresence({ game: { name: `${Status}`, url: 'https://twitch.tv/....', type: 1 } });
    /*setInterval(function() {
      let color = colors[Math.floor(Math.random()*colors.length)];
      client.guilds.get(server6).roles.find(`name`, "👑King-Of-Noobs👑").setColor(color)
    }, 1000)*/
});

client.on('message', async(message) => {
  if (!message.content.startsWith(prefix)) {
     return undefined;
  }
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();
 
try {
  if (command === "ping") {
    let start = Date.now(); message.channel.send('Pong! ').then(message => { 
        let diff = (Date.now() - start); 
        let API = (client.ping).toFixed(2)
            
            let embed = new Discord.RichEmbed()
            .setTitle(`🎉 Pong!`)
            .setColor('RANDOM')
            .addField("📶 Latency", `${diff}ms`, true)
            .addField("💻 API", `${API}ms`, true)
            .setTimestamp();
            message.edit(embed);
        });
  }
   if  (command === 'servercount'|| command === 'sc ') {
	     const guild = client.guilds.get('506005517425180672')
   guild.channels.get('529207972732207104').setName(`Total Members: ${guild.members.size}`)
   guild.channels.get('529208080571826188').setName(`Total Bots: ${guild.members.filter((members) => members.user.bot).size} `)
   guild.channels.get('535128220501278720').setName(`Humans: ${guild.members.filter(member => !member.user.bot).size}`)
	guild.channels.get('532425088897908746').send(`Total Members: ${guild.members.size} /nHumans: ${guild.members.filter(member => !member.user.bot).size} /nTotal Bots: ${guild.members.filter((members) => members.user.bot).size}`);
    const guild = client.guilds.get('441132393315827714')
   guild.channels.get('557926166082617345').setName(`Total Members: ${guild.members.size}`)
   guild.channels.get('557926250543579136').setName(`Bots: ${guild1.members.filter((members) => members.user.bot).size}`)
   guild.channels.get('557926364255354900').setName(`Humans: ${guild1.members.filter(member => !member.user.bot).size}`)
	   message.channel.send('Done')
	  /* const guild = client.guilds.get('506005517425180672');
   guild.channels.get('529207972732207104').setName(`Total Members: ${member.guild.members.size}`);
   guild.channels.get('529208080571826188').setName(`Total Bots: ${guild.members.filter((members) => members.user.bot).size} `);
   guild.channels.get('532425088897908746').send(`Total Members: ${member.guild.members.size}`);*/
   };
   if  (command === 'servercount1'|| command === 'sc1') {
    const guild = client.guilds.get('441132393315827714')
   guild.channels.get('557926166082617345').setName(`Total Members: ${guild.members.size}`)
   guild.channels.get('557926250543579136').setName(`Bots: ${guild.members.filter((members) => members.user.bot).size}`)
   guild.channels.get('557926364255354900').setName(`Humans: ${guild.members.filter(member => !member.user.bot).size}`)
	   message.channel.send('Done');
   };
   if (command === 'mplay') {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send('You must join a voice channel.');
    voiceChannel.join().then((connection) => {
      const steam = ytdl(args.join(' '), { filter: 'audioonly'});
      const dispatcher = connection.playStream(steam);
      dispatcher.on('end', () => voiceChannel.leave());
    });
  };
  if (command === 'hello') {
    if (message.author.id !== Dav && message.author.id !== Staff) {
      message.reply('This Command Is Only For Bot Developer or Staff!');
      return;
    }
    let embed = new Discord.RichEmbed()
    .setDescription(`Hello ${message.author.username} Have a great time 😉😎`)
    .setColor('RANDOM')
    .setFooter('Gur#9649', 'https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048' )
    .setTimestamp();
    message.channel.send(embed);
  };
  if (command === 'multicolor') {
          if (message.author.id !== Dav && message.author.id !== Staff) {
      message.reply('This Command Is Only For Bot Developer or Staff!');
      return;
    }
          setInterval(function() {
      let color = colors[Math.floor(Math.random()*colors.length)];
      client.guilds.get('506005517425180672').roles.find(`name`, "👑King-Of-Noobs👑").setColor(color)
    }, 1000)
  }
  if (command === 'meme') {
    const superagent = require('superagent');

    let {body} = await superagent
    .get(`https://api-to.get-a.life/meme`);
  
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('😄')
    .setImage(body.url);
    message.channel.send(embed);
  }
  if (command === 'rate') {
    const cooldown = new Set()
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 5 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 seconds..`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 5000);
 let m421 = args.join(" ");
  if (!m421) return message.channel.send('Please define a name.')
  if (m421.length > 30) return message.channel.send(`I can't rate your waifu! It's over 30 text!`)
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ❤`)
  .setColor(`GREEN`)
    
      const sadembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 😭`)
  .setColor(`GREEN`)
      
        const idkembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤔`)
  .setColor(`GREEN`)
        
      const shrugembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤷`)
  .setColor(`GREEN`)
                
          const okembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👌`)
  .setColor(`GREEN`)
                        
const thumbupembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👍`)
  .setColor(`GREEN`)

const eyesembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👀`)
  .setColor(`GREEN`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
  };
  if (command === 'say') {
    if(message.author.id !== Dav && !message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You Can\'t use say command');
    let say = args.join(' ');
    message.delete();
    message.channel.send(say);
    let sayembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} used say command`, message.author.avatarURL)
    .addField(`Server-Name`, `${message.guild.name}`, inline = true)
    .addField(`Server-ID`, `${message.guild.id}`, inline = true)
    .addField(`Channel`,`${message.channel}` )
    .addField(`Message`, `${say}`)
    .setColor('#ff8000')
    .setTimestamp();
    client.channels.get(botlog).send(sayembed)
  }
  if (command === 'delete' || command === 'clean' || command === 'clear') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(!args[0]) return message.channel.send(`Example:[${prefix}Delete/Clean/Clear 100]`);
     message.delete();
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Deleted ${args[0]} messages.`).then(msg => msg.delete(5000));
    })
  }
  if (command === 'setstatus' || command === 'ss' ) {
    if (message.author.id !== Dav ) return message.channel.send("Huh.");
    const status = args.join(' ');
    if (status.length === 0) {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription('❎ Name streaming status!');
      message.channel.send({ embed })
      message.react("❎");
    }
  
    else if (status.length !== 0) {
     client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/....', type: 1 } });
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('✅ You sucessfully changed streaming status');
    message.channel.send({ embed })
    message.react("✅");
    }
  }
  if (command === 'invite') {
    let embed = new Discord.RichEmbed()
    .setAuthor('Hi' + message.author.username.toString(), message.author.displayAvatarURL)
    .setThumbnail('https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
    .setColor('RANDOM')
    .addField('Support Server', `[Link](${serverlink})`)
    .addField('Bot Invite Link', `[Invite](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setTimestamp();
    message.channel.send(embed)
  }
  if (command === 'createinvite' || command === 'ci') {
    if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
    message.channel.createInvite({maxAge: 0}).then(invite => {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`**Permanent Invite Link**: ${invite}`);
      message.channel.send(embed);
    });
  }
  if (command === 'dmall') {
   /*if (message.guild.id = '472007724868304917') return (message.channel.send(`<@${message.author.id}> Command is disable on your server`));*/
  let DMALL = args.join(" ").slice(0);
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  let doneembed = new Discord.RichEmbed()
  .setColor('#04ff00')
  .setAuthor(`Hi ${message.author.username}`)
  .setDescription('All members in this discord server have got your message.')
  .setFooter(message.author.username, message.author.avatarURL)
  .setTimestamp();
  let nopermsembed = new Discord.RichEmbed()
  .setColor('#0400ff')
  .setAuthor(`Hi ${message.author.username}`)
  .setDescription('You are not have [ADMINISTRATOR] Permission')
  .setFooter(message.author.username, message.author.avatarURL)
  .setTimestamp();
  let addmessageembed = new Discord.RichEmbed()
  .setColor('#0400ff')
  .setDescription(`${message.member} Please enter a message`)
  .addField('usage', `${prefix}DMALL Message`)
  .setTimestamp();
  let messageembed = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setAuthor(`Message From [${message.guild.name}]`)
  .addField('Message', `${DMALL}`)
  .setFooter(`Message Sent by ${message.author.tag}`, message.author.avatarURL)
  .setTimestamp();

  if(!message.member.hasPermission("ADMINISTRATOR")) 
   return message.channel.send(nopermsembed)

  if (!DMALL) return message.channel.send(addmessageembed) 

  message.guild.members.forEach((player) => {
      message.guild.member(player).send(messageembed)
  });
  message.channel.send(doneembed)
  
  let comm = client.channels.get(botlog)
  let cembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`${message.author.tag} used Dmall command`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .addField('**Server-Name**:', `${message.guild.name}`)
  .addField('**Server-ID**:', `${message.guild.id}`)
  .addField('**Channel**:', `${message.channel}`)
  .addField('**Message**:', `${DMALL}`)
  .setTimestamp()
  comm.send(comm, cembed);
  }
  if (command === "servers") {
    if (message.author.id !== Dav && message.author.id !== Staff) {
      message.reply('This Command Is Only For Bot Developer!');
      return;
  }
  let guilds = client.guilds.map((guild) =>  `(**Server Name:**\`${guild.name}\`) (**Server ID:** \`${guild.id}\`)  (**Server Owner:** \`${guild.owner.user.tag}\`) (**Server Owner Id:** \`${guild.owner.user.id}\`) (**Members:** \`${guild.members.size}\`) (**Online Members** \`${guild.members.filter(o => o.presence.status === 'online').size}\`)`);
  message.channel.send(`I'm on **${client.guilds.size}** Servers, Total Users: **${client.users.size}** \n**Servers**:\n${guilds.join ('\n')}`, { split: "\n" })
  client.channels.get(botlog).send('Servers')
  }
  if (command === 'ascii') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You are not have permission.');
    if (!args.join(' ')) return message.channel.send('Please provide text');
    figlet(args.join(' '), (err, data) => {
        message.channel.send(data, {
          code: 'ascii'
        });
    });
  }
  if (command === 'avatar') {
    let user = message.mentions.users.first() || message.author;

    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp();
    message.channel.send(embed)
  }
  if (command === 'userinfo'|| command === 'ui') {
    let user = message.mentions.users.first();
    let member = message.guild.member(user);
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor('RANDOM')
    .addField('Username', user.tag, inline = true)
    .addField('Status', user.presence.status, inline = true)
    .addField('Bot?', user.bot,inline = true)
    .addField('Registered at', user.createdAt,inline = true)
    .addField('Joined at', member.joinedAt,inline = true)
    .addField(`Roles [${member.roles.size}]`, member.roles.map(e => e).join(' '))
    .setThumbnail(user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed)
    client.channels.get(botlog).send('Userinfo')
  }
  if (command === 'serverinfo' || command === 'si') {
    let servericon = message.guild.iconURL == null ? "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048" : message.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name + " info", servericon)
        .setColor('#0c00ff')
        //.setDescription('Server Info')
        .addField('Server Owner:', message.guild.owner.user.tag , inline = true)
        .addField('Owner id:', `${message.guild.owner.id}`, inline = true)
        .addField('Server Region:', message.guild.region, inline = true)
        .addField('Channels', `${message.guild.channels.filter(e => e.type !== 'voice').size} Text channel \n${message.guild.channels.filter(e => e.type === 'voice').size} Voice channels`, inline = true)
        .addField(`Members`, `Total Members ${message.guild.memberCount} \n${message.guild.members.filter(member => !member.user.bot).size} Humans \n${message.guild.members.filter(member => member.user.bot).size} Bots`, inline = true)
        .addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`, inline = true)
        .addField(`Roles`, `${message.guild.roles.size} Totel Roles`)
        .addField(`Role List`, `${message.guild.roles.map(e => e).join(' ')}`)
        .addField('Server Created At', message.guild.createdAt)
        .addField('You Joined', message.member.joinedAt)
        .setThumbnail(message.guild.iconURL)
        .setFooter('Developer Gur#9649 ', "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048")
        .setTimestamp();
    message.channel.send(embed);
  }
if (command === "info" || command === "botinfo") {
    let embed = new Discord.RichEmbed()
        .setTitle("Bot Info")
        .setColor("RANDOM")
        .setDescription(``)
        .addField("Help Commamd", `${prefix}help`)
        .addField("Total Servers", `${client.guilds.size}`, inline = true)
        .addField("Total Channels", `${client.channels.size}`, inline = true)
        .addField("Total Text Channels", `${client.channels.filter(e => e.type !== 'voice').size}`, inline = true)
        .addField("Total Voice Channels", `${client.channels.filter(e => e.type === 'voice').size}`, inline = true)
        .addField("Total Users", `${client.users.size}`, inline = true)
        .addField(`Online Users`, `${client.guilds.members.filter(o => o.presence.status === 'online').size}`, inline = true)
        .addField("Support Server", `[link](${serverlink})`, inline = true)
        .addField("Bot Invite Link", `[invite](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`, inline = true)
        .setThumbnail(`https://cdn.discordapp.com/avatars/476388312517574663/c110bf51cf9a6c34ad2720842d30e7eb.png?size=2048`)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
        .setTimestamp();
    message.channel.send(embed);
}
  if (command === 'emoji') {
    try {
      let emojis;
      if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
      else emojis = `**Emojis for ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
      message.channel.send(emojis);
    } catch (err) {

      message.channel.send(`**${err.name}: ${err.message}**`)
  }

  }
  if (command === 'leaveserver') {
       if (message.author.id !== Dav) {
        message.reply('This Command Is Only For Bot Developer!');
       return;
    }
    await message.channel.send('Goodbye.')
    message.channel.guild.leave()
    client.channels.get(botlog).send(`LeaveServer`)
  }
  if (command === 'online') {
    let embed = new Discord.RichEmbed()
		.setAuthor(message.guild.name, 'https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
		.setColor('#0099ff')
		.setThumbnail('https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
		.addField('Members', `**${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
		.setFooter(`Owner: ${message.guild.owner.user.tag}`)
  message.channel.send(embed);
  }
  if (command === 'report') {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("**Couldn't find user.**");
    let reason = args.join(' ').slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription('Reports')
    .setColor('RANDOM')
    .addField('Reported User', `${rUser} with ID: ${rUser.id}`)
    .addField('Reported By',`${message.author} with ID: ${message.author.id}`)
    .addField('Channel', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', reason);


    let reportschannel = message.guild.channels.find(`name`,'reports');
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.channel.send(`Done!`, {reply: message})

    return;
  }
  if (command === 'reverse') {
    if(!args[0]) return message.channel.send('Correct usage: **!reverse (text to reverse)**');

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
  
    let sreverse = reverseString(args.join(' '))
     
    if(args[0] === sreverse) {
    
    sreverse = `${args.join(' ')}..Wait... You broke it!`
    
    }
    const reverseEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('RANDOM')
    .addField('Input: ', '```' + `${args.join(' ')}` + '```')
    .addField('Output: ', '```' + `${sreverse}` + '```')
    message.channel.send({embed: reverseEmbed})
  }
  if (command === 'time') {
    var today = new Date()
    let Day = today.toString().split(" ")[0].concat("day");
    let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
  const embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField("Today is", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
    message.channel.send({ embed })
    message.react("🕰")
  }
  if (command === 'uptime' || command === 'botuptime') {
    
    var days = Math.floor(client.uptime / 86400000000000);
    var hours = Math.floor(client.uptime / 3600000);
    var minutes = Math.floor((client.uptime % 3600000) / 60000);
    var seconds = Math.floor(((client.uptime % 360000) % 60000) / 1000);
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Uptime', `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
        .setTimestamp();
    message.channel.send(embed);
  }
  if (command === 'role' || command === 'addrole') {
    if(message.author.id !== Dav && !message.member.hasPermission('MANAGE_MEMBERS')) return message.reply("***Sorry, you can't do that.***");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("***Couldn't find that user.***");
    let role = args.join (" ").slice(22);
    if(!role) return message.reply('***Specify a role!***');
    let gRole = message.guild.roles.find('name', role);
    if (!gRole) return message.reply("***Couldn't find that role. Please double check Role Name.***");

    if(rMember.roles.has(gRole.id)) return message.channel.send(`**They already have ${gRole.name} role. **`);
    await(rMember.addRole(gRole.id));

    try{
      await message.channel.send(`***Role Successfully added To ***<@${rMember.id}>`, {reply: message}) 
    }catch(e){
      client.channels.get(error).send(`${e}`)
    }
  }
  if (command ==='removerole' || command === 'rrole') {
    if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply("***Sorry, you can't do that.***");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("***Couldn't find that user.***");
    let role = args.join (" ").slice(22);
    if(!role) return message.reply('***Specify a role!***');
    let gRole = message.guild.roles.find('name', role);
    if (!gRole) return message.reply("***Couldn't find that role. Please double check role name.***");

    if(!rMember.roles.has(gRole.id)) return message.channel.send(`They don't have ${gRole.name}'s role.`);
    await (rMember.removeRole(gRole.id));

    try{
      await message.channel.send(`***Role has removed from ***<@${rMember.id}>`, {reply: message})  
    }catch(e){
      client.channels.get(error).send(`${e}`)
    }
  }
  if (command === 'ban') {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission to ban members');

    let member = message.mentions.members.first();
    if (!member) return message.channel.send('Please mention a member to ban!');
    if (!member.bannable) return message.channel.send('You cannot ban a member with role higher or equal than you');

    let reason = args.slice(1).join(' ');

    await member.ban(reason)
    .catch(erro => client.channels.get(error).send(`${erro}`));

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTitle('banned!')
    .setDescription(`${member.user.tag} has been banned!\nReason: ${reason}`)
    .setColor('RANDOM')
    .setTimestamp();
    message.channel.send(embed);
  }
  if (command === 'kick') {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!');
    let member = message.mentions.members.first() || message.guild.message.members.get(args[0]);
    if (!member) return message.channel.send('Please mention a member to kick');
    if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal then you!')

    let reason = args.slice(1).join(' ');

    await member.kick(reason)
    .catch(err => message.channel.send(`Sorry I couldn't kick, Error: ${err}`))
    .catch(er => client.channels.get(error).send(`${er}`));

    let kickEmbed = new Discord.RichEmbed()
    .setTitle('kicked😉!')
    .setDescription(`${member.user.tag} has been kicked for ${reason}`)
    .setColor('RANDOM')
    .setTimestamp();
    message.channel.send(kickEmbed);
  }
  if (command === 'warn') {
    const command = 'warn';
    const commands =('475564552159756308');
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("**You can't warn someone.**");
    let warnUser = message.mentions.members.first();
    if (!warnUser) return message.channel.send(`**Mention a user to warn**`);
    let args2 = message.content.substring(prefix.length + command.length).split(`<@${warnUser.user.id}>`);
    let reason = args2.join(" ").substring(3);
    if (!reason) return message.channel.send("**You did not give a reason to warn the user.**");
    if (!warnUser.id == message.author.id) return message.channel.send("**You cannot warn yourself/!**");
    message.delete().catch(err => client.channels.get(error).send(`${message.author.username} from ${message.guild.name} using warn command \n${err}`))
    warnUser.send(`***You have been warned from*** ${message.guild}. \n***Reason:*** ${reason}`).catch(err => {});
    message.channel.send(`*${warnUser.user.tag} has been warned*`)

  }
    if (command === 'mute') {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**You can't warn someone.**");
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if (!tomute) return message.reply("**Mention a user to mute**");
      if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("oof");
      let muterole = message.guild.roles.find(`name`, "muted");
  
      if (!muterole) {
          try {
              muterole = await message.guild.createRole({
                  name: "muted",
                  color: "#000000",
                  permissions: []
              })
              message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              });
          } catch (e) {
              console.log(e.stack);
          }
      }
  
      let mutetime = args[1];
      if (!mutetime) return message.reply("You didn't specify a time!");
  
      await (tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
  
      setTimeout(function() {
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> has been unmuted!`);
      }, ms(mutetime));
    }
  if(command === 'youtube' && command === 'yt') {
    youtube.searchVideos(args, 1)
    .then(results => {

      const ytEmbed = new Discord.RichEmbed()
        .setAuthor(`YouTube search result for ${args}`.split(',').join(' '))
        .setThumbnail(results[0].thumbnails.high.url)
        .setColor('#ff0000')
        .addField('Title', results[0].title, true)
        .addField('Channel', results[0].channel.title, true)
        .addField('Description', results[0].description)
        .addField('Link', `https://youtu.be/${results[0].id}`);
        message.channel.send(ytEmbed);
    })
  }
  if(command === 'admincmd' || command === 'admin') {
    if (message.author.id !== Dav && message.author.id !== Staff) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(`Hi ${message.author.username}`)
    .setDescription(`Admin Commands`)
    .setColor('#ff0000')
    .addField('Commands', `[1][ ${prefix}Send ServerId Message] => [send message to server] \n[2][ ${prefix}Sendtodm UserId Message] => [send message to user] \n[3][ ${prefix}Sendtochannel ChannelID] => [send message to channel] \n[4][ ${prefix}Ginvite ServerId]  => [Create Invite with ServerId] \n[5][ ${prefix}Server] => [Bots Server's] \n[6][ ${prefix}Idleave ServerID] => [Leave a server with ServerId(ADMIN_ONLY)] \n[7][ ${prefix}Setstatus/SS Status] => [Set Bots Streaming Status(ADMIN_ONLY)] \n[8][ ${prefix}Restart] => [Restart Bot(ADMIN_ONLY)]`)
    .setFooter(`Message Request By ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp();
    message.channel.send(embed)
  }
  if (command === 'restart') {
   if (message.author.id === Dav) {
   message.channel.send(":gear: Restarting...")
   client.destroy()
   client.login(process.env.hello2)
   message.channel.send(":gear: Restart has been done")
  } else {
  message.channel.send("This Command Is Only For Bot ADMIN!")
  }}
  if (command === 'send2dm') {
   if (message.author.id !== Dav && message.author.id !== Vip) return;
    let std = client.users.get(args[0])
    let sayto = args.join (" ").slice(18);
    std.send(sayto);
	  
    let cembed = new Discord.RichEmbed()
    .setColor('#0400ff')
    .setAuthor(`${message.author.tag}`)
    .setDescription(`${message.author.tag} Used send2dm Command`)
    .addField(`Trying to send dm message`,`${args[0]}`)
    .addField(`Message`, sayto)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp();
    client.channels.get(acmd).send(cembed);
  }
if (command === 'ginvite') {
    if (message.author.id !== Dav && message.author.id !== Vip) return;
    const invite = await client.guilds.get(args[0]).channels.find(c => c.type !== 'category' && c.position === 0).createInvite({maxAge: 0});
    if (!sv) return message.channel.send(`Enter a valid guild id`)

    let InviteEmbed = new Discord.RichEmbed()
    .setTitle("Get Invite Admin Command")
    .addField(`Server Invite:`, `${invite.url}`)
    .setColor("#0008ff")
    .setFooter(`${message.author.username}`, message.author.avatarURL)
    .setTimestamp();
    message.channel.send(InviteEmbed);

    let cembed = new Discord.RichEmbed()
    .setColor('#0400ff')
    .setAuthor(`${message.author.tag}`)
    .setDescription(`${message.author.tag} Used ginvite Command`)
    .addField(`Trying to create invite`,`${args[0]}`)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp();
    client.channels.get(acmd).send(cembed)
  }
  if(command === 'send') {
    if (message.author.id !== Dav && message.author.id !== Staff) return;
    let sv = client.guilds.get(args[0])
    let sayto = args.join (" ").slice(18);
    if(!sayto) return message.channel.send(`Message!`)
    if (!sv) return message.channel.send(`Enter a valid guild id`)
    let embed = new Discord.RichEmbed()
    .setColor("#0400ff")
    .setDescription(``)
    .addField(`Message`, `${sayto}`)
    .setFooter(`Message Sent By ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp();
    message.delete();
    sv.channels.random().send(embed)

    let cembed = new Discord.RichEmbed()
    .setColor('#0400ff')
    .setAuthor(`${message.author.tag}`)
    .setDescription(`${message.author.tag} Used Send Command`)
    .addField(`Trying to send message`,`${args[0]}`)
    .addField(`Message`, sayto)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp();
    client.channels.get(acmd).send(cembed)
  }
  if (command === 'idleave') {
  if (message.author.id !== Dav) return;
  let sv = client.guilds.get(args[0])
  if (!sv) return message.channel.send(`Enter a valid guild id`)
  sv.leave()

  let cembed = new Discord.RichEmbed()
  .setColor('#0400ff')
  .setAuthor(`${message.author.tag}`)
  .setDescription(`${message.author.tag} Used idleave Command`)
  .addField(`Trying to leave a server`,`${args[0]}`)
  .setThumbnail(message.author.avatarURL)
  .setTimestamp();
  client.channels.get(acmd).send(cembed)
  }
  if (command === 'sendtochannel') {
    if (message.author.id !== Dav && message.author.id !== Staff) return;
    if(!args[0]) return message.channel.send('Please provide Channel ID')
    let st = client.channels.get(args[0])
    let sendto = args.join (" ").slice(18);
    if(!sendto) return message.channel.send(`Message!`)
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    //.setTitle(`Message Sent By- ${message.author.username}`)
    .addField(`Message`, `${sendto}`)
    .setThumbnail(`${message.author.avatarURL}`)
    .setTimestamp();
    message.delete();
    st.send(embed);

    let cembed = new Discord.RichEmbed()
    .setColor('#0400ff')
    .setAuthor(`${message.author.tag}`)
    .setDescription(`${message.author.tag} Used sendtochannel Command`)
    .addField(`Trying to send message`,`${args[0]}`)
    .addField(`Message`, sendto)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp();
    client.channels.get(acmd).send(cembed)
  }
  if (command === 'sendtodm') {
    if (message.author.id !== Dav && message.author.id !== Staff) return;
    let std = client.users.get(args[0])
    let sayto = args.join (" ").slice(18);
    if(!args[0]) return message.channel.send('Please provide User ID')
    if(!sayto) return message.channel.send('Message!')
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Message`, `${sayto}`)
    .setTimestamp();
    message.delete();
    std.send(embed);

    let cembed = new Discord.RichEmbed()
    .setColor('#0400ff')
    .setAuthor(`${message.author.tag}`)
    .setDescription(`${message.author.tag} Used sendtodm Command`)
    .addField(`Trying to send dm message`,`${args[0]}`)
    .addField(`Message`, sayto)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp();
    client.channels.get(acmd).send(cembed)
  }
  if (command === 'help') {

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor('Hi' + message.author.username.toString(), message.author.displayAvatarURL)
    .setDescription(`Prefix = ${prefix} \nMore Commands Coming Soon😉`)
    .setThumbnail('https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
    .setColor('RANDOM')
    .addField('Bot Commands',`Ping - (Bot's ping) \nUptime (Bot's UpTime) \nInvite - (Bot Invite Link) `)
    .addField('Commands', `\nAvatar - (User's Avatar) \nUserinfo - (User Info) \nAscii -(Special Command) \nServerinfo (Server's Info) \nEmoji (Server's Emoji) \nCreateInvite (Create server invite) \nReverse (Reverse text) \nTime (UTC time) `)
    .addField('Modration command', `Delete - (Delete Multiple Messages)   \nKick -(Kick a user) \nBan - (Ban a user) \nUnban - (UnBan a user) \nWarn (Warn a user) \nRole (Add Role to user) \nRemoverole (Remove a role) \nReport (Report a user) \nDmall (DM to server members)`)
    .addField('Support Server', `[Link](${serverlink})`)
    .addField('Bot Invite Link', `[Invite](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`, inline = true)
    .setTimestamp();

    message.author.send(embed).catch(err => message.react('👎') + message.channel.send(embed) + client.channels.get(error).send(`**User: ${message.author.username}** **\nServer Name**: ${message.guild.name} **\nhelp command** \n${err}`))
    message.channel.send('Check your dm', {reply: message})
  }
  if (command === 'inviteleaderboard') {
    let invites = await message.guild.fetchInvites().catch(error => {
      return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
      possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
      .setTitle(`**INVITELEADERBOARD**`)
      .setColor('RANDOM')
      .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
      .setTimestamp();
    message.channel.send(embed);
  }
  if (command === 'rolldice') {
    let replies = ["One", "Two", "Three", "Four", "Five", "Six"];
    let result = Math.floor((Math.random() * replies.length));

    message.delete().catch(O_o => {});

    try {
        let newembed = new Discord.RichEmbed()
            .setAuthor("A dice has been rolled!")
            .setColor("RANDOM")
            .setDescription("Rolled By: " + message.author.username + "\nResult: " + replies[result]);

        message.channel.send({
            embed: newembed
        });
    } catch (e) {
        console.log(e.stack);
    };
  }
  if (command === 'flipcoin' || command === 'coin' ) {
    let replies = ["Heads", "Tails"];
    let result = Math.floor((Math.random() * replies.length));

    message.delete().catch(O_o => {});

    try {
        let newembed = new Discord.RichEmbed()
            .setAuthor("A coin has been flipped!")
            .setColor("RANDOM")
            .setDescription("Flipped By: " + message.author.username + "\nResult: " + replies[result]);

        message.channel.send({
            embed: newembed
        });
    } catch (e) {
        console.log(e.stack);
    };
  }
  } catch(e){
  console.log(e.stack)
    client.channels.get(error).send(`${e.stack}`);
  } finally {
  console.log(command)
    client.channels.get(botlog).send(`${command}`);
  }
});
client.on('message', async(message) => {
  if (message.author.bot) return undefined;
  if(message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("Direct Message To The Bot")
    .addField(`Sent By:`,`<@${message.author.id}>`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Message: `,message.content)
    .setFooter(`DM Bot Messages | DM Logs`,`${message.author.displayAvatarURL}`)
    client.channels.get(Dm).send(embed)
  };
});
client.on("guildCreate", guild => {

    let liveJEmbed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('RANDOM')
    .setTitle(`Your Bot Has Started Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Gained**: ${guild.memberCount}`)
    .addField('Total Members', client.users.size);
    client.channels.get("475564252036464651").send(liveJEmbed)
  });
  client.on("guildDelete", guild => {
    let LeaveEmbed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('RANDOM')
    .setTitle(`Your Bot Has Stopped Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Lost**: ${guild.memberCount}`)
    .addField('Total Members', client.users.size);
    client.channels.get("475564252036464651").send(LeaveEmbed)
  });
client.on('guildMemberAdd', member => {
  if (member.guild.id !== server1 && member.guild.id !== server2 && member.guild.id !== server3 && member.guild.id !== server4 && member.guild.id !== server5 && member.guild.id !== server6 && member.guild.id !== '441132393315827714') return; 
  const welcomeChannel = member.guild.channels.find('name', 'welcome');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} (${member.user.id})`, `${member.user.displayAvatarURL}`)
    .setDescription(`Hey ${member.user} , welcome to ${member.guild.name} 🎉🤗! `)
    .setColor("#00bfff")
    .setFooter(`(${member.guild.memberCount}) Members!`)
    .setTimestamp();
    welcomeChannel.send(WelcomeEmbed)
  }
});
client.on('guildMemberRemove', member => {
  if (member.guild.id !== server1 && member.guild.id !== server2 && member.guild.id !== server3 && member.guild.id !== server4 && member.guild.id !== server5 && member.guild.id !== server6 && member.guild.id !== '441132393315827714') return; 
  const byeChannel = member.guild.channels.find('name', 'welcome');
  if (byeChannel) {
    let byeEmbed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} (${member.user.id})`, `${member.user.displayAvatarURL}`)
    .setDescription(`${member.user} just left the server 🙁!`)
    .setColor("#ff0000")
    .setFooter(`(${member.guild.memberCount}) Members!`)
    .setTimestamp();
    byeChannel.send(byeEmbed)
  }
});
  client.on('guildMemberAdd', member => {
   const guild = client.guilds.get('506005517425180672');
   guild.channels.get('529207972732207104').setName(`Total Members: ${guild.members.size}`);
   guild.channels.get('529208080571826188').setName(`Total Bots: ${guild.members.filter((members) => members.user.bot).size} `)
   guild.channels.get('535128220501278720').setName(`Humans: ${guild.members.filter(member => !member.user.bot).size}`);
	guild.channels.get('532425088897908746').send(`Total Members: ${guild.members.size} /nHumans: ${guild.members.filter(member => !member.user.bot).size} /nTotal Bots: ${guild.members.filter((members) => members.user.bot).size}`);
    const guild1 = client.guilds.get('441132393315827714')
   guild.channels.get('557926166082617345').setName(`Total Members: ${guild1.members.size}`)
   guild.channels.get('557926250543579136').setName(`Bots: ${guild1.members.filter((members) => members.user.bot).size}`)
   guild.channels.get('557926364255354900').setName(`Humans: ${guild1.members.filter(member => !member.user.bot).size}`);
	  });
  client.on('guildMemberRemove', member => {
	     const guild = client.guilds.get('506005517425180672')
   guild.channels.get('529207972732207104').setName(`Total Members: ${guild.members.size}`)
   guild.channels.get('529208080571826188').setName(`Total Bots: ${guild.members.filter((members) => members.user.bot).size} `)
   guild.channels.get('535128220501278720').setName(`Humans: ${guild.members.filter(member => !member.user.bot).size}`)
	guild.channels.get('532425088897908746').send(`Total Members: ${guild.members.size} /nHumans: ${guild.members.filter(member => !member.user.bot).size} /nTotal Bots: ${guild.members.filter((members) => members.user.bot).size}`);
    const guild1 = client.guilds.get('441132393315827714')
   guild.channels.get('557926166082617345').setName(`Total Members: ${guild1.members.size}`)
   guild.channels.get('557926250543579136').setName(`Bots: ${guild1.members.filter((members) => members.user.bot).size}`)
   guild.channels.get('557926364255354900').setName(`Humans: ${guild1.members.filter(member => !member.user.bot).size}`);
	  /*const guild = client.guilds.get('506005517425180672');
   guild.channels.get('529207972732207104').setName(`Total Members: ${guild.members.size}`);
   guild.channels.get('529208080571826188').setName(`Total Bots: ${guild.members.filter((members) => members.user.bot).size} `);
	  guild.channels.get('532425088897908746').send(`Total Members: ${member.guild.members.size}`);*/
   });
client.login(process.env.hello2);
