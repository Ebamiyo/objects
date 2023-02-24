// 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor= handleOfAuthor;
    this.content= content;
    this.imageLink= imageLink;
    this.numberOfViews= numberOfViews;
    this.numberOfLikes= numberOfLikes;
}

// 2. Create 2 Instagram post objects from the constructor function you created above
const fridayVibesPost = new instagramPost('Ebamiyo', 'Friday Vibes', 'https://media.istockphoto.com/id/1369153287/photo/carefree-young-black-guy-with-wireless-headset-dancing.jpg?b=1&s=170667a&w=0&k=20&c=x1J-BUwtWG3YnTvN0YZViyugbYxbonudSGtr50R4J4E=', 150, 80)
const foodiePost = new instagramPost('FoodyFoodie', 'Wow your palate!', 'https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg', 250, 200)

// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

// 3(a). Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.
function createPerson(name, age, location) {
return {
    name : name,
    age : age,
    location : location,
}
}

// create musa object
const musa = createPerson('Musa', 19, 'Lekki, Lagos State')


// 3(b) implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
function createJambScores (eng, govt, lit, crk) {
    return {
        eng : eng,
        govt : govt,
        lit : lit,
        crk : crk,
    }
}

// create musaScores object
const musaScores = createJambScores(70, 85, 82, 94)

// Add musaScores to musa
Object.assign(musa, musaScores)


// 4. What are the different ways you can clone an object? Give examples for each of them.
// Using Object.assign(target, source)
// clone musa object into newMusa
const newMusa = Object.assign({}, musa)

// Using the spread notation - ...
// clone musaScores into newMusaScores
const newMusaScores = {...{}, ...musaScores}

// 5. Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (const key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + ' is the presidential candiate of ' + key + '.');
}