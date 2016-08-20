/**
 * Created by vrigzlinuxmint13 on 8/20/16.
 */

'use strict';

import dependencies from '../src/dependencies'
import GithubModel from '../src/model/GithubModel'
import Github from '../src/controller/Github'
import * as FileExtension from '../src/constant/FileExtension'
import * as BaseUrl from '../src/constant/BaseUrl'


describe('Github', () => {
	describe('scrape', () => {

		it("returns status 200", function(done) {
			dependencies.Request(BaseUrl.GITHUB_PROJECTS_VR, function(error, response, body) {
			 dependencies.Chai.expect(response.statusCode).to.equal(200);
			 });
			done();
		});

	});
});