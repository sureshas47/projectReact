import React, {Component} from 'react';
import SecondComponent from './secondComponent';
import {Link} from "react-router-dom"; //import component

class FirstComponent extends Component {
    constructor(props) { //......create a state where we can store data
        super(props);
        this.state={username:""}; //.....this is a scope of a class, yesbata yo state ko sab file access garna sakinxa
        this.state={address:""};
        this.state={contact:""};
    }
    handleChange=(event)=>{
        //......or we can use either bind or arrow function,
        // this.handleChange=this,handleChange.bind(this); //bad practice always write for single element
        //....handleChange function maa bind nagaresamma this laai chindaina tei vayera bind gareko ho.
        this.setState({[event.target.name]:event.target.value}) //set state and capturing value
    };

    //this is parent function of firstComponent
    //function with passing value
    callFromSecondComponent=(name)=>
    {
        alert("hello"+name);
    }


    render() {

        return (
            // <div>
            //     this is my first component
            //     <SecondComponent/> //call component
            //
            // </div>

            <div>
                <input type="text" name="username" placeholder="userName" onChange={this.handleChange}/>
                <input type="text" name="address" placeholder="address" onChange={this.handleChange}/>
                <input type="number" name="contact" placeholder="mob number" onChange={this.handleChange} />

               {/*<br/>User Name: {this.state.username}*/}
               {/* <br/>User Address: {this.state.address}*/}

               {/*.........props can not be changed in runtime, here i send username in a (Un props)*/}
               <SecondComponent
                   Un={this.state.username}
                   Add={this.state.address}
                   Cn={this.state.contact}
                   test="this is test"
                   callFromSecondComponent={()=>this.callFromSecondComponent("suresh")} //creating props and passing function as a props
               //
               />
                {/*change route using link and send parameter */}
                <Link to={{
                    pathname: "/clock",
                    search: "?sort=name",
                    hash: "#the-hash",
                   // state: { fromDashboard: true }
                }}>
                    <button>change route</button></Link>
            </div>
        );
    }
}

export default FirstComponent;
//lifecycle of react-componentDidMount()