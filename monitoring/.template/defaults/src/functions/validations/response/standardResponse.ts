import { GSContext, logger } from "@godspeedsystems/core";

/**
 * Here you can customize the response when a request 
 * or response validation error happens. Error is in AJV error format.
 * @param ctx  
 */
export default function (ctx: GSContext) {
    // logger.error(ctx.inputs.data.validation_error);
    const {validation_error, event, message} = ctx.inputs.data;
    return {
        success: false,
        data: {validation_error, event, message},
        code: 500
    }
}