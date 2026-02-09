"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongo_module_1 = require("./database/mongo.module");
const users_module_1 = require("./users/users.module");
const courses_module_1 = require("./courses/courses.module");
const lessons_module_1 = require("./lessons/lessons.module");
const tests_module_1 = require("./tests/tests.module");
const questions_module_1 = require("./questions/questions.module");
const attempts_module_1 = require("./attempts/attempts.module");
const metrics_module_1 = require("./metrics/metrics.module");
const config_1 = require("@nestjs/config");
const ai_module_1 = require("./AI/ai.module");
const webhook_module_1 = require("./webhook/webhook.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }), mongo_module_1.MongoModule, users_module_1.UsersModule, courses_module_1.CoursesModule, lessons_module_1.LessonsModule, tests_module_1.TestsModule, questions_module_1.QuestionsModule, attempts_module_1.AttemptsModule, metrics_module_1.MetricsModule, ai_module_1.AiModule, webhook_module_1.WebhookModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map