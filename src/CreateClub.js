import { useState } from "react";

        const CreateClub = () => {

            const [team, SetTeam] =useState('');
            const [country, SetCountry] =useState('');
            const [history, SetHistory] =useState('');


            const handleSubmit = () => {
                // e.preventDefault();
                const club = {team, country, history};

                fetch('https://champions-hub-backend.herokuapp.com/clubs/',{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(club)
                }).then(() =>{
                    console.log('new club added');
                })
            }

           

    return ( 
        <div className = 'create'>
            <form onSubmit = {handleSubmit}>
               <label>Team Name</label>
               <input type="text" 
               required
               value = {team}
               onChange = {(e) => SetTeam (e.target.value)}
               />

                <label>Team Country</label>
               <input type="text" 
               required
               value = {country}
               onChange = {(e) => SetCountry (e.target.value)}
               />

                <label>History</label>
               <textarea required
               value = {history}
               onChange = {(e) => SetHistory (e.target.value)}
               ></textarea>
               
                <br />
               <button>Add Club</button>
             </form>
        </div>
     );
}
 
export default CreateClub;