/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from "./models";

declare class ComplexModelClient extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the ComplexModelClient class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(baseUri?: string, options?: ServiceClientOptions);

  subscriptionId: string;

  apiVersion: string;


  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at
   * a given location. The response includes the display name and other details
   * about each product, and lists the products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<CatalogArray>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listWithHttpOperationResponse(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.CatalogArray>>;

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at
   * a given location. The response includes the display name and other details
   * about each product, and lists the products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {CatalogArray} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link CatalogArray} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.CatalogArray>;
  list(resourceGroupName: string, callback: ServiceCallback<models.CatalogArray>): void;
  list(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CatalogArray>): void;


  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.productDictionaryOfArray] Dictionary of Array of
   * product
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<CatalogDictionary>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: { productDictionaryOfArray? : { [propertyName: string]: models.Product[] }, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.CatalogDictionary>>;

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.productDictionaryOfArray] Dictionary of Array of
   * product
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {CatalogDictionary} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {CatalogDictionary} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link CatalogDictionary} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  create(subscriptionId: string, resourceGroupName: string, options?: { productDictionaryOfArray? : { [propertyName: string]: models.Product[] }, customHeaders? : { [headerName: string]: string; } }): Promise<models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, callback: ServiceCallback<models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: { productDictionaryOfArray? : { [propertyName: string]: models.Product[] }, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CatalogDictionary>): void;


  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.productArrayOfDictionary] Array of dictionary of
   * products
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<CatalogArray>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updateWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: { productArrayOfDictionary? : { [propertyName: string]: models.Product }[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.CatalogArray>>;

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.productArrayOfDictionary] Array of dictionary of
   * products
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {CatalogArray} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link CatalogArray} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  update(subscriptionId: string, resourceGroupName: string, options?: { productArrayOfDictionary? : { [propertyName: string]: models.Product }[], customHeaders? : { [headerName: string]: string; } }): Promise<models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, callback: ServiceCallback<models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: { productArrayOfDictionary? : { [propertyName: string]: models.Product }[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CatalogArray>): void;
}

export = ComplexModelClient;
