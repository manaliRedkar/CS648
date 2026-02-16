// 1. Create a string array that contains your five favorite movies.
// Then, use the console to display the second movie in your array.
var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
];
console.log(movies[1]);

// 2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor.
// Then, assign one of your favorite movies to each index in the array until you have 5 total
// movies in your array. Then, use the console to display the first movie in your array.

var movies = new Array(5);
movies[0] = "Hungover";
movies[1] = "Titanic";
movies[2] = "Lion King";
movies[3] = "Legally Blonde";
movies[4] = "Dhurandhar";

console.log(movies[0]);

//3. Copy your code from step 2. Add a new movie into the 3rd position within your array. Then,
//  use the console to display the length of the array. You should now have 6 total movies
// stored in the array.

var movies = new Array(5);
movies[0] = "Hungover";
movies[1] = "Titanic";
movies[2] = "Lion King";
movies[3] = "Legally Blonde";
movies[4] = "Dhurandhar";

movies.splice(2, 0, "Avatar");

console.log(movies.length);

// 4. Declare an array called movies using literal notation. Then, assign one of your favorite
// movies to each index in the array until you have 5 total movies in your array. Now, use the
// delete operator to remove the first movie in the array. Use the console to display the
// contents of the array.

var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
];
delete movies[0];
console.log(movies);

//5. Declare an array called movies using literal notation. Then, assign one of your
// favorite movies to each index in the array until you have 7 total movies in your array.
// Now, use a for/in loop to iterate through the array and display each movie within
// the console window.

var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];

for (index in movies) {
  console.log(movies[index]);
}

//6. Copy the code from step 5. Now, use a for/of loop to iterate through the array and display
// each movie within the console window.

var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];

for (let movie of movies) {
  console.log(movie);
}

//7. Copy the code from step 5. Using the for/of loop to iterate through the array, display
// each movie within the console window in a sorted view.

var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];
movies.sort();
for (let movie of movies) {
  console.log(movie);
}

//8. Copy the code from step 5. Under the existing array, create a new array called leastFavMovies.
//  Populate the array with the 3 movies that you regret watching. Display both arrays within the
// console window so that it’s formatted to look like this..

var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];

var leastFavMovies = ["Love Hurts", "Snow White", "The Old Guard"];

console.log("Movies I like:");
for (let movie of movies) {
  console.log(movie);
}

console.log("Movies I regret watching:");
for (let movie of leastFavMovies) {
  console.log(movie);
}

//9. Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a
// single array called movies. Use the console window to display the list in reverse sorted

var movies = [
  "Hungover",
  "Titanic",
  "Lion king",
  "Legally blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];

var leastFavMovies = ["Love hurts", "Snow white", "The old guard"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
console.log(movies);

//10. Copy the code from step 9. Use an array function to return just the last item in the array
//  and display it within the console window.
var movies = [
  "Hungover",
  "Titanic",
  "Lion king",
  "Legally blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];

var leastFavMovies = ["Love hurts", "Snow white", "The old guard"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
console.log(movies[movies.length - 1]);

//11. Copy the code from step 10. Remove the previous method and this time use a method to return
//  just the first item in the array and display it within the console window.
var movies = [
  "Hungover",
  "Titanic",
  "Lion king",
  "Legally blonde",
  "Dhurandhar",
  "Mean girls",
  "Collateral",
];

var leastFavMovies = ["Love hurts", "Snow white", "The old guard"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
console.log(movies.shift());

//12. Programmatically retrieve the movies in your array that you do not like and return their
// indices. Then, using those indices, programmatically add movies that you do like.

var movies = [
  "Hungover",
  "Titanic",
  "Lion King",
  "Legally Blonde",
  "Dhurandhar",
  "Mean Girls",
  "Collateral",
  "Love Hurts",
  "Snow White",
  "The Old Guard",
];

var leastFavMovies = ["Love Hurts", "Snow White", "The Old Guard"];

var dislikedIndices = [];
for (let i = 0; i < movies.length; i++) {
  if (leastFavMovies.includes(movies[i])) {
    dislikedIndices.push(i);
  }
}

console.log("Indices of disliked movies:", dislikedIndices);
var newFavs = ["Inception", "The Dark Knight", "Interstellar"];
for (let i = 0; i < dislikedIndices.length; i++) {
  movies[dislikedIndices[i]] = newFavs[i];
}

console.log("Updated movie list:");
console.log(movies);

//13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5.
// The array should look something like this:

var movies = [
  ["Inception", 1],
  ["The Dark Knight", 2],
  ["Interstellar", 3],
  ["Lion King", 4],
  ["Titanic", 5],
];

console.log(movies);

//14. Create a string array called employees using literal notation and populate the array with several employee
// names. Then, create an anonymous function called showEmployee.....

var showEmployee = function (empArray) {
  console.log("Employees:\n");

  for (let employee of empArray) {
    console.log(employee.toUpperCase());
  }
};
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
showEmployee(employees);

//15. Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// Expected Result: [58, "abcd", true]
function filterValues(arr) {
  return arr.filter(function (value) {
    return value !== false && value !== null && value !== 0 && value !== "";
  });
}

// Test
console.log(filterValues([58, "", "abcd", true, null, false, 0]));

//16. Write a JavaScript function to get a random item from an array. So if I create a numeric
// array with 10 numbers and then pass that array into my function, the function should randomly
// return one of those numbers.
function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//17. Write a JavaScript function to get the largest number from a numeric array.
function getLargestNumber(arr) {
  return Math.max(...arr);
}
