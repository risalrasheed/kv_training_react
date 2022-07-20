import * as React from 'react'
import { useGetAllEmployeeQuery } from './services/employee_serv'

export default function Employee() {
  // Using a query hook automatically fetches data and returns query values
  //const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
  const { data, error, isLoading } = useGetAllEmployeeQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
debugger
//console.log(data)
  return (
    <div className="Employee">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>

          <h3>{data.data[0].name}</h3>
          {/* <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
          {/* {console.log(data)} */}
        </>
      ) : null}
    </div>
  )
}