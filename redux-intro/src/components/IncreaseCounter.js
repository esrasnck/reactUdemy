import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {increaseCounter} from'../redux/actions/counterActions';
import {connect} from "react-redux";

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter())
                }}> 1 arttır </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}


export default connect(mapDispatchToProps)(IncreaseCounter); // increase counter'ı redux a connect ediyoruz

/*
// dispatch => çağırmak istediğimiz operasyonumuz. aksiyonun aslında ta kendisi
// bindActionCreators => bir aksiyonu bağlamak için reduxdan gelen bir aksiyon

*/