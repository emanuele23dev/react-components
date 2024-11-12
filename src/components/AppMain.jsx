import crashImg from "../assets/img/crash.png";

export default function AppMain() {
  const title = "Il mio Blog React";

  return (
    <main>
      <div className="container">
        <h2 className="blog-title">{title}</h2>

        <section className="blog-post">
          <div className="blog-card">
            <img src={crashImg} alt="" />
            <div className="blog-title-card">
              <h3>Crash Team Racing</h3>
              <p>
                Crash Team Racing, pubblicato come Crash Bandicoot Racing in
                Giappone, è un videogioco di guida sviluppato da Naughty Dog nel
                1999 tratto dalla serie di videogiochi a piattaforme Crash
                Bandicoot.
              </p>
            </div>
            <button className="play">Play</button>
          </div>
        </section>
      </div>
    </main>
  );
}
