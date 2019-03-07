# EyeCare
Simple program for time tracking: Node JavaScript

[![Build Status](https://api.travis-ci.org/glidejs/glide.svg?branch=master)](https://travis-ci.org/glidejs/glide)

## Getting started

Pull-in a latest version with NPM ...
Install all dependencies by running `npm install` in project folder.
```bash
npm install
```
If you want custom interval of notification you can configure it here 
```JavaScript
this.interval = TIME.hour;
```
Also you can set notification interval, or set it empty to get Infinite interval as default option
```JavaScript
new EyeCare(/* your default value :number */).start();
```

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
