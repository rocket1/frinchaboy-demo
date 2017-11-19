import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.less';

class Footer extends Component {

    /**
     *
     * @param evt
     * @param project
     * @param bgColor
     */
    doClick(evt, project, bgColor) {
        evt.preventDefault();
        this.props.demoBoxClick(project, bgColor);
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div styleName="footer">
                {/*<a href="javascript: void(0)" onClick={(evt) => this.doClick(evt, project, props.bgColor)}>Bio</a>*/}
                <a href="javascript: void(0)">Resume</a>
                <a href="javascript: void(0)">Contact</a>
            </div>
        )
    }
}

export default CSSModules(Footer, styles);


