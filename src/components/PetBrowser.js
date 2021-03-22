import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petArray = this.props.pets
    return petArray.map(pet => (
    <div key={pet.id} className="ui cards">
        <Pet 
        onAdoptPet={this.props.onAdoptPet}
        petInfo={pet}
        />
    </div>
    ))
  }
}

export default PetBrowser
