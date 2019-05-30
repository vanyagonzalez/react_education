import React from "react";

const user = {
    name:'Nicole Pearson',
    prof: 'Web Designer / UI',
    hobbies: ['Read', 'out with friends', 'listen to music'],
    skills: ['html5','css3','eact']
};

class UserDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            user:{
                hobbies:[],
                skills:[]
            }
        }
    }
    componentDidMount(){
        this.setState({
            user:user
        })
    }

    render() {
        let records = this.state.user.skills.map((record, index)=>{
            return <span className="tags" key={index}>{record}</span>
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{this.state.user.name}</h2>
                                    <p><strong>About: </strong>{this.state.user.prof}</p>
                                    <p><strong>Hobbies: </strong>{this.state.user.hobbies.join(', ')}</p>
                                    <p><strong>Skills: </strong>
                                        {records}
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
        );

    }
}

export default UserDetails;