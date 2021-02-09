import React, {Component} from 'react';

class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state={date:new Date()}
    }
    //componentDidMount first maa call huni function ho after render, api call haru garda maximum use hunxa
    //time interval ko kaam haru maa use hunxa
    componentDidMount() {
        let self=this; //componentDidMount function ko this laai chinauna self maa indicate gareko
                        //component laai bind garna mildaina
        this.timers=setInterval(function (){
        self.setState({ //in this line of code, self ko thau maa this use garda setInterval ko
                             // call back function le aafnai this vanxa so not allowed.
            date:new Date()
        })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timers);
    }


    render() {

        return (
            <div>
                <div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:20}}>{this.state.date.getHours()}:</div>
                        <div style={{padding:20}}>{this.state.date.getMinutes()}:</div>
                        <div style={{padding:20}}>{this.state.date.getSeconds()}</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default DigitalClock;
//about progressive web app