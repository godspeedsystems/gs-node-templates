import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";
import { PrismaClient } from "@prisma/client";


module.exports = async(ctx: GSContext, args: PlainObject) => {
    const {
        inputs: {
            data: {
                params, body, query, user, headers
            }
        }, 
        childLogger, 
        logger,
        outputs, 
        functions, 
        datasources
    } = ctx;

    const client: PrismaClient = datasources.lending_service_db.client;

    const res = await client.LoanApplication.create({data:body});

    return new GSStatus(
        true, 
        201, 
        'Successfully created new Loan Application', 
        res, 
        {
            custom_header_1: 'something'
        }
    );

    //SAME AS
    
    // return {
    //     code: 201,
    //     data: res,
    //     success: true,
    //     message: 'Successfully created new Loan Application',
    //     headers: {
    //         custom_header_1: 'something'
    //     }
    // }
};