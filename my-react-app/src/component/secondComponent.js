import React, {Component} from 'react';
import ThirdComponent from "./thirdComponent"; //import component

class SecondComponent extends Component {
    render() {
        return (
            <div>
                {/*this is my second component*/}
                {/*<ThirdComponent/> //call component*/}

                {/*get the vaue using this.props*/}
                User Name from component first:
                {this.props.Un}
               <br/> {this.props.Add}
                <br/>{this.props.Cn}
                <br/>{this.props.test}
                {/*call parent function in child */}
                <button onClick={this.props.callFromSecondComponent}>call function</button>
            {/*    call function with value*/}
            </div>

        );
    }
}

export default SecondComponent;
//child ko function pani parent lqe call garna milxa but references banauna parxa