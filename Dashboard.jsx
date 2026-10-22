
import "./Dashboard.css";

const statistiques = [
  { titre: "Total apprenants", valeur: "248", detail: "+12 ce mois-ci", icone: "👥" },
  { titre: "Formations", valeur: "12", detail: "4 catégories", icone: "📚" },
  { titre: "Inscriptions", valeur: "186", detail: "Cette année", icone: "📝" },
  { titre: "Taux de réussite", valeur: "87%", detail: "+5% ce mois-ci", icone: "📈" },
];

const apprenants = [
  { nom: "Aminata Diallo", formation: "Développement React", statut: "En cours", initiales: "AD" },
  { nom: "Moussa Ndiaye", formation: "UI/UX Design", statut: "Terminé", initiales: "MN" },
  { nom: "Fatou Sow", formation: "Marketing digital", statut: "En cours", initiales: "FS" },
  { nom: "Ibrahima Fall", formation: "Développement React", statut: "En attente", initiales: "IF" },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <div>
          <h1>Tableau de bord</h1>
          <p>Bienvenue sur SkillBoard ! Voici un aperçu de votre centre.</p>
        </div>
        <span className="dashboard-date">Année 2026</span>
      </div>

      <div className="stats-grid">
        {statistiques.map((stat) => (
          <div className="stat-card" key={stat.titre}>
            <div className="stat-top">
              <span>{stat.titre}</span>
              <span className="stat-icon">{stat.icone}</span>
            </div>
            <h2>{stat.valeur}</h2>
            <p>{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-panel">
        <div className="panel-heading">
          <div>
            <h2>Derniers apprenants</h2>
            <p>Suivez les inscriptions récentes.</p>
          </div>
          <a href="/apprenants">Voir les apprenants</a>
        </div>

        <div className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Apprenant</th>
                <th>Formation</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {apprenants.map((apprenant) => (
                <tr key={apprenant.nom}>
                  <td>
                    <div className="learner-cell">
                      <span className="learner-avatar">{apprenant.initiales}</span>
                      <strong>{apprenant.nom}</strong>
                    </div>
                  </td>
                  <td>{apprenant.formation}</td>
                  <td>
                    <span className={`status status-${apprenant.statut.toLowerCase().replace(" ", "-")}`}>
                      {apprenant.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>Activité des formations</h2>
        <p>Progression indicative des formations en cours.</p>
        <div className="progress-item">
          <div><span>Développement React</span><strong>75%</strong></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: "75%" }} /></div>
        </div>
        <div className="progress-item">
          <div><span>UI/UX Design</span><strong>60%</strong></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: "60%" }} /></div>
        </div>
        <div className="progress-item">
          <div><span>Marketing digital</span><strong>40%</strong></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: "40%" }} /></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

