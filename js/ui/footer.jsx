import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.less';
import ScrollManager from 'window-scroll-manager'
import Links from './links';

class Footer extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        const sm = new ScrollManager();

        this.state = {
            scrollPosition: 0
        };

        window.addEventListener('window-scroll', (e) => {
            this.setState({
                scrollPosition: e.detail.scrollPosition
            });
        });
    }

    /**
     *
     * @returns {number}
     * @private
     */
    static _getDocHeight() {

        const html = document.querySelector("html");
        const body = document.querySelector("body");

        return Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
    }

    /**
     *
     * @returns {Number|number}
     * @private
     */
    static _getWindowHeight() {

        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0];

        return w.innerHeight || e.clientHeight || g.clientHeight;
    }

    /**
     *
     * @returns {number}
     * @private
     */
    _getBlurAmount() {

        /*
         * TODO: Use react library to extract these from LESS file.
         */
        const footerHeight = 450;
        const maxBlurPixels = 20;

        const docHeight = this._getDocHeight();
        const windowHeight = this._getWindowHeight();
        const scrollPosition = this.state.scrollPosition;
        const contentBottomPos = docHeight - (scrollPosition + windowHeight);
        const percentRevealed = (footerHeight - contentBottomPos) / footerHeight;
        const percentRevealedClamped = 1 - (percentRevealed < 0 ? 0 : percentRevealed);

        return Math.floor(maxBlurPixels * percentRevealedClamped);
    }

    /**
     *
     * @param blurAmount
     * @returns {{filter: string, -webkit-filter: string}}
     * @private
     */
    static _getBlurStyle(blurAmount) {
        const blurAmount = blurAmount + 'px';
        return {
            'filter': 'blur(' + blurAmount + ')',
            '-webkit-filter': 'blur(' + blurAmount + ')'
        };
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const blurStyle = this._getBlurStyle(this._getBlurAmount());

        // return (
        //     <div styleName="footer" style={blurStyle}>
        //         <Links/>
        //     </div>
        // )

        return (
            <div styleName="footer">
                <Links/>
            </div>
        )
    }
}

export default CSSModules(Footer, styles);


