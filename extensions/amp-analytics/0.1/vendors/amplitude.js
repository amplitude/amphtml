/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const AMPLITUDE_CONFIG = /** @type {!JsonObject} */ ({
  'transport': {
    'beacon': false,
    'xhrpost': false,
    'image': true,
  },
  'vars': {
    'anonymousId': 'CLIENT_ID(amplitude_amp_id)',
  },
  'requests': {
    'host': 'http://localhost:3003',
    'baseParams': 'apiKey=${apiKey}' +
        '&uploadTime=${timestamp}' +
        '&appVersion=${appVersion}' +
        '&library=amp',
    'eventParams': '${baseParams}' +
        '&eventType=${eventType}' +
        '&eventProperties:path=${canonicalPath}' +
        '&eventProperties:url=${canonicalUrl}' +
        '&eventProperties:referrer=${documentReferrer}' +
        '&eventProperties:title=${title}',
    'event': '${host}/pixel/event?${eventParams}',
  },
  'linkers': {
    'amplitude': {
      'ids': {
        'amplitude_amp_id': '${anonymousId}',
      },
      'proxyOnly': false,
    },
  },
  'cookies': {
    'amplitude': {
      'value': 'LINKER_PARAM(amplitude, amplitude_amp_id)',
    },
  },
});
