import React from 'react'
import axios from 'axios'


class GitCard extends React.Component {
   constructor(){
    super()
    this.state = {
        users: [],
        search: '',
        error: ''
      };
   }
      componentDidMount() {
          console.log("cdm")
        axios
          .get('https://api.github.com/users/KenCosgrove')
          .then(res => {
            this.setState({
              users: res.data
            });
          })
          .catch(err => console.log("error"));
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
              users: res.data,
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
              value={this.state.search}
              onChange={this.handleChanges}
            />
            <button onClick={this.findUsers}>Find User</button>
            <div>
                {/*  {this.state.users.map(user => (
                <div>
                  <img src={user.avatar_url} alt="" />
                  <h2>{user.name}</h2>
                  <h3>{user.login}</h3>
                  <p>Followers: {user.followers}</p>
                  </br>
                  <p>Following: {user.following}</p>
                </div>
                ))}  */}
            </div>    
        </div>
          
        );
      }
    }
    
  
  

export default GitCard
