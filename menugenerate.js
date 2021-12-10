const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts : this.desserts,
    };
  },
addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
    name : dishName,
    price : dishPrice,
  };
  return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and the total price ${totalPrice}.`
}
};

menu.addDishToCourse('appetizers', 'Fries', 2.50);
menu.addDishToCourse('appetizers', 'Breadsticks', 1.50);
menu.addDishToCourse('appetizers', 'Onion Rings', 3.50);

menu.addDishToCourse('mains', 'Double Cheese Burger', 7.50);
menu.addDishToCourse('mains', 'Pesto Pasta', 8.50);
menu.addDishToCourse('mains', 'Steak', 10.50);

menu.addDishToCourse('desserts', 'Vanilla Ice Cream', 4.50);
menu.addDishToCourse('desserts', 'Cream Puff', 3.50);
menu.addDishToCourse('desserts', 'Tiramisu', 7.50);

const meal = menu.generateRandomMeal();
console.log(meal);
