import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.less';
import Links from './links';

class Footer extends Component {

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div styleName="footer">
                <Links/>
            </div>
        )
    }
}

export default CSSModules(Footer, styles);


