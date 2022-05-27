import React from 'react'

function BikeTable(props) {
  return (
      <table className='biketable'>
          <tr>
            <th colSpan={2}>{props.name}</th>
          </tr>
          <tr>
              <th>Antall Ledige Sykler</th>
              <th>Antall Ledige Låser</th>
          </tr>
          <tr>
              <td>{props.num_bikes_available}</td>
              <td>{props.num_docks_available}</td>
          </tr>
      </table>
  )
}

export default BikeTable