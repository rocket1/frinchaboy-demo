import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoGrid from '../demo-grid/demo-grid';
import DemoModal from '../demo-modal/demo-modal';
import Header from '../ui/header';
import styles from './app.less';

class App extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {
            project: null
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /**
     *
     * @param project
     */
    openModal(project) {
        document.body.style.overflow = "hidden";
        this.setState({project: project});
    }

    /**
     *
     */
    closeModal() {
        document.body.style.overflow = "auto";
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
                            <DemoModal project={this.state.project} closeFunc={this.closeModal}/>
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


