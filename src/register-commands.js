const { REST, Routes,ApplicationCommandOptionType } = require('discord.js');
require("dotenv").config();

const commands = [
    {
        name: 'add',
        description: 'adds two numbers',
        options: [
            {
                name: 'first-number',
                description: 'first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ]
    },
    
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registering Slash Commands ");
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands }
        );
        console.log("Registered Slash Commands ");
    } catch (error) {
        console.log("Error while registering commands" + error);
    }
})();
