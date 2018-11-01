import React from 'react'
import SageImage from '../../images/sage.gif'

export default () => (
    <div>
        <h4 className="title is-4">Planting for the future</h4>
        <img src={SageImage} className="about-sage" />
        <p classNmae="about-text">
            Over a century of genetic research has shown that environment, in particularly climate, strongly affects
            plant genetic adaptation and the geography distance seed can be moved from its source. The CSRT was
            developed to provide information on seed collection and transfer of native plants. The CSRT maps current
            and future seed transfer limits for plant species with or without genetic information.
        </p>
        <p>&nbsp;</p>
        <h5 className="title is-5">Plants with genetic information</h5>
        <p className="about-text">
            The CSRT using genecological functions to map seed transfer limits of select species. The number of
            species with genetic information will evolve in time a more data becomes available.
        </p>
        <p>&nbsp;</p>
        <h5 className="title is-5">Plants without genetic information</h5>
        <p className="about-text">
            The CSRT uses user defined climate variables and thresholds to define seed transfer limits.
        </p>
        <p>&nbsp;</p>
        <h5 className="title is-5">Constraints</h5>
        <p className="about-text">
            The CSRT is capable of constraining seed transfer based on: species distribution models (for some species)
            and ecoregions.
        </p>
    </div>
)
