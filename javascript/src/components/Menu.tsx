import React from 'react'
import ClimateNA from './modals/ClimateNA'
import People from './modals/People'
import Instructions from '../../documents/CSRT Instructions.pdf'

class Menu extends React.Component {
  climatenaRef: React.RefObject<ClimateNA> = React.createRef()

  peopleRef: React.RefObject<People> = React.createRef()

  render() {
    return (
      <>
        <div className="has-text-dark is-size-6" key="modals">
          <ClimateNA ref={this.climatenaRef} />
          <People ref={this.peopleRef} />
        </div>
        <a className="navbar-item" href={Instructions} target="_blank" key="instructions" rel="noreferrer">
          Instructions
        </a>
        <a className="navbar-item" onClick={() => this.climatenaRef.current?.show()} key="climatena">
          ClimateNA
        </a>
        <a className="navbar-item" onClick={() => this.peopleRef.current?.show()} key="people">
          People
        </a>
      </>
    )
  }
}

export default Menu
