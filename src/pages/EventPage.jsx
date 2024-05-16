import { useParams } from "react-router-dom";
import formules from '../datas/formules.json';

export default function EventPage() {
    const { id } = useParams();
    const data = formules.formules;

    const eventData = data.find(
        (event) => event.id === parseInt(id, 10));

    return (
        <section className="EventPageComponent">
            <h1>{eventData.name}</h1>
            <img src={eventData.img} alt={eventData.name} />
            <p>Description : {eventData.description}</p>
            <p>Date : {eventData.date}</p>
            <h2>Prix : {eventData.prix}</h2>



        </section>
    );
}