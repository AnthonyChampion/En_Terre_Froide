import { useParams } from "react-router-dom";
import formules from '../datas/formules.json';
import "./EventPage.css";

export default function EventPage() {
    const { id } = useParams();
    const data = formules.formules;

    const eventData = data.find(
        (event) => event.id === parseInt(id, 10));

    return (
        <section className="eventPage_container">
            <h1>{eventData.name}</h1>
            <div>
                <p>Description : {eventData.description}</p>
                <p>Date : {eventData.date}</p>
                <p>Prix : {eventData.prix}</p>
            </div>
            <div className="img_container">
                <img src={eventData.img} alt={eventData.name} />
                <img src={eventData.img2} alt={eventData.name} />
                <img src={eventData.img3} alt={eventData.name} />
                <img src={eventData.img4} alt={eventData.name} />
            </div>
            <div>
                <h2>Ce que nous fournissons: </h2>
                <div className="equipement_container">
                    <p className="equipement_fournis">{eventData.equipFournis.join(", ")}</p>
                    <p className="equipement_non_fournis">{eventData.equipAcheter.join(", ")}</p>
                </div>
            </div>
            <div>
                <h3>
                    Activitées proposées:
                </h3>
            </div>

        </section>
    );
}