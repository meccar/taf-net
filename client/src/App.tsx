import "./App.css";

const products = [
  { name: "product1", price: 10 },
  { name: "product2", price: 20 },
];

function App() {
  return (
    <div>
      <div>
        <h1>Taf</h1>
      </div>
      <ul>
        {products.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
