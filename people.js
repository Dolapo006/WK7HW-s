const people = ['Dolapo', 'Yimika', 'Tawa', 'Norbel']
const ages = [21, 17, 47, 26];
console.log(people)

// module.exports = people
// when we are exporting things, the name of the varibale does not have to be the same on the two files.
//--------------------
//Exporting more than one  thing.

module.exports = {
    people, ages
}
