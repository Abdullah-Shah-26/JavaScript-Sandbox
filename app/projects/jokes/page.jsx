'use client';

import { useEffect, useState} from "react";

const URL = "https://official-joke-api.appspot.com/jokes/programming/random";

export default function RandomJokes()
{
  const [joke, setJoke] = useState(null);

  const fetchRandomJokes = async () =>{
    try{
      const res = await fetch(URL);
      if(!res.ok)
      throw new Error(res.status);
      const data = await res.json();
      setJoke(Array.isArray(data) ? data[0] : data);
    }catch{
      setJoke(null);
    }
  }
  useEffect(() =>{
    fetchRandomJokes();
  },[]);

  if(!joke)
  return <div>
    Loading...
  </div>

  return (
    <div className="flex-col justify-centerm m-3 ">
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
      <button className="bg-white text-black p-2 m-1 "type="button" onClick={fetchRandomJokes}>Next</button>
    </div>
  )

}