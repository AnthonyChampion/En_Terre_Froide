import SliderTrips from "../components/SliderTrips";
import LastTrip from "../components/LastTrip";
import "./HomePage.css";

export default function HomePage() {
    return (
        <section className="HomePageComponent">
            <div className="banner_container">
                <h1 className="home_title">Bienvenue en &quot;Terre Froide&quot;, créateur d&apos;expériences</h1>
                <p className="concept_description">Embarquez pour des aventures uniques au coeur des terres glacées : explorez les merveilles des contrées scandinaves et polaires avec notre agence de voyages atypiques.</p>
                <SliderTrips />
            </div>

            <LastTrip />

        </section>
    );
}