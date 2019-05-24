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

/**
 * Vibrates the user's device if supported.
 */
export function vibrate(pattern: number | number[] = 200) {
  if (!('vibrate' in navigator)) {
    return;
  }

  try {
    navigator.vibrate(pattern);
  } catch (e) {
    // This may fail because the user has not tapped. Just swallow the error.
  }
}
