import Employee from "./Employee";
import React, { useState, useEffect } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log("effect [] cridat");
    populate();
  }, []);

  useEffect(() => {
    console.log("effect [people] cridat");
    document.title = `Tenim a ${people.length} persones per aquí`;
  }, [people]);

  const populate = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const currentData = await response.json();
    setPeople(currentData);
  };

  function orderBy() {
    setPeople([...people.sort((a, b) => (a.name > b.name ? 1 : -1))]);
  }

  function deletePerson() {
    people.splice(0,1)
    setPeople([...people])
  }

  return (
    <>
      <div className="container mx-auto px-6 py-2 flex justify-start items-center">
        <button
          onClick={() => deletePerson()}
          className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Eliminar primera persona
        </button>
        <button
          onClick={() => populate()}
          className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Repoblar
        </button>
        <button
          onClick={() => orderBy()}
          className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ordena per nom
        </button>
      </div>
      <div className="people">
        {people.map((person, index) => {
          return (
            <Employee
              key={index}
              name={person.name}
              email={person.email}
              phone={person.phone}
            />
          );
        })}
      </div>
    </>
  );
};

export default People;
