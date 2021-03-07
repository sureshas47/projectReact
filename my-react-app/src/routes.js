import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DigitalClock from "./digitalClock";
import FirstComponent from "./component/firstComponent";
import SecondComponent from "./component/secondComponent";
import NewApi from "./newApi";
class Routes extends Component {
    render() {
        return (
            <div>
                <Router>

                        <Switch>
                            <Route path="/" exact>
                                <FirstComponent />
                            </Route>
                            <Route path="/clock" exact>
                                <DigitalClock />
                            </Route>
                            <Route path="/api-call" exact>
                                <NewApi />
                            </Route>

                        </Switch>

                </Router>
            </div>
        );
    }
}

export default Routes;