import { GSContext, logger } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
    // logger.error(ctx.inputs.data.validation_error)
    return {
        success: false,
        data: ctx.inputs.data,
        code: 400
    }
}