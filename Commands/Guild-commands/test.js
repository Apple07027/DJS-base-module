module.exports = {
    commands: ['test'],
    expectedArgs: '',
    premmisionError: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, client, args, cmd) => {
        message.channel.send('Test command works!')

    },
    permissions: 'BAN_MEMBERS',
    //requiredRoles: ['Admin'],

}