const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526927407215542292")
setInterval(function() {
channel.send(` BANG NANNAG LANG LELEK LL  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);