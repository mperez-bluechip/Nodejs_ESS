var expect = require("chai").expect,
    tools = require("../lib/tools"),
    nock = require("nock");

describe("Tools", function(){

  describe("printName()", function() {

  	it("should print the last name first", function() {
  		var results = tools.printName({ first: "Manny", last: "Perez"});
  		 expect(results).to.equal("Perez, Manny");

  	});
  });

  describe("loadWiki()", function(done){
    before(function(){
      nock("https://en.wikipedia.org")
      .get("/wiki/Abraham_Lincoln")
      .reply(200, "Mock Abraham Lincoln Page");
    });
    it("Load Abraham Lincoln's Wikipedia page");
    tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html){
      expect(html).to.equal("Mock Abraham Lincoln Page");
      done();
    });
  });
});
