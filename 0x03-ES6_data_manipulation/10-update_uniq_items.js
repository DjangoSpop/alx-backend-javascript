import groceriesList from "./9-groceries_list.js";
export default function updateUniqueItems(map) {
    for (const [key, value] of map) {
        if (value === 1) {
            map.set(key, 100);
        }
    }
    return map;
}
