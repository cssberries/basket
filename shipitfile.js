module.exports = shipit => {
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            key:  '~/.ssh/id_rsa',
            servers: [{
                host: '162.243.168.238',
                user: 'ugen',
            }],
            branch: 'master',
            workspace: '/var/www/cssberries/tmp',
            deployTo: '/var/www/cssberries/html',
            repositoryUrl: 'https://github.com/cssberries/basket'
        }
    })
}