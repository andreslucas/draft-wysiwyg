/**
 * @license Copyright (c) UserZoom 2016. All Rights Reserved. http://www.userzoom.com/
 *
 * Proprietary and confidential
 *
 * NOTICE: All information contained herein is, and remains the property
 * of UserZoom Technologies SL. The intellectual and technical concepts
 * contained herein are proprietary to UserZoom Technologies SL and
 * may be covered by U.S. and Foreign Patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from UserZoom Technologies SL.
 *
 * @company UserZoom Technologies SL
 * @project draft-wysiwyg
 * @file    stories.js
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-11-17
 * @summary empty.
 */
/**
 * @license Copyright (c) UserZoom 2016. All Rights Reserved. http://www.userzoom.com/
 *
 * Proprietary and confidential
 *
 * NOTICE: All information contained herein is, and remains the property
 * of UserZoom Technologies SL. The intellectual and technical concepts
 * contained herein are proprietary to UserZoom Technologies SL and
 * may be covered by U.S. and Foreign Patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from UserZoom Technologies SL.
 *
 * @company UserZoom Technologies SL
 * @project geniuz
 * @file    stories
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-11-15
 * @summary empty.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Wysiwyg } from '../';
import { convertToRaw } from 'draft-js';

const DraftExporter = require('draft-js-exporter');

storiesOf('Wysiwyg', module)
  .add('single', (self) => {
    const me = self;
    return (
      <div className="container">
        <Wysiwyg
          ref={(c) => { me.wysiwyg = c; }}
          onUpdate={() => {
            if(me.wysiwyg){
              console.log(me.wysiwyg.state);
              console.log(convertToRaw(me.wysiwyg.state.contentState));
              // console.log(DraftExporter(convertToRaw(me.wysiwyg.state.contentState)));
              const rawDraftContentBlock = convertToRaw(me.wysiwyg.state.contentState);
              const exporter = new DraftExporter(rawDraftContentBlock);
              const contentExported = exporter.export();
              console.log(contentExported);
            }
          }}
        />
      </div>
    )
  })
  .add('content', (self) => {
    const me = self;
    return (
      <div className="container">
        <Wysiwyg
          toolbarOnFocus
        >
          <p>hello world</p>
        </Wysiwyg>
      </div>
    )
  });
