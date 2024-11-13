import crashImg from "../../assets/img/crash.png";
import Button from "../Button/Button";
import style from "./BlogCard.module.css";

export default function BlogCard() {
  return (
    <div className={style.blogCard}>
      <img src={crashImg} alt="" />
      <div className="blog-title-card">
        <h3>Crash Team Racing</h3>
        <p>
          Crash Team Racing, pubblicato come Crash Bandicoot Racing in Giappone,
          è un videogioco di guida sviluppato da Naughty Dog nel 1999 tratto
          dalla serie di videogiochi a piattaforme Crash Bandicoot.
        </p>
      </div>

      <Button />
    </div>
  );
}
