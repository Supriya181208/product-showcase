import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <Greeting name="Supriya" />

      <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
        <ProductCard title="Keyboard" price={49} inStock={true} />
        <ProductCard title="Monitor" price={199} inStock={false} />
        <ProductCard title="Mouse" price={25} inStock={true} />
      </div>
    </main>
  );
}