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

import { ActionButton, Card } from '../src/elements/index.js';
import { DEBUG_LEVEL } from '../src/utils/logger.js';

/**
 * The configuration for the Perception Toolkit. This is done by putting a
 * `PerceptionToolkit` object on `window` which contains your custom configuration.
 *
 * Example:
 * ```
 * <script>
 * // Config - place above the embedding script element.
 * window.PerceptionToolkit = window.PerceptionToolkit || {};
 * window.PerceptionToolkit.config = {
 *   // The element used to launch the experience.
 *   button: document.getElementById('get-started')
 * }
 * </script>
 * ```
 *
 * The options available are listed below.
 */
export interface PerceptionToolkitConfig {
  /**
   * Whether the Toolkit should show a message when a detection occurs for an
   * unknown item. Defaults to true.
   */
  acknowledgeUnknownItems?: boolean;

  /**
   * The button to hook onto for launching the experience.
   */
  button?: HTMLElement;

  /**
   * The selector to use to find the button, and is an alternative to providing
   * a direct reference to it. If `button` is specified it takes precedence over
   * the `buttonSelector`.
   */
  buttonSelector?: string;

  /**
   * The class to toggle on the `button` element (default: `visible`). This
   * allows for the button to be shown or hidden depending on the device
   * capabilties. For example, if the device does not support capturing the
   * camera feed the buttons visibility class will be added.
   */
  buttonVisibilityClass?: string;

  /**
   * The element into which any generated cards will be appended. This property
   * is only required if the Perception Toolkit is adding cards. If you choose
   * to add them manually you do not need to provide this property.
   */
  cardContainer?: HTMLElement;

  /**
   * The label to use for any `mainEntity` properties specified in the
   * `arContent` object. (default: `"Launch"`)
   */
  cardMainEntityLabel?: string;

  /**
   * Whether or not the buttons on the card should trigger a new window. If set
   * to `false` (the default) the current page's location will be replaced when
   * the user clicks on the button.
   *
   * @see cardMainEntityLabel
   * @see cardUrlLabel
   */
  cardShouldLaunchNewWindow?: boolean;

  /**
   * The label to use for any `url` properties specified in the
   * `arContent` object. (default: `"View Details"`)
   */
  cardUrlLabel?: string;

  /**
   * Debug level. Takes one of the following:
   * * `error`: Errors only. (default)
   * * `warning`: Warnings and errors.
   * * `info`: Info, warnings and errors.
   * * `verbose`: All.
   * * `none`: None.
   */
  debugLevel?: 'error' | 'warning' | 'info' | 'verbose' | 'none';

  /**
   * Which detection mode to use:
   * * `passive`: capture is always on, throttled. (default)
   * * `burst`: capture is always on, goes as fast as possible.
   * * `active`: the user must tap to capture a frame for processing.
   */
  detectionMode?: 'active' | 'passive' | 'burst';

  /**
   * Which detectors to load. Defaults to 'lazy', which means no detectors are
   * preloaded ahead of detection starting.
   * * `all`: Load all detectors (uses most bandwidth)
   * * `lazy`: Loads detectors on demand (uses least bandwidth)
   *
   * Alternatively you can specify on a per-detector basis:
   *
   * ```
   * detectors: {
   *   'barcode': true,
   *   'image': 'lazy'
   * }
   * ```
   */
  detectors?: 'all' | 'lazy' | {
    [key: string]: boolean | 'lazy'
  };

  /**
   * The time, in milliseconds, to wait before showing a notification to the user
   * suggesting that they ought to try positioning the marker more centrally to
   * the camera feed.
   */
  hintTimeout?: number;

  /**
   * The maximum number of cards to show at once. Defaults to 1.
   */
  maxCards?: number;

  /**
   * Whether or not to show the onboarding flow. If `true` then `onboardingImages`
   * must also be set.
   *
   * @see onboardingImages
   */
  onboarding?: boolean;

