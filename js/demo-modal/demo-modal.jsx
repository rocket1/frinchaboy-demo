import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './demo-modal.less';
import cx from "classnames";

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
        let content = project ? <h2>{project.title}</h2> : null;
        let className = cx(styles['demo-modal'], {
            [styles.show]: !!project
        });

        return (
            <div className={className} style={{top: top}}>
                <div styleName="toolbar-wrapper">
                    <div className="toolbar">
                        <a onClick={(e) => this.closeModal(e)} href>
                            close
                            {/*<img src="/images/icon/ic_close_white_24dp/web/ic_close_white_24dp_1x.png" />*/}
                        </a>
                    </div>
                </div>
                <div className="body">
                    <div className="content">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(DemoModal, styles);
