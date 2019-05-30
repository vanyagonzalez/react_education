import React from "react";

class SummaryActive extends React.Component {
    render(){
        return (
            <div>Active Users: {this.props.records.filter((record)=>record.active).length}</div>
        )
    }
}

class SummaryUsers extends React.Component {
    render(){
        return (
            <div>Users Count: {this.props.records.length}</div>
        )
    }
}

export {SummaryActive};
export {SummaryUsers};