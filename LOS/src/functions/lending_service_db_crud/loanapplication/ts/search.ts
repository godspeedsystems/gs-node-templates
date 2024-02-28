import { GSContext, GSStatus } from "@godspeedsystems/core";


module.exports = async(ctx: GSContext) => {
    const {datasources}  = ctx;
    const res = await datasources.lending_service_db.client.LoanApplication.findMany(ctx.inputs.data.body);
    return new GSStatus(true, 200, 'successfully fetched Loan Applications list', res, undefined);
};