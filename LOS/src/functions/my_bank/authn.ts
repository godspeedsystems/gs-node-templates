
import { logger } from "@godspeedsystems/core";
import qs from 'qs';

const axios = require('axios');
const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});
/**
 * Generate and return all the headers which are required to be sent
 * in the API calls which require authentication tokens
 */
module.exports = async function (ctx: any) {
    try {
        const res = await client({
            method: 'get',
            url: `https://httpbin.org/anything`,
            data: {
                "Authorization": 'my_bank_access_token'
            }
        })
        // Retrieve the authn tokens
        const headers = {
            "Authorization": res.data.access_token || 'my_bank_access_token'
        };
       
        logger.info('Auth token successfully refreshed and following headers set: %o', Object.keys(headers));
        return headers;
    } catch (error) {
        
        logger.error('Error in refreshing token %o', error);
        throw error;
    }
}