import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class topics extends Component {
    

    render() {

        return (


            <div>
                <h2>Topics</h2>

                <ul>
                    <li>
                        <Link to={`/components`}>Components</Link>
                    </li> Props v. State
                    <li>
                        <Link to={`/props-v-state`}>
                            Props v. State
        </Link> Props v. State
                    </li>
                </ul>

                {/* The Topics page has its own <Switch> with more routes
        that build on the /topics URL path. You can think of the
        2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected */}
              
            </div>
        );

    }


    
}

export default topics;