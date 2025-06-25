import { FunctionalComponent } from "preact/src/index.d.ts";
import { rickAPI } from "../types.ts";
import { CharacterCard } from "./CharacterCard.tsx";

export const CharacterList: FunctionalComponent<{data: rickAPI}> =(props) =>{
   const datos = props.data

    return(
        <div>
            <CharacterCard data={datos} />
        </div>
    )
}