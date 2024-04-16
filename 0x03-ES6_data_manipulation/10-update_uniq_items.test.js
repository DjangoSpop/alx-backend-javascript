import updateUniqueItems from "./10-update_uniq_items.js";

// Test case 1: Update unique items in an empty map
test("Update unique items in an empty map", () => {
    const map = new Map();
    const updatedMap = updateUniqueItems(map);
    expect(updatedMap.size).toBe(0);
});

// Test case 2: Update unique items in a map with duplicate items
test("Update unique items in a map with duplicate items", () => {
    const map = new Map();
    map.set("apple", 2);
    map.set("banana", 3);
    map.set("orange", 2);
    const updatedMap = updateUniqueItems(map);
    expect(updatedMap.get("apple")).toBe(1);
    expect(updatedMap.get("banana")).toBe(1);
    expect(updatedMap.get("orange")).toBe(1);
});

// Test case 3: Update unique items in a map with unique items
test("Update unique items in a map with unique items", () => {
    const map = new Map();
    map.set("apple", 1);
    map.set("banana", 1);
    map.set("orange", 1);
    const updatedMap = updateUniqueItems(map);
    expect(updatedMap.get("apple")).toBe(1);
    expect(updatedMap.get("banana")).toBe(1);
    expect(updatedMap.get("orange")).toBe(1);
});

// Test case 4: Update unique items in a map with mixed items
test("Update unique items in a map with mixed items", () => {
    const map = new Map();
    map.set("apple", 2);
    map.set("banana", 1);
    map.set("orange", 2);
    const updatedMap = updateUniqueItems(map);
    expect(updatedMap.get("apple")).toBe(1);
    expect(updatedMap.get("banana")).toBe(1);
    expect(updatedMap.get("orange")).toBe(1);
});
