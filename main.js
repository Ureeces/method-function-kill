/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(newFirst, newLast, newAge, isMarried) {
  return {
    firstName: newFirst || "Anonymous",
    lastName: newLast || "Person",
    age: newAge,
    married: isMarried || false,

    goingOn: function() {
      return this.age + 1;
    },

    ageUp: function() {
      this.age++;
    },
    
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },

    marry: function(partner) {
      this.married = true;
      partner.married = true;
      
      this.spouseName = partner.getFullName();
      partner.spouseName = this.getFullName();
    },

    divorce: function(partner) {
      this.married = false;
      partner.married = false;

      delete this.spouseName;
      delete partner.spouseName;
    }
  }
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
