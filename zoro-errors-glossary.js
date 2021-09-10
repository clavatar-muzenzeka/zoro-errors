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
      ZoroErrorRessourceNotFound.relatableHttpStatusCode,
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
      ZoroErrorUsernameIsRequired.relatableHttpStatusCode,
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
      ZoroErrorPasswordIsRequired.relatableHttpStatusCode,
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
      ZoroErrorNameIsRequired.relatableHttpStatusCode,
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
      ZoroErrorUserNameConflict.relatableHttpStatusCode,
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
      ZoroErrorWeakPassword.relatableHttpStatusCode,
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
      ZoroErrorUserNotFound.relatableHttpStatusCode,
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
      ZoroErrorUserFreezed.relatableHttpStatusCode,
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
      ZoroErrorWrongPassword.relatableHttpStatusCode,
      extras,
      ZoroErrorWrongPassword.innerCode
    );
  }
};

/**
 * Email address value required
 */
module.exports.ZoroErrorEmailAddressValueRequired = class ZoroErrorEmailAddressValueRequired extends (
  ErrorResponse
) {
  static innerCode = 10;
  static relatableHttpStatusCode = 400;
  static message = "Email addresse value is required";
  constructor(extras) {
    super(
      ZoroErrorEmailAddressValueRequired.message,
      ZoroErrorEmailAddressValueRequired.relatableHttpStatusCode,
      extras,
      ZoroErrorEmailAddressValueRequired.innerCode
    );
  }
};

/**
 * Email address type invalid
 */
module.exports.ZoroErrorEmailAddressTypeInvalid = class ZoroErrorEmailAddressTypeInvalid extends (
  ErrorResponse
) {
  static innerCode = 11;
  static relatableHttpStatusCode = 400;
  static message = "Email addresse type invalid";
  constructor(extras) {
    super(
      ZoroErrorEmailAddressTypeInvalid.message,
      ZoroErrorEmailAddressTypeInvalid.relatableHttpStatusCode,
      extras,
      ZoroErrorEmailAddressTypeInvalid.innerCode
    );
  }
};

/**
 * Phone number value required
 */
module.exports.ZoroErrorPhoneNumberValueRequired = class ZoroErrorPhoneNumberValueRequired extends (
  ErrorResponse
) {
  static innerCode = 12;
  static relatableHttpStatusCode = 400;
  static message = "Phone number value is required";
  constructor(extras) {
    super(
      ZoroErrorPhoneNumberValueRequired.message,
      ZoroErrorPhoneNumberValueRequired.relatableHttpStatusCode,
      extras,
      ZoroErrorPhoneNumberValueRequired.innerCode
    );
  }
};

/**
 * Canonical phone number begin
 */
module.exports.ZoroErrorCanonicalPhoneNumberBegin = class ZoroErrorCanonicalPhoneNumberBegin extends (
  ErrorResponse
) {
  static innerCode = 13;
  static relatableHttpStatusCode = 400;
  static message = "Canonical phone number can not begin with 0";
  constructor(extras) {
    super(
      ZoroErrorCanonicalPhoneNumberBegin.message,
      ZoroErrorCanonicalPhoneNumberBegin.relatableHttpStatusCode,
      extras,
      ZoroErrorCanonicalPhoneNumberBegin.innerCode
    );
  }
};

/**
 * Phone number value begin
 */
module.exports.ZoroErrorPhoneNumberValueBegin = class ZoroErrorPhoneNumberValueBegin extends (
  ErrorResponse
) {
  static innerCode = 15;
  static relatableHttpStatusCode = 400;
  static message =
    "Phone number value can not begin with 0 when country code is provided";
  constructor(extras) {
    super(
      ZoroErrorPhoneNumberValueBegin.message,
      ZoroErrorPhoneNumberValueBegin.relatableHttpStatusCode,
      extras,
      ZoroErrorPhoneNumberValueBegin.innerCode
    );
  }
};

/**
 * Invalid country code value
 */
