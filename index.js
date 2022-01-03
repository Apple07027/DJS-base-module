const Discord = require('discord.js')
const config = require('./config.json')
const loadConfig = require('./Commands/Load-commands')
const client = new Discord.Client({

    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on ('ready', () =>{
    console.log('client ready')

    loadConfig(client)
})

client.login(config.token)