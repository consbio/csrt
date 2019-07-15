import React from 'react'
import ClimateNAModal from './ClimateNAModal'
import CSRTImage from '../../images/csrt-collage.jpg'

export default () => {
    const climatenaModal = React.createRef()

    return (
        <div>
            <ClimateNAModal ref={climatenaModal}/>

            <h4 className="title is-4">Planting for the future</h4>
            <img src={CSRTImage} className="csrt-image" />

            <p className="about-text">
                Over a century of genetic research has shown that environment, in particularly climate, strongly affects
                plant genetic adaptation and the geography distance seed can be moved from its source location. The
                Climate Smart Restoration Tool (CSRT) was developed to provide information on seed collection and
                transfer of native plants. The CSRT maps current and future seed transfer limits for plant species with
                or without genetic information using climate data generating from ClimateNA (Wang et al. 2016). For
                information on ClimateNA see the <a onClick={() => climatenaModal.current.show()}>ClimateNA</a> link in
                the toolbar, and&nbsp;
                <a href="https://adaptwest.databasin.org/pages/adaptwest-climatena">
                    adaptwest.databasin.org/pages/adaptwest-climatena
                </a>.
            </p>
            <p>&nbsp;</p>
            <h5 className="title is-5">Plants with genetic information</h5>
            <p className="about-text">
                The CSRT uses genecological functions to map seed transfer limits of select species. The number of
                species with genetic information will evolve in time as more genetic data becomes available.
            </p>
            <p>&nbsp;</p>
            <h5 className="title is-5">Plants without genetic information</h5>
            <p className="about-text">
                Like the Seedlot Selection Tool (SST), the CSRT uses user-determined climate variables and thresholds to
                define seed transfer limits.
            </p>
            <p>&nbsp;</p>
            <h5 className="title is-5">Constraints</h5>
            <p className="about-text">
                The CSRT is capable of constraining seed transfer based on species distribution model (when available),
                ecoregion, geographic distance and elevation. Please review the instructions, which have
                species-specific recommendations for mapping seed transfer.
            </p>
        </div>
    )
}
