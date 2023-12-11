import { VSCodeTextMateTokenSettings } from './textmate-token-settings.js';

/**
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeSchema.ts
 */
export type VSCodeTextMateColorGroup = string | VSCodeTextMateTokenSettings;
