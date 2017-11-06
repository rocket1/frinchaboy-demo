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
