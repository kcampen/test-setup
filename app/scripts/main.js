
function Collection (models) {
	this.models = models || [];
	this.find = function (id) {
		var result;

		if (typeof(id) != 'string') {
			throw new Error("whoops");
		}
	

	this.models.forEach(function(value, index){
      if (value.id == id) {
        result = value;
      }
    });
 
    if (result) {
      return result;
    }
  };

  this.add = function(newStudent){

  	if (_.isEmpty(newStudent)) {
  		throw new Error('Empty argument')
  	};

    if (!newStudent.hasOwnProperty('id')) {
      throw new Error('does not have id')
    }

  	this.models.push(newStudent);
  };
};
 
 

 
// a Collection has a .find() method that searches by ID
// students.find('1') // should return {name: 'Bower', id: '1'}
 
// a Collection has an .add() method that takes an object literal,
// and adds it to the models array
// students.add({name: 'jimmy', id:'3'})
 
// a Collection has a .remove() method that takes an id,
// and removes it from the models array
// students.remove('3')






// function Ugh(result, days) {
// 	return "I saved" + " " + result + " " + "in" + days + "s" 

// 	return function(){
// 		var result = 1;
// 		var days = 0;
// 		while (days <= 31){
// 			result = result * 2;
// 			days = days + 1;
// 		};
// 	};


// };








