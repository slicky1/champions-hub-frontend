// import { useState } from "react";

// const DeleteClub = () => {

//         const {deleteClub, SetDeteleClub} = useState (null);

//         const handleDelete = () => {
                
//                 const club = {deleteClub}

//             fetch (`https://champions-hub-backend.herokuapp.com/clubs/${club.id}`,{
//                 method: 'DELETE',
//                 headers: {"Content-Type": "application/json",
//                             "Accept": "application/json"
//             },
//             })
//         }



//     return ( 
//         <div>
//                 value = {deleteClub}
//                <button onClick = {() => handleDelete(club.id)}>Detele</button>
//                 onChange = {(e) => SetDeteleClub (e.target.value)}
//         </div>
//      );
// }
 
// export default DeleteClub;