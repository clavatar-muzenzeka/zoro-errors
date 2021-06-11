/**
 * By Clavatar
 */

class ErrorResponse extends Error {
  /**
   * @param {string} message error customised message
   * @param {int} statusCode error status code
   * @param {Object} extras error response extra infos
   */
  constructor(message, statusCode, extras, innerCode) {
    super(message);
    this.statusCode = statusCode;
    this.extras = extras;
    this.innerCode = innerCode;
  }

  // generate standard REST compliant response body
  toRESTResponse() {
    return {
      success: false,
      error: {
        innerCode: this.innerCode,
        message: this.message,
        extras: this.extras,
      },
    };
  }
}

module.exports = ErrorResponse;
