import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import formules from "../datas/formules.json";
import "./EventPage.css";

export default function EventPage() {
    const [activities, setActivities] = useState([]);
    const { id } = useParams();
    const data = formules.formules;

    useEffect(() => {
        const eventData = data.find((event) => event.id === parseInt(id, 10));
        if (eventData) {
            setActivities(eventData.activitees);
        }
    }, [id, data]);

    const eventData = data.find((event) => event.id === parseInt(id, 10));

    return (
        <section className="eventPage_container">
            <h1>{eventData.name}</h1>
            <div className="event_description">
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
                    <p className="equipement_fournis">
                        {eventData.equipFournis.join(", ")}
                    </p>
                    <p className="equipement_non_fournis">
                        {eventData.equipAcheter.join(", ")}
                    </p>
                </div>
            </div>
            <div>
                <h3>Activitées proposées:</h3>
                <div>
                    {activities.map((activity) => (
                        <div key={activity.activite_id}>
                            <h4>{activity.name}</h4>
                            <p>{activity.description}</p>
                            <img src={activity.img} alt={activity.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
