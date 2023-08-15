require("dotenv").config();
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})
client.on('ready', (c) => {
    console.log("Game Bot Is ready !!!!");
})

// registered commands and interactions
client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand) {
        console.log(" Hey whats up boi!!! ");
        if (interaction.commandName === "add") {

            const num1 = interaction.options.get('first-number').value;
            const num2 = interaction.options.get('second-number').value;

            var result = num1 + num2 
            interaction.reply('The sum of two numbers is = '+ result);
        }
    }
})
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content === "Hello Gamer Bot") {

       message.reply(">_<");
    }
    else {
        console.log("MESSAGE SENT IS" + message.content);
    }
})
client.login(process.env.TOKEN);