import {
  BraidProvider,
  Text,
  Box,
  Inline,
  Button,
  Dialog,
} from 'braid-design-system';
import jobStreetTheme from 'braid-design-system/themes/jobStreet';
import React from 'react';

import { atoms } from './sprinkles.css';
import * as styles from './App.css';

export const App = () => {
  const [dialog, setDialog] = React.useState(false);

  const toggleState = () => setDialog(!dialog);

  return (
    <div
      className={atoms({
        background: {
          lightMode: 'green-500',
          darkMode: 'gray-900',
        },
        height: '100vh',
        width: '100vw',
        display: 'flex',
        placeItems: 'center',
        padding: '6x',
      })}
    >
      <BraidProvider theme={jobStreetTheme}>
        <Box padding="medium">
          <Inline space="small" align={['center', 'left']}>
            <Button onClick={() => toggleState()}>Open dialog</Button>
          </Inline>
        </Box>

        <Dialog
          title="Dialog Title"
          description={<Text tone="secondary">Optional description</Text>}
          open={dialog}
          onClose={() => toggleState()}
        >
          <Text>dialog content</Text>
        </Dialog>
      </BraidProvider>
    </div>
  );
};
