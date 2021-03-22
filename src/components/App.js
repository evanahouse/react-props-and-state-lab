import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
 
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  

  handleFindPetsClick = (e) => {
    let url = ""
    this.state.filters.type === "all" ? url = "/api/pets" : url = `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(res => res.json())
    .then(petData => this.setState({pets: petData}))
  }

  handleChangeType = (e) => {
  this.setState({filters: {...this.state.filters, type: e.target.value}})
  }

  handleAdopt = (id) => {
    let updatedPets = this.state.pets.map((pet) => { return pet.id === id ? {...pet, isAdopted: true} : pet})
    this.setState({pets: updatedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
