import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import LikeButton from "./components/LikeButton"; 

export default function Home() {
  return (
    <main>
        <Hero
      title= "My favourite Quotes From The Big Bang Theory "
      tagline="Bazinga"
      />

           
        <CardGrid items={items} />       
    </main>
  );
}