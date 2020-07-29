import React, { useContext } from 'react'
import Filter from '../../context/Filter'

const SelectFilter = () => {
  const { setFilter } = useContext(Filter);
  return (
    <div>
      Filtrer les tâches :
      <select onChange={e => setFilter(e.target.value)}>
        <option value="all">Toutes</option>
        <option value="false">En cours</option>
        <option value="true">Terminées</option>
      </select>
    </div>
  )
}

export default SelectFilter