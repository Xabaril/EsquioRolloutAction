import * as core from '@actions/core';
import url =  require('url'); 
const https = require('https');

async function run() {
  try {
    const esquioUrl = core.getInput('esquioUrl');
    const esquioApiKey = core.getInput('esquioApiKey');
    const flagId = core.getInput('flagId');

    await rolloutFeature(url.parse(esquioUrl), esquioApiKey, flagId);
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function rolloutFeature(esquioUrl: url.UrlWithStringQuery, esquioApiKey: string, flagId: string) {
  const options = {
      hostname: esquioUrl.host,
      path: `/api/v1/flags/${flagId}/Rollout?apikey=${esquioApiKey}`,
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': esquioApiKey
      }
  }
  const req = https.request(options, (res: any) => {
      if (res.statusCode === 200) {
          console.log('Feature rollout succesful');
      }

      res.on('data', (data: any) => {
          if (res.statusCode != 200) {
              const responseData = JSON.parse(data);
              core.setFailed(`Error in feature rollout ${responseData.detail} HttpCode: ${res.statusCode}`);
          }
      });
  });
  req.on('error', (error: any) => {
    core.setFailed(error);
  });

  req.end();
}

run();
