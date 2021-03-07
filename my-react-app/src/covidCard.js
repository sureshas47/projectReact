import React, {Component} from 'react';

class CovidCard extends Component {
    render() {
        let items=this.props.data;
        return (
            <div style={{backgroundColor:'#f5f5f5'}}>
               <p style={{color:'black'}}>{items.country}</p>
                <div style={{display:'flex', justifyContent:'space-between' }}>
                    <div style={{color:'blue', backgroundColor:'gray'}}>Cases</div>
                    <div style={{color:'green', backgroundColor:'gray'}}>Recovered</div>
                    <div style={{color:'red', backgroundColor:'gray'}}>Deaths</div>

                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{color:'blue'}}>{items.cases}</div>
                    <div style={{color:'green'}}>{items.recovered}</div>
                    <div style={{color:'red'}}>{items.deaths}</div>
                </div>
            </div>
        );
    }
}

export default CovidCard;