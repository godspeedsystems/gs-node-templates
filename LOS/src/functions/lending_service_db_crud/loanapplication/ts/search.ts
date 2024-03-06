import { GSContext, GSStatus } from "@godspeedsystems/core";
import { PrismaClient } from "@prisma/client";


module.exports = async(ctx: GSContext) => {
    const {datasources}  = ctx;
    const client: PrismaClient = datasources.lending_service_db.client;
    const res = await client.LoanApplication.findMany(ctx.inputs.data.body);
    return new GSStatus(true, 200, 'successfully fetched Loan Applications list', res, undefined);
};