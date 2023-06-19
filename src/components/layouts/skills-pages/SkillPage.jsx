import '../../../styles/base/base.css'
import './SkillPage.css'
import AppContext from "../../../context/AppContext";
import { useContext } from 'react';

function SkillPage() {
    const { infoShowed } = useContext(AppContext)

    return (
        <div className="infoSkill">
            <div className="infoSkill-header" >
                <div className='infoSkill-header--left'>
                    <div className="infoSkill-header--logo" >
                        { infoShowed.logo }
                    </div>
                    <div className="infoSkill-header--title" >
                        <h2>{ infoShowed.title }</h2>
                    </div>
                </div>
                <div className="infoSkill-header--right infoSkill-header--percentage">
                    <div className="percentege-box">
                        <div className="percentage-level" style={{ width: `${infoShowed.percentege}%` }} >
                            <div className="percentage-text">{ infoShowed.percentege }%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="infoSkill-paragraph">
                {
                    infoShowed.lenguagePage
                }
            </div>

            <div className="infoSkill-footer"></div>
        </div>
    );
}

export default SkillPage;