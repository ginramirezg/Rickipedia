import { FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";

import { rickAPICharacter } from "../../types.ts";


export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext){
        const id = ctx.params.id;



        try {
        
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const request = await Axios.get<rickAPICharacter>(url);
        const response = request.data;

        //console.log(response)
        return ctx.render(response);


        } catch (error) {
            console.error("Error fetching data from API:", error);
            return new Response("Error fetching data", { status: 500 });
        }

    }
}

const Page = (props:PageProps <rickAPICharacter>) => {
    const datos = props.data;
   
    return(
        <div class="character-card">
            <h1>Character Details</h1>
            <h2>{datos.name}</h2>
            <img src={datos.image} alt={datos.name} />
            <p>Status: {datos.status}</p>
            <p>Species: {datos.species}</p>
        </div>
    )
}

export default Page;