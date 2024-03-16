import { GSCachingDataSource, GSContext, PlainObject, logger} from "@godspeedsystems/core";
const logAttrs = {'memcache_file': 'src/datasources/types/mem-cache.ts'};
export default class MemCacheDs extends GSCachingDataSource {
    set(key: string, val: any, options: { EX?: number | undefined; PX?: number | undefined; EXAT?: number | undefined; NX?: boolean | undefined; XX?: boolean | undefined; KEEPTTL?: boolean | undefined; GET?: boolean | undefined; }) {
        logger.debug(logAttrs, 'set key %s %o', key, this.client)
        //@ts-ignore
        this.client[key] = val;
        logger.debug(logAttrs, 'after set %s %o', key, this.client)

    }
    get(key: string) {
        logger.debug(logAttrs, 'get %s %o', key, this.client);
        //@ts-ignore
        return this.client[key];
    }
    del(key: string) {
        logger.debug(logAttrs, 'del %s %o', key, this.client)
        //@ts-ignore
        delete this.client[key];
        logger.debug(logAttrs, 'after del %s %o', key, this.client)

    }
    protected async initClient(): Promise<PlainObject> {
        this.client = {};
        return this.client;
    }
    execute(ctx: GSContext, args: PlainObject): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
