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
                <a target="_blank" href="https://github.com/rocket1">Github</a>
                <a href="mailto:jazzmongrel@gmail.com">Contact</a>
            </div>
        )
    }
}

export default CSSModules(Footer, styles);


