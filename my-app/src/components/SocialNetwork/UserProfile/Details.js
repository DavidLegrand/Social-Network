import React from 'react'

const Details = ({ details }) => {
  return (
    <div>
      <h2>Infos</h2>
      <p>{`Citation : ${details.bio}`}</p>
      <p>{`Emploi : ${details.job} chez ${details.company}`}</p>
      <p>{`Ville : ${details.city}`}</p>
      <p>{`Né(e) le : ${details.birthDate}`}</p>
      <p>{`Inscrit(e) depuis le : ${details.subscriptionDate}`}</p>
    </div>
  )
}

export default Details
