import { configure } from '@storybook/react';
import '!style-loader!css-loader!stylus-loader!./global-style-loader.styl';

configure(require.context('../client', true, /\.stories\.js$/), module);