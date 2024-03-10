import { GSContext, GSDataSource, logger, PlainObject } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: {loan_offer: PlainObject, pan_number: string}) {
    const client: GSDataSource = ctx.datasources.lms;
    //No need to write boilerplate for retry and token refresh here
    const res =  await client.execute(ctx, {
        meta: {
            method: 'post',
            url: '/anything',
        },
        data: args
    });
    return res;
};