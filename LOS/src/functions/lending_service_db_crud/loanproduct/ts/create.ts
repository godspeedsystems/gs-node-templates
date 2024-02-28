import { GSContext, GSStatus } from "@godspeedsystems/core";


module.exports = async(ctx: GSContext) => {
    const {body} = ctx.inputs.data;
    const {datasources}  = ctx;
    const res = await datasources.lending_service_db.client.LoanProduct.create({data:body})
    return new GSStatus(true, 201, 'Successfully created load product', res, undefined);
};