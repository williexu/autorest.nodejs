/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * AvailabilitySets
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestParameterFlattening.
 */
export interface AvailabilitySets {


    /**
     * Updates the tags for an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} avset The name of the storage availability set.
     *
     * @param {object} tags A set of tags. A description about the set of tags.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Updates the tags for an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} avset The name of the storage availability set.
     *
     * @param {object} tags A set of tags. A description about the set of tags.
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
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, callback: ServiceCallback<void>): void;
    update(resourceGroupName: string, avset: string, tags: { [propertyName: string]: string }, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}
