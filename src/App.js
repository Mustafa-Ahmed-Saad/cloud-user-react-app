import React, { Component } from 'react';
import ViewUser from './components/viewUser';
import { GetUsers, DeleteUser, updateUser, addUser } from './api/users';
import UsersForm from './components/usersForm';
// import './App.css';

class App extends Component {
   state = {
      users: [],
      user: {},
   };

   componentDidMount = () => {
      // console.log(GetUsers());
      GetUsers()
         .then((response) => {
            // here we use component GetUsers like a function GetUsers() and it return the responsey
            this.setState({
               users: response.data,
            });
            // console.log(this.state.users);
         })
         .catch((error) => {
            // console.error(error);
            alert('api get requerst error');
         });
   };

   showDetaile = (user) => {
      this.setState({
         user: user,
      });
   };

   DeleteUser = (user) => {
      // delete user from server
      DeleteUser(user.id)
         .then(() => {
            // delete user from dom by delet it from state (after deletit from server)
            let users = this.state.users;
            const index = users.indexOf(user);
            users.splice(index, 1);
            this.setState({
               users: users,
            });
            // or we can write users only inested of users: users
            // this.setState({
            //    users,
            // });
         })
         .catch((error) => {
            // console.error(error);
            alert('api delete requerst error');
         });
   };

   updateUser = (values) => {
      // values = object in initialValues
      // onSubmit is pass parameter by default that is values that is the object that content on all value of user and this object in initialValues
      const id = this.state.user.id;
      updateUser(id, values)
         .then(() => {
            // this values is in initialValues in formik and values is props.values that is this.state.user
            alert('success');
         })
         .catch((error) => {
            alert('update user request error');
         });
   };

   addUser = (values) => {
      addUser(values)
         .then(() => {
            alert('this user added successfuly');
         })
         .catch((error) => {
            alert('add user request error');
         });
   };

   render() {
      return (
         <div className="App">
            <div className="container">
               <div className="alluser">
                  <ul className="users">
                     {this.state.users.map((user) => (
                        <li key={user.id}>
                           <div>{user.name}</div>
                           <div className="button-cont">
                              <button onClick={() => this.showDetaile(user)}>view</button>
                              <button onClick={() => this.DeleteUser(user)}>Delet</button>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="datails-edit">
                  <div className="details">
                     <h3>user details</h3>
                     {this.state.user.id > 0 ? <ViewUser user={this.state.user} /> : 'please select a user to show its details'}
                  </div>
                  <div>
                     <h3>edit user</h3>
                     {this.state.user.id > 0 ? <UsersForm values={this.state.user} onSubmit={this.updateUser} /> : 'please select a user to edit it'}
                  </div>
               </div>
            </div>
            <div className="adduser">
               <h3>add user</h3>
               <UsersForm
                  values={{
                     name: '',
                     email: '',
                     username: '',
                  }}
                  onSubmit={this.addUser}
               />
            </div>
         </div>
      );
   }
}

// function App() {
//    return (
//       <div className="App">

//          <Clock />
//       </div>
//    );
// }

export default App;