  /**
   * The images to use for onboarding the user. **Please note: All images should
   * be the same dimensions.**
   */
  onboardingImages?: string[];

  /**
   * A callback that is fired after the initial bootstrapping, at which point
   * the global `PerceptionToolkit` object will have been populated with any
   * elements, events, or functions it has.
   */
  onload?: () => void;

  /**
   * The location from which the toolkit should be loaded. Typically this will be
   * the `node_modules` directory, e.g. `node_modules/perception-toolkit`.
   */
  root?: string;

  /**
   * A callback or set of strings used to determine if artifacts are allowed
   * from a given origin.
   *
   * Example (function):
   * ```
   * shouldLoadArtifactsFrom: (url) => url.origin === 'https://perceptiontoolkit.dev'
   * ```
   *
   * Example (strings):
   * ```
   * shouldLoadArtifactsFrom: ['https://perceptiontoolkit.dev']
   * ```
   */
  shouldLoadArtifactsFrom?: ((url: URL) => boolean) | string[];

  /**
   * Whether or not to show the loader during bootup. If `false` the developer
   * takes responsibility for displaying appropriate messaging to the user.
   */
  showLoaderDuringBoot?: boolean;

  /**
   * Location of ARArtifact sources which should be loaded on startup.
   * Sources could be individual html pages or json-ld files.
   * It's best to load json-ld files, with only the ARAartifacts needed for toolkit.
   *
   * Example (html pages):
   * ```
   * artifactSources: [ 'products/one.html', 'products/two.html' ]
   * ```
   *
   * Example (json-ld):
   * ```
   * artifactSources: [ 'artifacts/ar-artifact-map.jsonld' ]
   * ```
   */
  artifactSources?: string[];
}

/**
 * The events dispatched by the Perception Toolkit. You can access these by
 * listening to the events on `window`.
 *
 * ```
 * const { Events } = window.PerceptionToolkit;
 * window.addEventListener(Events.CameraAccessDenied, () => {
 *   // Show message to user.
 * });
 * ```
 */
export interface PerceptionToolkitEvents {
  /**
   * Access to the camera has been denied. By default this will show a message
   * to the user. If you wish to prevent the default behavior you should call
   * `preventDefault()` on the event when dispatched.
   */
  CameraAccessDenied: string;

  /**
   * Capture has been closed. Typically at the end of all capturing.
   */
  CaptureClosed: string;

  /**
   * Capture has been started.
   */
  CaptureStarted: string;

  /**
   * Capture has been stopped. This can happen because the user has finished
   * capturing or because they have switched tabs.
   */
  CaptureStopped: string;

  /**
   * The device does not support all the required APIs.
   */
  DeviceNotSupported: string;

  /**
   * Results have changed. This event contains two arrays: `lost` and
   * `found`, the contents of which are the results which have been lost or
   * found respectively.
   *
   * By default, new found results will have a card generated for them.
   *
   * If you wish to prevent this default behavior, you should listen for this
   * event and call `preventDefault()` on the event when dispatched.
   */
  PerceivedResults: string;

  /**
   * A marker has been detected. Provides the type and value of the marker.
   */
  MarkerDetect: string;
}

/**
 * The elements exposed by the Toolkit.
 */
export interface PerceptionToolkitElements {
  /**
   * A data card.
   */
  Card: typeof Card;

  /**
   * A button.
   */
  ActionButton: typeof ActionButton;
}

/**
 * The functions exposed by the Toolkit.
 */
export interface PerceptionToolkitFunctions {
  /**
   * If no `button` or `buttonSelector` is provided the experience must be
   * initialized directly. This function does just that.
   */
  initializeExperience: () => void;

  /**
   * Closes the experience if it is running.
   */
  closeExperience: () => void;
}

/**
 * The PerceptionToolkit global.
 */
export interface PerceptionToolkit {
  config: PerceptionToolkitConfig;
  Events: PerceptionToolkitEvents;
  Elements: PerceptionToolkitElements;
  Functions: PerceptionToolkitFunctions;
}
