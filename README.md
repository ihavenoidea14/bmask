# Bitmask Endcode/Decode

```
bitmask
├── README.md
├── bitmask.js
├── index.js
├── maskmap.js
├── package.json
└── test
    └── test.js
```

maskmap.js exports a map containing your bitmasks, as well as their corresponding values.

You will need to add your map to this file.

```
var bitmask = require('./bitmask');
var bitmap = require('./maskmap');

bitmask.encodeMask([1, 1, 1, 1, 1, 1]);
// returns 63

bitmask.decodeMask(2048, bitmap);
// returns ["BitFlagLead"];
```