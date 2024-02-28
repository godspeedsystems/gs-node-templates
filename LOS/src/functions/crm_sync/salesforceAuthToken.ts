import { GSContext, PlainObject } from "@godspeedsystems/core";
import config from 'config';

const axios = require('axios');
const client = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

module.exports = async function (dsConfig: PlainObject,ctx: GSContext) {
  try {
    const res = await client({
      method: 'post',
      url: config.salesforce.auth_url,
      params: {
        client_id: config.salesforce.query_params.client_id,
        grant_type: config.salesforce.query_params.grant_type,
        password: config.salesforce.query_params.password,
        username: config.salesforce.query_params.username,
        client_secret: config.salesforce.query_params.client_secret
      }
    })
    const headers = {
      "Authorization": `Bearer ${res.data.access_token}`
    };
    // ctx.childLogger.error('Auth token successfully refreshed and following headers set: %o', Object.keys(headers));
    return headers;
  } catch (error) {
    ctx?.logger.error('Error in refreshing token for OS1 %o', error);
    throw error;
  }
}