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
 * ParameterGrouping
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestParameterGroupingTestService.
 */
export interface ParameterGrouping {


    /**
     * Post a bunch of required parameters grouped
     *
     * @param {object} parameterGroupingPostRequiredParameters Additional
     * parameters for the operation
     *
     * @param {number} parameterGroupingPostRequiredParameters.body
     *
     * @param {string} [parameterGroupingPostRequiredParameters.customHeader]
     *
     * @param {number} [parameterGroupingPostRequiredParameters.query] Query
     * parameter with default
     *
     * @param {string} parameterGroupingPostRequiredParameters.path Path parameter
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
    postRequiredWithHttpOperationResponse(parameterGroupingPostRequiredParameters: models.ParameterGroupingPostRequiredParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Post a bunch of required parameters grouped
     *
     * @param {object} parameterGroupingPostRequiredParameters Additional
     * parameters for the operation
     *
     * @param {number} parameterGroupingPostRequiredParameters.body
     *
     * @param {string} [parameterGroupingPostRequiredParameters.customHeader]
     *
     * @param {number} [parameterGroupingPostRequiredParameters.query] Query
     * parameter with default
     *
     * @param {string} parameterGroupingPostRequiredParameters.path Path parameter
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
    postRequired(parameterGroupingPostRequiredParameters: models.ParameterGroupingPostRequiredParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    postRequired(parameterGroupingPostRequiredParameters: models.ParameterGroupingPostRequiredParameters, callback: ServiceCallback<void>): void;
    postRequired(parameterGroupingPostRequiredParameters: models.ParameterGroupingPostRequiredParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Post a bunch of optional parameters grouped
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameterGroupingPostOptionalParameters] Additional
     * parameters for the operation
     *
     * @param {string}
     * [options.parameterGroupingPostOptionalParameters.customHeader]
     *
     * @param {number} [options.parameterGroupingPostOptionalParameters.query]
     * Query parameter with default
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
    postOptionalWithHttpOperationResponse(options?: { parameterGroupingPostOptionalParameters? : models.ParameterGroupingPostOptionalParameters, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Post a bunch of optional parameters grouped
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameterGroupingPostOptionalParameters] Additional
     * parameters for the operation
     *
     * @param {string}
     * [options.parameterGroupingPostOptionalParameters.customHeader]
     *
     * @param {number} [options.parameterGroupingPostOptionalParameters.query]
     * Query parameter with default
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
    postOptional(options?: { parameterGroupingPostOptionalParameters? : models.ParameterGroupingPostOptionalParameters, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    postOptional(callback: ServiceCallback<void>): void;
    postOptional(options: { parameterGroupingPostOptionalParameters? : models.ParameterGroupingPostOptionalParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Post parameters from multiple different parameter groups
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.firstParameterGroup] Additional parameters for the
     * operation
     *
     * @param {string} [options.firstParameterGroup.headerOne]
     *
     * @param {number} [options.firstParameterGroup.queryOne] Query parameter with
     * default
     *
     * @param {object}
     * [options.parameterGroupingPostMultiParamGroupsSecondParamGroup] Additional
     * parameters for the operation
     *
     * @param {string}
     * [options.parameterGroupingPostMultiParamGroupsSecondParamGroup.headerTwo]
     *
     * @param {number}
     * [options.parameterGroupingPostMultiParamGroupsSecondParamGroup.queryTwo]
     * Query parameter with default
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
    postMultiParamGroupsWithHttpOperationResponse(options?: { firstParameterGroup? : models.FirstParameterGroup, parameterGroupingPostMultiParamGroupsSecondParamGroup? : models.ParameterGroupingPostMultiParamGroupsSecondParamGroup, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Post parameters from multiple different parameter groups
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.firstParameterGroup] Additional parameters for the
     * operation
     *
     * @param {string} [options.firstParameterGroup.headerOne]
     *
     * @param {number} [options.firstParameterGroup.queryOne] Query parameter with
     * default
     *
     * @param {object}
     * [options.parameterGroupingPostMultiParamGroupsSecondParamGroup] Additional
     * parameters for the operation
     *
     * @param {string}
     * [options.parameterGroupingPostMultiParamGroupsSecondParamGroup.headerTwo]
     *
     * @param {number}
     * [options.parameterGroupingPostMultiParamGroupsSecondParamGroup.queryTwo]
     * Query parameter with default
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
    postMultiParamGroups(options?: { firstParameterGroup? : models.FirstParameterGroup, parameterGroupingPostMultiParamGroupsSecondParamGroup? : models.ParameterGroupingPostMultiParamGroupsSecondParamGroup, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    postMultiParamGroups(callback: ServiceCallback<void>): void;
    postMultiParamGroups(options: { firstParameterGroup? : models.FirstParameterGroup, parameterGroupingPostMultiParamGroupsSecondParamGroup? : models.ParameterGroupingPostMultiParamGroupsSecondParamGroup, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Post parameters with a shared parameter group object
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.firstParameterGroup] Additional parameters for the
     * operation
     *
     * @param {string} [options.firstParameterGroup.headerOne]
     *
     * @param {number} [options.firstParameterGroup.queryOne] Query parameter with
     * default
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
    postSharedParameterGroupObjectWithHttpOperationResponse(options?: { firstParameterGroup? : models.FirstParameterGroup, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Post parameters with a shared parameter group object
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.firstParameterGroup] Additional parameters for the
     * operation
     *
     * @param {string} [options.firstParameterGroup.headerOne]
     *
     * @param {number} [options.firstParameterGroup.queryOne] Query parameter with
     * default
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
    postSharedParameterGroupObject(options?: { firstParameterGroup? : models.FirstParameterGroup, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    postSharedParameterGroupObject(callback: ServiceCallback<void>): void;
    postSharedParameterGroupObject(options: { firstParameterGroup? : models.FirstParameterGroup, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}