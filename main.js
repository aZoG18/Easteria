const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Salut') {
    msg.reply('Salut');
  }
});

client.login('NzA5MDYyNzEzMzg0NjMyNDMw.XssSBQ.4ftSjK1z1sJ21atZdEXcFsaD1qE');