module.exports.ZoroErrorInvalidCoutryCode = class ZoroErrorInvalidCoutryCode extends (
  ErrorResponse
) {
  static innerCode = 14;
  static relatableHttpStatusCode = 400;
  static message = "Invalid country code";
  constructor(extras) {
    super(
      ZoroErrorInvalidCoutryCode.message,
      ZoroErrorInvalidCoutryCode.relatableHttpStatusCode,
      extras,
      ZoroErrorInvalidCoutryCode.innerCode
    );
  }
};

/**
 * Invalid phone number type
 */
module.exports.ZoroErrorInvalidPhoneNumberType = class ZoroErrorInvalidPhoneNumberType extends (
  ErrorResponse
) {
  static innerCode = 16;
  static relatableHttpStatusCode = 400;
  static message = "Invalid phone number type";
  constructor(extras) {
    super(
      ZoroErrorInvalidPhoneNumberType.message,
      ZoroErrorInvalidPhoneNumberType.relatableHttpStatusCode,
      extras,
      ZoroErrorInvalidPhoneNumberType.innerCode
    );
  }
};

/**
 * Given name required
 */
module.exports.ZoroErrorGivenNameRequired = class ZoroErrorGivenNameRequired extends (
  ErrorResponse
) {
  static innerCode = 17;
  static relatableHttpStatusCode = 400;
  static message = "Given name is required";
  constructor(extras) {
    super(
      ZoroErrorGivenNameRequired.message,
      ZoroErrorGivenNameRequired.relatableHttpStatusCode,
      extras,
      ZoroErrorGivenNameRequired.innerCode
    );
  }
};

/**
 * Organization name required
 */
module.exports.ZoroErrorOrganizationNameRequired = class ZoroErrorOrganizationNameRequired extends (
  ErrorResponse
) {
  static innerCode = 18;
  static relatableHttpStatusCode = 400;
  static message = "Organisation name required";
  constructor(extras) {
    super(
      ZoroErrorOrganizationNameRequired.message,
      ZoroErrorOrganizationNameRequired.relatableHttpStatusCode,
      extras,
      ZoroErrorOrganizationNameRequired.innerCode
    );
  }
};

/**
 * Function required
 */
module.exports.ZoroErrorFunctionRequired = class ZoroErrorFunctionRequired extends (
  ErrorResponse
) {
  static innerCode = 19;
  static relatableHttpStatusCode = 400;
  static message = "Function required";
  constructor(extras) {
    super(
      ZoroErrorFunctionRequired.message,
      ZoroErrorFunctionRequired.relatableHttpStatusCode,
      extras,
      ZoroErrorFunctionRequired.innerCode
    );
  }
};

/**
 * Organization location required
 */
module.exports.ZoroErrorOrganizationLocationRequired = class ZoroErrorOrganizationLocationRequired extends (
  ErrorResponse
) {
  static innerCode = 20;
  static relatableHttpStatusCode = 400;
  static message = "Organisation location required";
  constructor(extras) {
    super(
      ZoroErrorOrganizationLocationRequired.message,
      ZoroErrorOrganizationLocationRequired.relatableHttpStatusCode,
      extras,
      ZoroErrorOrganizationLocationRequired.innerCode
    );
  }
};

/**
 * Phone numbers list can not be empty
 */
module.exports.ZoroErrorPhoneNumberListCanNotBeEmpty = class ZoroErrorPhoneNumberListCanNotBeEmpty extends (
  ErrorResponse
) {
  static innerCode = 21;
  static relatableHttpStatusCode = 400;
  static message = "Phone number list can not be empty";
  constructor(extras) {
    super(
      ZoroErrorPhoneNumberListCanNotBeEmpty.message,
      ZoroErrorPhoneNumberListCanNotBeEmpty.relatableHttpStatusCode,
      extras,
      ZoroErrorPhoneNumberListCanNotBeEmpty.innerCode
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
      ZoroErrorUnknown.relatableHttpStatusCode,
      extras,
      ZoroErrorUnknown.innerCode
    );
  }
};
