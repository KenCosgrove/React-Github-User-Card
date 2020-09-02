import React from 'react'
import axios from 'axios'

class GitCard extends React.Component {
   constructor(){
    super()
    this.state = {
        users: [],
        search: '',
        error: '',
        followers: []
      };
   }
      componentDidMount() {
          console.log("cdm")
        axios
          .get('https://api.github.com/users/dustinmyers')
          .then(res => {
            this.setState({
              users: [...this.state.users, res.data]
            });
          })
          .catch(err => console.log("error"));
        axios
        .get("https://api.github.com/users/dustinmyers/following")
        .then(res=>{
            this.setState({
                followers: res.data
            })
            console.log(res.data)
            }).catch(err=>{
                console.log("error")
            }) 
      }
    
      handleChanges = e => {
        this.setState({
          search: e.target.value
        });
      };
    
      findUsers = e => {
        e.preventDefault();
        axios
          .get(`https://api.github.com/users/${this.state.search}`)
          .then(res => {
            this.setState({
              users: [...this.state.users, res.data],
              search: '',
              error: ''
            });
            console.log(this.state.users)
          })
          .catch(err => {
            this.setState({
              error: 'Could not find that user. Please try again'
            });
          });
      };
    
      render() {
        return (
        <div className="App">
            <h1>Github User Cards</h1>
            <input
              type="text"
              placeholder="search github handle here"
              value={this.state.search}
              onChange={this.handleChanges}
            />
            <button onClick={this.findUsers}>Find User</button>
            <div>
                 {this.state.users.map(user => (
                <div className="users">
                  <img src={user.avatar_url} alt="" />
                  <h2>{user.name}</h2>
                  <h3>{user.login}</h3>
                  <p>Followers: {user.followers}</p>
                  <p>Following: {user.following}</p>
                </div>
                ))} 
                
                 {this.state.followers.map(item => (
                    
                  <p className="followers">{item.login}</p>
                  
                ))} 
            </div>    
        </div>
          
        );
      }
    }

export default GitCard
