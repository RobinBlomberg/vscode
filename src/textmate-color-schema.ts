import { TextMateColorSettings } from './textmate-color-settings';
import { TextMateScope } from './textmate-scope';

/**
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeSchema.ts
 */
export type TextMateColorSchema = {
  /**
   * Description of the rule.
   */
  name?: string;
  /**
   * Scope selector against which this rule matches.
   */
  scope?: TextMateScope | (string & {}) | (string & {})[];
  /**
   * Colors and styles for the token.
   */
  settings: TextMateColorSettings;
}[];
