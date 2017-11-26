import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DemoBox from '../demo-box/demo-box';
import demoConfig from '../../demo-config.json';
import styles from './demo-grid.less';
import MasonryInfiniteScroller from 'react-masonry-infinite';

class DemoGrid extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this._demoBoxes = demoConfig.projects.map((config, index) => {
            let bgColor = demoConfig.colors[index % demoConfig.colors.length];
            return <DemoBox demoBoxClick={props.demoBoxClick} key={index} config={config} bgColor={bgColor}/>
        });
        this._demoBoxes.unshift(
            <div styleName="intro-box" key="intro-box">
                <b>Jason Frinchaboy</b><br/>
                Computer Programmer.<br/>
                Web Developer.<br/>
                All around good guy.<br/><br/>

                <a target="_blank" href="/public/jason-frinchaboy-resume.pdf">R‌ésum‌é</a>
                <a target="_blank" href="https://github.com/rocket1/frinchaboy-demo">Source</a>
                <a target="_blank" href="https://github.com/rocket1">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/jason-frinchaboy-53207a52/">Linkedin</a>
                <a href="mailto:jazzmongrel@gmail.com">Contact</a>
            </div>
        );
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div styleName="demo-grid">
                <MasonryInfiniteScroller loadMore={() => false}>{this._demoBoxes}</MasonryInfiniteScroller>
            </div>
        );
    }
}

export default CSSModules(DemoGrid, styles);
