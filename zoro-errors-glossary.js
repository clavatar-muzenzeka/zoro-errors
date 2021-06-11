const ErrorResponse = require("./error-response.class");

/**
 * By Clavatar
 * enumerate all zoro wallet possible errors
 */

/**
 * Generic ressource not found error
 */
module.exports.ZoroErrorRessouceNotFound = class ZoroErrorRessourceNotFound extends (
  ErrorResponse
) {
  static innerCode = 0;
  static relatableHttpStatusCode = 404;
  static message = "Ressource not found";
  constructor(extras) {
    super(
      ZoroErrorRessourceNotFound.message,
      ZoroErrorRessourceNotFound.statusCode,
      extras,
      ZoroErrorRessourceNotFound.innerCode
    );
  }
};

/**
 * Username is required
 */
module.exports.ZoroErrorUsernameIsRequired = class ZoroErrorUsernameIsRequired extends (
  ErrorResponse
) {
  static innerCode = 1;
  static relatableHttpStatusCode = 400;
  static message = "'username' is required";
  constructor(extras) {
    super(
      ZoroErrorUsernameIsRequired.message,
      ZoroErrorUsernameIsRequired.statusCode,
      extras,
      ZoroErrorUsernameIsRequired.innerCode
    );
  }
};

/**
 * Password is required
 */
module.exports.ZoroErrorPasswordIsRequired = class ZoroErrorPasswordIsRequired extends (
  ErrorResponse
) {
  static innerCode = 2;
  static relatableHttpStatusCode = 400;
  static message = "'password' is required";
  constructor(extras) {
    super(
      ZoroErrorPasswordIsRequired.message,
      ZoroErrorPasswordIsRequired.statusCode,
      extras,
      ZoroErrorPasswordIsRequired.innerCode
    );
  }
};

/**
 * Name is required
 */
module.exports.ZoroErrorNameIsRequired = class ZoroErrorNameIsRequired extends (
  ErrorResponse
) {
  static innerCode = 3;
  static relatableHttpStatusCode = 400;
  static message = "'name' is required";
  constructor(extras) {
    super(
      ZoroErrorNameIsRequired.message,
      ZoroErrorNameIsRequired.statusCode,
      extras,
      ZoroErrorNameIsRequired.innerCode
    );
  }
};

/**
 * Username conflict
 */
module.exports.ZoroErrorUserNameConflict = class ZoroErrorUserNameConflict extends (
  ErrorResponse
) {
  static innerCode = 4;
  static relatableHttpStatusCode = 409;
  static message = "Another user exists with this username";
  constructor(extras) {
    super(
      ZoroErrorUserNameConflict.message,
      ZoroErrorUserNameConflict.statusCode,
      extras,
      ZoroErrorUserNameConflict.innerCode
    );
  }
};

/**
 * Weak password
 */
module.exports.ZoroErrorWeakPassword = class ZoroErrorWeakPassword extends (
  ErrorResponse
) {
  static innerCode = 5;
  static relatableHttpStatusCode = 400;
  static message = "Weak password";
  constructor(extras) {
    super(
      ZoroErrorWeakPassword.message,
      ZoroErrorWeakPassword.statusCode,
      extras,
      ZoroErrorWeakPassword.innerCode
    );
  }
};

/**
 * User not found
 */
module.exports.ZoroErrorUserNotFound = class ZoroErrorUserNotFound extends (
  ErrorResponse
) {
  static innerCode = 6;
  static relatableHttpStatusCode = 404;
  static message = "User not found";
  constructor(extras) {
    super(
      ZoroErrorUserNotFound.message,
      ZoroErrorUserNotFound.statusCode,
      extras,
      ZoroErrorUserNotFound.innerCode
    );
  }
};

/**
 * User freesed
 */
module.exports.ZoroErrorUserFreezed = class ZoroErrorUserFreezed extends (
  ErrorResponse
) {
  static innerCode = 7;
  static relatableHttpStatusCode = 403;
  static message = "Tries limit reached, try again after some time";
  constructor(extras) {
    super(
      ZoroErrorUserFreezed.message,
      ZoroErrorUserFreezed.statusCode,
      extras,
      ZoroErrorUserFreezed.innerCode
    );
  }
};

/**
 * Wrong password
 */
module.exports.ZoroErrorWrongPassword = class ZoroErrorWrongPassword extends (
  ErrorResponse
) {
  static innerCode = 8;
  static relatableHttpStatusCode = 403;
  static message = "Wrong password";
  constructor(extras) {
    super(
      ZoroErrorWrongPassword.message,
      ZoroErrorWrongPassword.statusCode,
      extras,
      ZoroErrorWrongPassword.innerCode
    );
  }
};

/**
 * Unknown error
 */
module.exports.ZoroErrorUnknown = class ZoroErrorUnknown extends ErrorResponse {
  static innerCode = 9;
  static relatableHttpStatusCode = 500;
  static message = "Unknown error";
  constructor(extras) {
    super(
      ZoroErrorUnknown.message,
      ZoroErrorUnknown.statusCode,
      extras,
      ZoroErrorUnknown.innerCode
    );
  }
};
