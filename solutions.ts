function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase()
  }

  if (typeof value === "number") {
    return value * 10
  }

  return !value
}





function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length
  }

  if (Array.isArray(value)) {
    return value.length
  }

  return 0
}





class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}





interface Item {
  title: string
  rating: number
}

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4)
}




interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive)
}





interface Book {
  title: string
  author: string
  publishedYear: number
  isAvailable: boolean
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No'
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}






function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = []

  for (let i = 0; i < arr1.length; i++) {
    let exists = false
    for (let j = 0; j < result.length; j++) {
      if (arr1[i] === result[j]) {
        exists = true
        break
      }
    }
    if (!exists) result.push(arr1[i])
  }

  for (let i = 0; i < arr2.length; i++) {
    let exists = false
    for (let j = 0; j < result.length; j++) {
      if (arr2[i] === result[j]) {
        exists = true
        break
      }
    }
    if (!exists) result.push(arr2[i])
  }

  return result
}







interface Product {
  name: string
  price: number
  quantity: number
  discount?: number
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0

  return products.reduce((total, product) => {
    const price = product.price * product.quantity
    const discountedPrice = product.discount ? price * (1 - product.discount / 100) : price
    return total + discountedPrice
  }, 0)
}

