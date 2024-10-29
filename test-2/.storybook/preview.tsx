import React from 'react';
import { ThemeProvider } from '@emotion/react';
import type { Preview, ReactRenderer } from '@storybook/react';
import { lightTheme, darkTheme } from './theme';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const backgroundColor = theme === 'light' ? '#ffffff' : '#000000'; // Set your desired colors

      // Apply background color to the element with ID 'storybook-root'
      document.body.style.backgroundColor = backgroundColor;

      // Apply background color to all elements with class 'docs-story'
      const docsStoryElements = document.getElementsByClassName('docs-story');
      Array.from(docsStoryElements).forEach((element) => {
        (element as HTMLElement).style.backgroundColor = backgroundColor;
      });

      return <Story />;
    },
  ],
};

export default preview;
