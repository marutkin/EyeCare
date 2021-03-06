# EyeCare
Simple program for time tracking: Node JavaScript

## Getting started

Pull-in a latest version with NPM ...
Install all dependencies by running `npm install` in project folder.
```bash
npm install
```
If you want custom interval of notification you can configure it in settings.json.

There is three variant: ``` 'hour', 'minute', 'second' ```
Example:
```JavaScript
"interval": "hour";
```
and how many times it shoud notify you, any ``` int ``` value.

```JavaScript
"times": "5";
```

After that you should run in command line
```JavaScript
node .src/index.js
```
or just run Eye Care.bat

## Contributing

The issue channel is especially for improvement proposals and bug reporting. If you have implementing problems, please write on StackOverflow with [EyeCare](https://stackoverflow.com/questions/tagged/eyecarejs) tag.

## Browser Support

 - No support

## Building

Build using NPM scripts. 
- `lint` - Lints library JavaScript files.

## Credits

- [Dmitriy Marutkin](https://github.com/marutkin) - Creator

## License

Copyright (c) 2019-present, Licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
