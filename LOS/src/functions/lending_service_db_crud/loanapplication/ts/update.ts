import { GSContext, GSStatus } from "@godspeedsystems/core";


module.exports = async(ctx: GSContext) => {
    const {body} = ctx.inputs.data;
    const {params} = ctx.inputs.data;
    const {datasources}  = ctx;
    const res = await datasources.lending_service_db.client.LoanApplication.update({where:{id:parseInt(params.id)},data:body})
    return new GSStatus(true, 204, 'successfully updated Loan Application.', res, undefined);
};