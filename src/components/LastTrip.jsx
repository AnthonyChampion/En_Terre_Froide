import { useEffect, useState } from "react";
import formulesPast from "../datas/formulesPast.json"
import "./LastTrips.css";

export default function LastTrip() {

    const [lastTrips, setLastTrips] = useState([])

    useEffect(() => {
        setLastTrips(formulesPast.formulesPast);
    }, []);

    return (
        <section className="last_trips_container">
            <h1> Les derniers voyages organisés </h1>
            <div className="last_trips_details">
                {
                    lastTrips.length > 0 && lastTrips.map((datas) => (
                        <div className="last_trips_card"
                            key={datas.id}>
                            <img className="last_trip_img" src={datas.img} alt={datas.name}
                            />
                            <div className="details">
                                <h2>{datas.name}</h2>
                                <p>{datas.date}</p>
                            </div>

                        </div>
                    ))
                }

            </div>



        </section>
    )

}