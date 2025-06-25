import { FunctionalComponent } from "preact/src/index.d.ts";

export const SearchForm: FunctionalComponent = () => {
    return (
        <form method="GET" action="/search">
            <input type="text" name= "name" placeholder="Name" />
            <select name="status">
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
}