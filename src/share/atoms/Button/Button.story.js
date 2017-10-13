import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

const buttonStory = storiesOf('Button', module);

buttonStory.add('sizes', () => (
  <div>
    <div>
      <Button onClick={() => {}}>
        Default
      </Button>
    </div>

    <div>
      <Button type="primary" size="small" onClick={() => {}}>
        Small
      </Button>
    </div>

    <div>
      <Button type="primary" size="large" onClick={() => {}}>
        Large
      </Button>
    </div>
  </div>
));

buttonStory.add('active/disable', () => (
  <div>
    <div>
      <Button type="primary" onClick={() => {}}>
        Active Button
      </Button>
    </div>

    <div>
      <Button type="primary" disabled onClick={() => {}}>
        Disable Button
      </Button>
    </div>

  </div>
));