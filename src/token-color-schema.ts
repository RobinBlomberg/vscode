import { VSCodeTextMateColorGroup } from './textmate-color-group.js';
import { TextMateColorSchema } from './textmate-color-schema.js';

/**
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/themeConfiguration.ts
 */
export type VSCodeTokenColorSchema = {
  /**
   * Sets the colors and styles for comments
   */
  comments?: VSCodeTextMateColorGroup;
  /**
   * Sets the colors and styles for strings literals.
   */
  strings?: VSCodeTextMateColorGroup;
  /**
   * Sets the colors and styles for keywords.
   */
  keywords?: VSCodeTextMateColorGroup;
  /**
   * Sets the colors and styles for number literals.
   */
  numbers?: VSCodeTextMateColorGroup;
  /**
   * Sets the colors and styles for type declarations and references.
   */
  types?: VSCodeTextMateColorGroup;
  /**
   * Sets the colors and styles for functions declarations and references.
   */
  functions?: VSCodeTextMateColorGroup;
  /**
   * Sets the colors and styles for variables declarations and references.
   */
  variables?: VSCodeTextMateColorGroup;
  /**
   * Sets colors and styles using textmate theming rules (advanced).
   */
  textMateRules?: TextMateColorSchema;
  /**
   * Whether semantic highlighting should be enabled for this theme.
   */
  semanticHighlighting?: boolean;
};
