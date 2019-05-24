/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ActionButton } from '../src/elements/action-button/action-button.js';
import { Card } from '../src/elements/card/card.js';
import { DotLoader } from '../src/elements/dot-loader/dot-loader.js';
import { PerceptionToolkit } from '../src/elements/perception-toolkit/perception-toolkit.js';
import { StreamCapture } from '../src/elements/stream-capture/stream-capture.js';
import { defineElement } from '../src/utils/define-element.js';

export { Card } from '../src/elements/card/card.js';
export { ActionButton } from '../src/elements/action-button/action-button.js';

// Register custom elements.
defineElement(ActionButton.defaultTagName, ActionButton);
defineElement(Card.defaultTagName, Card);
defineElement(DotLoader.defaultTagName, DotLoader);
defineElement(PerceptionToolkit.defaultTagName, PerceptionToolkit);
defineElement(StreamCapture.defaultTagName, StreamCapture);

let toolkit =
    document.querySelector(PerceptionToolkit.defaultTagName) as PerceptionToolkit;
if (!toolkit) {
  toolkit = new PerceptionToolkit();
  document.body.appendChild(toolkit);
}

export async function initialize() {
  if (!toolkit) {
    return;
  }

  await toolkit.start();
}

export async function close() {
  if (!toolkit) {
    return;
  }

  await toolkit.stop();
}
