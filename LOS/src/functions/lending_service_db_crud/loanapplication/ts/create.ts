import { GSContext, GSStatus } from "@godspeedsystems/core";
import { PrismaClient } from "@prisma/client";


module.exports = async(ctx: GSContext) => {
    const {body} = ctx.inputs.data;
    const {datasources}  = ctx;
    const client: PrismaClient = datasources.lending_service_db.client;
    const res = await client.LoanApplication.create({data:body})
    return new GSStatus(true, 201, 'Successfully created new Loan Application', res, undefined);
};