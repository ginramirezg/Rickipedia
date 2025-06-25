import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { CharacterCard } from "../components/CharacterCard.tsx";
import { rickAPI } from "../types.ts";
import Axios from "npm:axios"

export const handler:Handlers = {
    async GET(req: Request, ctx: FreshContext) {
        const url = new URL(req.url);
        const name = url.searchParams.get("name")
        const status = url.searchParams.get("status")

        try{
        const apiRequest = await Axios.get<rickAPI>(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
        const response = apiRequest.data;

        return ctx.render(response);
        }
        catch(error){
            console.error("Error fetching data from API:", error);
            return new Response("Error fetching data", { status: 500 });
        }
        

    }
}

const Page = (props:PageProps<rickAPI>) => {
    const datos = props.data;

    return(
        <div>
            <h1> Result search</h1>
            <CharacterCard data={datos} />
        </div>
    )
}

export default Page;