const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//eval stuff
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


//start of bot
client.on('messageCreate', message => {
//prefix
  const prefix = "-t";
//ignore itself
if (message.author.bot) return;

const ownerID = "526806117993545748";
//server list
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith( prefix + "servers")) {
    
    if(message.author.id !== ownerID) return;
    let serverlist = ''
    message.channel.send("These are the servers I am in: \n")
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
    })
    message.channel.send(serverlist);
  }

  //eval
  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }



//ping
if (message.content == prefix + 'ping') {
  message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  };


//cmds
var cmds = {
	"advinfo": "fun ver for music bot (9/24/2021)",
	"info": "fun ver for music bot \n -cmds for more fun commands \n -/ help for music bot commands \n \n Prefix: \n Fun ver: - \n Music bot: -/",
	"help": "whats your issue or dm <@442459978452697119>(-info for more info)",
	"cmds": "current commands: -info -cmdns -ping -cointoss -8ball -insult -servers -advinfo",
	"betainfo": "if theres no date, beta ver is not running",
  "kill": "bot ded xdxdxdx",
  "-8ball": "test" + doMagic8BallVoodoo(),
  "endgame":  "https://m.chinachenxi.com/play/76385-0-1.html \n \nSPOLIER: theres",
  "shrek": "fyi full movie enjoy \nhttps://cdn.discordapp.com/attachments/358651360985743381/445510833989222400/Shrek.mp4",
};

if (message.content.startsWith(prefix)) {
  Object.keys(cmds).forEach(function(command) {
    if (message.content == `${prefix}${command}`) {
      message.channel.send(cmds[command]);
      return;
    }
  });
}

//list servers
if (message.content === prefix + 'servers'){
    let serverlist = ''
    message.channel.send("These are the servers I am in: \n")
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
    })
    message.channel.send(serverlist);
}

//print avatar
//if (message.content == prefix + "avatar") {
  //const user = message.mentions.users.first() || message.author;
  //  message.channel.send(user.avatarURL);
//}

//8ball

if (message.content.includes(prefix + "8ball")) {
  message.channel.send(doMagic8BallVoodoo())
}

function doMagic8BallVoodoo() {
  var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];

  return rand[Math.floor(Math.random()*rand.length)];
}

//cointoss

if (message.content.includes(prefix + "cointoss")) {
  message.channel.send(coinToss())
}

function coinToss() {
  var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
  return rand[Math.floor(Math.random()*rand.length)];
}

//insult
if (message.content.includes(prefix + "insult")) {
  message.channel.send(insults())
}

function insults() {
  var rand = ["Looking at you, I understand why some animals eat their young.",
  "Yo're so ugly, when your mom dropped you off at school she got a fine for littering.",
  "I would unplug your life support to charge my phone.",
  "I bet your brain feels as good as new, seeing that you never use it.",
  "If you are going to be two faced, at least make one of them pretty.",
  "Two wrongs don't make a right, take your parents as an example.",
  "You shouldn't play hide and seek, no one would look for you.",
  "Somewhere out there is a tree, tirelessly producing oxygen so you can breathe. I think you owe it an apology.",
  "If you really want to know about mistakes, you should ask your parents.",
  "You're dumber than snake mittens.",
  "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
  "You must have been born on a highway because that's where most accidents happen.",
  "Your face looks like it caught fire and someone tried to put it out with a hammer.",
  "The janitor said he took out the trash last night, he must forgot a piece. What are you still doing here?",
  "I'm jealous of all the people that haven't met you!",
  "So, a thought crossed your mind? Must have been a long and lonely journey.",
  "Calling you an idiot would be an insult to all stupid people.",
  "I would ask you how old you are but I know you can't count that high.",
  "I don't think you are stupid. You just have a bad luck when thinking.",
  "I'm glad to see you're not letting your education get in the way of your ignorance.",
  "I don't know what makes you so stupid, but it really works.",
  "Do you wanna lose ten pounds of ugly fat? Cut off your head.",
  "As an outsider, what do you think of the human race?",
  "If ignorance is bliss, you must be the happiest person on earth.",
  "I'd like to kick you in the teeth, but why should I improve your looks?",
  "Brains aren't everything. In fact, in your case they're nothing.",
  "Fellows like you don't grow from trees; they swing from them.",
  "You have a mind like a steel trap. Always closed!",
  "Seems like are always lost in thought. Its unfamiliar territory.",
  "You are living proof that man can live without a brain!",
  "I could make a monkey out of you, but why should I take all the credit?",
  "I refuse to have a battle of wits with somebody who is unarmed.",
  "You smell like a monkey.",
  "You look like a monkey.",
  "You are a poo poo face.",
  "You are a dumb dumb",
  "Your voice could peel scales off a donkey's butt.",
  "Is 13 your age or your IQ ?",
  "You should need a license to be that ugly.",
  "You should need a license to be that fat.",
  "You should need a license to be that annoying.",
  "You're so dumb, your dog teaches you tricks.",
  "I fart to make you smell better.",
  "You are stupid.",
  "You are actually pretty cool. Constipated, Overweight, Out of Style Loser.",
  "To make you mad on Saturday, I need to insult you on Wednesday.",
  "You're so dumb, blondes tell jokes about you.",
  "I'm happy I dont have a camera module, otherwise I would have to see your face!",
  "Ever since I saw you in your family tree, I've wanted to cut it down.",
  "You are so ugly that when you tried to sign up for an ugly contest, they said sorry, no professionals.",
  "Which sexual position produces the ugliest children? Ask your mother.",
  "The only way you could get a 20 IQ is to take the test twice and add the scores together.",
  "I don't know what you exact IQ is, except it starts with a decimal point.",
  "I won't say anything because I think you might cry.",
  "If you like my insults so much why don't you go marry them.",
  "You are a loser.",
  "Can I borrow your face while my butt is on vacation?",
  "penis."];

  return rand[Math.floor(Math.random()*rand.length)];
}


})
client.login('')
