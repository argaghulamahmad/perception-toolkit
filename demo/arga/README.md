# Simple Config Demo

This demo showcases the simplest way to load Perception Toolkit.  Start by taking a look at [`index.html`](./index.html).

## Instructions

First, print out (or, open on a second screen) these real world targets:

* [barcode.gif](./pages/barcode.gif), which targets [pages/barcode.html](./pages/barcode.html).
* [lighthouse.jpg](./pages/lighthouse.jpg), which targets [pages/lighthouse.html](./pages/lighthouse.html).

Next, open the page which hosts the Perception Toolkit:

1. Run `npm run build && npm run serve`
2. Open [`https://localhost:8080/demo/simple/index.html`](https://localhost:8080/demo/simple/index.html)
3. Hit "Getting Started" and follow the onboarding steps.
4. Scan the targets you printed!

## How does it work?

1. Dig in to the script on [`index.html`](./index.html) to see how the `PerceptionToolkit` is created.
2. Take look at the configuration value `artifactSources: [ ... ]`, which tells PerceptionToolkit that there are pages with camera targets defined.
3. Finally, look at the [pages](./pages/) themselves, to see how they define `ARArtifact`'s as structured data.

## Bonus: Dig In!

1. Try changing the Barcode `text` property to some other Barcode value (try using an existing product!), and refresh the page.
2. Try changing the property values of `WebPage` to see the Card content change when you scan the barcode.

## Bonus: Create your own Image Target

Unlike Barcodes, Images require a bit of pre-processing work before loading into the toolkit.  Lets try creating a new page with a new image target.

1. Create a new HTML page in `./pages/` by copying the current image target demo [`./pages/lighthouse.html`](./pages/lighthouse.html).

```bash
$ cd perception-toolkit/demo/simple
$ cp ./pages/lighthouse.html YOUR_PAGE.html
```

2. Find an image you like, and copy it into the `./pages` directory.

> Note: This should be a digital original, not just a photograph.  Try picking an image thats very rich in detail, and high contrast.

3. Pre-process the image using [this guide](../../target-generation/README.md).  This creates a new file, ending in `.pd`, which is actually used at runtime.  Quick instructions:

```bash
$ cd perception-toolkit
$ node target-generation/generator.js --files=./demo/simple/pages/YOUR_IMAGE --dest=./demo/simple/pages
```

4. Update all the image links inside the page you copied in step 1 to use your new image files.  Search for `lighthouse.jpg` and `lighthouse.pd` to know what to change.

5. Finally, lets add your new page to the lists of `artifactSources` in [`index.html`](./index.html).


