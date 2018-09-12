"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var github_service_1 = require("./github.service");
describe('GithubService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [github_service_1.GithubService]
        });
    });
    it('should be created', testing_1.inject([github_service_1.GithubService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=github.service.spec.js.map