import React from 'react'
import CSRTImage from '../../images/csrt-collage.jpg'

export default () => (
    <div>
        <h4 className="title is-4">Planting for the future</h4>
        <img src={CSRTImage} className="csrt-image" />

        <p className="about-text">
            Over a century of genetic research has shown that environment, in particularly climate, strongly affects
            plant genetic adaptation and the geography distance seed can be moved from its source. The CSRT was
            developed to provide information on seed collection and transfer of native plants. The CSRT maps current
            and future seed transfer limits for plant species with or without genetic information.
        </p>
        <p>&nbsp;</p>
        <h5 className="title is-5">Plants with genetic information</h5>
        <p className="about-text">
            Like the Seedlot Selection Tool (SST), the CSRT uses user-determined climate variables and thresholds to
            define seed transfer limits.
        </p>
        <p>&nbsp;</p>
        <h5 className="title is-5">Plants without genetic information</h5>
        <p className="about-text">
            The CSRT is capable of constraining seed transfer based on species distribution model (when available),
            ecoregion, geographic distance and elevation. Please review the instructions, which have species-specific
            recommendations for mapping seed transfer.
        </p>
        <p>&nbsp;</p>
        <h5 className="title is-5">Constraints</h5>
        <p className="about-text">
            The CSRT is capable of constraining seed transfer based on: species distribution models (for some species)
            and ecoregions.
        </p>
    </div>
)
