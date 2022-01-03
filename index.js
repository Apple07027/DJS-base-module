const Discord = require('discord.js')
const config = require('./config.json')
const loadCommands = require('./Commands/load-command')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("bot ready!")
    loadCommands(client)
})

client.login(config.token)
