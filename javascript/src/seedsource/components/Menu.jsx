import React from 'react'
import ClimateNAModal from './ClimateNAModal'
import Instructions from '../../../../csrt/static/CSRT Instructions.pdf'
import ModalCard from 'seedsource/components/ModalCard'
import fs_logo from '../../images/logos/usfs.png'
import blm_logo from '../../images/logos/blm.png'
import gbnpp_logo from '../../images/logos/gbnpp.png'
import osu_logo from '../../images/logos/osu.png'
import cbi_logo from '../../images/logos/cbi.png'

export default () => {
    const climatenaModal = React.createRef()
    const peopleModal = React.createRef()

    return [
        <div className="has-text-dark is-size-6" key="modals">
            <ClimateNAModal ref={climatenaModal} />

            <ModalCard ref={peopleModal} title="People">
                <p>
                    The Climate Smart Restoration Tool is a collaboration between the US Forest Service, Oregon State
                    University, Bureau of Land Management and the Conservation Biology Institute. This tool uses some
                    of the concepts and web development of the Seedlot Selection Tool. See the
                    &nbsp;<a href="https://seedlotselectiontool.org" target="_blank">Seedlot Selection Tool</a>&nbsp;
                    for additional acknowledgments and funding sources. Software development was led by
                    Conservation Biology Institute.
                </p>
                <p>
                    Funding for the Climate Smart Restoration Tool was provided by the Great Basin Native Plant Program.
                </p>
                <p>&nbsp;</p>
                <div className="columns">
                    <div className="column">
                        <a href="http://www.fs.fed.us/" target="_blank">
                            <img src={fs_logo} alt="Forest Service" style={{maxHeight: '50px'}} />
                        </a>
                    </div>
                    <div className="column">
                        <a href="https://www.blm.gov/" target="_blank">
                            <img src={blm_logo} alt="Conservation Biology Institute" style={{maxHeight: '50px'}} />
                        </a>
                    </div>
                    <div className="column">
                        <a href="http://www.greatbasinnpp.org/" target="_blank">
                            <img src={gbnpp_logo} alt="Conservation Biology Institute" style={{maxHeight: '50px'}} />
                        </a>
                    </div>
                    <div className="column">
                        <a href="http://oregonstate.edu/" target="_blank">
                            <img src={osu_logo} alt="Oregon State University" style={{maxHeight: '50px'}} />
                        </a>
                    </div>
                    <div className="column">
                        <a href="http://consbio.org" target="_blank">
                            <img src={cbi_logo} alt="Conservation Biology Institute" style={{maxHeight: '50px'}} />
                        </a>
                    </div>
                </div>
                <p>&nbsp;</p>
                <h4 className="title is-4">Contact Information</h4>
                <p>
                    Dr. Bryce Richardson – Co-Principal Investigator<br />
                    Research Geneticist, Rocky Mountain Research Station<br />
                    USDA Forest Service, Moscow, Idaho, USA<br />
                    <a href="mailto:bryce.richardson2@usda.gov">bryce.richardson2@usda.gov</a>
                </p>
                <p>
                    Dr. Francis Kilkenny – Co-Principal Investigator<br />
                    Research Biologist, Rocky Mountain Research Station<br />
                    USDA Forest Service, Boise, Idaho, USA<br />
                    <a href="mailto:francis.f.kilkenny@usda.gov">francis.f.kilkenny@usda.gov</a>
                </p>
                <p>
                    Dr. Brad St.Clair – Co-Principal Investigator<br />
                    Research Geneticist, Pacific Northwest Research Station<br />
                    USDA Forest Service, Corvallis, Oregon, USA<br />
                    <a href="mailto:bstclair@fs.fed.us">bstclair@fs.fed.us</a>
                </p>
                <p>
                    Nikolas Stevenson-Molnar – Project Manager, Lead Developer<br />
                    Software Engineer<br />
                    Conservation Biology Institute, Corvallis, Oregon, USA<br />
                    <a href="mailto:nik.molnar@consbio.org">nik.molnar@consbio.org</a>
                </p>
            </ModalCard>
        </div>,

        <a className='navbar-item' href={Instructions} target="_blank" key="instructions">Instructions</a>,
        <a className='navbar-item' onClick={() => climatenaModal.current.show()} key="climatena">ClimateNA</a>,
        <a className='navbar-item' onClick={() => peopleModal.current.show()} key="people">People</a>
    ]
}


