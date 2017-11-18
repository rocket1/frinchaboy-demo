import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoGrid from '../demo-grid/demo-grid';
import DemoModal from '../demo-modal/demo-modal';
import Header from '../ui/header';
import styles from './app.less';
import keydown from 'react-keydown';

class App extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {
            project: null,
            modalBgColor: null
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /**
     *
     * @param e
     */
    @keydown('esc')
    submit(e) {
        e.preventDefault();
        this.closeModal();
    }

    /**
     *
     * @param project
     * @param bgColor
     */
    openModal(project, bgColor) {
        this.setState({modalBgColor: bgColor, project: project});
    }

    /**
     *
     */
    closeModal() {
        this.setState({project: null});
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <Route exact path="/">
                        <div>
                            <DemoModal project={this.state.project} closeFunc={this.closeModal}
                                       bgColor={this.state.modalBgColor}/>
                            <Header/>
                            <div styleName="content">
                                <div styleName="content-inner">
                                    <DemoGrid demoBoxClick={this.openModal}/>
                                </div>
                            </div>
                        </div>
                    </Route>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default CSSModules(App, styles);


