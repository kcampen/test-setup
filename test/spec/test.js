(function () {
    'use strict';
 
    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
 
    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should return an object when given an id that is present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('99')).to.deep.equal ({name: 'Jim', id: '99'})
        });
 
        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.equal(undefined);
        });
 
        it("should throw an error when given an arguemnt other than a string", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });
      });
 
      describe("has an .add() method",function(){
        it("should add the object it's given to the models property", function(){
        	var students = new Collection ([{name:'Jim', id:'99'}]);
        	students.add({name:'Toddy', id:'7'});
        	expect(students.models[0]).to.equal({name:'Toddy', id:'7'});
        });
        it("should increase the models property's length by 1", function(){ 
        	var students = new Collection([{name: 'Jim', id: '99'}]);
        	var startLength = students.models.length;
        	students.add({name: 'Toddy', id: '7'});
        	expect(students.models.length).to.be.equal(startLength + 1);
        	});
        it("should only accept a single object as an argument");

        it("should throw an error if given an empty object as an argument", function(){
        	var students = new Collection([{name: 'Jim', id: '99'}]);
        	expect(students.add([{}])).to.throw(Error);
        	});
        it("should throw an error when given an object without and id property", function(){
        	var students = new Collection([{name: 'Jim', id: '99'}]);
        	expect(students.models([{name: 'string', id: ''}])).to.throw(Error);
        });
      });
 	
      describe("has a .remove() method",function(){
        it("should, when given an id, remove the corresponding object from the models property")
        it("should decrease the models property's length by 1");
        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      });

      describe('has an .empty() method', function(){
		it('should clear out the models array');
		});

	 describe("has an .random() method", function(){
		it ('should return a random object from the models array');
	});

	describe('has a .length() method', function(){
		it('should reutrn the length models array');
	});

    })

})();




//  describe('A Collection instance', function () {
//       describe('has a .find() menthod', function () {
//         it('should return an object when given an id that is present in the models', function(){
//           var students = new Collection([{name: 'Jim', id: '99'}]);
//           expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'});
//         });

//         it("should not return an object when that id is not present in the models", function(){
//           var students = new Collection([{name: 'Jim', id: '99'}]);
//           expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
//         });
 
//         it("should return undefined when that id is not present in the models", function(){
//           var students = new Collection([{name: 'Jim', id: '99'}]);
//           expect(students.find('1')).to.equal(undefined);
//         });
 
//         it("should throw an error when given an arguemnt other than a string", function(){
//           var students = new Collection([{name: 'Jim', id: '99'}]);
//           expect(function(){students.find(1)}).to.throw(Error);
//           expect(function(){students.find({})}).to.throw(Error);
//           expect(function(){students.find([])}).to.throw(Error);
//         });      
//       });





// describe("has a .find() method",function(){
// 	 it("should return an object when given an id that is present in the models");
// 	 it("should not return an object when that id is not present in the models");
// 	 it("should return undefined when that id is not present in the models");
// 	 it("should throw an error when given an arguemnt other than a string");

 
// describe("has an .add() method",function(){
//         it("should add the object it's given to the models property");
//         it("should increase the models property's length by 1");
//         it("should only accept a single object as an argument");
//         it("should not  accept an empty object as an argument");
//         it("should throw an error when given an object without and id property");
//       });
 
// describe("has a .remove() method",function(){
//         it("should, when given an id, remove the corresponding object from the models property");
//         it("should decrease the models property's length by 1");
//         it("should only accept a single string as an id argument");
//         it("should return true on successful removal");
//       })
//     });

// describe('has an .empty() method', function(){
// 	it('should clear out the models array');
// });

// describe("has an .random() method", function(){
// 	it ('should return a random object from the models array');
// });

// describe('has a length() method', function(){
// 	it('should reutrn the length models array');
// });









