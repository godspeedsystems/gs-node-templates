// # summary: upload user document
// # id: rule-engine_datasource_verify_user_document
// # tasks:
// #   - id: verify_user_document
// #     description: document verification against loan
// #     fn: datasource.aws.s3.putObject
// #     args:
// #       Body: <% inputs.body.file %>
// #       Bucket: 'userdocs123'
//   # - id: tranform_loan_data
//   #   description: transforming response from rule-engine
//   #   fn: com.gs.transform
//   #   args:
//   #     data: 
//   #       applied_for: <% outputs.verify_user_document %>
//   #       message: successfully uploaded document and verified
import { GSContext, GSStatus } from "@godspeedsystems/core";
import fs from 'fs'

module.exports = async(ctx: GSContext) => {
    const {file } = ctx.inputs.data.files;
    const {datasources}  = ctx;
    try{
     return new Promise((resolve, reject) => {
        fs.readFile(file.tempFilePath,async function (err, data) {
          if (err) throw err; // Something went wrong!
          const contentType = ctx.inputs.data.headers['content-type']
          var params = {
            Key: file.name,  
            Body: data,
            Bucket: 'userdocs123', 
            ContentType: contentType,
        };
        
          const res = await datasources.aws.client.s3.putObject(params);
          
          resolve(new GSStatus(true, 200, 'successfully uploaded document for verification', res, undefined))
        
        })
});
   
  }catch(e){
    console.log(e)
  }
   
};