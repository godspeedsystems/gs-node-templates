import { GSContext, GSStatus } from "@godspeedsystems/core";


module.exports = async(ctx: GSContext) => {
    const {params} = ctx.inputs.data;
    const {datasources}  = ctx;
    const res = await datasources.lending_service_db.client.LoanProduct.findUnique({where:{id:parseInt(params.id)}})
    return new GSStatus(true, 200, 'Successfully fetched loan product by id.', res, undefined);
};