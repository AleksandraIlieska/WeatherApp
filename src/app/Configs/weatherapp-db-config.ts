import { DBConfig } from "ngx-indexed-db";

/**
 * @description Initialize the DBConfig
 * @param WeatherAppDbConfig
 * @returns Sets the ObjectStoreData
 */
export const WeatherAppDbConfig: DBConfig = {
    name: 'WeatherAppDb',
    version: 1,
    objectStoresMeta: [
        {
            store: 'User',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'firstName', keypath: 'firstName', options: { unique: false } },
                { name: 'lastName', keypath: 'lastName', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: true } },
                { name: 'password', keypath: 'password', options: { unique: false } }
            ]
        }
    ]
};