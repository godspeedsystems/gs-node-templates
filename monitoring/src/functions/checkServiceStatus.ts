import { GSContext, GSDataSource } from "@godspeedsystems/core";
    export default async function checkServiceStatus(ctx: GSContext) {
      const services = ctx.config.services;
      const notificationEmail = ctx.config.notify_user;
      const axios: GSDataSource = ctx.datasources.api;
      const mailer: GSDataSource = ctx.datasources.mailer;
    
      for (const serviceName in services) {
        const serviceUrl = services[serviceName];
        try {
          const response = await axios.execute(ctx, {
            meta: {
              method: 'get',
              url: serviceUrl,
            },
          });
          if (response.success && response.code === 200) {
            ctx.logger.info(`Service ${serviceName} is running`);
          } else {
            ctx.logger.error(`Service ${serviceName} is not running. Status code: ${response.code}`);

            await mailer.execute(ctx, {
              meta:{
                to: notificationEmail,
                subject: `Service ${serviceName} is down`,
                text: `Service ${serviceName} at ${serviceUrl} is not running. Status code: ${response.code}`,
              }
            });
          }
        } catch (error: any) {
          ctx.logger.error(`Error checking service ${serviceName}: ${error}`);
          await mailer.execute(ctx, {
            meta: {
              to: notificationEmail,
              subject: `Error checking service ${serviceName}`,
              text: `Error checking service ${serviceName} at ${serviceUrl}: ${error}`,
            },
          });
        }
      }
      return { success: true, code: 200, message: 'Service status checked' };
    }