const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const milkfix = `moo!`;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.n, command);
}

client.once('ready', () => {
	console.log(`hi! ${client.user.username} ready~!`);
  client.user.setActivity(`moo!help`);
});

var helloResponse = [`Hello!!`, `Hi!`, `:O Hello!`, `HI!!!!`, `Hihi!`, `Hey, how are you?? :O`];
var byeResponse = [`Goodbye!!`, `Have a fun time!`, `See you later!!!`];
var wakeResponse = [`Good morning!! <3`, `Morning! Hope you slept well!`, `Wakey wakey!!`, `Rise and shine!! :D`];
var sleepResponse = [`Goodnight!`, `Go sleep!!! Sleepy time`, `Sweet dreams!! <3`, `snzzzzzzzzz`];
var tiredResponse = [`Go bed!!!`, `Sleep!`, `Go rest! It's okay!`];
var sorryResponse = [`Don't be!!`, `It's quite alright!!!`, `It's okay!`, `You did nothing wrong!`];
var awaResponse = [`AWA`, `AWA!!!`, `awa!!!`, `!!!!!!!!!!!!!!!! awa :3`, `Awa!!`, `awa? :O`, `awa!!!!!!!!!!!!!!!!!`,];
var gwaResponse = [`GWA GWA`, `GWA GWA!!!`, `gwa gwa!!!`, `!!!!!!!!!!!!!!!! gwa gwa :3`, `Gwa Gwa!!`, `gwa gwa? :O`, `gwa gwa!!!!!!!!!!!!!!!!!`,];
var thankResponse = [`You're welcome!`, `Always happy to help!!!`, `No problem!! <3`, `No need to thank me!!!`, `No, thank YOU!!! :D`];
var questionResponse = [`YEAH!!!!!!!!!!!`, `Nope!`, `Maybe?`, `Not really...`, `Probably!!`, `Maybe in the future!!`, `Yes!`, `No!!!!!!!!!!!!!!!!`, `I'm not sure...`];

client.on('message', message => {
  if (message.content.startsWith(`%say`) || message.author === client.user || message.author.bot) return;

  if (message.content.toLowerCase().includes(`hi milk`) || message.content.toLowerCase().includes(`hello milk`) || message.content.toLowerCase().includes(`milk hi`) || message.content.toLowerCase().includes(`milk hello`)) {
    return message.channel.send(`${helloResponse[Math.floor(Math.random() * helloResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`bye milk`) || message.content.toLowerCase().includes(`goodbye milk`) || message.content.toLowerCase().includes(`milk bye`) || message.content.toLowerCase().includes(`milk goodbye`) || message.content.toLowerCase().includes(`milk see you`) || message.content.toLowerCase().includes(`see you later milk`) || message.content.toLowerCase().includes(`see you milk`)) {
    return message.channel.send(`${byeResponse[Math.floor(Math.random() * byeResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`goodsmorning`) || message.content.toLowerCase().includes(`good morning`) || message.content.toLowerCase().includes(`goodmorning`) || message.content.toLowerCase().includes(`gm`) || message.content.toLowerCase().includes(`mornin`)) {
    return message.channel.send(`${wakeResponse[Math.floor(Math.random() * wakeResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`goodsnight`) || message.content.toLowerCase().includes(`good night`) || message.content.toLowerCase().includes(`goodnight`)) {
    return message.channel.send(`${sleepResponse[Math.floor(Math.random() * sleepResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`sleepy`) && message.content.toLowerCase().includes(`moo!sleepy`)) {
    return message.channel.send(`${tiredResponse[Math.floor(Math.random() * tiredResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`awa`)) {
    if (!message.content.toLowerCase().includes(`awake`) && !message.content.toLowerCase().includes(`away`) && !message.content.toLowerCase().includes(`aware`) && !message.content.toLowerCase().includes(`award`) && !message.content.toLowerCase().includes(`drawable`) && !message.content.toLowerCase().includes(`withdraw`) && !message.content.toLowerCase().includes(`awatt`)) {
      return message.channel.send(`${awaResponse[Math.floor(Math.random() * awaResponse.length)]}`);
    }
  }

  if (message.content.toLowerCase().includes(`gwa gwa`)) {
    return message.channel.send(`${gwaResponse[Math.floor(Math.random() * gwaResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`milk im sorry`) || message.content.toLowerCase().includes(`milk im so sorry`) || message.content.toLowerCase().includes(`im sorry milk`) || message.content.toLowerCase().includes(`im so sorry milk`) || message.content.toLowerCase().includes(`milk i'm sorry`) || message.content.toLowerCase().includes(`milk i'm so sorry`) || message.content.toLowerCase().includes(`i'm sorry milk`) || message.content.toLowerCase().includes(`i'm so sorry milk`)) {
    return message.channel.send(`${sorryResponse[Math.floor(Math.random() * sorryResponse.length)]}`);
  }
  var msgAuthor = message.author.username;
  var firstLetter = msgAuthor.toLowerCase().charAt(0);
  var milkResponse = [`Yes?`, `So true, oomf!`, `So true, ${firstLetter}oomf!`, `Excellent post!`, `Banger!!`, `That's my name! :D`, `You called??`];
  var loveResponse = [`Waaaaaaa!!!`, `I love you too!!`, `I love you too, ${firstLetter}oomf!`, `${msgAuthor}, ilu!!`];

  if (message.content.toLowerCase().includes(`ilu milk`) || message.content.toLowerCase().includes(`milk ilu`) || message.content.toLowerCase().includes(`milk i love you`) || message.content.toLowerCase().includes(`i love you milk`) || message.content.toLowerCase().includes(`milk i love u`) || message.content.toLowerCase().includes(`i love u milk`)) {
    return message.channel.send(`${loveResponse[Math.floor(Math.random() * loveResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`milk are`) || message.content.toLowerCase().includes(`milk can`) || message.content.toLowerCase().includes(`milk should`) || message.content.toLowerCase().includes(`milk would`) || message.content.toLowerCase().includes(`milk could`) || message.content.toLowerCase().includes(`milk if`) || message.content.toLowerCase().includes(`milk do`)) {
    return message.channel.send(`${questionResponse[Math.floor(Math.random() * questionResponse.length)]}`);
  }
  
  if (message.content.toLowerCase().includes(`thank u milk`) || message.content.toLowerCase().includes(`thank you milk`) || message.content.toLowerCase().includes(`milk thank`) || message.content.toLowerCase().includes(`thanks milk`)) {
    return message.channel.send(`${thankResponse[Math.floor(Math.random() * thankResponse.length)]}`);
  }

  if (message.content.toLowerCase().includes(`milk`) || message.content.toLowerCase().includes(`moomf`)) {
    return message.channel.send(`${milkResponse[Math.floor(Math.random() * milkResponse.length)]}`);
  }

	if (!message.content.startsWith(milkfix)) return;

  const args = message.content.slice(milkfix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.a && cmd.a.includes(commandName));
  if (!command) return;

		command.execute(client, message, args).catch (e => {
    console.error(e);
	});
});

client.login(process.env.CLIENT_TOKEN);