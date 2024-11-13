import BlogCard from "./BlogCard/BlogCard";
import cards from "../components/data/cards.js";

export default function AppMain() {
  const title = "Il mio Blog React";

  return (
    <main>
      <div className="container">
        <h2 className="blog-title">{title}</h2>

        <section className="blog-post">
          {/* <BlogCard />  */}

          {cards.map((card) => (
            <BlogCard key={card.id} />
          ))}
        </section>
      </div>
    </main>
  );
}
