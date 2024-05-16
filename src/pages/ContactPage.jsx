import { Link } from "react-router-dom";
export default function ContactPage() {
    return (
        <div>
            <h1>Nous contacter</h1>
            <div>
                <h4>une question, une envie ?</h4>
                <p>Vous pouvez nous envoyer un mail directement en passant par ici :</p>
                <div>
                    <input type="text" name="" id="" placeholder="Nom - Prénom" />
                    <input type="text" name="" id="" placeholder="Email" />
                    <textarea name="" id="" placeholder="Ecrivez votre message" />
                    <button>Envoyer</button>
                </div>
                <p>Vous pouvez également nous contactez individuellement <Link to={`/contact`}>ICI</Link></p>
            </div>
        </div>
    )
}