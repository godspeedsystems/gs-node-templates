import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";

export default async function execute(ctx: GSContext, args: PlainObject) {
    return `Hello ${ctx.inputs.data.params.name}`;
}