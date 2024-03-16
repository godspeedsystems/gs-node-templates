import { GSContext, logger } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
    // logger.error(ctx.inputs.data.validation_error)
    return {
        data: 'Its working! ' + ctx.inputs.data.body.name,
        code: 200
    }
}