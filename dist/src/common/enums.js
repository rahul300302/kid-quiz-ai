"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttemptStatus = exports.TestStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["STUDENT"] = "STUDENT";
})(UserRole || (exports.UserRole = UserRole = {}));
var TestStatus;
(function (TestStatus) {
    TestStatus["DRAFT"] = "DRAFT";
    TestStatus["SCHEDULED"] = "SCHEDULED";
    TestStatus["ACTIVE"] = "ACTIVE";
    TestStatus["COMPLETED"] = "COMPLETED";
})(TestStatus || (exports.TestStatus = TestStatus = {}));
var AttemptStatus;
(function (AttemptStatus) {
    AttemptStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AttemptStatus["COMPLETED"] = "COMPLETED";
    AttemptStatus["ABANDONED"] = "ABANDONED";
})(AttemptStatus || (exports.AttemptStatus = AttemptStatus = {}));
//# sourceMappingURL=enums.js.map