//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){

 const remove = str.split("") //converts to an array

  let news = remove.shift("") //removes 1st element from array
  let removeEnd =remove.pop("") //removes last element from array
  return remove.join("") //makes it into a string again
}
