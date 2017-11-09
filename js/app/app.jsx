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
     * @param evt
     */
    @keydown('esc')
    submit(evt) {
        evt.preventDefault();
        this.closeModal();
    }

    /**
     * Stolen from: https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r/5298684#5298684
     * @private
     */
    _removeHash() {
        history.pushState("", document.title, window.location.pathname
            + window.location.search);
    }

    /**
     *
     * @private
     */
    _addHash () {
        window.location = '#';
    }

    /**
     *
     * @param project
     * @param bgColor
     */
    openModal(project, bgColor) {
        document.body.style.overflow = "hidden";
        this.setState({modalBgColor: bgColor, project: project});
        //this._addHash();
    }

    /**
     *
     */
    closeModal() {
        document.body.style.overflow = "auto";
        this.setState({project: null});
       // this._removeHash();
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


