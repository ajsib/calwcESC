const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

function loadConfig(env) {
  try {
    const fileContents = fs.readFileSync(path.resolve(__dirname, '../config/config.yaml'), 'utf8');
    const data = yaml.load(fileContents);

    const envConfig = data.environments[env];
    if (envConfig) {
      const envFilePath = path.resolve(__dirname, '../.env.local');
      const envFileContent = `NEXT_PUBLIC_BACKEND_URL=${envConfig.backend_url}\n`;
      fs.writeFileSync(envFilePath, envFileContent);
      console.log(`Loaded NEXT_PUBLIC_BACKEND_URL for ${env}: ${envConfig.backend_url}`);
    } else {
      throw new Error(`Environment ${env} not found in config.yaml`);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

// Get the environment from the command line arguments or default to 'local'
const environment = process.argv[2] || 'local';
loadConfig(environment);
