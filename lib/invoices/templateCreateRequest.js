// This class was generated on Tue, 16 Jan 2018 14:49:56 CST by version 0.1.0-dev+01638e of Braintree SDK Generator
// templateCreateRequest.js
// @version 0.1.0-dev+01638e
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Creates a template.
 **/

class TemplateCreateRequest {

  constructor() {
    this.path = '/v1/invoicing/templates?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {TemplateCreateRequest: TemplateCreateRequest};