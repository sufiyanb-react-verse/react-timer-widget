# React Timer Widget

A lightweight floating React timer widget that can be embedded into any website using a CDN.

## Live CDN

### Latest version

```html
<script src="https://cdn.jsdelivr.net/gh/sufiyanb-react-verse/react-timer-widget@v1.0.2/dist/timer-widget.iife.js"></script>
```

### Specific version

It is recommended to use a specific version in production:

```html
<script src="https://cdn.jsdelivr.net/gh/sufiyanb-react-verse/react-timer-widget@v1.0.2/dist/timer-widget.iife.js"></script>
```

## Usage

No HTML container is required.

Add the CDN script:

```html
<script src="https://cdn.jsdelivr.net/gh/sufiyanb-react-verse/react-timer-widget@v1.0.2/dist/timer-widget.iife.js"></script>
```

Then initialize the widget:

```html
<script>
  TimerWidget.mount({
    minutes: 5,
    seconds: 0
  });
</script>
```

The widget automatically creates a floating timer on the page.

## Features

* Floating widget
* Draggable
* Minimize / restore
* Start / pause
* Reset
* `MM:SS` countdown display
* No container element required
* No React installation required in the host application

## Configuration

```javascript
TimerWidget.mount({
  minutes: 5,
  seconds: 0
});
```

| Option    | Type   | Description     |
| --------- | ------ | --------------- |
| `minutes` | number | Initial minutes |
| `seconds` | number | Initial seconds |

Example:

```javascript
TimerWidget.mount({
  minutes: 10,
  seconds: 30
});
```

Displays:

```text
10:30 left
```

## Unmount

`mount()` returns an object that can be used to remove the widget:

```javascript
const timer = TimerWidget.mount({
  minutes: 5,
  seconds: 0
});

// Remove later
timer.unmount();
```

## CDN Versioning

Use Git tags to publish versions.

Example:

```text
v1.0.0
v1.0.1
v1.0.2
```

CDN URL:

```text
https://cdn.jsdelivr.net/gh/sufiyanb-react-verse/react-timer-widget@v1.0.2/dist/timer-widget.iife.js
```

For production applications, use a specific version instead of `@main`.

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build the CDN widget:

```bash
npm run build
```

The generated CDN file will be:

```text
dist/timer-widget.iife.js
```

## Publishing a New Version

Build the widget:

```bash
npm run build
```

Commit the changes:

```bash
git add .
git commit -m "Update timer widget"
git push origin main
```

Create a version tag:

```bash
git tag v1.0.3
git push origin v1.0.3
```

The new CDN URL will be:

```text
https://cdn.jsdelivr.net/gh/sufiyanb-react-verse/react-timer-widget@v1.0.3/dist/timer-widget.iife.js
```
