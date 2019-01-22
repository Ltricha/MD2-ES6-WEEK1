# Arrow Functions

Een arrow function is een nieuwe syntax voor function expressss, maar er zijn wel verschillen.

Waarom:
- korter en duidelijker
- een impliciete return (one liners)
- geen eigen `this, arguments, super of new.target`

Wat:
- Anonieme functie (geen naam) dus beter niet te gebruikern in objecten
- Het kan niet gebruikt worden als constructor

Hoe:
- Dat hangt ervan af wat de functie doet.

1. Geen parameters
```
// ES5
function() {};

//ES6
() => {};
```
2. Enkele parameter
```
// ES5
function(val) {
    return val + 15;
};

//ES6
(val) => val + 15;
```

3. Meerdere parameters
```
// ES5
function(val) {
    return val + 15;
};

//ES6
let opdracht = (val) => val + 15;
opdracht(15);

```
4. Meerdere parameters, enkelvoudig statement
```
// ES5
var area = function(width, length) {
    return width * length;
};

//ES6
let area = (width, length) => width * length;
```

5. Meerdere parameters, meerdere statements
```
// ES5
var volume = function(width, length) {
    var height = 10;
    return width * length * height;
};

//ES6
let area = (width, length) => {
    let height = 10;
    width * length * height;
};
```

5. Meerdere parameters, meerdere statements
```
// ES5
var volume = function(width, length) {
    var height = 10;
    return width * length * height;
};

//ES6
let area = (width, length) => {
    let height = 10;
    width * length * height;
};
```