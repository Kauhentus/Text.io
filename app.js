const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./src/resources/config.json");
const Spam = require('./src/commands/spam.js');
const hugify = require('./src/commands/hugify.js');
const creepify = require('./src/commands/creepify.js');
const clean = require('./src/commands/clean.js');

const generate_large_embed = require('./src/util/generate_large_embed.js');
const generate_embed = require('./src/util/generate_embed.js');

const spam_emoji_help_fields = require('./src/resources/spam_emoji_help_fields.json').data;
const spam_help_fields = require('./src/resources/spam_help_fields.json').data;
const help_text = require('./src/resources/help_text.js');

const commands = ['spam', 'hugify', 'creepify', 'clean'];
const text_pending_promise = async (message, args) => {
    switch(args[0]){
        case 'spam':
            return Spam(args); 
        case 'hugify':
            return hugify(message.content.slice(9)); 
        case 'creepify':
            return creepify(message.content.slice(11)); 
        case 'clean':
            return clean(message.content.slice(8)); 
    }
};

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`Command prefix is !!`);
});
  
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).replace(/\s+/g, ' ').trim().toLowerCase().split(' ');

    if(commands.includes(args[0])){
        let text = await text_pending_promise(message, args);
        message.channel.send(text);
    } else if(args[0] == 'help'){
        if(args[1] == 'spam'){
            if(args[2] != 'emoji'){
                const embed = await generate_large_embed(
                    'Spam Help', 
                    spam_help_fields);

                message.channel.send(embed);
            } else {
                const embed = await generate_large_embed(
                    'Emoji Spam Help', 
                    spam_emoji_help_fields);

                message.channel.send(embed);
            }
        } else if(args[1] == 'hugify'){
            const embed = await generate_embed(
                'Hugify Help', 
                help_text.hugify);
            
            message.channel.send(embed);
        } else if(args[1] == 'creepify'){
            const embed = await generate_embed(
                'Cr̓e̋ep̹i̅fy Help', 
                help_text.creepify);
            
            message.channel.send(embed);
        } else if(args[1] == 'clean'){
            const embed = await generate_embed(
                'Clean Help', 
                help_text.clean);
            
            message.channel.send(embed);
        } else {
            const embed = await generate_embed(
                'Help', 
                help_text.general_help);
            message.channel.send(embed);
        }
    } else {
        let text = await generate_embed(
            `Unknown command __${args[0]}__`,
            'Please check \`!!help\` for a list of commands'
        );
        message.channel.send(text);
    }
});

client.on("error", error => {
    console.log(error.message);
});

client.login(config.token);
