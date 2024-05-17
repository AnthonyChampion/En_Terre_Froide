import { Link } from "react-router-dom";
import "./ContactPage.css";
export default function ContactPage() {
  return (
    <div className="contactContainer">
      <h1>Nous contacter</h1>
      <div className="questionnaireContainer">
        <h4>Une question, une envie ?</h4>
        <p>Vous pouvez nous envoyer un mail directement en passant par ici :</p>
        <div className="inset_Container">
          <input type="text" name="" id="" placeholder="Nom - Prénom" />
          <input type="text" name="" id="" placeholder="Email" />
          <textarea name="" id="" placeholder="Ecrivez votre message" />
          <button>Envoyer</button>
        </div>
        <p>
          Vous pouvez également nous contactez individuellement sur la page{" "}
          <Link to={"/about"}> à propos.</Link>
        </p>
      </div>
    </div>
  );
}
