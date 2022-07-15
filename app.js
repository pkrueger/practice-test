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
const currentYear = 2022
const jsReleaseYear = 1995
let age = currentYear - jsReleaseYear

casesFiltered()

function p(message) {
    console.log(message)
}

function jsAge() {
  p(age)
}

function jsVote() {
  if(age > ageToVote) {
    p("JavaScript is old enough to vote")
  } else {
    p("JavaScript is not old enough to vote")
  }
}

function countingUp() {
  for(let i = 0; i < 101; i++) {
    if(i == 0) {
      p('Starting')
    }

    if(i == 50) {
      p('Halfway')
    }
    
    p(i)

    if(i == 100) {
      p('Finished')
    }
  }
}

function userAddress() {
  p(`${user.name} lives at ${user.address.street}, ${user.address.city}`)
}

function casesList() {
  for(item of cases) {
    p(`${item.title} ${item.releaseYear}`)
  }
}

function casesFiltered() {
  for(item of cases) {
    if(item.releaseYear == 1903) {
      p(item.title)
    }
  }
}