module.exports = function (name, idOrHobby, obj) {
  var errorArray = [];
  var noName = 'You need to enter a name Yo!';
  var noIdorHobby = 'Your second input field can not be blank Yo!'
  var numError = 'The name field can not contain a number Yo!';
  var numHobbyError = 'The hobby field can not contain a number Yo!'
  var noSpace = 'The input fields can not contain spaces Yo!';
  var nohoby = 'You need to enter a hobby Yo!';
  var noId = 'You need to enter a puppy ID Yo!';
  var pupLength = 'The puppy ID needs to be longer than 2 characters Yo!';
  var idExists = 'Oops! That puppy ID is already taken. Please use another';
  if (name.length <= 0) {
    errorArray.push(noName);
  }
  if (idOrHobby.length <= 0) {
    errorArray.push(noIdorHobby);
  }
  if (name.match(/\s/g) || idOrHobby.match(/\s/g)) {
    errorArray.push(noSpace);
  }
  if (name.match(/[0-9]/i)) {
    errorArray.push(numError);
  }
  if(obj.people) {
    if (idOrHobby.match(/[0-9]/i)) {
      errorArray.push(numHobbyError);
    }
  }
  if(obj.puppy) {
    if (idOrHobby.length <= 2) {
      errorArray.push(pupLength);
    }
    for (var i = 0; i < obj.puppyData.length; i++) {
      if (obj.puppyData[i].pupIdent === obj.puppy.puppyIdent) {
        errorArray.push(idExists);
        break
      }
    }
  }
  return errorArray
}
