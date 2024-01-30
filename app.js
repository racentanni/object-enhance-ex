//Same Keys and Values

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed Paroperty Names

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42
let instructor = {
    first name: "Colt",
    [favoriteNumber]: "That is my Favorite"

}

//Object Methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

  const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!"
    }
  }

// createAnimal function

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

