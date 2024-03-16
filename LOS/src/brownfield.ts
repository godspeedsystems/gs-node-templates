import Godspeed, { GodspeedParams, logger, childLogger, GSStatus } from "@godspeedsystems/core";
import { PlainObject } from "@godspeedsystems/core";

// STEP1: Initialize godspeed project
const args: PlainObject = getArgs();
const params: GodspeedParams = {
    // eventsFolderPath: undefined,
    workflowsFolderPath: 'dist/functions',
    definitionsFolderPath: 'dist/definitions',
    configFolderPath: '/config',
    datasourcesFolderPath: 'dist/datasources',
    // eventsourcesFolderPath: undefined,
    mappingsFolderPath: 'dist/mappings',
    pluginsFolderPath: 'dist/plugins'
}

// create a godspeed instance
const gsApp = new Godspeed(params);


logger.info('Initializing Godspeed project');
gsApp.initialize().then(async () => {

    logger.info('Godspeed initialized');

    logger.info('Calling a Godspeed funtion with event (input) data');
    const res: GSStatus =
        await gsApp.executeWorkflow(
            "health.check", // Localted in `workflowsFolderPath` at /health/check.yaml
            {               // Pass parsed (deserialized) event information as pure jSON 
                headers: {},
                params: {},
                body: {},
                query: {},
                user: {}
            }
        );
    if (res.success) {
        logger.info('Success response from function invocation %o', res);
        //Do whatever
    } else {
        logger.error('Error response from function invocation %o', res);
        //Do whatever
    }
})
.catch(logger.error)

function getArgs() {
    const ret = process.argv.splice(3).reduce((acc: PlainObject, arg) => {
        const argSplit = arg.split('=');
        acc[argSplit[0]] = argSplit[1];
        return acc;
    }, {});
    return ret;
}