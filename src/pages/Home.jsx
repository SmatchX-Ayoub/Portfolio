import "../css/Home.css";
import avatar from "../assets/images/avatarAyoub.jpg";
import ninjago from "../assets/images/presentationNinjago.jpg";
import musique from "../assets/images/musiqueAyoub.jpg";
import echec from "../assets/images/echecAyoub.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-content">

          {/* Section 1 */}
          <section className="section-box">
            <h1>Bienvenue sur mon portfolio</h1>
          </section>

          {/* Section 2 - Qui suis-je */}
          <section className="section-box about-section">
            <div className="about-left">
              <img src={avatar} alt="Avatar Ayoub" />
            </div>

            <div className="about-right">
              <h2>Qui suis-je ?</h2>
              <p>
                Je m'appelle Ayoub et j'ai presque 8 ans. Passionné par l’univers numérique, j’aime passer du temps sur Roblox,
                où je découvre des expériences créatives et immersives.
                <br /><br />
                Le développement web est pour moi une autre manière de créer :
                concevoir des interfaces, structurer des idées et donner vie à des projets.
                <br /><br />
                La musique m’accompagne au quotidien ; elle m’aide à me canaliser,
                à rester concentré et à nourrir ma créativité.
                <br /><br />
                Curieux et motivé, je cherche constamment à apprendre et à progresser.
              </p>
            </div>
          </section>

          {/* Section 3 - Jeux vidéo */}
          <section className="section-box game-section">
            <div className="game-left">
              <h2>Jeux vidéo</h2>
              <p>
                Le développement de jeux vidéo est un domaine qui me passionne particulièrement.
                <br /><br />
                J’utilise Unity avec C# pour créer des mécaniques de gameplay dynamiques,
                gérer les interactions et structurer mes projets de manière professionnelle.
                <br /><br />
                Je conçois également mes modèles 3D avec Blender afin de donner vie à mes univers.
                <br /><br />
                De la programmation à la modélisation,
                j’aime maîtriser chaque étape du processus de création
                pour produire des expériences immersives et cohérentes.
              </p>
            </div>

            <div className="game-right">
              <img src={ninjago} alt="Projet Unity Ayoub" />
            </div>
          </section>

          {/* Section 4 - Musique */}
          <section className="section-box about-section">
            <div className="about-left">
              <img src={musique} alt="Musique Ayoub" />
            </div>

            <div className="about-right">
              <h2>Le rythme de la musique</h2>
              <p>
                La musique occupe une place très importante dans ma vie.
                <br /><br />
                Elle m’aide à me canaliser, à me concentrer et à développer ma créativité.
                Quand je joue ou que j’écoute de la musique, je me sens plus calme et inspiré.
                <br /><br />
                J’apprends le piano en autodidacte grâce à l’application Flowkey.
                Cette application me permet de progresser à mon rythme,
                d’apprendre de nouveaux morceaux et de comprendre la musique étape par étape.
                <br /><br />
                Être autodidacte me rend fier, car j’aime apprendre par moi-même,
                m’améliorer chaque jour et relever de nouveaux défis musicaux.
                La musique fait partie de mon équilibre et m’accompagne dans tous mes projets.
              </p>
            </div>
          </section>

          {/* Section 5 - Échecs */}
          <section className="section-box game-section">
            <div className="game-left">
              <h2>Les échecs</h2>
             <p>
  Les échecs sont un jeu qui me passionne énormément.
  <br /><br />
  J’aime réfléchir, anticiper les coups de mon adversaire et construire des stratégies
  pour protéger mon roi tout en préparant mes attaques.
  Chaque partie demande concentration, patience, logique et réflexion mathématique.
  <br /><br />
  Les échecs m’aident à analyser une situation,
  à prendre des décisions importantes et à apprendre de mes erreurs.
  Quand je perds une partie, j’essaie de comprendre ce que je peux améliorer
  pour devenir plus fort.
  <br /><br />
  Ce jeu me permet de rester calme et concentré,
  tout en développant mon esprit stratégique.
  <br /><br />
  Aux échecs, il y a plusieurs pièces : le roi, la dame, les tours,
  les fous, les cavaliers et les huit pions.
  Il y a deux camps : le camp blanc et le camp noir.
  Chaque camp possède un roi et une dame,
  et le but du jeu est de mettre le roi adverse en échec et mat.
</p>
            </div>

            <div className="game-right">
              <img src={echec} alt="Échecs Ayoub" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Home;