import { useEffect, useState } from "react";
import { register } from "swiper/element";
import { Link } from "react-router-dom";
import formules from "../datas/formules.json";
import "./SliderTrips.css";

register();

export default function SliderTrips() {
  const [slides, setSlides] = useState(0);

  const setSlidesPerview = () => {
    setSlides(window.innerWidth < 640 ? 1 : window.innerWidth >= 640 ? 4 : 0);
  };

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setSlidesPerview();
    setTrips(formules.formules);
    window.addEventListener("resize", setSlidesPerview);

    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <section className="trips_container">
      <h1>Voyages à venir</h1>
      <div className="swiper_container">
        <swiper-container
          centered-slides="true"
          slides-per-view={slides}
          loop="true"
        >
          {trips.map((data) => (
            <swiper-slide key={data.id}>
              <div className="trips_card">
                <Link to={`/voyage/${data.id}`}>
                  <img className="trip_img" src={data.img} alt={data.name} />
                </Link>
                <div className="trip_card_details">
                  <h2>{data.name}</h2>
                  <p>{data.date}</p>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}
