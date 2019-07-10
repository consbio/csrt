import React from 'react'
import ClimateNAModal from './ClimateNAModal'
import Instructions from '../../../../csrt/static/CSRT Instructions.pdf'

export default () => {
    const climatenaModal = React.createRef()

    return [
        <div className="has-text-dark is-size-6" key="modals">
            <ClimateNAModal ref={climatenaModal} />
        </div>,

        <a className='navbar-item' href={Instructions} target="_blank" key="instructions">Instructions</a>,
        <a className='navbar-item' onClick={() => climatenaModal.current.show()} key="climatena">ClimateNA</a>
    ]
}


