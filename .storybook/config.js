import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { themes, create } from '@storybook/theming';


const basicTheme = create({
    base: 'light',
    brandTitle: 'README addon',
    brandUrl: 'https://github.com/tuchk4/storybook-readme',
    brandImage: null,
});

addParameters({
    options: {
      showPanel: true,
      panelPosition: 'right',
      theme: basicTheme,
      // theme: themes.dark,
    },
    readme: {
      // You can set the global code theme here.
      codeTheme: 'github',
  
      // You can exclude prop tables globally here.
    //   excludePropTables: [ButtonWithPropTypes],
    },
});

addDecorator(addReadme)
// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories/', true, /\.stories\.js$/), module);
configure(require.context('../packages/', true, /\.stories\.js$/), module);

// const req = require.context('../packages/', true, /\.stories\.js$/, module);

// const loadStories = () => {
// //   require('../src/stories');
//   req.keys().forEach(module => req(module));
// };

// configure(loadStories, module);
