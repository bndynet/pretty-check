# pretty-check

Styles for pertty checkbox and radio.
[DEMO](https://bndynet.github.io/pretty-check/)

## Quick start

```html
<link rel="stylesheet" href="https://unpkg.com/@bndynet/pretty-check/dist/pretty-check.css">

<div class="checkbox checkbox-animated checkbox-[flat|circle] checkbox-[dark|primary|success|...]">
    <input id="chk" type="checkbox">
    <label for="chk">
        Label for checkbox
    </label>
</div>

<div class="radio radio-animated radio-[dark|primary|success|...]">
    <input id="rd1" type="radio">
    <label for="rd1">
        Label for radio
    </label>
</div>
```

## Development

- `npm i` to install all dependencies
- `npm start` to watch source and open http://localhost:3000/docs/index.html demo site
- `npm run build` to build scss files
