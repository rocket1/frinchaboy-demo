import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoGrid from '../demo-grid/demo-grid';
import Header from '../ui/header';
import styles from './app.less';

class App extends Component {

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
                            <Header/>
                            <div styleName="content">
                                <div styleName="content-inner">
                                    <DemoGrid/>
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


