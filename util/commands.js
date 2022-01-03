const { prefix } = require('../config.json')

module.exports = (client, aliases, callback) => {
    if(typeof aliases === 'string'){
        aliases = [aliases]
    }

    client.on('messageCerate', (message) => {
        const { content } = message

        aliases.forEach((alias) => {
            const command = `${prefix}${alias}`

            if(content.startsWith(`${command}`) ||  content === command) {
                console.log(`Activating the command ${command}`)
                callback(message)
            }
        })
    })
}
