export type rickAPI = {
  results: [
    {
        id: number,
        name: string,
        status: string,
        species: string,
        image: string 
    }
  ]
}

export type rickAPICharacter = {
  id: number,
 name: string,
    status: string,
    species: string,
    image: string
}