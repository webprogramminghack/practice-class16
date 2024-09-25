type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
};

const result = fetch('https://api-example.com')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data as Todo;
  });

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const jsonString =
  '{"id": 1, "name": "Laptop", "price": 1200, "inStock": true}';

const product = JSON.parse(jsonString) as Product;

console.log(product.name);
console.log(product.price);
