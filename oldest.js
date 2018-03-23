function oldest(listOfPeople){

  //how do I find the biggest thing in a listOfPeople

  // create and empty variable for the oldest person

  var oldestPerson = {
    name : "",
    age : 0
  };

  // loop over the listOfPeople
  for (var i = 0; i < listOfPeople.length; i++) {
    var currentPerson = listOfPeople[i];
    // check if the current person is the older than the person in the oldest person variable

    // if this is the oldest person
    //store that person in the oldest person variable
    if (currentPerson.age > oldestPerson.age){
        oldestPerson = currentPerson;
    }
  }

  //return the oldestPerson's name

  return oldestPerson.name;
}
