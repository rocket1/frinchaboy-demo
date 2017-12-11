import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './demo-modal.less';
import cx from "classnames";
import Close from 'react-material-icons/icons/navigation/close';
import Masonry from 'react-masonry-component';

class DemoModal extends Component {

    /**
     *
     * @param e
     */
    static preventTouchMove(e) {
        console.log('modal scroll');
        e.preventDefault();
        e.stopPropagation();
    }

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
     * @private
     */
    _lockScroll() {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    /**
     *
     * @private
     */
    _unlockScroll() {
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const project = this.props.project;
        const title = project && project.title ? project.title : '';
        const tech = project && project.tech ? project.tech.join(', ') : '';

        const url = project && project.url ? (
            <div styleName="url">
                <a target="_blank" href={project.url} onClick={(e) => {
                    e.stopPropagation();
                }}>{project.urlText ? project.urlText : project.url}</a>
            </div>
        ) : null;

        let content = null;

        // TODO: Wish this was in the CSS, but didn't work there :(
        const masonryOptions = {
            gutter: 24
        };

        if (project) {

            this._lockScroll();

            let screenshots = project.screenshots.map((src, index) => {
                return <div key={index} styleName="screenshot"><img src={src}/></div>
            });

            content = (
                <div className="content">
                    {url}
                    <div styleName="verbose">{project.verbose ? project.verbose : project.description}</div>
                    <div styleName="tech">{tech}</div>
                    <Masonry options={masonryOptions} styleName="screenshots">{screenshots}</Masonry>
                </div>
            );
        }
        else {
            this._unlockScroll();
        }

        let className = cx(styles['demo-modal'], {
            [styles.show]: !!project
        });

        return (

            <div className={className} style={{backgroundColor: this.props.bgColor}}>
                <div styleName="modal-wrapper">
                    <div styleName="toolbar-wrapper">
                        <div styleName="toolbar">
                            <h2>{title}</h2>
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
