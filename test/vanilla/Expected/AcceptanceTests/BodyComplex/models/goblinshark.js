/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a Goblinshark.
 * @extends models['Shark']
 */
class Goblinshark extends models['Shark'] {
  /**
   * Create a Goblinshark.
   * @member {number} [jawsize]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Goblinshark
   *
   * @returns {object} metadata of Goblinshark
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'goblin',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'fishtype',
          clientName: 'fishtype'
        },
        uberParent: 'Fish',
        className: 'Goblinshark',
        modelProperties: {
          species: {
            required: false,
            serializedName: 'species',
            type: {
              name: 'String'
            }
          },
          length: {
            required: true,
            serializedName: 'length',
            type: {
              name: 'Number'
            }
          },
          siblings: {
            required: false,
            serializedName: 'siblings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FishElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'fishtype',
                      clientName: 'fishtype'
                    },
                    uberParent: 'Fish',
                    className: 'Fish'
                  }
              }
            }
          },
          fishtype: {
            required: true,
            serializedName: 'fishtype',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          age: {
            required: false,
            serializedName: 'age',
            type: {
              name: 'Number'
            }
          },
          birthday: {
            required: true,
            serializedName: 'birthday',
            type: {
              name: 'DateTime'
            }
          },
          jawsize: {
            required: false,
            serializedName: 'jawsize',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Goblinshark;
