module.exports = {
  apps: [
    {
      name: 'home-website',
      script: './server/server.js',
      watch: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        PORT: 8080,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 8000,
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['149.28.11.92'],
      ref: 'origin/master',
      repo: 'https://github.com/wyyx/angular-demo-home.git',
      path: '/www/website/production',
      'pre-deploy': 'git fetch origin master && git reset --hard origin/master',
      'post-deploy': 'yarn start && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
