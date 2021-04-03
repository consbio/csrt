import React, { RefObject } from 'react'
import ModalCard from 'seedsource-ui/lib/components/ModalCard'

export default class ClimateNA extends React.Component {
  modalRef: RefObject<ModalCard> = React.createRef()

  show = () => {
    this.modalRef?.current?.show()
  }

  hide = () => {
    this.modalRef?.current?.hide()
  }

  render() {
    return (
      <ModalCard title="ClimateNA" ref={this.modalRef}>
        <p>
          {(() => {
            const name = (
              <a href="http://cfcg.forestry.ubc.ca/people/tongli-wang/" target="_blank" rel="noreferrer">
                Dr Tongli Wang
              </a>
            )

            return `ClimateNA is a software program written by ${name} and others that extracts and downscales 
                  monthly climate data layers for the normal period of 1961-1990 from moderate spatial resolution 
                  (4 x 4 km) to scale-free point estimates for the entire continent of North America (Wang et al. 
                  2016). The downscaling is achieved through a combination of bilinear interpolation and dynamic 
                  local elevational adjustment. ClimateNA uses the derived data as a baseline to determine downscaled 
                  historical and future climate variables for individual years and periods between 1901 and 2100. 
                  ClimateNA also calculates a number of biologically relevant climate variables from the temperature 
                  and precipitation data.`
          })()}
        </p>

        <h4 className="title is-4">Data sources</h4>
        <p>
          <em>Baseline data </em>
        </p>
        <p>
          {`The monthly baseline data for 1961-1990 normals were compiled from the following sources and unified 
                at 4 x 4 km spatial resolution`}
          :
        </p>
        <ol>
          <li>British Columbia: PRISM at 800 x 800 m from Pacific Climate Impact Consortium;</li>
          <li>
            {(() => {
              const prismLink = (
                <a href="http://www.prism.oregonstate.edu/" target="_blank" rel="noreferrer">
                  PRISM Climate Group
                </a>
              )
              return `Prairie provinces: PRISM at 4 x 4 km from the ${prismLink}`
            })()}
            ;
          </li>
          <li>United States: PRISM at 800 x 800 m from the PRISM Climate Group (Daly et al. 2008);</li>
          <li>The rest: ANUSPLIN at 4 x 4 km</li>
          <li>The rest of North America: ANUSPLIN at 4 x 4 km</li>
        </ol>
        <p>
          <em>Historical data</em>
        </p>
        <p>
          {`Historical monthly data were obtained from Climate Research Unit (CRU) (Harris et al 2014). The data
                version is CRU TS 3.23. The spatial resolution is 0.5 x 0.5° and covers the period of 1901-2014. 
                Anomalies were calculated for each year and period relative to the 1961-1990 normals.`}
        </p>
        <em>Future climate data</em>

        <p>
          {(() => {
            const name = (
              <a href="http://onlinelibrary.wiley.com/doi/10.1002/grl.50256/abstract" target="_blank" rel="noreferrer">
                Knutti et al (2013)
              </a>
            )
            return `The climate data for future periods, including 2020s (2010-2039), 2050s (2040-69) and 2080s 
                (2070-2100), were from General Circulation Models (GCMs) of the Coupled Model Intercomparison Project 
                (CMIP5) included in the IPCC Fifth Assessment Report (IPCC 2014). Fifteen GCMs were selected for two 
                greenhouse gas emission scenarios (RCP 4.5 and RCP 8.5). When multiple ensembles are available for each 
                GCM, an average was taken over the available (up to five) ensembles. Ensembles among the 15 GCMs are 
                also available. The 15 AOGCMs are CanESM2, ACCESS1.0, IPSL-CM5A-MR, MIROC5, MPI-ESM-LR, CCSM4, 
                HadGEM2-ES, CNRM-CM5, CSIRO Mk 3.6, GFDL-CM3, INM-CM4, MRI-CGCM3, MIROC-ESM, CESM1-CAM5, GISS-E2R and 
                were chosen to represent all major clusters of similar AOGCMs by ${name}.`
          })()}
        </p>

        <h4 className="title is-4">Climate variables used in Seedlot Select Tool</h4>
        <p>
          <em>1) Annual variables:</em>
        </p>
        <p>
          <em>Directly calculated annual variables:</em>
        </p>
        <div>
          <ul>
            <li>MAT mean annual temperature (°C)</li>
            <li>MWMT mean warmest month temperature (°C)</li>
            <li>MCMT mean coldest month temperature (°C)</li>
            <li>TD temperature difference between MWMT and MCMT, or continentality (°C)</li>
            <li>MAP mean annual precipitation (mm)</li>
            <li>MSP mean annual summer (May to Sept.) precipitation (mm)</li>
            <li>AHM annual heat-moisture index (MAT+10)/(MAP/1000))</li>
            <li>SHM summer heat-moisture index ((MWMT)/(MSP/1000))</li>
          </ul>
        </div>
        <p />
        <p>
          <em>Derived annual variables:</em>
        </p>
        <div>
          <ul>
            <li>DD&lt;0 degree-days below 0°C, chilling degree-days</li>
            <li>DD&gt;5 degree-days above 5°C, growing degree-days</li>
            <li>FFP frost-free period</li>
            <li>PAS precipitation as snow (mm) between August in previous year and July in current year</li>
            <li>EMT extreme minimum temperature over 30 years</li>
            <li>EXT extreme maximum temperature over 30 years</li>
            <li>Eref Hargreaves reference evaporation (mm)</li>
            <li>CMD Hargreaves climatic moisture deficit (mm)</li>
          </ul>
        </div>
        <div>&nbsp;</div>
        <h4 className="title is-4">References</h4>
        <p>
          Wang, T., A. Hamann, D.L. Spittlehouse, and C. Carroll. 2016. Locally downscaled and spatially conceptualized
          climate data for historical and future periods for North America. PLoS ONE 11(6): e0156720.
        </p>
        <p>
          Wang, T., Hamann, A., Spittlehouse, D., and Aitken, S. N. 2006. Development of scale-free climate data for
          western Canada for use in resource management. International Journal of Climatology, 26(3):383-397.
        </p>
        <p>
          Daly. C., M. Halbleib, J. I. Smith, W. P. Gibson, M. K. Doggett, G. H. Taylor, and J. Curtis, 2008.
          Physiographically sensitive mapping of temperature and precipitation across the conterminous United States.
          Int. J. Climatol., 28, 2031–2064.
        </p>
        <p>
          Harris, I., P.D. Jones, T.J. Osborn, and D.H. Lister. 2014. Updated high-resolution grids of monthly climatic
          observations - the CRU TS3.10 Dataset. International Journal of Climatology 34: 623-642.
        </p>
        <p>
          Knutti, R., D. Masson, and A. Gettelman. 2013. Climate model genealogy: Generation CMIP5 and how we got there.
          Geophys. Res. Lett. 40: 1194–1199.
        </p>
      </ModalCard>
    )
  }
}
