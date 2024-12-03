// convert to arrow function with implicit return with no parameters
export const getRandom = () => Math.random();

//  convert to arrow function with implicit return with one parameter
export const getRandomBelow = (max) => Math.floor(Math.random() * max);

//  convert to arrow function with implicit return with two parameters
export const getRandomBetween = (min, max) => 
Math.floor(Math.random() * (max - min)) + min;

//  convert to arrow function with implicit return of an object
export const getEmptyProfile = () => ({
    name: "",
    email: "",
    imageUrl: ""
  });

//  convert to arrow function with an explicit return
export const makeNewProfile = (name, email, imageUrl) => {
  const profile = {};
  profile.name = name;
  profile.email = email;
  profile.imageUrl = imageUrl;
  return profile;
};
