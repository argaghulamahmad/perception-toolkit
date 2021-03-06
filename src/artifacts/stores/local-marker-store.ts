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

import { Marker } from '../../../defs/marker.js';
import { NearbyResult } from '../artifact-dealer.js';
import { ARArtifact } from '../schema/extension-ar-artifacts.js';
import { Barcode } from '../schema/core-schema-org.js';

export class LocalMarkerStore {
  private readonly markers = new Map<string, NearbyResult>();

  addMarker(artifact: ARArtifact, barcode: Barcode): boolean {
    if (!barcode.text) {
      return false;
    }
    this.markers.set(barcode.text, { target: barcode, artifact });
    return true;
  }

  findRelevantArtifacts(markers: Marker[]): NearbyResult[] {
    const ret = [];
    for (const marker of markers) {
      const nearbyResult = this.markers.get(marker.value);

      if (nearbyResult) {
        ret.push(nearbyResult);
      }
    }
    return ret;
  }
}
