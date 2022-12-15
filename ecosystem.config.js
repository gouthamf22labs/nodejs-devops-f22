module.exports = {
  apps: [
    {
      name: "nodejs-devops-f22",
      script: "npm start",
      time: true,
      instances: 1,
      autorestart: true,
      max_restarts: 50,
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 3000,
      },
    },
  ],
  deploy: {
    production: {
      user: "ec2-user@ip-172-31-2-169",
      host: "43.204.218.18 ",
      key: "deploy.key",
      "post-deploy":
        "npm install && npm build && pm2 reload ecosystem.config.js --env production && pm2 save && git checkout package-lock.lock",
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
