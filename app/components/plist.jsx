import React from 'react';
import {get} from "../utils/ajax.js";

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={"loading": false, "list": []};
    }

    componentDidMount(){
        this.setState({"firstView": true});
    }

    componentWillReceiveProps(nextProps){
        let keyword = nextProps.keyword;

        this.setState({"loading": true, "firstView": false});

        let url = `http://api.github.com/search/users?q=${keyword}`;

        get(url).then((data)=>{
            this.setState({"loading": false, "list": data.items});
        }).catch((error)=>{
            console.error(error);
        });
    }

    render(){
        const imgStyle={
            width: "80px"
        };

        if(this.state.firstView){
            return (
                <h2>Enter name to search</h2>
            )
        }
        if(this.state.loading){
            return (
                <h2>Loading result ....</h2>
            )
        }else{
            return (
                <div className="row">
                    {this.state.list.map(people => {
                        return (
                            <div className="card" key={people.id}>
                                <img src={people.avatar_url} style={imgStyle}/>
                                <p className="card-text">
                                    {people.login}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}