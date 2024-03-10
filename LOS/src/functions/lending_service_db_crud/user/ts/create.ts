import { GSContext, GSStatus } from "@godspeedsystems/core";
// import { PrismaClient } from "@prisma/client";
const pathString: string = `${process.cwd()}/dist/datasources/prisma-clients/lending_service_db`;
// console.log(this.config.name, pathString)
const { Prisma, PrismaClient } = require(pathString);

module.exports = async(ctx: GSContext) => {
    const {body} = ctx.inputs.data;
    const {datasources}  = ctx;
    const res = await datasources.lending_service_db.client.User.create({data:body})
    return new GSStatus(true, 201, undefined, res);
};