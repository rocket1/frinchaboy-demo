import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styled from 'styled-components'
import styles from './demo-box.less';

class DemoBox extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        let project = props.config;

        const ImageDiv = styled.div`
            background-image: url(${project.imgSrc});
        `;

        const InfoDiv = styled.div`
            background-color: ${props.bgColor};
        `;

        this.StyledDemoBox = (
            <div styleName="demo-box" onClick={(evt) => this.doClick(evt, project)}>
                <ImageDiv styleName="demo-img"/>
                <InfoDiv styleName="info-div">
                    <div styleName="title">{project.title}</div>
                    <div styleName="description">{project.description}</div>
                </InfoDiv>
            </div>
        );
    }

    /**
     *
     * @param evt
     * @param project
     */
    doClick(evt, project) {
        evt.preventDefault();
        this.props.demoBoxClick(project);
    }

    /**
     *
     */
    componentDidMount() {
       // console.log('mounted: ' + this.props.config.title);
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
