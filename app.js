const Discord = require('discord.js');
const client = new Discord.Client();
const figlet = require('figlet');
const prefix = process.env.Prefix;
const logchannel = process.env.LOG;
const botlog = process.env.BOTLOG;
const error = process.env.ERROR;
const re = process.env.RE;
const Dav = process.env.Dav;
const Dm = process.env.DM;
const Status = `${prefix}help `;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.channels.get(logchannel).send(`**Bot Logged in as ${client.user.tag}\, ${client.guilds.size} Servers \, ${client.users.size} Users Dav-ID:${Dav} !** `);
    client.user.setPresence({ game: { name: `${Status}`, url: 'https://twitch.tv/....', type: 1 } });
});
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix)) {
     return undefined;
  }
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();

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
    console.log('Ping')
    client.channels.get(botlog).send(`Ping`)
  }
  if (command === 'hello') {
    if (message.author.id !== Dav) {
      message.reply('This Command Is Only For Bot Developer!');
      return;
    }
    message.channel.send(`Hello @${message.author.tag}`)
    client.channel.get(botlog).send(`hello`)
  }
  if (command === 'say') {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You Can\'t use say command');
    let say = args.join(' ');
    message.delete();
    message.channel.send(say);
    client.channels.get(botlog).send(`${message.author.tag} used say command **Server-Name**: ${message.guild.name}, **Server-ID**: ${message.guild.id}, **Channel**: ${message.channel}, **Message**: ${say}`)
  }
  if (command === 'delete' || command === 'clean' || command === 'clear') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(!args[0]) return message.channel.send(`Example:[${prefix}Delete/Clean/Clear 100]`);
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Deleted ${args[0]} messages.`).then(msg => msg.delete(5000));
    })
    console.log('Delete')
    client.channels.get(botlog).send(`Delete`)
  }
  if (command === 'setstatus' || command === 'ss' ) {
    if (message.author.id !== ('324432889561219072')) return message.channel.send("Huh.");
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
  console.log('Setstatus')
  client.channels.get(botlog).send(`Setstatus`)
  }
  if (command === 'invite') {
    let embed = new Discord.RichEmbed()
    .setAuthor('Hi' + message.author.username.toString(), message.author.displayAvatarURL)
    .setThumbnail('https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
    .setColor('RANDOM')
    .addField('Support Server', `[Link](https://discord.gg/7uU3MDD)`)
    .addField('Bot Invite Link', `[Invite](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setTimestamp();
    message.channel.send(embed)
    client.channels.get(botlog).send('Invite')
  }
  if (command === 'createinvite' || command === 'ci') {
    if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
    message.channel.createInvite({maxAge: 0}).then(invite => {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`**Permanent Invite Link**: ${invite}`);
      message.channel.send(embed);

      let comm = client.channels.get(re)
      let iembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`${message.author.tag} used Invite command`)
      .addField(`**Invite Link**:, ${invite}`)
      .addField('**Server-Name**', `${message.guild.name}`)
      .addField('**Server-ID**:', `${message.guild.id}`)
      .addField('**Server-Owner**:', `${message.guild.owner.user.tag}`)
      .setTimestamp()
      comm.send(comm, iembed);
      client.channels.get(botlog).send('CreateInvite')
    });
  }
  if (command === 'dmall') {
   /*if (message.guild.id = '472007724868304917') return (message.channel.send(`<@${message.author.id}> Command is disable on your server`));*/
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply({embed: {
          color: 0xC64540,
          description: "No permission."
        }});
    let DMALL = args.join(" ").slice(0);
  if (!DMALL) return message.channel.send({embed: {
    color: 0xC64540,
    description: `${message.member} Please enter a message to dm all the players in the discord server.`
  }});

  message.guild.members.forEach((player) => {
      message.guild.member(player).send({embed: {
        color: 0x00c1c1,
        title: `**Server-Name**: ${message.guild.name} `,
        description: `${DMALL}`
      }});
  });
  message.channel.send({embed: {
    color: 0xC64540,
    description: "All players in this discord server have got your message."
  }});
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
    if (message.author.id !== Dav) {
      message.reply('This Command Is Only For Bot Developer!');
      return;
  }
  let guilds = client.guilds.map((guild) => `**(${guild.name})**   (**Members:** ${guild.members.size})  (**Id:** ${guild.id})  (**Server Owner:** ${guild.owner.user.tag})`);
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
    client.channels.get(botlog).send('Avatar')
  }
  if (command === 'userinfo'|| command === 'ui') {
    let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor('RANDOM')
    .addField('Username', user.username, true)
    .addField('Discrim', user.discriminator, true)
    .addField('Status', user.presence.status, true)
    .addField('Bot?', user.bot, true)
    .setThumbnail(user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed)
    client.channels.get(botlog).send('Userinfo')
  }
  if (command === 'serverinfo' || command === 'si') {
    let online = message.guild.members.filter(m => m.user.presence.status !== "offline").size;
    let offline = message.guild.members.filter(m => m.user.presence.status === "offline").size;
    let servericon = message.guild.iconURL == null ? "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048" : message.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name + " info", servericon)
        .setColor('RANDOM')
        //.setDescription('Server Info')
        .addField('Server Owner:', message.guild.owner.user.tag)
        .addField('Owner id:', message.guild.owner.id)
        .addField("Total Members", message.guild.memberCount)
        .addField('Members:', `Online ${online}/Offline ${offline}`, inline = true)
        .addField('Totel Roles:', message.guild.roles.size)
        .addField('Text channel:', message.guild.channels.filter(e => e.type !== 'voice').size)
        .addField('Voice channels:', message.guild.channels.filter(e => e.type === 'voice').size)
        .addField('Server Region:', message.guild.region)
        .addField('Server Created At', message.guild.createdAt)
        .addField('You Joined', message.member.joinedAt)
        .setThumbnail(message.guild.iconURL)
        .setFooter('Developer Gur#9649 ', "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048")
        .setTimestamp();
    message.channel.send(embed);
    client.channels.get(botlog).send('ServerInfo')
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

  client.channels.get(botlog).send('Emoji')
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
  client.channels.get(botlog).send('Online')
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
    client.channels.get(botlog).send('Report')
  }
  if (command === 'restart') {
    if (message.author.id !== Dav) {
      message.reply('This Command Is Only For Bot Developer!');
      return;
  }
  client.channels.get(logchannel).send("bot restarting");
  process.exit()
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
    client.channels.get(botlog).send('Reverse')
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
  client.channels.get(botlog).send('Time')
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
    client.channels.get(botlog).send('Uptime')
  }
  if (command === 'role' || command === 'addrole') {
    if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply("***Sorry, you can't do that.***");
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
    client.channels.get(botlog).send('RemoveRole')
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
    client.channels.get(botlog).send('Ban')
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
    client.channels.get(botlog).send('kick')
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

    let comm = client.channels.get(botlog)
    let cembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.tag} used warn command`)
    .setThumbnail(`${message.author.displayAvatarURL}`)
    .addField('**Server-Name**:', `${message.guild.name}`)
    .addField('**Server-ID**:', `${message.guild.id}`)
    .addField('**Channel**:', `${message.channel}`)
    .addField('**Reason:**', `${reason}`)
    .setTimestamp();
    comm.send(comm, cembed)
  }
  if (command === 'help') {
    let embed = new Discord.RichEmbed()
    .setAuthor('Hi' + message.author.username.toString(), message.author.displayAvatarURL)
    .setDescription(`\nPrefix = ${prefix} \nMore Commands Coming Soon😉`)
    .setThumbnail('https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
    .setColor('RANDOM')
    .addField('Bot Commands',`Ping - (Bot's ping) \nUptime (Bot's UpTime) \nInvite - (Bot Invite Link) `)
    .addField('Commands', `\nAvatar - (User's Avatar) \nUserinfo - (User Info) \nAscii -(Special Command) \nServerinfo (Server's Info) \nEmoji (Server's Emoji) \nCreateInvite (Create server invite) \nReverse (Reverse text) \nTime (UTC time) `)
    .addField('Modration command', `Delete - (Delete Multiple Messages)   \nKick -(Kick a user) \nBan - (Ban a user) \nWarn (Warn a user) \nRole (Add Role to user) \nRemoverole (Remove a role) \ndmall (DM to server members) \nReport (Report a user) \ `)
    .addField('Support Server', `[Link](https://discord.gg/7uU3MDD)`)
    .addField('Bot Invite Link', `[Invite](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`, inline = true)
    .setTimestamp();
    message.author.send(embed)
    message.channel.send('Check your dm', {reply: message})
    message.react("👌");
    client.channels.get(botlog).send('Help')
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
  client.channels.get(botlog).send('Inviteleaderboard')
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
    const liveJoin = client.channels.get("475564252036464651"); 
    let liveJEmbed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('RANDOM')
    .setTitle(`Your Bot Has Started Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Gained**: ${guild.memberCount}`)
    liveJoin.send(liveJoin, liveJEmbed, {
        name: `Chronic`,
        icon: `https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048`
    })
  });
  client.on("guildDelete", guild => {
    const liveLeave = client.channels.get("475564393057353728"); 
    let liveLEmbed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor('RANDOM')
    .setTitle(`Your Bot Has Stopped Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Lost**: ${guild.memberCount}`)
    liveLeave.send(liveLeave, liveLEmbed, {
        name: `Chronic`,
        icon: `https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048`
    })
  });
  
client.login(process.env.hello2);
