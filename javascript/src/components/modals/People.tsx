import React, { RefObject } from 'react'
import ModalCard from '../../../../../seedsource-ui/lib/components/ModalCard'
import FSLogo from '../../../images/logos/usfs.png'
import BLMLogo from '../../../images/logos/blm.png'
import GBNPPLogo from '../../../images/logos/gbnpp.png'
import OSULogo from '../../../images/logos/osu.png'
import CBILogo from '../../../images/logos/cbi.png'

export default class People extends React.Component {
  modalRef: RefObject<ModalCard> = React.createRef()

  show = () => {
    this.modalRef?.current?.show()
  }

  hide = () => {
    this.modalRef?.current?.hide()
  }

  render() {
    return (
      <ModalCard ref={this.modalRef} title="People">
        <p>
          The Climate Smart Restoration Tool is a collaboration between the US Forest Service, Oregon State University,
          Bureau of Land Management and the Conservation Biology Institute. This tool uses some of the concepts and web
          development of the Seedlot Selection Tool. See the &nbsp;
          <a href="https://seedlotselectiontool.org" target="_blank" rel="noreferrer">
            Seedlot Selection Tool
          </a>
          &nbsp; for additional acknowledgments and funding sources. Software development was led by Conservation
          Biology Institute.
        </p>
        <p>Funding for the Climate Smart Restoration Tool was provided by the Great Basin Native Plant Program.</p>
        <p>&nbsp;</p>
        <div className="columns">
          <div className="column">
            <a href="http://www.fs.fed.us/" target="_blank" rel="noreferrer">
              <img src={FSLogo} alt="Forest Service" style={{ maxHeight: '50px' }} />
            </a>
          </div>
          <div className="column">
            <a href="https://www.blm.gov/" target="_blank" rel="noreferrer">
              <img src={BLMLogo} alt="Conservation Biology Institute" style={{ maxHeight: '50px' }} />
            </a>
          </div>
          <div className="column">
            <a href="http://www.greatbasinnpp.org/" target="_blank" rel="noreferrer">
              <img src={GBNPPLogo} alt="Conservation Biology Institute" style={{ maxHeight: '50px' }} />
            </a>
          </div>
          <div className="column">
            <a href="http://oregonstate.edu/" target="_blank" rel="noreferrer">
              <img src={OSULogo} alt="Oregon State University" style={{ maxHeight: '50px' }} />
            </a>
          </div>
          <div className="column">
            <a href="http://consbio.org" target="_blank" rel="noreferrer">
              <img src={CBILogo} alt="Conservation Biology Institute" style={{ maxHeight: '50px' }} />
            </a>
          </div>
        </div>
        <p>&nbsp;</p>
        <h4 className="title is-4">Contact Information</h4>
        <p>
          Dr. Bryce Richardson – Co-Principal Investigator
          <br />
          Research Geneticist, Rocky Mountain Research Station
          <br />
          USDA Forest Service, Moscow, Idaho, USA
          <br />
          <a href="mailto:bryce.richardson2@usda.gov">bryce.richardson2@usda.gov</a>
        </p>
        <p>
          Dr. Francis Kilkenny – Co-Principal Investigator
          <br />
          Research Biologist, Rocky Mountain Research Station
          <br />
          USDA Forest Service, Boise, Idaho, USA
          <br />
          <a href="mailto:francis.f.kilkenny@usda.gov">francis.f.kilkenny@usda.gov</a>
        </p>
        <p>
          Dr. Brad St.Clair – Co-Principal Investigator
          <br />
          Research Geneticist, Pacific Northwest Research Station
          <br />
          USDA Forest Service, Corvallis, Oregon, USA
          <br />
          <a href="mailto:bstclair@fs.fed.us">bstclair@fs.fed.us</a>
        </p>
        <p>
          Nikolas Stevenson-Molnar – Project Manager, Lead Developer
          <br />
          Software Engineer
          <br />
          Conservation Biology Institute, Corvallis, Oregon, USA
          <br />
          <a href="mailto:nik.molnar@consbio.org">nik.molnar@consbio.org</a>
        </p>
      </ModalCard>
    )
  }
}
