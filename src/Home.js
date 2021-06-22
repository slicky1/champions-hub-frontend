import {useEffect, useState} from "react";
import CreateClub from "./CreateClub";
// import DeleteClub from "./DeleteClub";
import Searchbar from "./Searchbar";
import TeamList from "./TeamList";


const Home = () => {
    

        // UseState using Array deconstruction 
        const [clubs, setClubs ] = useState ([]);
        const [search, setSearch] = useState (" ");
        const [error, setError]  = useState(null);
        // const [deleteClub, setDeleteClub] = useState('')
        
        
useEffect ( () => {
            fetch ('https://champions-hub-backend.herokuapp.com/clubs/')
            .then (res => {
                if(!res.ok){
                    throw Error ('Club could not be fetched')
                }
                return res.json();
            })
            .then (data => {
                setClubs (data);
                setError(null);
                
                 })
                 .catch ((err) => {
                    //  passing in err.message property
                        setError(err.message)
                 })
            
        }, []  );
        // Stop rerenders

            const displayClub = clubs.filter((club) =>
            club.country.toLowerCase().includes(search.toLowerCase())
            );

        //  const handleDelete =  (id)=> {

        //         fetch ('https://champions-hub-backend.herokuapp.com/clubs/' + id,{
        //             method: 'DELETE'
        //            })
        //       }

            // const handleFave = () =>{
            //         console.log("Favorite team")

            // }

        return ( 
            <div className = "home">
                {error && <div> {error}</div>}
                
                <CreateClub /> 
                <Searchbar placeholder = {search} handleChanges = {setSearch} />
               { <TeamList clubs = {displayClub}  />}
               {/* handleDelete ={handleDelete} */}
                { clubs && <TeamList clubs ={clubs}/> } 
                <br />
                
            </div>
         );
}
 
export default Home;
