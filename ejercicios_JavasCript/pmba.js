let myFavoriteHero = 'Hulk'
let x = 50
let h = 5
let y = 10
let z = h + y
console.log(z)
const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25
console.log(character)
firstName = 'Jon'
lastName = 'Snow'
age = 24
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)
const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }
console.log(toy1.price + toy2.price)
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
globalBasePrice = 25000
const cars = [car1, car2]
for (const carKey in cars) {
  if (cars.hasOwnProperty(carKey)) {
    const car = cars[carKey]
    car.finalPrice = car.basePrice + globalBasePrice
  }
}
console.log(globalBasePrice)
console.log(car2.finalPrice)
console.log(car1.finalPrice)
let ten = 10
let five = 5
let suma = ten + five
console.log(suma)
let two = 2
let divide = ten / two
console.log(divide)
const fifteen = 15
const nine = 9
const resto = fifteen % nine
console.log(divide)
let o = 0
const p = 10
const j = 5
o += p + j
console.log(o)
let c = 10
let m = 5
let i = m * c
console.log(i)
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
avengers.splice(0, 1, 'IRONMAN')
console.log(avengers)
console.log(avengers.length)
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
rickAndMortyCharacters.pop()
console.log(
  rickAndMortyCharacters[0],
  rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
)
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)
const number1 = 10
const number2 = 20
const number3 = 2
let result = 0
if (number2 / number1 === number3) {
  console.log('number2 dividido entre number1 es igual a 2')
}
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}
if (number1 != number2) {
  console.log('number3 es distinto number1')
}
if (number3 * 5 === number1) {
  console.log('number3 por 5 es igual a number1')
}
if (number3 * 5 === number1 && number1 * number3 === number2) {
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  )
}
if (number2 / number3 === number1 || number1 / 5 === number3) {
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  )
}
for (let i = 0; i < 10; i++) {
  console.log(i)
}
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log('Intentando dormir 🐑')
  } else if (i === 10) {
    console.log('Dormido!')
  }
}
function sum(numberOne, numberTwo) {
  if (numberTwo > numberOne) {
    return numberTwo
  } else {
    return numberOne
  }
}
console.log(sum(60, 50))
const vengdores = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(arr) {
  let longestWord = ''
  for (word of arr) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord(vengdores))
const numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(arr) {
  let total = 0
  for (num of arr) {
    total += num
  }
  return total
}
console.log(sumAll(numbers))
function average(arr) {
  let total = 0
  for (num of arr) {
    total += num
  }
  return total / 2
}
console.log(average(numbers))
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(arrs) {
  let sum = 0
  for (const arr of arrs) {
    if (typeof arr === 'number') {
      sum += arr
    } else if (typeof arr === 'string') {
      sum += arr.length
    }
  }
  return sum
}
console.log(averageWord(mixedElements))
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(arr) {
  const uniqueWords = []
  for (let word of arr) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word)
    }
  }
  return uniqueWords
}
console.log(removeDuplicates(duplicates))
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(arr, name) {
  const existe = arr.includes(name)
  const posicion = existe ? arr.lastIndexOf(name) : -1
  return { existe, posicion }
}
console.log(finderName(nameFinder, 'Logan'))
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(arr) {
  const count = {}
  for (let work of arr) {
    count[work] ? count[work]++ : (count[work] = 1)
  }
  return count
}
console.log(repeatCounter(counterWords))
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
function filterStreams(arr, word) {
  for (const word of arr) {
    if (arr.includes(word)) {
      arr.splice(word, 1)
    }
  }
  return arr
}
console.log(filterStreams(products, 'Camiseta'))
const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]
for (const place of placesToTravel) {
  console.log(place)
}
const aliens = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (const alien in aliens) {
  console.log(`${alien}: ${aliens[alien]}`)
}
const placeToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
for (let i = 0; i < placeToTravel.length; i++) {
  let place = placeToTravel[i]
  if (place.id === 11 || place.id === 40) {
    placeToTravel.splice(i, 1)
    i--
  }
}
console.log(placeToTravel)
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
//esta funcion tiene un fallo que no logro resolver deleteToys()
function deleteToys(arr, word) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].name.includes(word)) {
      arr.splice(i, 1)
    }
  }
  return { arr, word }
}
console.log(deleteToys(toys, 'gato'))
const popularToys = []
const toys3 = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
for (let toy of toys3) {
  if (toy.sellCount > 15) {
    popularToys.unshift(JSON.stringify(toy))
  }
}
console.log(popularToys)
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
function replaceNotVeganFood(arr1, arr2) {
  const foodVegans = []
  for (let i = 0; i < arr1.length; i++) {
    const food = arr1[i]
    if (!food.isVegan) {
      const veganFood = {
        name: arr2[i],
        isVegan: true
      }
      foodVegans.push(JSON.stringify(veganFood))
    } else {
      foodVegans.push(JSON.stringify(food))
    }
  }
  return foodVegans
}
console.log(replaceNotVeganFood(foodSchedule, fruits))
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
function toOrderMovies(arr) {
  const smallMovie = []
  const averageMovie = []
  const bigMovie = []

  for (let movie of arr) {
    if (movie.durationInMinutes < 150) {
      smallMovie.push(JSON.stringify(movie))
    } else if (movie.durationInMinutes <= 200) {
      averageMovie.push(JSON.stringify(movie))
    } else {
      bigMovie.push(movie.name)
    }
  }
  return { smallMovie, averageMovie, bigMovie }
}
console.log(toOrderMovies(movies))
const productos = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
let totalSum = 0
for (let product of productos) {
  totalSum += product.sellCount
}
console.log(`Total ventas: ${totalSum}`)
const averageSale = (arr) => {
  for (let product of arr) {
    let totalSum = 0
    totalSum += product.sellCount
  }
  return totalSum / 2
}
console.log(averageSale(productos))
function bestSellingAndWorstSellingProducts(arr) {
  const goodProducts = []
  const badProducts = []
  for (let product of arr) {
    if (product.sellCount > 20) {
      goodProducts.push(JSON.stringify(product))
    } else if (product.sellCount < 20) {
      badProducts.push(JSON.stringify(product))
    }
  }
  return { goodProducts, badProducts }
}
console.log(bestSellingAndWorstSellingProducts(productos))
