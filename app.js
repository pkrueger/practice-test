const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE 
let currentYear = 2022
let jsReleaseYear = 1995
let jsAge = currentYear - jsReleaseYear
let message = "The current age of Javascript is " + jsAge

console.log(message)

if(jsAge >= ageToVote) {
  console.log("Javascript is old enough to vote")
} else {
  console.log("Javascript is not old enough to vote")
}

logBreak()

console.log("Starting")
for (let i = 0; i < 101; i++) {
  if(i == 50) {
    console.log("Halfway")
  }
  console.log(i)
}
console.log("Finished")

logBreak()

console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)

logBreak()

cases.forEach(story => {
  console.log(story.title + " " + story.releaseYear)
})

logBreak()

cases.forEach(story => {
  if(story.releaseYear == 1903) {
    console.log(story.title)
  }
})

function logBreak() {
  console.log(" ")
}