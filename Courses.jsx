


import "./Courses.css";

const formations = [
  {
    id: 1,
    nom: "Développement Web avec React",
    categorie: "Développement",
    duree: "3 mois",
    prix: "150 000 FCFA",
    apprenants: 45,
    statut: "Active",
    icone: "💻",
  },
  {
    id: 2,
    nom: "UI/UX Design",
    categorie: "Design",
    duree: "2 mois",
    prix: "100 000 FCFA",
    apprenants: 32,
    statut: "Active",
    icone: "🎨",
  },
  {
    id: 3,
    nom: "Marketing digital",
    categorie: "Marketing",
    duree: "2 mois",
    prix: "90 000 FCFA",
    apprenants: 28,
    statut: "Active",
    icone: "📱",
  },
  {
    id: 4,
    nom: "Bases de données avec MongoDB",
    categorie: "Développement",
    duree: "6 semaines",
    prix: "80 000 FCFA",
    apprenants: 24,
    statut: "Active",
    icone: "🗄️",
  },
  {
    id: 5,
    nom: "Initiation à la bureautique",
    categorie: "Bureautique",
    duree: "1 mois",
    prix: "50 000 FCFA",
    apprenants: 38,
    statut: "Bientôt",
    icone: "📊",
  },
  {
    id: 6,
    nom: "JavaScript pour débutants",
    categorie: "Développement",
    duree: "2 mois",
    prix: "100 000 FCFA",
    apprenants: 19,
    statut: "Active",
    icone: "⚙️",
  },
];

function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-heading">
        <div>
          <h1>Nos formations</h1>
          <p>Consultez et gérez les formations de votre centre.</p>
        </div>
        <button
          type="button"
          className="add-course-button"
          onClick={() => window.alert("La création de formation sera ajoutée prochainement.")}
        >
          + Nouvelle formation
        </button>
      </div>

      <div className="course-summary">
        <div>
          <span>Total des formations</span>
          <strong>{formations.length}</strong>
        </div>
        <div>
          <span>Formations actives</span>
          <strong>{formations.filter((f) => f.statut === "Active").length}</strong>
        </div>
        <div>
          <span>Apprenants inscrits</span>
          <strong>{formations.reduce((total, f) => total + f.apprenants, 0)}</strong>
        </div>
      </div>

      <div className="courses-grid">
        {formations.map((formation) => (
          <article className="course-card" key={formation.id}>
            <div className="course-card-top">
              <span className="course-icon">{formation.icone}</span>
              <span className={`course-status ${formation.statut === "Active" ? "active" : "soon"}`}>
                {formation.statut}
              </span>
            </div>

            <span className="course-category">{formation.categorie}</span>
            <h2>{formation.nom}</h2>

            <div className="course-info">
              <span>🕒 Durée</span>
              <strong>{formation.duree}</strong>
            </div>
            <div className="course-info">
              <span>👥 Apprenants</span>
              <strong>{formation.apprenants}</strong>
            </div>

            <div className="course-card-footer">
              <div>
                <small>Prix de la formation</small>
                <strong>{formation.prix}</strong>
              </div>
              <a href={`/formations/${formation.id}`}>Détails →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Courses;
