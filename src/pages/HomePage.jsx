import SliderTrips from "../components/SliderTrips";
import LastTrip from "../components/LastTrip";
import "./HomePage.css";

export default function HomePage() {
    const welcomeText = {
        fontSize: "2rem",
        marginBottom: "1rem"
    }
    return (
        <section className="HomePageComponent">
            <h1 style={welcomeText} className="home_title">Bienvenue en &quot;Terre Froide&quot;, créateur d&apos;expériences</h1>
            <p className="concept_description">Embarquez pour des aventures uniques au coeur des terres glacées : explorez les merveilles des contrées scandinaves et polaires avec notre agance de voyages atypiques</p>
            <SliderTrips />
            <LastTrip />

        </section>
    );
}