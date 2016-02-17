/**
 * Created by wuzhitian on 16-1-30.
 */

import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/search.jsx";
import Plist from "./components/plist.jsx";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {"keyword": ""};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }

    refreshKeyword(name){
        this.setState({"keyword": name});
    }

    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Seaaarch Github User</h3>
                    <Search sendAction={this.refreshKeyword}></Search>
                </section>
                <Plist keyword={this.state.keyword}></Plist>
            </div>
        )
    }
}

const appHook = document.createElement("div");
document.body.appendChild(appHook);

ReactDOM.render(<App />, appHook);