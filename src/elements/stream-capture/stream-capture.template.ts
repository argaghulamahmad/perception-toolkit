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

export const styles = `
:host {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #333;
  --baseline: 12px;
  opacity: 0;
  pointer-events: none;
}

:host(.active) {
  animation: fadeIn 0.3s cubic-bezier(0, 0, 0.3, 1) forwards;
  pointer-events: auto;
}

canvas {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background: #111;
}

#reticle {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
}

#close {
  width: calc(var(--baseline) * 3);
  height: calc(var(--baseline) * 3);
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53M` +
  `y5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI` +
  `0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuN` +
  `TkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDE` +
  `yeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);
  background-color: #FFF;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.overlay {
  position: absolute;
  bottom: 50px;
  left: 50%;
  min-width: 280px;
  padding: var(--baseline) calc(var(--baseline) * 2);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: #FFF;
  transform: translateX(-50%);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;

export const html = `<svg id="reticle" viewBox="0 0 133 100"
    xmlns="http://www.w3.org/2000/svg">
  <mask id="reticle-cut-out">
    <rect id="reticle-cut-out-outer" width="133" height="100" x="0" y="0"
        fill="#FFF" />
    <rect id="reticle-cut-out-inner" x="24" y="8" width="85" height="85" rx="2"
        ry="2" fill="#000" />
  </mask>
  <rect id="reticle-box" width="133" height="100" x="0" y="0"
      fill="rgba(0,0,0,0.4)" mask="url(#reticle-cut-out)" />
</svg>
<button id="close">Close</button>
`;
