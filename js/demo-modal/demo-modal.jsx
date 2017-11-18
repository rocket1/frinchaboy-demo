import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './demo-modal.less';
import cx from "classnames";
import Close from 'react-material-icons/icons/navigation/close';
// import MasonryInfiniteScroller from 'react-masonry-infinite';
import Masonry from 'react-masonry-component';

class DemoModal extends Component {

    /**
     *
     * @param e
     */
    closeModal(e) {
        e.preventDefault();
        this.props.closeFunc();
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        let top = window.scrollY;
        let project = this.props.project;
        let content = null;

        if (project) {

            let screenshots = project.screenshots.map((src, index) => {
                return <div key={index} styleName="screenshot"><img src={src}/></div>
            });

            content = (
                <div className="content">
                    <div styleName="verbose">{project.verbose ? project.verbose : project.description}</div>

                    {/*<MasonryInfiniteScroller loadMore={() => false}>{screenshots}</MasonryInfiniteScroller>*/}
                    <Masonry>{screenshots}</Masonry>
                </div>
            );
        }

        let className = cx(styles['demo-modal'], {
            [styles.show]: !!project
        });

        return (
            <div className={className} style={{top: top, backgroundColor: this.props.bgColor}}>
                <div styleName="modal-wrapper">
                    <div styleName="toolbar-wrapper">
                        <div styleName="toolbar">
                            <h2>{project ? project.title : ''}</h2>
                            <a onClick={(e) => this.closeModal(e)} href>
                                <Close/>
                            </a>
                        </div>
                    </div>
                    <div styleName="body">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(DemoModal, styles);
