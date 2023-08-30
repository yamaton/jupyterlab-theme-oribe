import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-theme-oribe extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-oribe:plugin',
  description: 'A JupyterLab Oribe-style theme extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-theme-oribe is activated!');
    const style = 'jupyterlab-theme-oribe/index.css';

    manager.register({
      name: 'jupyterlab-theme-oribe',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
