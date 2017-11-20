import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.less';

class Header extends Component {

    /**
     *
     * @returns {XML}
     */
    render() {

        // filter: blur(5px);
        // -webkit-filter: blur(5px);

        return (
            <div styleName="header">
                <div styleName="hero">
                    <div styleName="hero-text">
                        <h1>Jason Frinchaboy</h1>
                        <h2>Greatest Hits</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Header, styles);


