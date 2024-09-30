import React, { useState,useEffect } from 'react';

function App(){
    const [exercise, setExercise] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [isClick, setIsButton] = useState(false);

    useEffect(function(){
        const fetchingExercise = async function(){
            const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0c4ee15243msh4f69a279c38a8f3p13c4adjsn449857ea0f51',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            };

            try{
                setIsLoading(true);
                const response = await fetch(url, options);
                if(!response.ok) throw new Error("Could able to fetch!");
                const data = await response.json();
                setExercise(data);
                console.log(data);
            }catch(err){
                console.log(err);
                setError(err);
            }finally{
                setIsLoading(false)
            }
        }
        fetchingExercise();
    },[])

    function handleClick(value){
        useEffect(function(){
        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0';

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0c4ee15243msh4f69a279c38a8f3p13c4adjsn449857ea0f51',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };
            const fetchWorkout = async function(){
                const response = await fetch(url, options);
                const data = await response.json();
                
            }

        })
    }

    return (
       <div>
            <h1>Hello Ashish</h1>
            {isLoading && (<p>Loading. . .</p>)}
            {!isLoading && (
                exercise.map((muscle,index) => (
                    <button onClick={handleClick(muscle)} key={index}>{muscle}</button>
                ))
            )}
       </div>
    )
}
export default App;