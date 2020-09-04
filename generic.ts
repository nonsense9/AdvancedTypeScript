// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

// const promise: Promise<string> = new Promise<string> (resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 2000)
// })

// promise.then(data => {
//   console.log(data);
// })

// =================

// function mergeObjects<T, R>(a: T, b: R): T & R {
//   return Object.assign({}, a, b)
// }

// const merged = mergeObjects({name: 'Vladilen'}, {age: 26})
// const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})

// console.log(merged);

// ===================

// interface ILength {
//   length: number
// }

// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//   return {
//     value,
//     count: `В этом объекте ${value.length} символов`
//   }
// }

// console.log(withCount('Hello'));
// console.log(withCount(['I', 'Am', 'Array']));
// console.log(withCount(20)); <= this wont work because number dont have method .length
// console.log(withCount({length: 20}));

// =====================

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key]
// }

// const person = {
//   name: 'Vladilen',
//   age: 26,
//   job: 'Javascript'
// }

// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

// ====================

// class Collection<T extends number | string | boolean> {
//   constructor(private _items: T[] = []) {}

//   add(item: T) {
//     this._items.push(item)
//   }

//   remove(item: T) {
//     this._items = this._items.filter(i => i !== item)
//   }

//   get items(): T[] {
//     return this._items
//   }
// }

// const strings = new Collection<string>(['I', 'Am', 'Strings'])
// strings.add('!')
// strings.remove('Am')
// console.log(strings.items);

// const numbers = new Collection<number>([1, 2, 3])
// numbers.add(0)
// numbers.remove(3)
// console.log(numbers.items);

// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2})
// console.log(objs.items); <= this actually wont work

// ======================

// interface Car {
//   model: string
//   year: number
// }

// function createAndValidateCar(model: string, year: number): Car {
//   const car: Partial<Car> = {} // <= here we saying that there's not enough requested fields, but we know about it so it's all good

//   if (model.length > 3) {
//     car.model = model
//   }
//   if (year > 2000) {
//     car.year = year
//   }
//   return car as Car
// }

// ====================

// const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift() // <= this wont work because
// cars[1];

// const ford: Readonly<Car> = {
//   model: 'Ford',
//   year: 2020
// }

// ford.model = 'Ferrari' // <= this wont work because of READONLY

// =====================

