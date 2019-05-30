import React from "react";

let detailsRecords = [{
    id:1,
    name:"John Doe",
    about:"Nice guy",
    hobby:"Likes drinking wine",
    skills:["html", "javascript", "redux"]
},{
    id:2,
    name:"Mary Moe",
    about:"Cute girl",
    hobby:"Likes playing xbox whole days long",
    skills:["Fortran", "Lua", "R#"]
}];

let UserDetail = class UserDetail extends React.Component {
    render(){
        let {detail} = this.props;
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{detail.name}</h2>
                                    <p><strong>About: </strong> {detail.about} </p>
                                    <p><strong>Hobbies: </strong> {detail.hobbies} </p>
                                    <p><strong>Skills: </strong>
                                        {detail.skills.map((skill, i)=>{
                                            return <span key={i} className="tags">{skill}</span>
                                        })}
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg" alt="" className="img-circle img-responsive"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let UserDetails = class UserDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            details:[]
        }
    }
    componentDidMount(){
        let {id} = this.props.params;
        console.log(id);
        if(id){
            this.setState({
                details:detailsRecords.filter((record)=>{
                    return record.id != id;
                })
            })
        } else {
            this.setState(
                this.setState({
                    details:detailsRecords
                })
            )
        }
    }
    render(){
        return (
            <div>
                {this.props.params.id && <h1>THIS IS PARAM FROM GRIDCOMPONENT: {this.props.params.id}</h1>}
                {this.state.details.map((detail, i)=>{
                    return <UserDetail key={i} detail={detail}/>
                })}
            </div>
        )
    }
};


export default UserDetails;