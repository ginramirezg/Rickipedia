import { FunctionalComponent } from "preact/src/index.d.ts";
// Make sure the path and filename are correct; adjust as needed:
// If your file is named rickAPI.ts, use:
import { rickAPI } from "../types.ts";


export const CharacterCard: FunctionalComponent<{data: rickAPI}> = (props) => {
    const datos = props.data;

    return (
        <div class="character-grid">
            {datos.results.map((ch) => (
                <div key={ch.id}>
                    
                    <a href={`character/${ch.id}`}>
                        <h2>{ch.name}</h2>
                    </a>
                    <img src={ch.image} alt={ch.name} />
                    <p>Status: {ch.status}</p>
                    <p>Species: {ch.species}</p>
                   
                </div>
            ))}
        </div>
    );
}