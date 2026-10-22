

import { learners } from "../Data/Learners";

function Learners() {
  return (
    <div>
      <h2>Liste des apprenants</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Statut</th>
            <th>Date d'inscription</th>
          </tr>
        </thead>

        <tbody>
          {learners.map((learner) => (
            <tr key={learner.id}>
              <td>{learner.nom}</td>
              <td>{learner.email}</td>
              <td>{learner.statut}</td>
              <td>{learner.dateInscription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Learners;
