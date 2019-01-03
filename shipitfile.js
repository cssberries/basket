module.exports = shipit => {
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            key:  '~/.ssh/id_rsa',
            servers: [{
                host: '162.243.168.238',
                user: 'ugen',
            }],
            // verboseSSHLevel: 3, 
            // shallowClone: false,
            branch: 'master',
            // keepReleases: 1,
            workspace: '/var/www/cssberries/tmp',
            deployTo: '/var/www/cssberries/html',
            repositoryUrl: 'https://github.com/cssberries/basket'
        }
    })
}