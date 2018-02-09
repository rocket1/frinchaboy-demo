import React, {PureComponent} from 'react';
import CSSModules from 'react-css-modules';
import styled from 'styled-components'
import styles from './demo-box.less';

class DemoBox extends PureComponent {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        const project = props.config;

        const ImageDiv = styled.div`
            background-image: url(${project.imgSrc});
        `;

        const InfoDiv = styled.div`
            background-color: ${props.bgColor[0]};
            box-shadow: inset 0 0 5em 1em ${props.bgColor[1]};
        `;

        const url = project.url ? (
            <div styleName="url">
                <a target="_blank" href={project.url} onClick={(e) => {
                    e.stopPropagation();
                }}>{project.urlText ? project.urlText : project.url}</a>
            </div>
        ) : null;

        this.StyledDemoBox = (
            <div styleName="demo-box" onClick={(evt) => this.doClick(evt, project, props.bgColor)}>
                <ImageDiv styleName="demo-img"/>
                <InfoDiv styleName="info-div">
                    <div styleName="title">{project.title}</div>
                    {url}
                    <div styleName="description">{project.description}</div>
                </InfoDiv>
            </div>
        );
    }

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
        return this.StyledDemoBox;
    }
}

export default CSSModules(DemoBox, styles);
