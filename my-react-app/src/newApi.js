import React, {Component} from 'react';
import axios from 'axios';
import CovidCard from "./covidCard";
import ErrorComponent from "./errorComponent";

// noinspection EqualityComparisonWithCoercionJS
class NewApi extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                covidData: [],
                loading: true,
                error: false
            }
    }

    componentDidMount() {
        this.getRemoteData();
    }

    getRemoteData = () => {
        let self = this;

        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then(function (response) {
                self.setState({covidData: response.data, loading: false}) //save api data to the state variable
                //state khaali vayera loading chalako error remove garna/data aayesi loading false gardiyo
            })
            .catch(function (error) {
                self.setState({
                    error: true
                })

            });
    };
    onRetry = () => {
        this.setState({error: false, loading: true});
        this.getRemoteData();
    };
    handleChange = (event) => {
        // console.log(event.target.value);
        let data=this.state.covidData.filter(function (val){
            if (val.country.toLowerCase().indexOf(event.target.value.toLowerCase())!=-1){
                return val;
            }
        });
        this.setState({covidData:data});
    };



    render() {
        return (
            <div>
                {
                    this.state.error ?
                        <ErrorComponent onRetry={this.onRetry}/> :

                        this.state.loading ?
                            <div>data is loading</div> :
                            <div>
                                <input type="text" placeholder="Search" onChange={this.handleChange}/>
                                {/*map vaneko foreach loop jstai ho*/}
                                {this.state.covidData.map((data) =>

                                        <CovidCard data={data}/>
                                    // <div>{data.country}</div>
                                )}
                            </div>
                }
            </div>
        );
    }
}

export default NewApi;