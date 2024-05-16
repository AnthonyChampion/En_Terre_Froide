import SliderTrips from "../components/SliderTrips";
import "./HomePage.css";

export default function HomePage() {
    return (
        <section className="HomePageComponent">
            <h1>Bienvenue sur TerreFroide, créateur d&apos;expériences</h1>
            <p>Embarquez pour des aventures uniques au coeur des terres glacées : explorez les merveilles des contrées scandinaves et polaires avec notre agance de voyage atypiques</p>
            <SliderTrips />
            <div className="last_trips">
                <p>Voyages passés</p>
            </div>

        </section>
    );
}