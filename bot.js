const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = '!';
const token = 'NTE3NzU4NDU4MTA4NDQ0Njg5.DuG_4w.lUYcewcYMHGteCWXR7dpgKDjCio';
client.login(token)




client.on('ready', () => {
    console.log(`logged ass ${client.user.tag}, \' Guilds: ${client.guilds.size}...`);
    client.user.setActivity('Wine', {type: 'WATCHING'});
});






client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setAuthor(`محتوى الرساله ${args}`)
.setDescription(`هل أنت متأكد من أرسالك للبرودكاست؟`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('✏')
 .then(() => msg.react('✏'))
  
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
 NormalBc.on("collect", r => {
   message.channel.send(`:ballot_box_with_check: **تم أرسال البرودكاست بنجاح**`);
let i = "0";
 message.guild.members.forEach(m => {
 let NormalRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author}`)
 m.send(NormalRep).then(ms => {
       i = i + 1;
 }).catch(err => {
      i = i - 1;
 })
 })
 let nj7 = i;
 let fshl = msg.guild.members.size -  i;
      var results = `**Results | النتائج
  
  نجاح` + ' `' + `${nj7}` + '`' + `
  فشل` + ' `' + `${fshl}` + '`**';
  message.channel.send(results);
 })
 })
 }
 });



client.on('message', message => {

    const devs = ['476130473681092608'];

    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'st')) {
      if (!devs.includes(message.author.id)) return;
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/BetterStore');

    } else if(message.content.startsWith(prefix + 'wt')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'ls')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'pl')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'sn')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'sa')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'sst')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

  });
