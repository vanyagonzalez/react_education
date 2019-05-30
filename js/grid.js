import React from "react";
import PropTypes from "prop-types";
import {hashHistory} from 'react-router'

const dataSource = [
    {firstName: "John", lastName: "Doe", active: false, id: 1},
    {firstName: "Mary", lastName: "Moe", active: false, id: 2},
    {firstName: "Peter", lastName: "Noname", active: true, id: 3}
];


class GridComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            records:[]
        }
    }
    componentDidMount(){
        this.refs.filterInput && this.refs.filterInput.focus();
        this.setState({
            records:dataSource
        })
    }

    toggleActive(index){
        let {records} = this.state;
        records[index].active = !records[index].active;
        this.setState({
            records:records
        })
    }

    changeActive(index, newValue){
        let {records} = this.state;
        records[index].lastName = newValue;
        this.setState({
            records:records
        })
    }

    handleFilterChange(e){
        let value = e.target.value,
            records = dataSource.filter((record) => record.firstName.toUpperCase().includes(value.toUpperCase()));
        this.setState({
            records:records
        });
    }



    render(){
        let records = this.state.records.map((record, index)=>{
            return <GridRecord record={record} key={index}
                               toggleActive={this.toggleActive.bind(this, index)}
                               changeActive={this.changeActive.bind(this, index)}
            />
        });
        return (
            <div style={{width:300, height: 300, padding: 20}}>
                <p>
                    <input type="text" placeholder="Filter by..."
                           ref="filterInput"
                           onChange={this.handleFilterChange.bind(this)}/>
                </p>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Active</th>
                        </tr>
                    </thead>

                    <tbody>
                    {records}
                    </tbody>
                </table>
                <div>
                    {this.props.children && React.cloneElement(this.props.children, { records: this.state.records })}
                </div>
            </div>
        )
    }
}

class GridRecord extends React.Component {

    handleLastNameChange(e){
        this.props.changeActive(e.target.value);
    }

    showUserDetails(e){
        e.preventDefault();
        hashHistory.push(`/details/${this.props.record.id}`);
    }


    render(){
        let {record} = this.props;
        return <tr>
            <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
            <th>{record.firstName}</th>
            <th><input type="text"  value={record.lastName} onChange={this.handleLastNameChange.bind(this)}/></th>
            <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
        </tr>
    }
}

GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
};

GridRecord.propTypes = {
    record: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
};

export default GridComponent;