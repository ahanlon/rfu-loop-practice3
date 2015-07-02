var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

//-----------------------------------

// Problem #1

for (var i = 0; i < students.length; i++) {
	console.log(students[i].age);
}

//-----------------------------------

// Problem #2

for (var i = 0; i < students.length; i++) {
	var namePlace = students[i].name + ', ' + students[i].city
	console.log(namePlace);
}

//-----------------------------------

// Problem #3

for (var i = 0; i < students.length; i++) {
	if (students[i].city === 'Boulder'){
		var isFrom = students[i].name + ' is from ' + students[i].city
		console.log(isFrom);
	}
}

//-----------------------------------

// Problem #4

for (var i = 0; i < students.length; i++) {

	if (students[i].age > 25 ){
		var isFrom = students[i].name + ' is older than 25' 
		console.log(isFrom);
	}
}