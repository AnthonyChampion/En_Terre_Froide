import github from "../assets/icons/github.png";
import linkdin from "../assets/icons/linkedin.png";
import "./AboutUsPage.css";

export default function AboutUsPage() {
  return (
    <div className="aboutUsContainer">
      <h1>À propos de nous</h1>
      <h4>EN TERRE FROIDE© vous est présentez par </h4>
      <div className="profilesContainer">
        <p>Amel BONNEVIE</p>
        <div className="profiles">
          <a href="https://www.linkedin.com/in/anne-damien25/" target="_blank">
            <img src={linkdin} alt="linkdinIcon" />
          </a>
          <a href="" target="_blank">
            <img src={github} alt="githubIcon" />
          </a>
        </div>

        <p>Anne DAMIEN</p>
        <div className="profiles">
          <a href="" target="_blank">
            <img src={linkdin} alt="linkdinIcon" />
          </a>
          <a href="" target="_blank">
            <img src={github} alt="githubIcon" />
          </a>
        </div>

        <p>Anthony CHAMPION</p>
        <div className="profiles">
          <a href="https://www.linkedin.com/in/anthony-rodrigues-champion-368406188/">
            <img src={linkdin} alt="linkdinIcon" />
          </a>
          <a href="" target="_blank">
            <img src={github} alt="githubIcon" />
          </a>
        </div>

        <p>Aurélien LAVANCHY</p>
        <div className="profiles">
          <a href="" target="_blank">
            <img src={linkdin} alt="linkdinIcon" />
          </a>
          <a href="https://github.com/aurelienLavanchy" target="_blank">
            <img src={github} alt="githubIcon" />
          </a>
        </div>

        <p>Simon BESCH</p>
        <div className="profiles">
          <a href="https://www.linkedin.com/in/simon-bescheron/">
            <img src={linkdin} alt="linkdinIcon" />
          </a>
          <a href="https://github.com/simonbesch">
            <img src={github} alt="githubIcon" />
          </a>
        </div>
      </div>
      <div className="historyContainer">
        <h2>Qui somme nous ?</h2>
        <p>
          Notre entreprise, EN TERRE FROIDE©, est née de la passion de cinq
          collègues aventuriers pour les terres glacées et mystérieuses des
          régions polaires. Fondée en 2024, nous nous sommes spécialisés dans l
          organisation de voyages exclusifs vers des destinations froides, avec
          un accent particulier sur l Antarctique. Notre mission est de
          permettre à nos clients de découvrir la beauté sauvage et immaculée de
          ces contrées éloignées, tout en respectant l environnement fragile de
          ces écosystèmes. Nous proposons une variété de formules, contenant
          diverses activitées pour capturer la majesté des paysages glacés.
          Chaque voyage est guidé par des experts chevronnés et équipé des
          meilleures technologies pour assurer sécurité et confort. Avec un
          engagement envers la durabilité et une profonde connaissance des
          régions polaires, EN TERRE FROIDE© offre une expérience inoubliable et
          transformative, où aventure et respect de la nature se rencontrent.
        </p>
      </div>
    </div>
  );
}
