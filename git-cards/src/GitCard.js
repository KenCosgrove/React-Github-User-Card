import React from 'react'
import axios from 'axios'

const profiles = []

class GitCard extends React.Component {
    constructor() {
        super()
        this.state = {
            profiles
        }
        console.log("constructor")
    }

    componentDidMount() {
        console.log("cdm")
        axios.get("").then(res=> {
            this.setState({
                profiles: res.data
            })
        }).catch(err => {
            console.log("error")
        })
    }
    render(){
        return(
                this.state.profiles.map(item =>(
                    <div>
                        <img src={item.avatar_url} alt=""></img>
                        <h2>{item.name}</h2>
                        <h3>{item.login}</h3>
                        <h3>Followers: {item.followers}</h3>
                        <h3>Following: {item.following}</h3>
                        <h3>Location: {item.location}</h3>
                        <h3>Bio: {item.bio}</h3>
                    </div>
                ))
            
        )
    }
    
}

export default GitCard
