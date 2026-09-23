"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function ActorList() {

  const [actors, setActors] = useState<Actor[]>([]);



  const getActors = useCallback(async () => {
    try {
      const res = await axios.get<Actor[]>("http://localhost:3000/api/v1/actors");
      setActors(res.data);
    } catch (error) {
      console.error(error);
      setActors([]);
    }
  }, []);

  useEffect(() => {
    getActors();
  }, [getActors]);

  return (
    <>
      <h1>Actors</h1>
      {actors.map((a) => (
        <div key={a.id} className="flex border flex-col gap-4 p-2">
          <div><strong>Name:</strong> {a.name}</div>
          <div><strong>Photo:</strong> {a.photo}</div>
          <div><strong>Nationality:</strong> {a.nationality}</div>
          <div><strong>Birth date:</strong> {a.biography}</div>
          <div><strong>Biography:</strong> {a.biography}</div>
        </div>
      ))}
    </>
  );
}
