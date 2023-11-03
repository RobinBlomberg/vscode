/**
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeSchema.ts
 */
export type TextMateColorSettings = {
  /**
   * Foreground color for the token.
   */
  foreground?: string;
  background?: string;
  /**
   * Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or a combination. The empty string unsets inherited settings.
   */
  fontStyle?:
    | ''
    | 'italic'
    | 'bold'
    | 'underline'
    | 'strikethrough'
    | 'italic bold'
    | 'italic underline'
    | 'italic strikethrough'
    | 'bold underline'
    | 'bold strikethrough'
    | 'underline strikethrough'
    | 'italic bold underline'
    | 'italic bold strikethrough'
    | 'italic underline strikethrough'
    | 'bold underline strikethrough'
    | 'italic bold underline strikethrough';
};
