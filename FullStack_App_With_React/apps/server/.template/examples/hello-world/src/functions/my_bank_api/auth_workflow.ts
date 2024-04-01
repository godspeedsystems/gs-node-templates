/**
 * This module should export a function which returns authorisation headers to be set in API calls 
 * Here is a commented sample axios call to the third party API for retrieving auth tokens
 */

// import { PlainObject, logger } from '@godspeedsystems/core';

// const axios = require('axios');
// const client = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// module.exports = async function (dsConfig:PlainObject) {
//   try {
//     const res = await client({
//       method: 'post',
//       url: `${dsConfig.base_url}/anything`,
//       data: dsConfig.data,
//       timeout: 5000
//     });
//     const headers = {
//       'X-AUTH-TOKEN': res.data.data.token,
//     };

//     logger.info(
//       'Auth token successfully refreshed and following headers set: %o',
//       Object.keys(headers),
//     );
//     return headers;
//   } catch (error) {
//     logger.fatal('Error in refreshing token %o', error);
//     process.exit(1);
//   }
// };
module.exports = function (dsConfig: any, ctx: any) {
    // Note: dsCOnfig is type PlainObject and ctx is type GSContext
    // When creating proper function you will import them from @godspeedsystems/core
    // Check the commented code above
    return {
        'X-AUTH-TOKEN': 'response_from_auth_endpoint',
        'X-AUTH-KEY': 'response_from_auth_endpoint'
    }
}