import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
                query       // query parameters from rest api
                // params,  //path parameters from endpoint url
                // body,    // request body in case of http and graphql apis, event data in case of message bus or socket
                // user,    // user payload parsed from jwt token
                // headers  //request headers in case of http and graphql apis
            }
        }, 
     
    }= ctx;
  
    return new GSStatus(true, 200, undefined, 'Hello ' + query.name, undefined);  
}