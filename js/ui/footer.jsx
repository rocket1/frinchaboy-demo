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
                <a target="_blank" href="/public/jason-frinchaboy-resume.pdf">R‌ésum‌é</a>
                <a target="_blank" href="https://github.com/rocket1/frinchaboy-demo">Source</a>
                <a target="_blank" href="https://github.com/rocket1">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/jason-frinchaboy-53207a52/">Linkedin</a>
                <a href="mailto:jazzmongrel@gmail.com">Contact</a>
            </div>
        )
    }
}

export default CSSModules(Footer, styles);


