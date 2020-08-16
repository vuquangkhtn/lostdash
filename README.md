## **lostdash**

Some useful function for our workflow, which we think it could be useful sometimes.

The [lostdash](https://www.npmjs.com/package/lostdash) library exported as Nodejs module.

## **Installation**

Using `npm`:

```
npm i lostdash
```

Using `yarn`:

```
yarn add lostdash
```

## **Usage**

You can import from `lowdash`:

Using `JS`:

```
var lostdash = require('lostdash');
```

Using `ES6`:

```
import lostdash from 'lostdash';
```

## **Documentation**

## compareIgnoreCase (string, string)

**Description**: compore 2 strings without caring about the uppercase or lowercase

**Example**:

```js
const lostdash = require("lostdash");

lostdash.compareIgnoreCase("test", "test"); // true
lostdash.compareIgnoreCase("test", "Test"); // true
lostdash.compareIgnoreCase("test", "Test1"); // false
```

**Parameters**:

- `{String}` The first string to compare.
- `{String}` The second string to compare.

**Returns**:

- `{Boolean}` The result of comparing the two strings, ignoring case.
