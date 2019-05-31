    # Advanced Config Demo

This demo showcases a few more advanced configuration options for Perception Toolkit in [`index.html`](./index.html).

Adds support for scanning unrecognized Markers -- scan a random barcode to see a default card.

## Instructions

1. Print out [barcode.gif](./products/barcode.gif), which represents the [product page](./products/product.html).
2. Run `npm run build && npm run serve`
3. Open [`https://localhost:8080/demo/advanced-config/index.html`](https://localhost:8080/demo/advanced-config/index.html)
4. Hit "Getting Started" and follow the onboarding instructions.
5. Scan the barcode!
6. Try scanning other barcodes, without registering them.

## How does it work?

1. Dig in to the script on [`index.html`](./index.html) to see how the `PerceptionToolkit` is created.
2. Take a look at how onboarding it toggled, using a saved setting in indexeddb.
3. Take a look at how events are handled (especially `Events.PerceivedResults`).

## Bonus: Dig In!

Change the `Event.PerceivedResults` event in order to:

* Handle errors your own way.
  * Perhaps offer a link to text-based search, or full product listing?
  * See code comments in `index.html` for clues where to modify code.
* Customize the UI for normal results.
  * Perhaps by adding a custom share button?
  * See code comments in `index.html` for clues where to modify code.
