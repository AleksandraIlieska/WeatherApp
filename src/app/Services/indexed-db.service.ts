import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  constructor(private dbService: NgxIndexedDBService) {
  }

  /**
* @description Adds new entry in the store and returns its key
* @param storeName The name of the store to add the item
* @param data The entry to be added
*/
  AddData(storeName: string, data: any): Observable<any> {
    return this.dbService.add(storeName, data);
  }

  /**
* @description Returns entry by id.
* @param storeName The name of the store to query
* @param id The entry id
*/
  GetDataById(storeName: string, id: any): Observable<any> {
    return this.dbService.getByKey(storeName, id);
  }

  /**
* @description Return all elements from one store
* @param storeName The name of the store to select the items
*/
  GetAllData(storeName: string): Observable<any> {
    return this.dbService.getAll(storeName);
  }

  /**
* @description Returns entry by key.
* @param storeName The name of the store to query
* @param keyValue The entry key
*/
  GetDataByKey(storeName: string, keyValue: any): Observable<any> {
    return this.dbService.getByKey(storeName, keyValue);
  }

  /**
  * @description Returns all items by an index.
  * @param storeName The name of the store to query
  * @param indexName The index name to filter
  * @param indexValue  The range value and criteria to apply on the index.
  */
  GetDataByIndex(storeName: string, indexName: string, indexValue: any): Observable<any> {
    return this.dbService.getAllByIndex(storeName, indexName, indexValue);
  }

  /**
* @description Adds or updates a record in store with the given value and key. Return all items present in the store
* @param storeName The name of the store to update
* @param data The new value for the entry
*/
  UpdateData(storeName: string, data: any): Observable<any> {
    return this.dbService.update(storeName, data);
  }

  /**
* @description Returns the number of rows in a store.
* @param storeName The name of the store to query
*/
  Count(storeName: string): Observable<any> {
    return this.dbService.count(storeName);
  }

  /**
* @description Returns all items from the store after delete.
* @param storeName The name of the store to have the entry deleted
* @param key The key of the entry to be deleted
*/
  DeleteData(storeName: string, key: any): Observable<any> {
    return this.dbService.delete(storeName, key);
  }
}