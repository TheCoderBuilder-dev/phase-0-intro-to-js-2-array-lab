// Write your solution here!
// Step 1: Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Step 2: Append a cat destructively
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Step 3: Prepend a cat destructively
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Step 4: Remove the last cat destructively
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Step 5: Remove the first cat destructively
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Step 6: Append a cat non-destructively
function appendCat(name) {
    return [...cats, name];
}

// Step 7: Prepend a cat non-destructively
function prependCat(name) {
    return [name, ...cats];
}

// Step 8: Remove the last cat non-destructively
function removeLastCat() {
    return cats.slice(0, -1);
}

// Step 9: Remove the first cat non-destructively
function removeFirstCat() {
    return cats.slice(1);
}
