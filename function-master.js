//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    return Object.keys(object).toString().split(',').join(' ')
    //Object.keys() returns the objects keys 
    //.toString() returns the keys in a string sperated by commas
    //.split(",") takes every string and puts them in an array seperated by "" and ,
    //.join(" ") joins array back into a string w no seperator

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let output = [];

    for(var key in object){//standard for in loop to iterate over object properties, key represents current prop.

        if(object.hasOwnProperty(key) && typeof object[key] === 'string'){
            //if statement checks if object has the property of key which is
            //the current prop and if the value current prop is equal to the type string
            
            output.push(object[key])
            //if it is then push the current prop to the output array
        }
    }

    return output.join(' ')//return the output and use .join to combine strings w a spce between them

  
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    }else if(typeof collection === 'object' && typeof collection !== null){
        return 'object';

    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   
    return string.charAt(0).toUpperCase() + string.slice(1);
    //returns the first character of the string capitalized
    //then uses .slice(1) to concatenate the rest of the string together.
   
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

var split = string.split(' ')
//set variable split = to the string.split() which divides input string into an array of words
//seperated by spaces

for(var i = 0; i < split.length; i++){
//for loop that iterates positively over the now split words
split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase()
//sets the current iteration of the string equal to split[i].charAt(0).toUpperCase()
//which grabs the first index in the current iteration and upper cases it.
// then concatenates with split[i].slice(1).toLowerCase()
//which grabs the rest of the word at second index of the current iteration and lowercases it 
}
return split.join(' '); //returns the 
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let name = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
    if(name){
        return `Welcome ${name}!`

    }

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let name = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
    let species = object.species.charAt(0).toUpperCase() + object.species.slice(1).toLowerCase();

    if(object.name && object.species){
        return `${name} is a ${species}`

    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  
    let noise = object.noises;
  
     if(!noise || noise.length === 0){
       return 'there are no noises'
     }else{
       return noise.join(' ')
     }
  
  }
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
           return true;
     }else{
            return false;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

    if(!object.friends){//if no friends prop exist on the object 
        object.friends = []; //initiate the friends prop in the object as an empty array
    }
    object.friends.push(name)//push the name string to the friends prop array

    return object;//return the object 
  
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    let check = object.friends //set variable equal to accessing the array in the object
    if(!check || !check.includes(name)){ //checks if the array in object exist
       //or if it doesnt include the name given 
       return false;//returns false
     }else{
       return true;//returns true
    }
  } 

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let output = [];
    for(var i = 0; i < array.length; i++){
        let person = array[i]
        // set person equal to the current iteration and array
        //now the name and friend props can be accessed with dot notation
        if(person.name !== name && !person.friends.includes(name) ){
            //if name prop in array not equal to name given
            //and the frinends prop in the array doesnt include the name given
            output.push(person.name)
            //push the name prop to ouput

        }

    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
   object[key] = value
   //checks if key exist on object, if it exist update value 
   //if it doesnt exist 
   return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}