import React from 'react'

const Confirm = ({ remove, toggle, task }) => {
  return (
    <div className="confirm">
      <p>Voulez-vous vraiment supprimer cette tâche ?</p>
      <div><button onClick={() => remove(task)}>Confirmer</button></div>
      <div><button onClick={() => toggle()}>Annuler</button></div>
    </div>
  )
}

export default React.memo(Confirm)