var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function(){

  describe("printName()", function() {

  	it("should print the last name first", function() {
  		var results = tools.printName({ first: "Manny", last: "Perez"});
  		 expect(results).to.equal("Perez, Manny");

  	});
  });

  describe("loadWiki()", function(){
    it("Load Abraham Lincoln's Wikipedia page");
    tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html){
      expect(html).to.be.ok;
    });
  });
});
