class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static ageComparison(firstUser, secondUser) {
    if (firstUser.age > secondUser.age) {
      return firstUser.firstName + " è più vecchio di " + secondUser.firstName;
    } else if (firstUser.age < secondUser.age) {
      return firstUser.firstName + " è più giovane di " + secondUser.firstName;
    } else {
      return (
        firstUser.firstName +
        " e " +
        secondUser.firstName +
        " hanno la stessa età."
      );
    }
  }
}

const user1 = new User("Alessandro", "Barlotta", 35, "Torino");
const user2 = new User("Beatrice", "Bentivoglio", 29, "Firenze");
const user3 = new User("Carlo", "Verdi", 35, "Venezia");
const user4 = new User("Giulio", "Marra", 29, "Napoli");

console.log(User.ageComparison(user1, user2));
console.log(User.ageComparison(user2, user3));
console.log(User.ageComparison(user4, user2));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(ownerCompare) {
    return this.ownerName === ownerCompare.ownerName;
  }
}

const petForm = document.getElementById("petForm");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  addPetToList(newPet);
});

const petList = document.getElementById("petList");
const petArray = [];

function addPetToList(pet) {
  const listItem = document.createElement("ul");

  const namePet = document.createElement("li");
  namePet.textContent = "Name: " + pet.petName;

  const ownerPet = document.createElement("li");
  ownerPet.textContent = "Owner: " + pet.ownerName;

  const speciesPet = document.createElement("li");
  speciesPet.textContent = "Species: " + pet.species;

  const breedPet = document.createElement("li");
  breedPet.textContent = "Breed: " + pet.breed;

  let sameOwner = false;
  for (let i = 0; i < petArray.length; i++) {
    if (pet.sameOwner(petArray[i])) {
      sameOwner = true;
      break;
    }
  }

  const sameOwnerPet = document.createElement("li");
  sameOwnerPet.textContent = "Same Owner " + sameOwner;

  petArray.push(pet);

  listItem.appendChild(namePet);
  listItem.appendChild(ownerPet);
  listItem.appendChild(speciesPet);
  listItem.appendChild(breedPet);
  listItem.appendChild(sameOwnerPet);

  petList.appendChild(listItem);
}
