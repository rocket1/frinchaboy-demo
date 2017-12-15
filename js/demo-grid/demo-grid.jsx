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
                All around good guy.
            </div>
        );
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const sizes = [
            {columns: 1, gutter: 20},
            {mq: '768px', columns: 2, gutter: 20},
            {mq: '1024px', columns: 3, gutter: 20}
        ];

        return (
            <div styleName="demo-grid">
                <MasonryInfiniteScroller sizes={sizes} loadMore={() => false}>{this._demoBoxes}</MasonryInfiniteScroller>
            </div>
        );
    }
}

export default CSSModules(DemoGrid, styles);
