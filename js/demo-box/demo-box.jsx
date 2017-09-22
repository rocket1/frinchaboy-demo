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

        let project = this.props.config;

        const ImageDiv = styled.div`
            background-image: url(${project.imgSrc});
        `;

        const InfoDiv = styled.div`
            background-color: ${this.props.bgColor};
        `;

        this.StyledDemoBox = (
            <div styleName="demo-box">
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
     * @returns {XML}
     */
    render() {
        return this.StyledDemoBox;
    }
}

export default CSSModules(DemoBox, styles);
