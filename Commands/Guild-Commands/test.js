module.exports = {
    commands: ['test', 'ping'],
    expectedArgs: '',
    permissionError: 'You do not have the correct permissions to run this command!',
    minArgs: 0,
    callback: (message, arguments, client, args, cmd) => {
        message.channel.send('Pong!')
    },
    permissions: 'BAN_MEMBERS',
    //requiredRoles: ['Admin'],
}
