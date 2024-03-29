import { GSContext, PlainObject } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    //@ts-ignore
    const {
        inputs: {
            data: {
                params, body, query, user, headers
            }
        }, 
        childLogger, 
        logger,
        outputs, 
        functions, 
        datasources,
        config,
        mappings
    }: {
        inputs: {
            data: {
                params: PlainObject,
                body: PlainObject,
                query: PlainObject,
                user: PlainObject,
                headers: PlainObject
            }
        }, 
        childLogger: any, // Define CustomLogger if necessary
        logger: any,
        outputs: PlainObject, // Adjust the type accordingly
        functions: PlainObject, // Adjust the type accordingly
        datasources: PlainObject, // Adjust the type accordingly
        config: PlainObject,
        mappings: PlainObject
    } = ctx;
    
    // Will print with workflow_name and task_id attributes
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
    logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
    logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
    logger.info('Total functions found in the project %s', Object.keys(functions).length)
    
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        // success: true,
        // headers: {
        //     custom_response_header: 'something'
        // }
    }
}