/**
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeSchema.ts
 */
export type VSCodeColorThemeSchema = {
  /**
   * Colors in the workbench
   */
  colors: unknown;
  /**
   * Colors for syntax highlighting
   */
  tokenColors: unknown;
  /**
   * Whether semantic highlighting should be enabled for this theme.
   */
  semanticHighlighting: boolean;
  /**
   * Colors for semantic tokens
   */
  semanticTokenColors: { [K in string]?: unknown };
};
