module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/www/cssberries/html',
      key: '/Users/belov/.ssh/id_rsa.pub',
    //   repositoryUrl: 'https://github.com/user/super-project.git',
    workspace: '/Users/belov/dev/basket/dist'
    },
    staging: {
      servers: 'ugen@162.243.168.238',
    },
  })
}
