export default function AppMain() {
  const title = "Il mio Blog React";

  return (
    <main>
      <div className="container">
        <h2 className="blog-title">{title}</h2>

        <section className="blog-post"></section>
      </div>
    </main>
  );
}
