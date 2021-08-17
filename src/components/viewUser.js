import React from 'react';

function ViewUser(props) {
   return (
      <div>
         <div>name: {props.user.name}</div>
         <div>email: {props.user.email}</div>
         <div>city: {props.user.address.city}</div>
      </div>
   );
}

export default ViewUser;
