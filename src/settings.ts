/* eslint-disable sonarjs/no-duplicate-string */

import { VSCodeTokenColorSchema } from './token-color-schema.js';

/**
 * @see https://code.visualstudio.com/docs/getstarted/settings
 */
export type VSCodeSettings = Partial<{
  [K: string]: unknown;

  // Telemetry

  /**
   *  - all: Sends usage data, errors, and crash reports.
   *  - error: Sends general error telemetry and crash reports.
   *  - crash: Sends OS level crash reports.
   *  - off: Disables all product telemetry.
   */
  'telemetry.telemetryLevel': string;

  // Editor

  /**
   * Controls whether the editor shows CodeLens.
   */
  'diffEditor.codeLens': boolean;

  /**
   *  - legacy: Uses the legacy diffing algorithm.
   *  - advanced: Uses the advanced diffing algorithm.
   */
  'diffEditor.diffAlgorithm': string;

  /**
   * Controls how many lines are used as context when comparing unchanged regions.
   */
  'diffEditor.hideUnchangedRegions.contextLineCount': number;

  /**
   * Controls whether the diff editor shows unchanged regions.
   */
  'diffEditor.hideUnchangedRegions.enabled': boolean;

  /**
   * Controls how many lines are used as a minimum for unchanged regions.
   */
  'diffEditor.hideUnchangedRegions.minimumLineCount': number;

  /**
   * Controls how many lines are used for unchanged regions.
   */
  'diffEditor.hideUnchangedRegions.revealLineCount': number;

  /**
   * When enabled, the diff editor ignores changes in leading or trailing whitespace.
   */
  'diffEditor.ignoreTrimWhitespace': boolean;

  /**
   * Timeout in milliseconds after which diff computation is cancelled. Use 0 for no timeout.
   */
  'diffEditor.maxComputationTime': number;

  /**
   * Controls whether the diff editor shows +/- indicators for added/removed changes.
   */
  'diffEditor.renderIndicators': boolean;

  /**
   * When enabled, the diff editor shows arrows in its glyph margin to revert changes.
   */
  'diffEditor.renderMarginRevertIcon': boolean;

  /**
   * Controls whether the diff editor shows the diff side by side or inline.
   */
  'diffEditor.renderSideBySide': boolean;

  /**
   * If the diff editor width is smaller than this value, the inline view is used.
   */
  'diffEditor.renderSideBySideInlineBreakpoint': number;

  /**
   * If enabled and the editor width is too small, the inline view is used.
   */
  'diffEditor.useInlineViewWhenSpaceIsLimited': boolean;

  /**
   *  - off: Lines will never wrap.
   *  - on: Lines will wrap at the viewport width.
   *  - inherit: Lines will wrap according to the `editor.wordWrap` setting.
   */
  'diffEditor.wordWrap': string;

  /**
   * Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.
   */
  'editor.acceptSuggestionOnCommitCharacter': boolean;

  /**
   * Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.
   *  - on
   *  - smart: Only accept a suggestion with `Enter` when it makes a textual change.
   *  - off
   */
  'editor.acceptSuggestionOnEnter': string;

  /**
   * Controls if the UI should run in a mode where it is optimized for screen readers.
   *  - auto: Use platform APIs to detect when a Screen Reader is attached.
   *  - on: Optimize for usage with a Screen Reader.
   *  - off: Assume a screen reader is not attached.
   */
  'editor.accessibilitySupport': string;

  /**
   * Controls whether the editor should automatically close brackets after the user adds an opening bracket.
   *  - always
   *  - languageDefined: Use language configurations to determine when to autoclose brackets.
   *  - beforeWhitespace: Autoclose brackets only when the cursor is to the left of whitespace.
   *  - never
   */
  'editor.autoClosingBrackets': string;

  /**
   * Controls whether the editor should automatically close comments after the user adds an opening comment.
   *  - always
   *  - languageDefined: Use language configurations to determine when to autoclose comments.
   *  - beforeWhitespace: Autoclose comments only when the cursor is to the left of whitespace.
   *  - never
   */
  'editor.autoClosingComments': string;

  /**
   * Controls whether the editor should remove adjacent closing quotes or brackets when deleting.
   *  - always
   *  - auto: Remove adjacent closing quotes or brackets only if they were automatically inserted.
   *  - never
   */
  'editor.autoClosingDelete': string;

  /**
   * Controls whether the editor should type over closing quotes or brackets.
   *  - always
   *  - auto: Type over closing quotes or brackets only if they were automatically inserted.
   *  - never
   */
  'editor.autoClosingOvertype': string;

  /**
   * Controls whether the editor should automatically close quotes after the user adds an opening quote.
   *  - always
   *  - languageDefined: Use language configurations to determine when to autoclose quotes.
   *  - beforeWhitespace: Autoclose quotes only when the cursor is to the left of whitespace.
   *  - never
   */
  'editor.autoClosingQuotes': string;

  /**
   * Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.
   *  - none: The editor will not insert indentation automatically.
   *  - keep: The editor will keep the current line's indentation.
   *  - brackets: The editor will keep the current line's indentation and honor language defined brackets.
   *  - advanced: The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages.
   *  - full: The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.
   */
  'editor.autoIndent': string;

  /**
   * Controls whether the editor should automatically surround selections when typing quotes or brackets.
   *  - languageDefined: Use language configurations to determine when to automatically surround selections.
   *  - quotes: Surround with quotes but not brackets.
   *  - brackets: Surround with brackets but not quotes.
   *  - never
   */
  'editor.autoSurround': string;

  /**
   * Controls whether bracket pair colorization is enabled or not. Use `workbench.colorCustomizations` to override the bracket highlight colors.
   */
  'editor.bracketPairColorization.enabled': boolean;

  /**
   * Controls whether each bracket type has its own independent color pool.
   */
  'editor.bracketPairColorization.independentColorPoolPerBracketType': boolean;

  /**
   * Run Code Actions for the editor on save.
   */
  'editor.codeActionsOnSave': { [K in string]?: boolean };

  /**
   * Enable/disable showing group headers in the Code Action menu.
   */
  'editor.codeActionWidget.showHeaders': boolean;

  /**
   * Controls whether the editor shows CodeLens.
   */
  'editor.codeLens': boolean;

  /**
   * Controls the font family for CodeLens.
   */
  'editor.codeLensFontFamily': string;

  /**
   * Controls the font size in pixels for CodeLens. When set to 0, 90% of `editor.fontSize` is used.
   */
  'editor.codeLensFontSize': number;

  /**
   * Controls whether the editor should render the inline color decorators and color picker.
   */
  'editor.colorDecorators': boolean;

  /**
   * Controls the condition to make a color picker appear from a color decorator
   *  - clickAndHover: Make the color picker appear both on click and hover of the color decorator
   *  - hover: Make the color picker appear on hover of the color decorator
   *  - click: Make the color picker appear on click of the color decorator
   */
  'editor.colorDecoratorsActivatedOn': string;

  /**
   * Controls the max number of color decorators that can be rendered in an editor at once.
   */
  'editor.colorDecoratorsLimit': number;

  /**
   * Enable that the selection with the mouse and keys is doing column selection.
   */
  'editor.columnSelection': boolean;

  /**
   * Controls if empty lines should be ignored with toggle, add or remove actions for line comments.
   */
  'editor.comments.ignoreEmptyLines': boolean;

  /**
   * Controls whether a space character is inserted when commenting.
   */
  'editor.comments.insertSpace': boolean;

  /**
   * Controls whether syntax highlighting should be copied into the clipboard.
   */
  'editor.copyWithSyntaxHighlighting': boolean;

  /**
   * Control the cursor animation style.
   */
  'editor.cursorBlinking': string;

  /**
   * Controls whether the smooth caret animation should be enabled.
   *  - off: Smooth caret animation is disabled.
   *  - explicit: Smooth caret animation is enabled only when the user moves the cursor with an explicit gesture.
   *  - on: Smooth caret animation is always enabled.
   */
  'editor.cursorSmoothCaretAnimation': string;

  /**
   * Controls the cursor style.
   */
  'editor.cursorStyle': string;

  /**
   * Controls the minimal number of visible leading lines (minimum 0) and trailing lines (minimum 1) surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.
   */
  'editor.cursorSurroundingLines': number;

  /**
   * Controls when `cursorSurroundingLines` should be enforced.
   *  - default: `cursorSurroundingLines` is enforced only when triggered via the keyboard or API.
   *  - all: `cursorSurroundingLines` is enforced always.
   */
  'editor.cursorSurroundingLinesStyle': string;

  /**
   * Controls the width of the cursor when `editor.cursorStyle` is set to `line`.
   */
  'editor.cursorWidth': number;

  /**
   * Controls whether inline color decorations should be shown using the default document color provider
   */
  'editor.defaultColorDecorators': boolean;

  /**
   * Defines a default folding range provider that takes precedence over all other folding range providers. Must be the identifier of an extension contributing a folding range provider.
   */
  'editor.defaultFoldingRangeProvider': string | null;

  /**
   * Defines a default formatter which takes precedence over all other formatter settings. Must be the identifier of an extension contributing a formatter.
   */
  'editor.defaultFormatter': string | null;

  /**
   * Controls whether the Go to Definition mouse gesture always opens the peek widget.
   */
  'editor.definitionLinkOpensInPeek': boolean;

  /**
   * Controls whether `editor.tabSize#` and `#editor.insertSpaces` will be automatically detected when a file is opened based on the file contents.
   */
  'editor.detectIndentation': boolean;

  /**
   * Controls whether the editor should allow moving selections via drag and drop.
   */
  'editor.dragAndDrop': boolean;

  /**
   * Controls whether you can drag and drop a file into a text editor by holding down `shift` (instead of opening the file in an editor).
   */
  'editor.dropIntoEditor.enabled': boolean;

  /**
   * Controls if a widget is shown when dropping files into the editor. This widget lets you control how the file is dropped.
   *  - afterDrop: Show the drop selector widget after a file is dropped into the editor.
   *  - never: Never show the drop selector widget. Instead the default drop provider is always used.
   */
  'editor.dropIntoEditor.showDropSelector': string;

  /**
   * Controls whether copying without a selection copies the current line.
   */
  'editor.emptySelectionClipboard': boolean;

  /**
   * Scrolling speed multiplier when pressing `Alt`.
   */
  'editor.fastScrollSensitivity': number;

  /**
   * Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.
   */
  'editor.find.addExtraSpaceOnTop': boolean;

  /**
   * Controls the condition for turning on Find in Selection automatically.
   *  - never: Never turn on Find in Selection automatically (default).
   *  - always: Always turn on Find in Selection automatically.
   *  - multiline: Turn on Find in Selection automatically when multiple lines of content are selected.
   */
  'editor.find.autoFindInSelection': string;

  /**
   * Controls whether the cursor should jump to find matches while typing.
   */
  'editor.find.cursorMoveOnType': boolean;

  /**
   * Controls whether the Find Widget should read or modify the shared find clipboard on macOS.
   */
  'editor.find.globalFindClipboard': boolean;

  /**
   * Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.
   */
  'editor.find.loop': boolean;

  /**
   * Controls whether the search string in the Find Widget is seeded from the editor selection.
   *  - never: Never seed search string from the editor selection.
   *  - always: Always seed search string from the editor selection, including word at cursor position.
   *  - selection: Only seed search string from the editor selection.
   */
  'editor.find.seedSearchStringFromSelection': string;

  /**
   * Controls whether the editor has code folding enabled.
   */
  'editor.folding': boolean;

  /**
   * Controls whether the editor should highlight folded ranges.
   */
  'editor.foldingHighlight': boolean;

  /**
   * Controls whether the editor automatically collapses import ranges.
   */
  'editor.foldingImportsByDefault': boolean;

  /**
   * The maximum number of foldable regions. Increasing this value may result in the editor becoming less responsive when the current source has a large number of foldable regions.
   */
  'editor.foldingMaximumRegions': number;

  /**
   * Controls the strategy for computing folding ranges.
   *  - auto: Use a language-specific folding strategy if available, else the indentation-based one.
   *  - indentation: Use the indentation-based folding strategy.
   */
  'editor.foldingStrategy': string;

  /**
   * Controls the font family.
   */
  'editor.fontFamily': "Consolas, 'Courier New', monospace";

  /**
   * Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property.
   */
  'editor.fontLigatures': boolean;

  /**
   * Controls the font size in pixels.
   */
  'editor.fontSize': number;

  /**
   * Configures font variations. Can be either a boolean to enable/disable the translation from font-weight to font-variation-settings or a string for the value of the CSS 'font-variation-settings' property.
   */
  'editor.fontVariations': boolean;

  /**
   * Controls the font weight. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.
   */
  'editor.fontWeight': string;

  /**
   * Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.
   */
  'editor.formatOnPaste': boolean;

  /**
   * Format a file on save. A formatter must be available, the file must not be saved after delay, and the editor must not be shutting down.
   */
  'editor.formatOnSave': boolean;

  /**
   * Controls if format on save formats the whole file or only modifications. Only applies when `editor.formatOnSave` is enabled.
   *  - file: Format the whole file.
   *  - modifications: Format modifications (requires source control).
   *  - modificationsIfAvailable: Will attempt to format modifications only (requires source control). If source control can't be used, then the whole file will be formatted.
   */
  'editor.formatOnSaveMode': string;

  /**
   * Controls whether the editor should automatically format the line after typing.
   */
  'editor.formatOnType': boolean;

  /**
   * Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.
   */
  'editor.glyphMargin': boolean;

  /**
   * Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.
   */
  'editor.gotoLocation.alternativeDeclarationCommand': string;

  /**
   * Alternative command id that is being executed when the result of 'Go to Definition' is the current location.
   */
  'editor.gotoLocation.alternativeDefinitionCommand': string;

  /**
   * Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.
   */
  'editor.gotoLocation.alternativeImplementationCommand': string;

  /**
   * Alternative command id that is being executed when the result of 'Go to Reference' is the current location.
   */
  'editor.gotoLocation.alternativeReferenceCommand': string;

  /**
   * Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.
   */
  'editor.gotoLocation.alternativeTypeDefinitionCommand': string;

  /**
   * Controls the behavior the 'Go to Declaration'-command when multiple target locations exist.
   *  - peek: Show Peek view of the results (default)
   *  - gotoAndPeek: Go to the primary result and show a Peek view
   *  - goto: Go to the primary result and enable Peek-less navigation to others
   */
  'editor.gotoLocation.multipleDeclarations': string;

  /**
   * Controls the behavior the 'Go to Definition'-command when multiple target locations exist.
   *  - peek: Show Peek view of the results (default)
   *  - gotoAndPeek: Go to the primary result and show a Peek view
   *  - goto: Go to the primary result and enable Peek-less navigation to others
   */
  'editor.gotoLocation.multipleDefinitions': string;

  /**
   * Controls the behavior the 'Go to Implementations'-command when multiple target locations exist.
   *  - peek: Show Peek view of the results (default)
   *  - gotoAndPeek: Go to the primary result and show a Peek view
   *  - goto: Go to the primary result and enable Peek-less navigation to others
   */
  'editor.gotoLocation.multipleImplementations': string;

  /**
   * Controls the behavior the 'Go to References'-command when multiple target locations exist.
   *  - peek: Show Peek view of the results (default)
   *  - gotoAndPeek: Go to the primary result and show a Peek view
   *  - goto: Go to the primary result and enable Peek-less navigation to others
   */
  'editor.gotoLocation.multipleReferences': string;

  /**
   * Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist.
   *  - peek: Show Peek view of the results (default)
   *  - gotoAndPeek: Go to the primary result and show a Peek view
   *  - goto: Go to the primary result and enable Peek-less navigation to others
   */
  'editor.gotoLocation.multipleTypeDefinitions': string;

  /**
   * Controls whether bracket pair guides are enabled or not.
   *  - true: Enables bracket pair guides.
   *  - active: Enables bracket pair guides only for the active bracket pair.
   *  - false: Disables bracket pair guides.
   */
  'editor.guides.bracketPairs': boolean;

  /**
   * Controls whether horizontal bracket pair guides are enabled or not.
   *  - true: Enables horizontal guides as addition to vertical bracket pair guides.
   *  - active: Enables horizontal guides only for the active bracket pair.
   *  - false: Disables horizontal bracket pair guides.
   */
  'editor.guides.bracketPairsHorizontal': string;

  /**
   * Controls whether the editor should highlight the active bracket pair.
   */
  'editor.guides.highlightActiveBracketPair': boolean;

  /**
   * Controls whether the editor should highlight the active indent guide.
   *  - true: Highlights the active indent guide.
   *  - always: Highlights the active indent guide even if bracket guides are highlighted.
   *  - false: Do not highlight the active indent guide.
   */
  'editor.guides.highlightActiveIndentation': boolean;

  /**
   * Controls whether the editor should render indent guides.
   */
  'editor.guides.indentation': boolean;

  /**
   * Controls whether the cursor should be hidden in the overview ruler.
   */
  'editor.hideCursorInOverviewRuler': boolean;

  /**
   * Prefer showing hovers above the line, if there's space.
   */
  'editor.hover.above': boolean;

  /**
   * Controls the delay in milliseconds after which the hover is shown.
   */
  'editor.hover.delay': number;

  /**
   * Controls whether the hover is shown.
   */
  'editor.hover.enabled': boolean;

  /**
   * Controls the delay in milliseconds after which the hover is hidden.
   */
  'editor.hover.hidingDelay': number;

  /**
   * Controls whether the hover should remain visible when mouse is moved over it.
   */
  'editor.hover.sticky': boolean;

  /**
   * The number of spaces used for indentation or `"tabSize"` to use the value from `editor.tabSize#`. This setting is overridden based on the file contents when `#editor.detectIndentation` is on.
   */
  'editor.indentSize': string;

  /**
   * Enables the inlay hints in the editor.
   *  - on: Inlay hints are enabled
   *  - onUnlessPressed: Inlay hints are showing by default and hide when holding Ctrl+Alt
   *  - offUnlessPressed: Inlay hints are hidden by default and show when holding Ctrl+Alt
   *  - off: Inlay hints are disabled
   */
  'editor.inlayHints.enabled': string;

  /**
   * Controls font family of inlay hints in the editor. When set to empty, the `editor.fontFamily` is used.
   */
  'editor.inlayHints.fontFamily': string;

  /**
   * Controls font size of inlay hints in the editor. As default the `editor.fontSize` is used when the configured value is less than `5` or greater than the editor font size.
   */
  'editor.inlayHints.fontSize': number;

  /**
   * Enables the padding around the inlay hints in the editor.
   */
  'editor.inlayHints.padding': boolean;

  /**
   * Controls whether the accessibility hint should be provided to screen reader users when an inline completion is shown.
   */
  'editor.inlineCompletionsAccessibilityVerbose': boolean;

  /**
   * Controls whether to automatically show inline suggestions in the editor.
   */
  'editor.inlineSuggest.enabled': boolean;

  /**
   * Controls when to show the inline suggestion toolbar.
   *  - always: Show the inline suggestion toolbar whenever an inline suggestion is shown.
   *  - onHover: Show the inline suggestion toolbar when hovering over an inline suggestion.
   */
  'editor.inlineSuggest.showToolbar': string;

  /**
   * Controls how inline suggestions interact with the suggest widget. If enabled, the suggest widget is not shown automatically when inline suggestions are available.
   */
  'editor.inlineSuggest.suppressSuggestions': boolean;

  /**
   * Insert spaces when pressing `Tab`. This setting is overridden based on the file contents when `editor.detectIndentation` is on.
   */
  'editor.insertSpaces': boolean;

  /**
   * Defines the bracket symbols that increase or decrease the indentation.
   */
  'editor.language.brackets': unknown | null;

  /**
   * Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled.
   */
  'editor.language.colorizedBracketPairs': unknown | null;

  /**
   * Controls the letter spacing in pixels.
   */
  'editor.letterSpacing': number;

  /**
   * Enables the Code Action lightbulb in the editor.
   */
  'editor.lightbulb.enabled': boolean;

  /**
   * Controls the line height.
   *  - Use 0 to automatically compute the line height from the font size.
   *  - Values between 0 and 8 will be used as a multiplier with the font size.
   *  - Values greater than or equal to 8 will be used as effective values.
   */
  'editor.lineHeight': number;

  /**
   * Controls the display of line numbers.
   *  - off: Line numbers are not rendered.
   *  - on: Line numbers are rendered as absolute number.
   *  - relative: Line numbers are rendered as distance in lines to cursor position.
   *  - interval: Line numbers are rendered every 10 lines.
   */
  'editor.lineNumbers': string;

  /**
   * Controls whether the editor has linked editing enabled. Depending on the language, related symbols such as HTML tags, are updated while editing.
   */
  'editor.linkedEditing': boolean;

  /**
   * Controls whether the editor should detect links and make them clickable.
   */
  'editor.links': boolean;

  /**
   * Highlight matching brackets.
   */
  'editor.matchBrackets': string;

  /**
   * Controls whether the minimap is hidden automatically.
   */
  'editor.minimap.autohide': boolean;

  /**
   * Controls whether the minimap is shown.
   */
  'editor.minimap.enabled': boolean;

  /**
   * Limit the width of the minimap to render at most a certain number of columns.
   */
  'editor.minimap.maxColumn': number;

  /**
   * Render the actual characters on a line as opposed to color blocks.
   */
  'editor.minimap.renderCharacters': boolean;

  /**
   * Scale of content drawn in the minimap: 1, 2 or 3.
   */
  'editor.minimap.scale': number;

  /**
   * Controls when the minimap slider is shown.
   */
  'editor.minimap.showSlider': string;

  /**
   * Controls the side where to render the minimap.
   */
  'editor.minimap.side': string;

  /**
   * Controls the size of the minimap.
   *  - proportional: The minimap has the same size as the editor contents (and might scroll).
   *  - fill: The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling).
   *  - fit: The minimap will shrink as necessary to never be larger than the editor (no scrolling).
   */
  'editor.minimap.size': string;

  /**
   * A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.
   */
  'editor.mouseWheelScrollSensitivity': number;

  /**
   * Zoom the font of the editor when using mouse wheel and holding `Ctrl`.
   */
  'editor.mouseWheelZoom': boolean;

  /**
   * The modifier to be used to add multiple cursors with the mouse. The Go to Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier.
   *  - ctrlCmd: Maps to `Control` on Windows and Linux and to `Command` on macOS.
   *  - alt: Maps to `Alt` on Windows and Linux and to `Option` on macOS.
   */
  'editor.multiCursorModifier': string;

  /**
   * Controls pasting when the line count of the pasted text matches the cursor count.
   *  - spread: Each cursor pastes a single line of the text.
   *  - full: Each cursor pastes the full text.
   */
  'editor.multiCursorPaste': string;

  /**
   * Controls whether the editor should highlight semantic symbol occurrences.
   */
  'editor.occurrencesHighlight': boolean;

  /**
   * Controls whether a border should be drawn around the overview ruler.
   */
  'editor.overviewRulerBorder': boolean;

  /**
   * Controls the amount of space between the bottom edge of the editor and the last line.
   */
  'editor.padding.bottom': number;

  /**
   * Controls the amount of space between the top edge of the editor and the first line.
   */
  'editor.padding.top': number;

  /**
   * Controls whether the parameter hints menu cycles or closes when reaching the end of the list.
   */
  'editor.parameterHints.cycle': boolean;

  /**
   * Enables a pop-up that shows parameter documentation and type information as you type.
   */
  'editor.parameterHints.enabled': boolean;

  /**
   * Controls whether you can paste content in different ways.
   */
  'editor.pasteAs.enabled': boolean;

  /**
   * Controls if a widget is shown when pasting content in to the editor. This widget lets you control how the file is pasted.
   *  - afterPaste: Show the paste selector widget after content is pasted into the editor.
   *  - never: Never show the paste selector widget. Instead the default pasting behavior is always used.
   */
  'editor.pasteAs.showPasteSelector': string;

  /**
   * Controls whether to focus the inline editor or the tree in the peek widget.
   *  - tree: Focus the tree when opening peek
   *  - editor: Focus the editor when opening peek
   */
  'editor.peekWidgetDefaultFocus': string;

  /**
   * Controls whether suggestions should automatically show up while typing.
   */
  'editor.quickSuggestions': {
    other?: 'on' | 'off';
    comments?: 'on' | 'off';
    strings?: 'on' | 'off';
  };

  /**
   * Controls the delay in milliseconds after which quick suggestions will show up.
   */
  'editor.quickSuggestionsDelay': number;

  /**
   * Enable/disable the ability to preview changes before renaming
   */
  'editor.rename.enablePreview': boolean;

  /**
   * Controls whether the editor should render control characters.
   */
  'editor.renderControlCharacters': boolean;

  /**
   * Render last line number when the file ends with a newline.
   */
  'editor.renderFinalNewline': string;

  /**
   * Controls how the editor should render the current line highlight.
   *  - none
   *  - gutter
   *  - line
   *  - all: Highlights both the gutter and the current line.
   */
  'editor.renderLineHighlight': string;

  /**
   * Controls if the editor should render the current line highlight only when the editor is focused.
   */
  'editor.renderLineHighlightOnlyWhenFocus': boolean;

  /**
   * Controls how the editor should render whitespace characters.
   *  - none
   *  - boundary: Render whitespace characters except for single spaces between words.
   *  - selection: Render whitespace characters only on selected text.
   *  - trailing: Render only trailing whitespace characters.
   *  - all
   */
  'editor.renderWhitespace': string;

  /**
   * Controls whether selections should have rounded corners.
   */
  'editor.roundedSelection': boolean;

  /**
   * Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.
   */
  'editor.rulers': string[];

  /**
   * Control whether inline suggestions are announced by a screen reader.
   */
  'editor.screenReaderAnnounceInlineSuggestion': boolean;

  /**
   * Controls the visibility of the horizontal scrollbar.
   *  - auto: The horizontal scrollbar will be visible only when necessary.
   *  - visible: The horizontal scrollbar will always be visible.
   *  - hidden: The horizontal scrollbar will always be hidden.
   */
  'editor.scrollbar.horizontal': string;

  /**
   * The height of the horizontal scrollbar.
   */
  'editor.scrollbar.horizontalScrollbarSize': number;

  /**
   * Controls whether clicks scroll by page or jump to click position.
   */
  'editor.scrollbar.scrollByPage': boolean;

  /**
   * Controls the visibility of the vertical scrollbar.
   *  - auto: The vertical scrollbar will be visible only when necessary.
   *  - visible: The vertical scrollbar will always be visible.
   *  - hidden: The vertical scrollbar will always be hidden.
   */
  'editor.scrollbar.vertical': string;

  /**
   * The width of the vertical scrollbar.
   */
  'editor.scrollbar.verticalScrollbarSize': number;

  /**
   * Controls the number of extra characters beyond which the editor will scroll horizontally.
   */
  'editor.scrollBeyondLastColumn': number;

  /**
   * Controls whether the editor will scroll beyond the last line.
   */
  'editor.scrollBeyondLastLine': boolean;

  /**
   * Controls whether the Linux primary clipboard should be supported.
   */
  'editor.selectionClipboard': boolean;

  /**
   * Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.
   */
  'editor.scrollPredominantAxis': boolean;

  /**
   * Controls whether the editor should highlight matches similar to the selection.
   */
  'editor.selectionHighlight': boolean;

  /**
   * Controls whether the semanticHighlighting is shown for the languages that support it.
   *  - true: Semantic highlighting enabled for all color themes.
   *  - false: Semantic highlighting disabled for all color themes.
   *  - configuredByTheme: Semantic highlighting is configured by the current color theme's `semanticHighlighting` setting.
   */
  'editor.semanticHighlighting.enabled': string;

  /**
   * Overrides editor semantic token color and styles from the currently selected color theme.
   */
  'editor.semanticTokenColorCustomizations': { [K in string]?: unknown };

  /**
   * Controls strikethrough deprecated variables.
   */
  'editor.showDeprecated': boolean;

  /**
   * Controls when the folding controls on the gutter are shown.
   *  - always: Always show the folding controls.
   *  - never: Never show the folding controls and reduce the gutter size.
   *  - mouseover: Only show the folding controls when the mouse is over the gutter.
   */
  'editor.showFoldingControls': string;

  /**
   * Controls fading out of unused code.
   */
  'editor.showUnused': boolean;

  /**
   * Whether leading and trailing whitespace should always be selected.
   */
  'editor.smartSelect.selectLeadingAndTrailingWhitespace': boolean;

  /**
   * Whether subwords (like 'foo' in 'fooBar' or 'foo_bar') should be selected.
   */
  'editor.smartSelect.selectSubwords': boolean;

  /**
   * Controls whether the editor will scroll using an animation.
   */
  'editor.smoothScrolling': boolean;

  /**
   * Controls if surround-with-snippets or file template snippets show as Code Actions.
   */
  'editor.snippets.codeActions.enabled': boolean;

  /**
   * Controls whether snippets are shown with other suggestions and how they are sorted.
   *  - top: Show snippet suggestions on top of other suggestions.
   *  - bottom: Show snippet suggestions below other suggestions.
   *  - inline: Show snippets suggestions with other suggestions.
   *  - none: Do not show snippet suggestions.
   */
  'editor.snippetSuggestions': string;

  /**
   * Keep peek editors open even when double-clicking their content or when hitting `Escape`.
   */
  'editor.stablePeek': boolean;

  /**
   * Defines the model to use for determining which lines to stick. If the outline model does not exist, it will fall back on the folding provider model which falls back on the indentation model. This order is respected in all three cases.
   */
  'editor.stickyScroll.defaultModel': string;

  /**
   * Shows the nested current scopes during the scroll at the top of the editor.
   */
  'editor.stickyScroll.enabled': boolean;

  /**
   * Defines the maximum number of sticky lines to show.
   */
  'editor.stickyScroll.maxLineCount': number;

  /**
   * Enable scrolling of Sticky Scroll with the editor's horizontal scrollbar.
   */
  'editor.stickyScroll.scrollWithEditor': boolean;

  /**
   * Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.
   */
  'editor.stickyTabStops': boolean;

  /**
   * Controls whether filtering and sorting suggestions accounts for small typos.
   */
  'editor.suggest.filterGraceful': boolean;

  /**
   * Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.
   *  - insert: Insert suggestion without overwriting text right of the cursor.
   *  - replace: Insert suggestion and overwrite text right of the cursor.
   */
  'editor.suggest.insertMode': string;

  /**
   * Controls whether sorting favors words that appear close to the cursor.
   */
  'editor.suggest.localityBonus': boolean;

  /**
   * When enabled IntelliSense filtering requires that the first character matches on a word start. For example, `c` on `Console` or `WebContext` but not on `description`.
   */
  'editor.suggest.matchOnWordStartOnly': boolean;

  /**
   * Controls whether to preview the suggestion outcome in the editor.
   */
  'editor.suggest.preview': boolean;

  /**
   * Controls whether a suggestion is selected when the widget shows.
   *  - always: Always select a suggestion when automatically triggering IntelliSense.
   *  - never: Never select a suggestion when automatically triggering IntelliSense.
   *  - whenTriggerCharacter: Select a suggestion only when triggering IntelliSense from a trigger character.
   *  - whenQuickSuggestion: Select a suggestion only when triggering IntelliSense as you type.
   */
  'editor.suggest.selectionMode': string;

  /**
   * Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `editor.suggestSelection`).
   */
  'editor.suggest.shareSuggestSelections': boolean;

  /**
   * When enabled IntelliSense shows `class`-suggestions.
   */
  'editor.suggest.showClasses': boolean;

  /**
   * When enabled IntelliSense shows `color`-suggestions.
   */
  'editor.suggest.showColors': boolean;

  /**
   * When enabled IntelliSense shows `constant`-suggestions.
   */
  'editor.suggest.showConstants': boolean;

  /**
   * When enabled IntelliSense shows `constructor`-suggestions.
   */
  'editor.suggest.showConstructors': boolean;

  /**
   * When enabled IntelliSense shows `customcolor`-suggestions.
   */
  'editor.suggest.showCustomcolors': boolean;

  /**
   * When enabled IntelliSense shows `deprecated`-suggestions.
   */
  'editor.suggest.showDeprecated': boolean;

  /**
   * When enabled IntelliSense shows `enumMember`-suggestions.
   */
  'editor.suggest.showEnumMembers': boolean;

  /**
   * When enabled IntelliSense shows `enum`-suggestions.
   */
  'editor.suggest.showEnums': boolean;

  /**
   * When enabled IntelliSense shows `event`-suggestions.
   */
  'editor.suggest.showEvents': boolean;

  /**
   * When enabled IntelliSense shows `field`-suggestions.
   */
  'editor.suggest.showFields': boolean;

  /**
   * When enabled IntelliSense shows `file`-suggestions.
   */
  'editor.suggest.showFiles': boolean;

  /**
   * When enabled IntelliSense shows `folder`-suggestions.
   */
  'editor.suggest.showFolders': boolean;

  /**
   * When enabled IntelliSense shows `function`-suggestions.
   */
  'editor.suggest.showFunctions': boolean;

  /**
   * Controls whether to show or hide icons in suggestions.
   */
  'editor.suggest.showIcons': boolean;

  /**
   * Controls whether suggest details show inline with the label or only in the details widget.
   */
  'editor.suggest.showInlineDetails': boolean;

  /**
   * When enabled IntelliSense shows `interface`-suggestions.
   */
  'editor.suggest.showInterfaces': boolean;

  /**
   * When enabled IntelliSense shows `issues`-suggestions.
   */
  'editor.suggest.showIssues': boolean;

  /**
   * When enabled IntelliSense shows `keyword`-suggestions.
   */
  'editor.suggest.showKeywords': boolean;

  /**
   * When enabled IntelliSense shows `method`-suggestions.
   */
  'editor.suggest.showMethods': boolean;

  /**
   * When enabled IntelliSense shows `module`-suggestions.
   */
  'editor.suggest.showModules': boolean;

  /**
   * When enabled IntelliSense shows `operator`-suggestions.
   */
  'editor.suggest.showOperators': boolean;

  /**
   * When enabled IntelliSense shows `property`-suggestions.
   */
  'editor.suggest.showProperties': boolean;

  /**
   * When enabled IntelliSense shows `reference`-suggestions.
   */
  'editor.suggest.showReferences': boolean;

  /**
   * When enabled IntelliSense shows `snippet`-suggestions.
   */
  'editor.suggest.showSnippets': boolean;

  /**
   * Controls the visibility of the status bar at the bottom of the suggest widget.
   */
  'editor.suggest.showStatusBar': boolean;

  /**
   * When enabled IntelliSense shows `struct`-suggestions.
   */
  'editor.suggest.showStructs': boolean;

  /**
   * When enabled IntelliSense shows `typeParameter`-suggestions.
   */
  'editor.suggest.showTypeParameters': boolean;

  /**
   * When enabled IntelliSense shows `unit`-suggestions.
   */
  'editor.suggest.showUnits': boolean;

  /**
   * When enabled IntelliSense shows `user`-suggestions.
   */
  'editor.suggest.showUsers': boolean;

  /**
   * When enabled IntelliSense shows `value`-suggestions.
   */
  'editor.suggest.showValues': boolean;

  /**
   * When enabled IntelliSense shows `variable`-suggestions.
   */
  'editor.suggest.showVariables': boolean;

  /**
   * When enabled IntelliSense shows `text`-suggestions.
   */
  'editor.suggest.showWords': boolean;

  /**
   * Controls whether an active snippet prevents quick suggestions.
   */
  'editor.suggest.snippetsPreventQuickSuggestions': boolean;

  /**
   * Font size for the suggest widget. When set to `0`, the value of `editor.fontSize` is used.
   */
  'editor.suggestFontSize': number;

  /**
   * Line height for the suggest widget. When set to `0`, the value of `editor.lineHeight` is used. The minimum value is 8.
   */
  'editor.suggestLineHeight': number;

  /**
   * Controls whether suggestions should automatically show up when typing trigger characters.
   */
  'editor.suggestOnTriggerCharacters': boolean;

  /**
   * Controls how suggestions are pre-selected when showing the suggest list.
   *  - first: Always select the first suggestion.
   *  - recentlyUsed: Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently.
   *  - recentlyUsedByPrefix: Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.
   */
  'editor.suggestSelection': string;

  /**
   * Enables tab completions.
   *  - on: Tab complete will insert the best matching suggestion when pressing tab.
   *  - off: Disable tab completions.
   *  - onlySnippets: Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.
   */
  'editor.tabCompletion': string;

  /**
   * Controls whether the editor receives tabs or defers them to the workbench for navigation.
   */
  'editor.tabFocusMode': boolean;

  /**
   * The number of spaces a tab is equal to. This setting is overridden based on the file contents when `editor.detectIndentation` is on.
   */
  'editor.tabSize': number;

  /**
   * Overrides editor syntax colors and font style from the currently selected color theme.
   */
  'editor.tokenColorCustomizations': {
    [ThemeNamePattern in string]?: VSCodeTokenColorSchema;
  };

  /**
   * Remove trailing auto inserted whitespace.
   */
  'editor.trimAutoWhitespace': boolean;

  /**
   * Controls whether clicking on the empty content after a folded line will unfold the line.
   */
  'editor.unfoldOnClickAfterEndOfLine': boolean;

  /**
   * Defines allowed characters that are not being highlighted.
   */
  'editor.unicodeHighlight.allowedCharacters': { [K in string]?: boolean };

  /**
   * Unicode characters that are common in allowed locales are not being highlighted.
   */
  'editor.unicodeHighlight.allowedLocales': {
    _os?: boolean;
    _vscode?: boolean;
  };

  /**
   * Controls whether characters are highlighted that can be confused with basic ASCII characters, except those that are common in the current user locale.
   */
  'editor.unicodeHighlight.ambiguousCharacters': boolean;

  /**
   * Controls whether characters in comments should also be subject to Unicode highlighting.
   */
  'editor.unicodeHighlight.includeComments': string;

  /**
   * Controls whether characters in strings should also be subject to Unicode highlighting.
   */
  'editor.unicodeHighlight.includeStrings': boolean;

  /**
   * Controls whether characters that just reserve space or have no width at all are highlighted.
   */
  'editor.unicodeHighlight.invisibleCharacters': boolean;

  /**
   * Controls whether all non-basic ASCII characters are highlighted. Only characters between U+0020 and U+007E, tab, line-feed and carriage-return are considered basic ASCII.
   */
  'editor.unicodeHighlight.nonBasicASCII': string;

  /**
   * Remove unusual line terminators that might cause problems.
   *  - auto: Unusual line terminators are automatically removed.
   *  - off: Unusual line terminators are ignored.
   *  - prompt: Unusual line terminators prompt to be removed.
   */
  'editor.unusualLineTerminators': string;

  /**
   * Inserting and deleting whitespace follows tab stops.
   */
  'editor.useTabStops': boolean;

  /**
   * Controls whether completions should be computed based on words in the document.
   */
  'editor.wordBasedSuggestions': boolean;

  /**
   * Controls from which documents word based completions are computed.
   *  - currentDocument: Only suggest words from the active document.
   *  - matchingDocuments: Suggest words from all open documents of the same language.
   *  - allDocuments: Suggest words from all open documents.
   */
  'editor.wordBasedSuggestionsMode': string;

  /**
   * Controls the word break rules used for Chinese/Japanese/Korean (CJK) text.
   *  - normal: Use the default line break rule.
   *  - keepAll: Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal.
   */
  'editor.wordBreak': string;

  /**
   * Characters that will be used as word separators when doing word related navigations or operations.
   */
  'editor.wordSeparators': string;

  /**
   * Controls how lines should wrap.
   *  - off: Lines will never wrap.
   *  - on: Lines will wrap at the viewport width.
   *  - wordWrapColumn: Lines will wrap at `editor.wordWrapColumn`.
   *  - bounded: Lines will wrap at the minimum of viewport and `editor.wordWrapColumn`.
   */
  'editor.wordWrap': string;

  /**
   * Controls the wrapping column of the editor when `editor.wordWrap` is `wordWrapColumn` or `bounded`.
   */
  'editor.wordWrapColumn': number;

  /**
   * Controls the indentation of wrapped lines.
   *  - none: No indentation. Wrapped lines begin at column 1.
   *  - same: Wrapped lines get the same indentation as the parent.
   *  - indent: Wrapped lines get +1 indentation toward the parent.
   *  - deepIndent: Wrapped lines get +2 indentation toward the parent.
   */
  'editor.wrappingIndent': string;

  /**
   * Controls the algorithm that computes wrapping points.
   *  - simple: Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width.
   *  - advanced: Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.
   */
  'editor.wrappingStrategy': string;

  // SCM

  /**
   * Controls whether inline actions are always visible in the Source Control view.
   */
  'scm.alwaysShowActions': boolean;

  /**
   * Controls whether repositories should always be visible in the Source Control view.
   */
  'scm.alwaysShowRepositories': boolean;

  /**
   * Controls whether the Source Control view should automatically reveal and select files when opening them.
   */
  'scm.autoReveal': boolean;

  /**
   * Controls the count badge on the Source Control icon on the Activity Bar.
   *  - all: Show the sum of all Source Control Provider count badges.
   *  - focused: Show the count badge of the focused Source Control Provider.
   *  - off: Disable the Source Control count badge.
   */
  'scm.countBadge': string;

  /**
   * Controls the default Source Control repository view mode.
   *  - tree: Show the repository changes as a tree.
   *  - list: Show the repository changes as a list.
   */
  'scm.defaultViewMode': string;

  /**
   * Controls the default Source Control repository changes sort order when viewed as a list.
   *  - name: Sort the repository changes by file name.
   *  - path: Sort the repository changes by path.
   *  - status: Sort the repository changes by Source Control status.
   */
  'scm.defaultViewSortKey': string;

  /**
   * Controls diff decorations in the editor.
   *  - all: Show the diff decorations in all available locations.
   *  - gutter: Show the diff decorations only in the editor gutter.
   *  - overview: Show the diff decorations only in the overview ruler.
   *  - minimap: Show the diff decorations only in the minimap.
   *  - none: Do not show the diff decorations.
   */
  'scm.diffDecorations': string;

  /**
   * Controls the behavior of Source Control diff gutter decorations.
   *  - diff: Show the inline diff Peek view on click.
   *  - none: Do nothing.
   */
  'scm.diffDecorationsGutterAction': string;

  /**
   * Controls whether a pattern is used for the diff decorations in gutter.
   */
  'scm.diffDecorationsGutterPattern': {
    added?: boolean;
    modified?: boolean;
  };

  /**
   * Controls the visibility of the Source Control diff decorator in the gutter.
   *  - always: Show the diff decorator in the gutter at all times.
   *  - hover: Show the diff decorator in the gutter only on hover.
   */
  'scm.diffDecorationsGutterVisibility': string;

  /**
   * Controls the width(px) of diff decorations in gutter (added & modified).
   */
  'scm.diffDecorationsGutterWidth': number;

  /**
   * Controls whether leading and trailing whitespace is ignored in Source Control diff gutter decorations.
   *  - true: Ignore leading and trailing whitespace.
   *  - false: Do not ignore leading and trailing whitespace.
   *  - inherit: Inherit from `diffEditor.ignoreTrimWhitespace`.
   */
  'scm.diffDecorationsIgnoreTrimWhitespace': string;

  /**
   * Controls the font for the input message. Use `default` for the workbench user interface font family, `editor` for the `editor.fontFamily`'s value, or a custom font family.
   */
  'scm.inputFontFamily': string;

  /**
   * Controls the font size for the input message in pixels.
   */
  'scm.inputFontSize': number;

  /**
   * Controls the count badges on Source Control Provider headers.
   *  - hidden: Hide Source Control Provider count badges.
   *  - auto: Only show count badge for Source Control Provider when non-zero.
   *  - visible: Show Source Control Provider count badges.
   */
  'scm.providerCountBadge': string;

  /**
   * Controls the sort order of the repositories in the source control repositories view.
   *  - discovery time: Repositories in the Source Control Repositories view are sorted by discovery time. Repositories in the Source Control view are sorted in the order that they were selected.
   *  - name: Repositories in the Source Control Repositories and Source Control views are sorted by repository name.
   *  - path: Repositories in the Source Control Repositories and Source Control views are sorted by repository path.
   */
  'scm.repositories.sortOrder': string;

  /**
   * Controls how many repositories are visible in the Source Control Repositories section. Set to 0, to be able to manually resize the view.
   */
  'scm.repositories.visible': number;

  /**
   * Controls whether an action button can be shown in the Source Control view.
   */
  'scm.showActionButton': boolean;

  // Security

  /**
   * A set of UNC host names (without leading or trailing backslash, for example `192.168.0.1` or `my-server`) to allow without user confirmation. If a UNC host is being accessed that is not allowed via this setting or has not been acknowledged via user confirmation, an error will occur and the operation stopped.
   */
  'security.allowedUNCHosts': string[];

  /**
   * If enabled, a dialog will ask for confirmation whenever a local file or workspace is about to open through a protocol handler.
   */
  'security.promptForLocalFileProtocolHandling': boolean;

  /**
   * If enabled, a dialog will ask for confirmation whenever a remote file or workspace is about to open through a protocol handler.
   */
  'security.promptForRemoteFileProtocolHandling': boolean;

  /**
   * If enabled, only allows access to UNC host names that are allowed by the `security.allowedUNCHosts` setting or after user confirmation.
   */
  'security.restrictUNCAccess': boolean;

  /**
   * Controls when the restricted mode banner is shown.
   *  - always: Show the banner every time an untrusted workspace is open.
   *  - untilDismissed: Show the banner when an untrusted workspace is opened until dismissed.
   *  - never: Do not show the banner when an untrusted workspace is open.
   */
  'security.workspace.trust.banner': string;

  /**
   * Controls whether or not the empty window is trusted by default within VS Code. When used with `security.workspace.trust.untrustedFiles`, you can enable the full functionality of VS Code without prompting in an empty window.
   */
  'security.workspace.trust.emptyWindow': boolean;

  /**
   * Controls whether or not Workspace Trust is enabled within VS Code.
   */
  'security.workspace.trust.enabled': boolean;

  /**
   * Controls when the startup prompt to trust a workspace is shown.
   *  - always: Ask for trust every time an untrusted workspace is opened.
   *  - once: Ask for trust the first time an untrusted workspace is opened.
   *  - never: Do not ask for trust when an untrusted workspace is opened.
   */
  'security.workspace.trust.startupPrompt': string;

  /**
   * Controls how to handle opening untrusted files in a trusted workspace. This setting also applies to opening files in an empty window which is trusted via `security.workspace.trust.emptyWindow`.
   *  - prompt: Ask how to handle untrusted files for each workspace. Once untrusted files are introduced to a trusted workspace, you will not be prompted again.
   *  - open: Always allow untrusted files to be introduced to a trusted workspace without prompting.
   *  - newWindow: Always open untrusted files in a separate window in restricted mode without prompting.
   */
  'security.workspace.trust.untrustedFiles': string;

  // Workbench

  /**
   * Whether to dim unfocused editors and terminals, which makes it more clear where typed input will go to. This works with the majority of editors with the notable exceptions of those that utilize iframes like notebooks and extension webview editors.
   */
  'accessibility.dimUnfocused.enabled': boolean;

  /**
   * The opacity fraction (0.2 to 1.0) to use for unfocused editors and terminals. This will only take effect when `accessibility.dimUnfocused.enabled` is enabled.
   */
  'accessibility.dimUnfocused.opacity': number;

  /**
   * Controls whether the terminal's accessible view is hidden.
   */
  'accessibility.hideAccessibleView': boolean;

  /**
   * Controls the height of editor tabs. Also applies to the title control bar when `workbench.editor.showTabs` is not set to `multiple`.
   */
  'window.density.editorTabHeight': string;

  /**
   * Controls the behavior of clicking an activity bar icon in the workbench.
   *  - toggle: Hide the side bar if the clicked item is already visible.
   *  - focus: Focus side bar if the clicked item is already visible.
   */
  'workbench.activityBar.iconClickBehavior': string;

  /**
   * Controls the location of the Activity bar. It can either show to the `side` or `top` (requires `window.commandCenter`) of the primary side bar or `hidden`.
   *  - side: Show the Activity bar to the side of the primary side bar.
   *  - top: Show the Activity bar on top of the primary side bar.
   *  - hidden: Hide the Activity bar.
   */
  'workbench.activityBar.location': string;

  /**
   * Controls whether to automatically resume available working changes stored in the cloud for the current workspace.
   *  - onReload: Automatically resume available working changes from the cloud on window reload.
   *  - off: Never attempt to resume working changes from the cloud.
   */
  'workbench.cloudChanges.autoResume': string;

  /**
   * Controls whether to prompt the user to store working changes in the cloud when using Continue Working On.
   *  - prompt: Prompt the user to sign in to store working changes in the cloud with Continue Working On.
   *  - off: Do not store working changes in the cloud with Continue Working On unless the user has already turned on Cloud Changes.
   */
  'workbench.cloudChanges.continueOn': string;

  /**
   * Overrides colors from the currently selected color theme.
   */
  'workbench.colorCustomizations': { [K in string]?: unknown };

  /**
   * Specifies the color theme used in the workbench.
   */
  'workbench.colorTheme': string;

  /**
   * Controls the number of recently used commands to keep in history for the command palette. Set to 0 to disable command history.
   */
  'workbench.commandPalette.history': number;

  /**
   * Controls whether the last typed input to the command palette should be restored when opening it the next time.
   */
  'workbench.commandPalette.preserveInput': boolean;

  /**
   * If an editor matching one of the listed types is opened as the first in an editor group and more than one group is open, the group is automatically locked. Locked groups will only be used for opening editors when explicitly chosen by a user gesture (for example drag and drop), but not by default. Consequently, the active editor in a locked group is less likely to be replaced accidentally with a different editor.
   */
  'workbench.editor.autoLockGroups': {
    [K: string]: boolean;
    default: boolean;
    'workbench.editorinputs.searchEditorInput': boolean;
    'workbench.editor.chatSession': boolean;
    'jupyter-notebook': boolean;
    'imagePreview.previewEditor': boolean;
    'vscode.audioPreview': boolean;
    'vscode.videoPreview': boolean;
    'jsProfileVisualizer.cpuprofile.table': boolean;
    'jsProfileVisualizer.heapprofile.table': boolean;
    'workbench.editors.gettingStartedInput': boolean;
    terminalEditor: boolean;
    'workbench.input.interactive': boolean;
    'mainThreadWebview-markdown.preview': boolean;
  };

  /**
   * Controls if the centered layout should automatically resize to maximum width when more than one group is open. Once only one group is open it will resize back to the original centered width.
   */
  'workbench.editor.centeredLayoutAutoResize': boolean;

  /**
   * Controls whether the centered layout tries to maintain constant width when the window is resized.
   */
  'workbench.editor.centeredLayoutFixedWidth': boolean;

  /**
   * Controls the behavior of empty editor groups when the last tab in the group is closed. When enabled, empty groups will automatically close. When disabled, empty groups will remain part of the grid.
   */
  'workbench.editor.closeEmptyGroups': boolean;

  /**
   * Controls whether editors showing a file that was opened during the session should close automatically when getting deleted or renamed by some other process. Disabling this will keep the editor open  on such an event. Note that deleting from within the application will always close the editor and that editors with unsaved changes will never close to preserve your data.
   */
  'workbench.editor.closeOnFileDelete': boolean;

  /**
   * Controls whether editor file decorations should use badges.
   */
  'workbench.editor.decorations.badges': boolean;

  /**
   * Controls whether editor file decorations should use colors.
   */
  'workbench.editor.decorations.colors': boolean;

  /**
   * The default editor for files detected as binary. If undefined, the user will be presented with a picker.
   */
  'workbench.editor.defaultBinaryEditor': string;

  /**
   * Controls how the editor group is resized when double clicking on a tab. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   *  - maximize: All other editor groups are hidden and the current editor group is maximized to take up the entire editor area.
   *  - expand: The editor group takes as much space as possible by making all other editor groups as small as possible.
   *  - off: No editor group is resized when double clicking on a tab.
   */
  'workbench.editor.doubleClickTabToToggleEditorGroupSizes': string;

  /**
   * Controls if the empty editor text hint should be visible in the editor.
   */
  'workbench.editor.empty.hint': string;

  /**
   * Controls whether opened editors show as preview editors. Preview editors do not stay open, are reused until explicitly set to be kept open (via double-click or editing), and show file names in italics.
   */
  'workbench.editor.enablePreview': boolean;

  /**
   * Controls whether editors remain in preview when a code navigation is started from them. Preview editors do not stay open, and are reused until explicitly set to be kept open (via double-click or editing). This value is ignored when `workbench.editor.enablePreview` is disabled.
   */
  'workbench.editor.enablePreviewFromCodeNavigation': boolean;

  /**
   * Controls whether editors opened from Quick Open show as preview editors. Preview editors do not stay open, and are reused until explicitly set to be kept open (via double-click or editing).
   */
  'workbench.editor.enablePreviewFromQuickOpen': boolean;

  /**
   * Controls whether editors are closed in most recently used order or from left to right.
   */
  'workbench.editor.focusRecentEditorAfterClose': boolean;

  /**
   * Controls whether a top border is drawn on tabs for editors that have unsaved changes. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   */
  'workbench.editor.highlightModifiedTabs': boolean;

  /**
   * Enables use of editor history in language detection. This causes automatic language detection to favor languages that have been recently opened and allows for automatic language detection to operate with smaller inputs.
   */
  'workbench.editor.historyBasedLanguageDetection': boolean;

  /**
   * Controls the format of the label for an editor.
   *  - default: Show the name of the file. When tabs are enabled and two files have the same name in one group the distinguishing sections of each file's path are added. When tabs are disabled, the path relative to the workspace folder is shown if the editor is active.
   *  - short: Show the name of the file followed by its directory name.
   *  - medium: Show the name of the file followed by its path relative to the workspace folder.
   *  - long: Show the name of the file followed by its absolute path.
   */
  'workbench.editor.labelFormat': string;

  /**
   * Controls whether the language in a text editor is automatically detected unless the language has been explicitly set by the language picker. This can also be scoped by language so you can specify which languages you do not want to be switched off of. This is useful for languages like Markdown that often contain other languages that might trick language detection into thinking it's the embedded language and not Markdown.
   */
  'workbench.editor.languageDetection': boolean;

  /**
   * When enabled, shows a Status bar Quick Fix when the editor language doesn't match detected content language.
   */
  'workbench.editor.languageDetectionHints': {
    untitledEditors?: boolean;
    notebookEditors?: boolean;
  };

  /**
   * Controls if the number of opened editors should be limited or not. When enabled, less recently used editors will close to make space for newly opening editors.
   */
  'workbench.editor.limit.enabled': boolean;

  /**
   * Controls if the maximum number of opened editors should exclude dirty editors for counting towards the configured limit.
   */
  'workbench.editor.limit.excludeDirty': boolean;

  /**
   * Controls if the limit of maximum opened editors should apply per editor group or across all editor groups.
   */
  'workbench.editor.limit.perEditorGroup': boolean;

  /**
   * Controls the maximum number of opened editors. Use the `workbench.editor.limit.perEditorGroup` setting to control this limit per editor group or across all groups.
   */
  'workbench.editor.limit.value': number;

  /**
   * Enables the use of mouse buttons four and five for commands 'Go Back' and 'Go Forward'.
   */
  'workbench.editor.mouseBackForwardToNavigate': boolean;

  /**
   * Controls the scope of history navigation in editors for commands such as 'Go Back' and 'Go Forward'.
   *  - default: Navigate across all opened editors and editor groups.
   *  - editorGroup: Navigate only in editors of the active editor group.
   *  - editor: Navigate only in the active editor.
   */
  'workbench.editor.navigationScope': string;

  /**
   * Controls where editors open. Select `left` or `right` to open editors to the left or right of the currently active one. Select `first` or `last` to open editors independently from the currently active one.
   */
  'workbench.editor.openPositioning': string;

  /**
   * Controls the default direction of editors that are opened side by side (for example, from the Explorer). By default, editors will open on the right hand side of the currently active one. If changed to `down`, the editors will open below the currently active one.
   */
  'workbench.editor.openSideBySideDirection': string;

  /**
   * Controls the size of pinned editor tabs. Pinned tabs are sorted to the beginning of all opened tabs and typically do not close until unpinned. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   *  - normal: A pinned tab inherits the look of non pinned tabs.
   *  - compact: A pinned tab will show in a compact form with only icon or first letter of the editor name.
   *  - shrink: A pinned tab shrinks to a compact fixed size showing parts of the editor name.
   */
  'workbench.editor.pinnedTabSizing': string;

  /**
   * When enabled, displays pinned tabs in a separate row above all other tabs.
   */
  'workbench.editor.pinnedTabsOnSeparateRow': boolean;

  /**
   * When enabled, a language detection model that takes into account editor history will be given higher precedence.
   */
  'workbench.editor.preferHistoryBasedLanguageDetection': boolean;

  /**
   * Controls whether pinned editors should close when keyboard or middle mouse click is used for closing.
   *  - keyboardAndMouse: Always prevent closing the pinned editor when using mouse middle click or keyboard.
   *  - keyboard: Prevent closing the pinned editor when using the keyboard.
   *  - mouse: Prevent closing the pinned editor when using mouse middle click.
   *  - never: Never prevent closing a pinned editor.
   */
  'workbench.editor.preventPinnedEditorClose': string;

  /**
   * Restores the last editor view state (such as scroll position) when re-opening editors after they have been closed. Editor view state is stored per editor group and discarded when a group closes. Use the `workbench.editor.sharedViewState` setting to use the last known view state across all editor groups in case no previous view state was found for a editor group.
   */
  'workbench.editor.restoreViewState': boolean;

  /**
   * Controls whether an editor is revealed in any of the visible groups if opened. If disabled, an editor will prefer to open in the currently active editor group. If enabled, an already opened editor will be revealed instead of opened again in the currently active editor group. Note that there are some cases where this setting is ignored, such as when forcing an editor to open in a specific group or to the side of the currently active group.
   */
  'workbench.editor.revealIfOpen': boolean;

  /**
   * Controls whether scrolling over tabs will open them or not. By default tabs will only reveal upon scrolling, but not open. You can press and hold the Shift-key while scrolling to change this behavior for that duration. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   */
  'workbench.editor.scrollToSwitchTabs': boolean;

  /**
   * Preserves the most recent editor view state (such as scroll position) across all editor groups and restores that if no specific editor view state is found for the editor group.
   */
  'workbench.editor.sharedViewState': boolean;

  /**
   * Controls whether opened editors should show with an icon or not. This requires a file icon theme to be enabled as well.
   */
  'workbench.editor.showIcons': boolean;

  /**
   * Controls whether opened editors should show as individual tabs, one single large tab or if the title area should not be shown.
   *  - multiple: Each editor is displayed as a tab in the editor title area.
   *  - single: The active editor is displayed as a single large tab in the editor title area.
   *  - none: The editor title area is not displayed.
   */
  'workbench.editor.showTabs': string;

  /**
   * Controls the layout for when an editor is split in an editor group to be either vertical or horizontal.
   *  - vertical: Editors are positioned from top to bottom.
   *  - horizontal: Editors are positioned from left to right.
   */
  'workbench.editor.splitInGroupLayout': string;

  /**
   * Controls if editor groups can be split from drag and drop operations by dropping an editor or file on the edges of the editor area.
   */
  'workbench.editor.splitOnDragAndDrop': boolean;

  /**
   * Controls the size of editor groups when splitting them.
   *  - auto: Splits the active editor group to equal parts, unless all editor groups are already in equal parts. In that case, splits all the editor groups to equal parts.
   *  - distribute: Splits all the editor groups to equal parts.
   *  - split: Splits the active editor group to equal parts.
   */
  'workbench.editor.splitSizing': string;

  /**
   * Controls the position of the editor's tabs close buttons, or disables them when set to 'off'. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   */
  'workbench.editor.tabCloseButton': string;

  /**
   * Controls the size of editor tabs. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   *  - fit: Always keep tabs large enough to show the full editor label.
   *  - shrink: Allow tabs to get smaller when the available space is not enough to show all tabs at once.
   *  - fixed: Make all tabs the same size, while allowing them to get smaller when the available space is not enough to show all tabs at once.
   */
  'workbench.editor.tabSizing': string;

  /**
   * Controls the maximum width of tabs when `workbench.editor.tabSizing` size is set to `fixed`.
   */
  'workbench.editor.tabSizingFixedMaxWidth': number;

  /**
   * Controls the minimum width of tabs when `workbench.editor.tabSizing` size is set to `fixed`.
   */
  'workbench.editor.tabSizingFixedMinWidth': number;

  /**
   * Controls the height of the scrollbars used for tabs and breadcrumbs in the editor title area.
   *  - default: The default size.
   *  - large: Increases the size, so it can be grabbed more easily with the mouse.
   */
  'workbench.editor.titleScrollbarSizing': string;

  /**
   * Controls the format of the label for an untitled editor.
   *  - content: The name of the untitled file is derived from the contents of its first line unless it has an associated file path. It will fallback to the name in case the line is empty or contains no word characters.
   *  - name: The name of the untitled file is not derived from the contents of the file.
   */
  'workbench.editor.untitled.labelFormat': string;

  /**
   * Controls whether tabs should be wrapped over multiple lines when exceeding available space or whether a scrollbar should appear instead. This value is ignored when `workbench.editor.showTabs` is not set to `multiple`.
   */
  'workbench.editor.wrapTabs': boolean;

  /**
   * Configure glob patterns to editors (for example `"*.hex": "hexEditor.hexedit"`). These have precedence over the default behavior.
   */
  'workbench.editorAssociations': { [K in string]?: unknown };

  /**
   * Controls the minimum size of a file in MB before asking for confirmation when opening in the editor. Note that this setting may not apply to all editor types and environments.
   */
  'workbench.editorLargeFileConfirmation': number;

  /**
   * Configure the opener to use for external URIs (http, https).
   */
  'workbench.externalUriOpeners': { [K in string]?: unknown };

  /**
   * Controls font aliasing method in the workbench.
   *  - default: Sub-pixel font smoothing. On most non-retina displays this will give the sharpest text.
   *  - antialiased: Smooth the font on the level of the pixel, as opposed to the subpixel. Can make the font appear lighter overall.
   *  - none: Disables font smoothing. Text will show with jagged sharp edges.
   *  - auto: Applies `default` or `antialiased` automatically based on the DPI of displays.
   */
  'workbench.fontAliasing': string;

  /**
   * Controls the delay in milliseconds after which the hover is shown for workbench items (ex. some extension provided tree view items). Already visible items may require a refresh before reflecting this setting change.
   */
  'workbench.hover.delay': number;

  /**
   * Specifies the file icon theme used in the workbench or 'null' to not show any file icons.
   *  - null: No file icons
   *  - vs-minimal
   *  - vs-seti
   */
  'workbench.iconTheme': string;

  /**
   * Controls whether the layout control is shown in the custom title bar. This setting only has an effect when `window.titleBarStyle` is set to `custom`.
   */
  'workbench.layoutControl.enabled': boolean;

  /**
   * Controls whether the layout control in the custom title bar is displayed as a single menu button or with multiple UI toggles.
   *  - menu: Shows a single button with a dropdown of layout options.
   *  - toggles: Shows several buttons for toggling the visibility of the panels and side bar.
   *  - both: Shows both the dropdown and toggle buttons.
   */
  'workbench.layoutControl.type': string;

  /**
   * Controls the type of matching used when searching lists and trees in the workbench.
   *  - fuzzy: Use fuzzy matching when searching.
   *  - contiguous: Use contiguous matching when searching.
   */
  'workbench.list.defaultFindMatchType': string;

  /**
   * Controls the default find mode for lists and trees in the workbench.
   *  - highlight: Highlight elements when searching. Further up and down navigation will traverse only the highlighted elements.
   *  - filter: Filter elements when searching.
   */
  'workbench.list.defaultFindMode': string;

  /**
   * Scrolling speed multiplier when pressing `Alt`.
   */
  'workbench.list.fastScrollSensitivity': number;

  /**
   * Controls whether lists and trees support horizontal scrolling in the workbench. Warning: turning on this setting has a performance implication.
   */
  'workbench.list.horizontalScrolling': boolean;

  /**
   * A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.
   */
  'workbench.list.mouseWheelScrollSensitivity': number;

  /**
   * The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.
   *  - ctrlCmd: Maps to `Control` on Windows and Linux and to `Command` on macOS.
   *  - alt: Maps to `Alt` on Windows and Linux and to `Option` on macOS.
   */
  'workbench.list.multiSelectModifier': string;

  /**
   * Controls how to open items in trees and lists using the mouse (if supported). Note that some trees and lists might choose to ignore this setting if it is not applicable.
   */
  'workbench.list.openMode': string;

  /**
   * Controls whether clicks in the scrollbar scroll page by page.
   */
  'workbench.list.scrollByPage': boolean;

  /**
   * Controls whether lists and trees have smooth scrolling.
   */
  'workbench.list.smoothScrolling': boolean;

  /**
   * Controls how type navigation works in lists and trees in the workbench. When set to `trigger`, type navigation begins once the `list.triggerTypeNavigation` command is run.
   */
  'workbench.list.typeNavigationMode': string;

  /**
   * Controls whether local file history is enabled. When enabled, the file contents of an editor that is saved will be stored to a backup location to be able to restore or review the contents later. Changing this setting has no effect on existing local file history entries.
   */
  'workbench.localHistory.enabled': boolean;

  /**
   * Configure glob patterns for excluding files from the local file history. Changing this setting has no effect on existing local file history entries.
   */
  'workbench.localHistory.exclude': { [K in string]?: unknown };

  /**
   * Controls the maximum number of local file history entries per file. When the number of local file history entries exceeds this number for a file, the oldest entries will be discarded.
   */
  'workbench.localHistory.maxFileEntries': number;

  /**
   * Controls the maximum size of a file (in KB) to be considered for local file history. Files that are larger will not be added to the local file history. Changing this setting has no effect on existing local file history entries.
   */
  'workbench.localHistory.maxFileSize': number;

  /**
   * Configure an interval in seconds during which the last entry in local file history is replaced with the entry that is being added. This helps reduce the overall number of entries that are added, for example when auto save is enabled. This setting is only applied to entries that have the same source of origin. Changing this setting has no effect on existing local file history entries.
   */
  'workbench.localHistory.mergeWindow': number;

  /**
   * Controls the default location of the panel (Terminal, Debug Console, Output, Problems) in a new workspace. It can either show at the bottom, right, or left of the editor area.
   */
  'workbench.panel.defaultLocation': string;

  /**
   * Controls whether the panel opens maximized. It can either always open maximized, never open maximized, or open to the last state it was in before being closed.
   *  - always: Always maximize the panel when opening it.
   *  - never: Never maximize the panel when opening it. The panel will open un-maximized.
   *  - preserve: Open the panel to the state that it was in, before it was closed.
   */
  'workbench.panel.opensMaximized': string;

  /**
   * Specifies the preferred color theme for dark OS appearance when `window.autoDetectColorScheme` is enabled.
   */
  'workbench.preferredDarkColorTheme': string;

  /**
   * Specifies the preferred color theme used in high contrast dark mode when `window.autoDetectHighContrast` is enabled.
   */
  'workbench.preferredHighContrastColorTheme': string;

  /**
   * Specifies the preferred color theme used in high contrast light mode when `window.autoDetectHighContrast` is enabled.
   */
  'workbench.preferredHighContrastLightColorTheme': string;

  /**
   * Specifies the preferred color theme for light OS appearance when `window.autoDetectColorScheme` is enabled.
   */
  'workbench.preferredLightColorTheme': string;

  /**
   * Specifies the product icon theme used.
   *  - Default: Default
   */
  'workbench.productIconTheme': string;

  /**
   * Controls whether Quick Open should close automatically once it loses focus.
   */
  'workbench.quickOpen.closeOnFocusLost': boolean;

  /**
   * Controls whether the last typed input to Quick Open should be restored when opening it the next time.
   */
  'workbench.quickOpen.preserveInput': boolean;

  /**
   * Controls whether the workbench should render with fewer animations.
   *  - on: Always render with reduced motion.
   *  - off: Do not render with reduced motion
   *  - auto: Render with reduced motion based on OS configuration.
   */
  'workbench.reduceMotion': string;

  /**
   * Controls the hover feedback delay in milliseconds of the dragging area in between views/editors.
   */
  'workbench.sash.hoverDelay': number;

  /**
   * Controls the feedback area size in pixels of the dragging area in between views/editors. Set it to a larger value if you feel it's hard to resize views using the mouse.
   */
  'workbench.sash.size': number;

  /**
   * Configure settings to be applied for all profiles.
   */
  'workbench.settings.applyToAllProfiles': string[];

  /**
   * Determines which settings editor to use by default.
   *  - ui: Use the settings UI editor.
   *  - json: Use the JSON file editor.
   */
  'workbench.settings.editor': string;

  /**
   * Controls whether to enable the natural language search mode for settings. The natural language search is provided by a Microsoft online service.
   */
  'workbench.settings.enableNaturalLanguageSearch': boolean;

  /**
   * Controls whether opening keybinding settings also opens an editor showing all default keybindings.
   */
  'workbench.settings.openDefaultKeybindings': boolean;

  /**
   * Controls whether opening settings also opens an editor showing all default settings.
   */
  'workbench.settings.openDefaultSettings': boolean;

  /**
   * Controls the behavior of the Settings editor Table of Contents while searching.
   *  - hide: Hide the Table of Contents while searching.
   *  - filter: Filter the Table of Contents to just categories that have matching settings. Clicking a category will filter the results to that category.
   */
  'workbench.settings.settingsSearchTocBehavior': string;

  /**
   * Controls whether to use the split JSON editor when editing settings as JSON.
   */
  'workbench.settings.useSplitJSON': boolean;

  /**
   * Controls the location of the primary side bar and activity bar. They can either show on the left or right of the workbench. The secondary side bar will show on the opposite side of the workbench.
   */
  'workbench.sideBar.location': string;

  /**
   * Controls which editor is shown at startup, if none are restored from the previous session.
   *  - none: Start without an editor.
   *  - welcomePage: Open the Welcome page, with content to aid in getting started with VS Code and extensions.
   *  - readme: Open the README when opening a folder that contains one, fallback to 'welcomePage' otherwise. Note: This is only observed as a global configuration, it will be ignored if set in a workspace or folder configuration.
   *  - newUntitledFile: Open a new untitled text file (only applies when opening an empty window).
   *  - welcomePageInEmptyWorkbench: Open the Welcome page when opening an empty workbench.
   */
  'workbench.startupEditor': string;

  /**
   * Controls the visibility of the status bar at the bottom of the workbench.
   */
  'workbench.statusBar.visible': boolean;

  /**
   * When enabled, will show the watermark tips when no editor is open.
   */
  'workbench.tips.enabled': boolean;

  /**
   * Controls how tree folders are expanded when clicking the folder names. Note that some trees and lists might choose to ignore this setting if it is not applicable.
   */
  'workbench.tree.expandMode': string;

  /**
   * Controls tree indentation in pixels.
   */
  'workbench.tree.indent': number;

  /**
   * Controls whether the tree should render indent guides.
   */
  'workbench.tree.renderIndentGuides': string;

  /**
   * When enabled, trusted domain prompts will appear when opening links in trusted workspaces.
   */
  'workbench.trustedDomains.promptInTrustedWorkspace': boolean;

  /**
   * Controls the visibility of view header actions. View header actions may either be always visible, or only visible when that view is focused or hovered over.
   */
  'workbench.view.alwaysShowHeaderActions': boolean;

  /**
   * When enabled, an extension's walkthrough will open upon install of the extension.
   */
  'workbench.welcomePage.walkthroughs.openOnInstall': boolean;

  // Window

  /**
   * If set, automatically switch to the preferred color theme based on the OS appearance. If the OS appearance is dark, the theme specified at `workbench.preferredDarkColorTheme` is used, for light `workbench.preferredLightColorTheme`.
   */
  'window.autoDetectColorScheme': boolean;

  /**
   * If enabled, will automatically change to high contrast theme if the OS is using a high contrast theme. The high contrast theme to use is specified by `workbench.preferredHighContrastColorTheme` and `workbench.preferredHighContrastLightColorTheme`.
   */
  'window.autoDetectHighContrast': boolean;

  /**
   * If enabled, clicking on an inactive window will both activate the window and trigger the element under the mouse if it is clickable. If disabled, clicking anywhere on an inactive window will activate it only and a second click is required on the element.
   */
  'window.clickThroughInactive': boolean;

  /**
   * Controls whether closing the last editor should also close the window. This setting only applies for windows that do not show folders.
   */
  'window.closeWhenEmpty': boolean;

  /**
   * Show command launcher together with the window title.
   */
  'window.commandCenter': boolean;

  /**
   * Controls whether to show a confirmation dialog before closing the window or quitting the application.
   *  - always: Always ask for confirmation.
   *  - keyboardOnly: Only ask for confirmation if a keybinding was used.
   *  - never: Never explicitly ask for confirmation.
   */
  'window.confirmBeforeClose': string;

  /**
   * Controls whether the menu bar will be focused by pressing the Alt-key. This setting has no effect on toggling the menu bar with the Alt-key.
   */
  'window.customMenuBarAltFocus': boolean;

  /**
   * Adjust the appearance of dialog windows.
   */
  'window.dialogStyle': string;

  /**
   * If enabled, this setting will close the window when the application icon in the title bar is double-clicked. The window will not be able to be dragged by the icon. This setting is effective only if `window.titleBarStyle` is set to `custom`.
   */
  'window.doubleClickIconToClose': boolean;

  /**
   * Controls if native full-screen should be used on macOS. Disable this option to prevent macOS from creating a new space when going full-screen.
   */
  'window.nativeFullScreen': boolean;

  /**
   * Enables macOS Sierra window tabs. Note that changes require a full restart to apply and that native tabs will disable a custom title bar style if configured.
   */
  'window.nativeTabs': boolean;

  /**
   * Controls whether the main menus can be opened via Alt-key shortcuts. Disabling mnemonics allows to bind these Alt-key shortcuts to editor commands instead.
   */
  'window.enableMenuBarMnemonics': boolean;

  /**
   * Control the visibility of the menu bar. A setting of 'toggle' means that the menu bar is hidden and a single press of the Alt key will show it. A setting of 'compact' will move the menu into the side bar.
   *  - classic: Menu is displayed at the top of the window and only hidden in full screen mode.
   *  - visible: Menu is always visible at the top of the window even in full screen mode.
   *  - toggle: Menu is hidden but can be displayed at the top of the window via the Alt key.
   *  - hidden: Menu is always hidden.
   *  - compact: Menu is displayed as a compact button in the side bar. This value is ignored when `window.titleBarStyle` is `native`.
   */
  'window.menuBarVisibility': string;

  /**
   * Controls the dimensions of opening a new window when at least one window is already opened. Note that this setting does not have an impact on the first window that is opened. The first window will always restore the size and location as you left it before closing.
   *  - default: Open new windows in the center of the screen.
   *  - inherit: Open new windows with same dimension as last active one.
   *  - offset: Open new windows with same dimension as last active one with an offset position.
   *  - maximized: Open new windows maximized.
   *  - fullscreen: Open new windows in full screen mode.
   */
  'window.newWindowDimensions': string;

  /**
   * Controls whether files should open in a new window when using a command line or file dialog.
   * Note that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option).
   *  - on: Files will open in a new window.
   *  - off: Files will open in the window with the files' folder open or the last active window.
   *  - default: Files will open in a new window unless picked from within the application (e.g. via the File menu).
   */
  'window.openFilesInNewWindow': string;

  /**
   * Controls whether folders should open in a new window or replace the last active window.
   * Note that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option).
   *  - on: Folders will open in a new window.
   *  - off: Folders will replace the last active window.
   *  - default: Folders will open in a new window unless a folder is picked from within the application (e.g. via the File menu).
   */
  'window.openFoldersInNewWindow': string;

  /**
   * Controls whether a new empty window should open when starting a second instance without arguments or if the last running instance should get focus.
   * Note that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option).
   *  - on: Open a new empty window.
   *  - off: Focus the last active running instance.
   */
  'window.openWithoutArgumentsInNewWindow': string;

  /**
   * Controls whether a window should restore to full screen mode if it was exited in full screen mode.
   */
  'window.restoreFullscreen': boolean;

  /**
   * Controls how windows are being reopened after starting for the first time. This setting has no effect when the application is already running.
   *  - preserve: Always reopen all windows. If a folder or workspace is opened (e.g. from the command line) it opens as a new window unless it was opened before. If files are opened they will open in one of the restored windows.
   *  - all: Reopen all windows unless a folder, workspace or file is opened (e.g. from the command line).
   *  - folders: Reopen all windows that had folders or workspaces opened unless a folder, workspace or file is opened (e.g. from the command line).
   *  - one: Reopen the last active window unless a folder, workspace or file is opened (e.g. from the command line).
   *  - none: Never reopen a window. Unless a folder or workspace is opened (e.g. from the command line), an empty window will appear.
   */
  'window.restoreWindows': string;

  /**
   * Controls the window title based on the current context such as the opened workspace or active editor.
   */
  'window.title': string;

  /**
   * Adjust the appearance of the window title bar to be native by the OS or custom.
   */
  'window.titleBarStyle': string;

  /**
   * Separator used by `window.title`.
   */
  'window.titleSeparator': string;

  /**
   * Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.
   */
  'window.zoomLevel': number;

  // Files

  /**
   * Configure file associations to languages (for example `"*.extension": "html"`). These have precedence over the default associations of the languages installed.
   */
  'files.associations': { [K in string]?: string };

  /**
   * When enabled, the editor will attempt to guess the character set encoding when opening files. This setting can also be configured per language. Note, this setting is not respected by text search. Only `files.encoding` is respected.
   */
  'files.autoGuessEncoding': boolean;

  /**
   * Controls auto save of editors that have unsaved changes.
   *  - off: An editor with changes is never automatically saved.
   *  - afterDelay: An editor with changes is automatically saved after the configured `files.autoSaveDelay`.
   *  - onFocusChange: An editor with changes is automatically saved when the editor loses focus.
   *  - onWindowChange: An editor with changes is automatically saved when the window loses focus.
   */
  'files.autoSave': string;

  /**
   * Controls the delay in milliseconds after which an editor with unsaved changes is saved automatically. Only applies when `files.autoSave` is set to `afterDelay`.
   */
  'files.autoSaveDelay': number;

  /**
   * The default language identifier that is assigned to new files. If configured to `${activeEditorLanguage}`, will use the language identifier of the currently active text editor if any.
   */
  'files.defaultLanguage': string;

  /**
   * Default path for file dialogs, overriding user's home path. Only used in the absence of a context-specific path, such as most recently opened file or folder.
   */
  'files.dialog.defaultPath': string;

  /**
   * Moves files/folders to the OS trash (recycle bin on Windows) when deleting. Disabling this will delete files/folders permanently.
   */
  'files.enableTrash': boolean;

  /**
   * The default character set encoding to use when reading and writing files. This setting can also be configured per language.
   */
  'files.encoding': string;

  /**
   * The default end of line character.
   *  - \n: LF
   *  - \r\n: CRLF
   *  - auto: Uses operating system specific end of line character.
   */
  'files.eol': string;

  /**
   * Configure glob patterns for excluding files and folders. For example, the File Explorer decides which files and folders to show or hide based on this setting. Refer to the `search.exclude` setting to define search-specific excludes.
   */
  'files.exclude': {
    [K: string]: boolean;
    '**/.git': boolean;
    '**/.svn': boolean;
    '**/.hg': boolean;
    '**/CVS': boolean;
    '**/.DS_Store': boolean;
    '**/Thumbs.db': boolean;
  };

  /**
   * Hot Exit controls whether unsaved files are remembered between sessions, allowing the save prompt when exiting the editor to be skipped.
   *  - off: Disable hot exit. A prompt will show when attempting to close a window with editors that have unsaved changes.
   *  - onExit: Hot exit will be triggered when the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu). All windows without folders opened will be restored upon next launch. A list of previously opened windows with unsaved files can be accessed via `File > Open Recent > More...`
   *  - onExitAndWindowClose: Hot exit will be triggered when the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu), and also for any window with a folder opened regardless of whether it's the last window. All windows without folders opened will be restored upon next launch. A list of previously opened windows with unsaved files can be accessed via `File > Open Recent > More...`
   */
  'files.hotExit': string;

  /**
   * When enabled, insert a final new line at the end of the file when saving it.
   */
  'files.insertFinalNewline': boolean;

  /**
   * Timeout in milliseconds after which file participants for create, rename, and delete are cancelled. Use `0` to disable participants.
   */
  'files.participants.timeout': number;

  /**
   * Configure paths or glob patterns to exclude from being marked as read-only if they match as a result of the `files.readonlyInclude` setting.
   */
  'files.readonlyExclude': { [K in string]?: boolean };

  /**
   * Marks files as read-only when their file permissions indicate as such. This can be overridden via `files.readonlyInclude` and `files.readonlyExclude` settings.
   */
  'files.readonlyFromPermissions': boolean;

  /**
   * Configure paths or glob patterns to mark as read-only.
   */
  'files.readonlyInclude': { [K in string]?: boolean };

  /**
   * Controls if files that were part of a refactoring are saved automatically
   */
  'files.refactoring.autoSave': boolean;

  /**
   * Restore the undo stack when a file is reopened.
   */
  'files.restoreUndoStack': boolean;

  /**
   * A save conflict can occur when a file is saved to disk that was changed by another program in the meantime. To prevent data loss, the user is asked to compare the changes in the editor with the version on disk. This setting should only be changed if you frequently encounter save conflict errors and may result in data loss if used without caution.
   *  - askUser: Will refuse to save and ask for resolving the save conflict manually.
   *  - overwriteFileOnDisk: Will resolve the save conflict by overwriting the file on disk with the changes in the editor.
   */
  'files.saveConflictResolution': string;

  /**
   * Enables the simple file dialog for opening and saving files and folders. The simple file dialog replaces the system file dialog when enabled.
   */
  'files.simpleDialog.enable': boolean;

  /**
   * When enabled, will trim all new lines after the final new line at the end of the file when saving it.
   */
  'files.trimFinalNewlines': boolean;

  /**
   * When enabled, will trim trailing whitespace when saving a file.
   */
  'files.trimTrailingWhitespace': boolean;

  /**
   * Configure paths or glob patterns to exclude from file watching.
   */
  'files.watcherExclude': {
    [K in string]?: boolean;
  };

  /**
   * Configure extra paths to watch for changes inside the workspace.
   */
  'files.watcherInclude': string[];

  // Screencast Mode

  /**
   * Controls the font size (in pixels) of the screencast mode keyboard.
   */
  'screencastMode.fontSize': number;

  /**
   * Options for customizing the keyboard overlay in screencast mode.
   */
  'screencastMode.keyboardOptions': {
    showKeys?: boolean;
    showKeybindings?: boolean;
    showCommands?: boolean;
    showCommandGroups?: boolean;
    showSingleEditorCursorMoves?: boolean;
  };

  /**
   * Controls how long (in milliseconds) the keyboard overlay is shown in screencast mode.
   */
  'screencastMode.keyboardOverlayTimeout': number;

  /**
   * Controls the color in hex (#_RGB, #RGBA, #RRGGBB or #RRGGBBAA) of the mouse indicator in screencast mode.
   */
  'screencastMode.mouseIndicatorColor': string;

  /**
   * Controls the size (in pixels) of the mouse indicator in screencast mode.
   */
  'screencastMode.mouseIndicatorSize': number;

  /**
   * Controls the vertical offset of the screencast mode overlay from the bottom as a percentage of the workbench height.
   */
  'screencastMode.verticalOffset': number;

  // Zen Mode

  /**
   * Controls whether turning on Zen Mode also centers the layout.
   */
  'zenMode.centerLayout': boolean;

  /**
   * Controls whether turning on Zen Mode also puts the workbench into full screen mode.
   */
  'zenMode.fullScreen': boolean;

  /**
   * Controls whether turning on Zen Mode also hides the activity bar either at the left or right of the workbench.
   */
  'zenMode.hideActivityBar': boolean;

  /**
   * Controls whether turning on Zen Mode also hides the editor line numbers.
   */
  'zenMode.hideLineNumbers': boolean;

  /**
   * Controls whether turning on Zen Mode also hides the status bar at the bottom of the workbench.
   */
  'zenMode.hideStatusBar': boolean;

  /**
   * Controls whether a window should restore to Zen Mode if it was exited in Zen Mode.
   */
  'zenMode.restore': boolean;

  /**
   * Controls whether turning on Zen Mode should show multiple editor tabs, a single editor tab, or hide the editor title area completely.
   *  - multiple: Each editor is displayed as a tab in the editor title area.
   *  - single: The active editor is displayed as a single large tab in the editor title area.
   *  - none: The editor title area is not displayed.
   */
  'zenMode.showTabs': string;

  /**
   * Controls whether notifications do not disturb mode should be enabled while in Zen Mode. If true, only error notifications will pop out.
   */
  'zenMode.silentNotifications': boolean;

  // File Explorer

  /**
   * Controls whether the Explorer should automatically reveal and select files when opening them.
   *  - true: Files will be revealed and selected.
   *  - false: Files will not be revealed and selected.
   *  - focusNoScroll: Files will not be scrolled into view, but will still be focused.
   */
  'explorer.autoReveal': boolean;

  /**
   * Configure paths or glob patterns for excluding files and folders from being revealed and selected in the Explorer when they are opened.
   */
  'explorer.autoRevealExclude': { [K in string]?: boolean };

  /**
   * Controls whether the Explorer should render folders in a compact form. In such a form, single child folders will be compressed in a combined tree element. Useful for Java package structures, for example.
   */
  'explorer.compactFolders': boolean;

  /**
   * Controls whether the Explorer should ask for confirmation when deleting a file via the trash.
   */
  'explorer.confirmDelete': boolean;

  /**
   * Controls whether the Explorer should ask for confirmation to move files and folders via drag and drop.
   */
  'explorer.confirmDragAndDrop': boolean;

  /**
   * Controls whether the Explorer should ask for confirmation when undoing.
   *  - verbose: Explorer will prompt before all undo operations.
   *  - default: Explorer will prompt before destructive undo operations.
   *  - light: Explorer will not prompt before undo operations when focused.
   */
  'explorer.confirmUndo': string;

  /**
   * The path separation character used when copying relative file paths.
   *  - /: Use slash as path separation character.
   *  - \: Use backslash as path separation character.
   *  - auto: Uses operating system specific path separation character.
   */
  'explorer.copyRelativePathSeparator': string;

  /**
   * Controls whether file decorations should use badges.
   */
  'explorer.decorations.badges': boolean;

  /**
   * Controls whether file decorations should use colors.
   */
  'explorer.decorations.colors': boolean;

  /**
   * Controls whether the Explorer should allow to move files and folders via drag and drop. This setting only effects drag and drop from inside the Explorer.
   */
  'explorer.enableDragAndDrop': boolean;

  /**
   * Controls whether the Explorer should support undoing file and folder operations.
   */
  'explorer.enableUndo': boolean;

  /**
   * Controls whether entries in .gitignore should be parsed and excluded from the Explorer. Similar to `files.exclude`.
   */
  'explorer.excludeGitIgnore': boolean;

  /**
   * Controls whether the Explorer should expand multi-root workspaces containing only one folder during initialization
   */
  'explorer.expandSingleFolderWorkspaces': boolean;

  /**
   * Controls whether file nesting is enabled in the Explorer. File nesting allows for related files in a directory to be visually grouped together under a single parent file.
   */
  'explorer.fileNesting.enabled': boolean;

  /**
   * Controls whether file nests are automatically expanded. `explorer.fileNesting.enabled` must be set for this to take effect.
   */
  'explorer.fileNesting.expand': boolean;

  /**
   * Controls nesting of files in the Explorer. `explorer.fileNesting.enabled` must be set for this to take effect. Each __Item__ represents a parent pattern and may contain a single `*` character that matches any string. Each __Value__ represents a comma separated list of the child patterns that should be shown nested under a given parent. Child patterns may contain several special tokens:
   * - `${capture}`: Matches the resolved value of the `*` from the parent pattern
   * - `${basename}`: Matches the parent file's basename, the `file` in `file.ts`
   * - `${extname}`: Matches the parent file's extension, the `ts` in `file.ts`
   * - `${dirname}`: Matches the parent file's directory name, the `src` in `src/file.ts`
   * - `*`:  Matches any string, may only be used once per child pattern
   */
  'explorer.fileNesting.patterns': { [K in string]?: string };

  /**
   * Controls which naming strategy to use when giving a new name to a duplicated Explorer item on paste.
   *  - simple: Appends the word "copy" at the end of the duplicated name potentially followed by a number.
   *  - smart: Adds a number at the end of the duplicated name. If some number is already part of the name, tries to increase that number.
   *  - disabled: Disables incremental naming.
   */
  'explorer.incrementalNaming': string;

  /**
   * The minimum number of editor slots pre-allocated in the Open Editors pane. If set to 0 the Open Editors pane will dynamically resize based on the number of editors.
   */
  'explorer.openEditors.minVisible': number;

  /**
   * Controls the sorting order of editors in the Open Editors pane.
   *  - editorOrder: Editors are ordered in the same order editor tabs are shown.
   *  - alphabetical: Editors are ordered alphabetically by tab name inside each editor group.
   *  - fullPath: Editors are ordered alphabetically by full path inside each editor group.
   */
  'explorer.openEditors.sortOrder': string;

  /**
   * The initial maximum number of editors shown in the Open Editors pane.
   */
  'explorer.openEditors.visible': number;

  /**
   * Controls the property-based sorting of files and folders in the Explorer.
   *  - default: Files and folders are sorted by their names. Folders are displayed before files.
   *  - mixed: Files and folders are sorted by their names. Files are interwoven with folders.
   *  - filesFirst: Files and folders are sorted by their names. Files are displayed before folders.
   *  - type: Files and folders are grouped by extension type then sorted by their names. Folders are displayed before files.
   *  - modified: Files and folders are sorted by last modified date in descending order. Folders are displayed before files.
   *  - foldersNestsFiles: Files and folders are sorted by their names. Folders are displayed before files. Files with nested children are displayed before other files.
   */
  'explorer.sortOrder': string;

  /**
   * Controls the lexicographic sorting of file and folder names in the Explorer.
   *  - default: Uppercase and lowercase names are mixed together.
   *  - upper: Uppercase names are grouped together before lowercase names.
   *  - lower: Lowercase names are grouped together before uppercase names.
   *  - unicode: Names are sorted in Unicode order.
   */
  'explorer.sortOrderLexicographicOptions': string;

  // Search

  /**
   * Controls the positioning of the actionbar on rows in the search view.
   *  - auto: Position the actionbar to the right when the search view is narrow, and immediately after the content when the search view is wide.
   *  - right: Always position the actionbar to the right.
   */
  'search.actionsPosition': string;

  /**
   * Controls whether the search results will be collapsed or expanded.
   *  - auto: Files with less than 10 results are expanded. Others are collapsed.
   *  - alwaysCollapse
   *  - alwaysExpand
   */
  'search.collapseResults': string;

  /**
   * Controls whether search file decorations should use badges.
   */
  'search.decorations.badges': boolean;

  /**
   * Controls whether search file decorations should use colors.
   */
  'search.decorations.colors': boolean;

  /**
   * Controls the default search result view mode.
   *  - tree: Shows search results as a tree.
   *  - list: Shows search results as a list.
   */
  'search.defaultViewMode': string;

  /**
   * Configure glob patterns for excluding files and folders in fulltext searches and quick open. Inherits all glob patterns from the `files.exclude` setting.
   */
  'search.exclude': { [K in string]?: string };

  /**
   * Controls whether to follow symlinks while searching.
   */
  'search.followSymlinks': boolean;

  /**
   * Controls whether the search view should read or modify the shared find clipboard on macOS.
   */
  'search.globalFindClipboard': boolean;

  /**
   * Controls where new `Search: Find in Files` and `Find in Folder` operations occur: either in the search view, or in a search editor.
   *  - view: Search in the search view, either in the panel or side bars.
   *  - reuseEditor: Search in an existing search editor if present, otherwise in a new search editor.
   *  - newEditor: Search in a new search editor.
   */
  'search.mode': string;

  /**
   * Controls sorting order of editor history in quick open when filtering.
   *  - default: History entries are sorted by relevance based on the filter value used. More relevant entries appear first.
   *  - recency: History entries are sorted by recency. More recently opened entries appear first.
   */
  'search.quickOpen.history.filterSortOrder': string;

  /**
   * Whether to include results from recently opened files in the file results for Quick Open.
   */
  'search.quickOpen.includeHistory': boolean;

  /**
   * Whether to include results from a global symbol search in the file results for Quick Open.
   */
  'search.quickOpen.includeSymbols': boolean;

  /**
   * The default number of surrounding context lines to use when creating new Search Editors. If using `search.searchEditor.reusePriorSearchConfiguration`, this can be set to `null` (empty) to use the prior Search Editor's configuration.
   */
  'search.searchEditor.defaultNumberOfContextLines': number;

  /**
   * Configure effect of double-clicking a result in a search editor.
   *  - selectWord: Double-clicking selects the word under the cursor.
   *  - goToLocation: Double-clicking opens the result in the active editor group.
   *  - openLocationToSide: Double-clicking opens the result in the editor group to the side, creating one if it does not yet exist.
   */
  'search.searchEditor.doubleClickBehaviour': string;

  /**
   * When enabled, new Search Editors will reuse the includes, excludes, and flags of the previously opened Search Editor.
   */
  'search.searchEditor.reusePriorSearchConfiguration': boolean;

  /**
   * Search all files as you type.
   */
  'search.searchOnType': boolean;

  /**
   * When `search.searchOnType` is enabled, controls the timeout in milliseconds between a character being typed and the search starting. Has no effect when `search.searchOnType` is disabled.
   */
  'search.searchOnTypeDebouncePeriod': number;

  /**
   * Update the search query to the editor's selected text when focusing the search view. This happens either on click or when triggering the `workbench.views.search.focus` command.
   */
  'search.seedOnFocus': boolean;

  /**
   * Enable seeding search from the word nearest the cursor when the active editor has no selection.
   */
  'search.seedWithNearestWord': boolean;

  /**
   * Controls whether to show line numbers for search results.
   */
  'search.showLineNumbers': boolean;

  /**
   * Search case-insensitively if the pattern is all lowercase, otherwise, search case-sensitively.
   */
  'search.smartCase': boolean;

  /**
   * Controls sorting order of search results.
   *  - default: Results are sorted by folder and file names, in alphabetical order.
   *  - fileNames: Results are sorted by file names ignoring folder order, in alphabetical order.
   *  - type: Results are sorted by file extensions, in alphabetical order.
   *  - modified: Results are sorted by file last modified date, in descending order.
   *  - countDescending: Results are sorted by count per file, in descending order.
   *  - countAscending: Results are sorted by count per file, in ascending order.
   */
  'search.sortOrder': string;

  /**
   * Controls whether to use your global gitignore file (for example, from `$HOME/.config/git/ignore`) when searching for files. Requires `search.useIgnoreFiles` to be enabled.
   */
  'search.useGlobalIgnoreFiles': boolean;

  /**
   * Controls whether to use `.gitignore` and `.ignore` files when searching for files.
   */
  'search.useIgnoreFiles': boolean;

  /**
   * Controls whether to use `.gitignore` and `.ignore` files in parent directories when searching for files. Requires `search.useIgnoreFiles` to be enabled.
   */
  'search.useParentIgnoreFiles': boolean;

  /**
   * Controls whether to open Replace Preview when selecting or replacing a match.
   */
  'search.useReplacePreview': boolean;

  // HTTP

  /**
   * The proxy setting to use. If not set, will be inherited from the `http_proxy` and `https_proxy` environment variables.
   */
  'http.proxy': string;

  /**
   * The value to send as the `Proxy-Authorization` header for every network request.
   */
  'http.proxyAuthorization': string | null;

  /**
   * Overrides the principal service name for Kerberos authentication with the HTTP proxy. A default based on the proxy hostname is used when this is not set.
   */
  'http.proxyKerberosServicePrincipal': string;

  /**
   * Controls whether the proxy server certificate should be verified against the list of supplied CAs.
   */
  'http.proxyStrictSSL': boolean;

  /**
   * Use the proxy support for extensions.
   *  - off: Disable proxy support for extensions.
   *  - on: Enable proxy support for extensions.
   *  - fallback: Enable proxy support for extensions, fall back to request options, when no proxy found.
   *  - override: Enable proxy support for extensions, override request options.
   */
  'http.proxySupport': string;

  /**
   * Controls whether CA certificates should be loaded from the OS. (On Windows and macOS, a reload of the window is required after turning this off.)
   */
  'http.systemCertificates': boolean;

  // Keyboard

  /**
   * Controls the dispatching logic for key presses to use either `code` (recommended) or `keyCode`.
   */
  'keyboard.dispatch': string;

  /**
   * Controls if the AltGraph+ modifier should be treated as Ctrl+Alt+.
   */
  'keyboard.mapAltGrToCtrlAlt': boolean;

  /**
   * Enables the macOS touchbar buttons on the keyboard if available.
   */
  'keyboard.touchbar.enabled': boolean;

  /**
   * A set of identifiers for entries in the touchbar that should not show up (for example `workbench.action.navigateBack`).
   */
  'keyboard.touchbar.ignored': string[];

  // Update

  /**
   * Enable to download and install new VS Code versions in the background on Windows.
   */
  'update.enableWindowsBackgroundUpdates': boolean;

  /**
   * Configure whether you receive automatic updates. Requires a restart after change. The updates are fetched from a Microsoft online service.
   *  - none: Disable updates.
   *  - manual: Disable automatic background update checks. Updates will be available if you manually check for updates.
   *  - start: Check for updates only on startup. Disable automatic background update checks.
   *  - default: Enable automatic update checks. Code will check for updates automatically and periodically.
   */
  'update.mode': string;

  /**
   * Show Release Notes after an update. The Release Notes are fetched from a Microsoft online service.
   */
  'update.showReleaseNotes': boolean;

  // Comments

  /**
   * Controls whether the comment thread should collapse when the thread is resolved.
   */
  'comments.collapseOnResolve': boolean;

  /**
   * Controls whether the comments widget scrolls or expands.
   */
  'comments.maxHeight': boolean;

  /**
   * Controls when the comments view should open.
   *  - never: The comments view will never be opened.
   *  - file: The comments view will open when a file with comments is active.
   *  - firstFile: If the comments view has not been opened yet during this session it will open the first time during a session that a file with comments is active.
   *  - firstFileUnresolved: If the comments view has not been opened yet during this session and the comment is not resolved, it will open the first time during a session that a file with comments is active.
   */
  'comments.openView': string;

  /**
   * Determines if relative time will be used in comment timestamps (ex. '1 day ago').
   */
  'comments.useRelativeTime': boolean;

  /**
   * Controls the visibility of the comments bar and comment threads in editors that have commenting ranges and comments. Comments are still accessible via the Comments view and will cause commenting to be toggled on in the same way running the command "Comments: Toggle Editor Commenting" toggles comments.
   */
  'comments.visible': boolean;

  // Debug

  /**
   * Allow setting breakpoints in any file.
   */
  'debug.allowBreakpointsEverywhere': boolean;

  /**
   * Automatically show values for variables that are lazily resolved by the debugger, such as getters.
   */
  'debug.autoExpandLazyVariables': boolean;

  /**
   * Controls whether to confirm when the window closes if there are active debug sessions.
   *  - never: Never confirm.
   *  - always: Always confirm if there are debug sessions.
   */
  'debug.confirmOnExit': string;

  /**
   * Controls whether suggestions should be accepted on Enter in the Debug Console. Enter is also used to evaluate whatever is typed in the Debug Console.
   */
  'debug.console.acceptSuggestionOnEnter': string;

  /**
   * Controls if the Debug Console should be automatically closed when the debug session ends.
   */
  'debug.console.closeOnEnd': boolean;

  /**
   * Controls if the Debug Console should collapse identical lines and show a number of occurrences with a badge.
   */
  'debug.console.collapseIdenticalLines': boolean;

  /**
   * Controls the font family in the Debug Console.
   */
  'debug.console.fontFamily': string;

  /**
   * Controls the font size in pixels in the Debug Console.
   */
  'debug.console.fontSize': number;

  /**
   * Controls if the Debug Console should suggest previously typed input.
   */
  'debug.console.historySuggestions': boolean;

  /**
   * Controls the line height in pixels in the Debug Console. Use 0 to compute the line height from the font size.
   */
  'debug.console.lineHeight': number;

  /**
   * Controls if the lines should wrap in the Debug Console.
   */
  'debug.console.wordWrap': boolean;

  /**
   * Show Source Code in Disassembly View.
   */
  'debug.disassemblyView.showSourceCode': boolean;

  /**
   * Color of the Status bar when debugger is active.
   */
  'debug.enableStatusBarColor': boolean;

  /**
   * Controls whether the editor should be focused when the debugger breaks.
   */
  'debug.focusEditorOnBreak': boolean;

  /**
   * Controls whether the workbench window should be focused when the debugger breaks.
   */
  'debug.focusWindowOnBreak': boolean;

  /**
   * Hide 'Start Debugging' control in title bar of 'Run and Debug' view while debugging is active. Only relevant when `debug.toolBarLocation` is not `docked`.
   */
  'debug.hideLauncherWhileDebugging': boolean;

  /**
   * Show variable values inline in editor while debugging.
   *  - on: Always show variable values inline in editor while debugging.
   *  - off: Never show variable values inline in editor while debugging.
   *  - auto: Show variable values inline in editor while debugging when the language supports inline value locations.
   */
  'debug.inlineValues': string;

  /**
   * Controls when the internal Debug Console should open.
   */
  'debug.internalConsoleOptions': string;

  /**
   * Controls what to do when errors are encountered after running a preLaunchTask.
   *  - debugAnyway: Ignore task errors and start debugging.
   *  - showErrors: Show the Problems view and do not start debugging.
   *  - prompt: Prompt user.
   *  - abort: Cancel debugging.
   */
  'debug.onTaskErrors': string;

  /**
   * Controls when the debug view should open.
   */
  'debug.openDebug': string;

  /**
   * Automatically open the explorer view at the end of a debug session.
   */
  'debug.openExplorerOnEnd': boolean;

  /**
   * Controls what editors to save before starting a debug session.
   *  - allEditorsInActiveGroup: Save all editors in the active group before starting a debug session.
   *  - nonUntitledEditorsInActiveGroup: Save all editors in the active group except untitled ones before starting a debug session.
   *  - none: Don't save any editors before starting a debug session.
   */
  'debug.saveBeforeStart': string;

  /**
   * Controls whether breakpoints should be shown in the overview ruler.
   */
  'debug.showBreakpointsInOverviewRuler': boolean;

  /**
   * Controls whether inline breakpoints candidate decorations should be shown in the editor while debugging.
   */
  'debug.showInlineBreakpointCandidates': boolean;

  /**
   * Controls when the debug Status bar should be visible.
   *  - never: Never show debug in Status bar
   *  - always: Always show debug in Status bar
   *  - onFirstSessionStart: Show debug in Status bar only after debug was started for the first time
   */
  'debug.showInStatusBar': string;

  /**
   * Controls whether the debug sub-sessions are shown in the debug tool bar. When this setting is false the stop command on a sub-session will also stop the parent session.
   */
  'debug.showSubSessionsInToolBar': boolean;

  /**
   * Before starting a new debug session in an integrated or external terminal, clear the terminal.
   */
  'debug.terminal.clearBeforeReusing': boolean;

  /**
   * Controls the location of the debug toolbar.
   *  - floating: Show debug toolbar in all views.
   *  - docked: Show debug toolbar only in debug views.
   *  - hidden: Do not show debug toolbar.
   */
  'debug.toolBarLocation': string;

  /**
   * Global debug launch configuration. Should be used as an alternative to 'launch.json' that is shared across workspaces.
   */
  launch: {
    configurations?: unknown[];
    compounds?: unknown[];
  };

  // HTML

  /**
   * Enable/disable autoclosing of HTML tags.
   */
  'html.autoClosingTags': boolean;

  /**
   * Enable/disable auto creation of quotes for HTML attribute assignment. The type of quotes can be configured by `html.completion.attributeDefaultValue`.
   */
  'html.autoCreateQuotes': boolean;

  /**
   * Controls the default value for attributes when completion is accepted.
   *  - doublequotes: Attribute value is set to "".
   *  - singlequotes: Attribute value is set to ''.
   *  - empty: Attribute value is not set.
   */
  'html.completion.attributeDefaultValue': string;

  /**
   * A list of relative file paths pointing to JSON files following the custom data format.
   * VS Code loads custom data on startup to enhance its HTML support for the custom HTML tags, attributes and attribute values you specify in the JSON files.
   * The file paths are relative to workspace and only workspace folder settings are considered.
   */
  'html.customData': string[];

  /**
   * List of tags, comma separated, where the content shouldn't be reformatted. `null` defaults to the `pre` tag.
   */
  'html.format.contentUnformatted': string;

  /**
   * Enable/disable default HTML formatter.
   */
  'html.format.enable': boolean;

  /**
   * List of tags, comma separated, that should have an extra newline before them. `null` defaults to `"head, body, /html"`.
   */
  'html.format.extraLiners': string;

  /**
   * Format and indent ``.
   */
  'html.format.indentHandlebars': boolean;

  /**
   * Indent `<head>` and `<body>` sections.
   */
  'html.format.indentInnerHtml': boolean;

  /**
   * Maximum number of line breaks to be preserved in one chunk. Use `null` for unlimited.
   */
  'html.format.maxPreserveNewLines': number | null;

  /**
   * Controls whether existing line breaks before elements should be preserved. Only works before elements, not inside tags or for text.
   */
  'html.format.preserveNewLines': boolean;

  /**
   * Honor django, erb, handlebars and php templating language tags.
   */
  'html.format.templating': boolean;

  /**
   * List of tags, comma separated, that shouldn't be reformatted.
   */
  'html.format.unformatted': string;

  /**
   * Keep text content together between this string.
   */
  'html.format.unformattedContentDelimiter': string;

  /**
   * Wrap attributes.
   *  - auto: Wrap attributes only when line length is exceeded.
   *  - force: Wrap each attribute except first.
   *  - force-aligned: Wrap each attribute except first and keep aligned.
   *  - force-expand-multiline: Wrap each attribute.
   *  - aligned-multiple: Wrap when line length is exceeded, align attributes vertically.
   *  - preserve: Preserve wrapping of attributes.
   *  - preserve-aligned: Preserve wrapping of attributes but align.
   */
  'html.format.wrapAttributes': string;

  /**
   * Indent wrapped attributes to after N characters. Use `null` to use the default indent size. Ignored if `html.format.wrapAttributes` is set to `aligned`.
   */
  'html.format.wrapAttributesIndentSize': number | null;

  /**
   * Maximum amount of characters per line (0 = disable).
   */
  'html.format.wrapLineLength': number;

  /**
   * Show tag and attribute documentation in hover.
   */
  'html.hover.documentation': boolean;

  /**
   * Show references to MDN in hover.
   */
  'html.hover.references': boolean;

  /**
   * Controls whether the built-in HTML language support suggests HTML5 tags, properties and values.
   */
  'html.suggest.html5': boolean;

  /**
   * Traces the communication between VS Code and the HTML language server.
   */
  'html.trace.server': string;

  /**
   * Controls whether the built-in HTML language support validates embedded scripts.
   */
  'html.validate.scripts': boolean;

  /**
   * Controls whether the built-in HTML language support validates embedded styles.
   */
  'html.validate.styles': boolean;

  // JSON

  /**
   * Enable/disable default JSON formatter
   */
  'json.format.enable': boolean;

  /**
   * Keep all existing new lines when formatting.
   */
  'json.format.keepLines': boolean;

  /**
   * The maximum number of outline symbols and folding regions computed (limited for performance reasons).
   */
  'json.maxItemsComputed': number;

  /**
   * When enabled, JSON schemas can be fetched from http and https locations.
   */
  'json.schemaDownload.enable': boolean;

  /**
   * Associate schemas to JSON files in the current project.
   */
  'json.schemas': string[];

  /**
   * Traces the communication between VS Code and the JSON language server.
   */
  'json.trace.server': string;

  /**
   * Enable/disable JSON validation.
   */
  'json.validate.enable': boolean;

  // Markdown

  /**
   * Defines where files copied created by drop or paste should be created. This is a map from globs that match on the Markdown document to destinations.
   */
  'markdown.copyFiles.destination': { [K in string]?: string };

  /**
   * Controls if files created by drop or paste should overwrite existing files.
   *  - nameIncrementally: If a file with the same name already exists, append a number to the file name, for example: `image.png` becomes `image-1.png`.
   *  - overwrite: If a file with the same name already exists, overwrite it.
   */
  'markdown.copyFiles.overwriteBehavior': string;

  /**
   * Controls if files outside of the workspace that are dropped into a Markdown editor should be copied into the workspace.
   */
  'markdown.editor.drop.copyIntoWorkspace': string;

  /**
   * Enable dropping files into a Markdown editor while holding Shift. Requires enabling `editor.dropIntoEditor.enabled`.
   */
  'markdown.editor.drop.enabled': boolean;

  /**
   * Controls if files outside of the workspace that are pasted into a Markdown editor should be copied into the workspace.
   */
  'markdown.editor.filePaste.copyIntoWorkspace': string;

  /**
   * Enable pasting files into a Markdown editor to create Markdown links. Requires enabling `editor.pasteAs.enabled`.
   */
  'markdown.editor.filePaste.enabled': boolean;

  /**
   * Controls how a Markdown link is created when a URL is pasted into the Markdown editor. Requires enabling `editor.pasteAs.enabled`.
   *  - always: Always creates a Markdown link when a URL is pasted into the Markdown editor.
   *  - smart: Smartly avoids creating a Markdown link in specific cases, such as within code brackets or inside an existing Markdown link.
   *  - never: Never creates a Markdown link when a URL is pasted into the Markdown editor.
   */
  'markdown.editor.pasteUrlAsFormattedLink.enabled': string;

  /**
   * Controls where links in Markdown files should be opened.
   *  - currentGroup: Open links in the active editor group.
   *  - beside: Open links beside the active editor.
   */
  'markdown.links.openLocation': string;

  /**
   * Enable highlighting link occurrences in the current document.
   */
  'markdown.occurrencesHighlight.enabled': boolean;

  /**
   * Controls if file extensions (for example `.md`) are added or not for links to Markdown files. This setting is used when file paths are added by tooling such as path completions or file renames.
   *  - auto: For existing paths, try to maintain the file extension style. For new paths, add file extensions.
   *  - includeExtension: Prefer including the file extension. For example, path completions to a file named `file.md` will insert `file.md`.
   *  - removeExtension: Prefer removing the file extension. For example, path completions to a file named `file.md` will insert `file` without the `.md`.
   */
  'markdown.preferredMdPathExtensionStyle': string;

  /**
   * Sets how line-breaks are rendered in the Markdown preview. Setting it to `true` creates a `<br>` for newlines inside paragraphs.
   */
  'markdown.preview.breaks': boolean;

  /**
   * Double-click in the Markdown preview to switch to the editor.
   */
  'markdown.preview.doubleClickToSwitchToEditor': boolean;

  /**
   * Controls the font family used in the Markdown preview.
   */
  'markdown.preview.fontFamily': string;

  /**
   * Controls the font size in pixels used in the Markdown preview.
   */
  'markdown.preview.fontSize': number;

  /**
   * Controls the line height used in the Markdown preview. This number is relative to the font size.
   */
  'markdown.preview.lineHeight': number;

  /**
   * Convert URL-like text to links in the Markdown preview.
   */
  'markdown.preview.linkify': boolean;

  /**
   * Mark the current editor selection in the Markdown preview.
   */
  'markdown.preview.markEditorSelection': boolean;

  /**
   * Controls how links to other Markdown files in the Markdown preview should be opened.
   *  - inPreview: Try to open links in the Markdown preview.
   *  - inEditor: Try to open links in the editor.
   */
  'markdown.preview.openMarkdownLinks': string;

  /**
   * When a Markdown preview is scrolled, update the view of the editor.
   */
  'markdown.preview.scrollEditorWithPreview': boolean;

  /**
   * When a Markdown editor is scrolled, update the view of the preview.
   */
  'markdown.preview.scrollPreviewWithEditor': boolean;

  /**
   * Enable some language-neutral replacement and quotes beautification in the Markdown preview.
   */
  'markdown.preview.typographer': boolean;

  /**
   * A list of URLs or local paths to CSS style sheets to use from the Markdown preview. Relative paths are interpreted relative to the folder open in the Explorer. If there is no open folder, they are interpreted relative to the location of the Markdown file. All '\' need to be written as '\\'.
   */
  'markdown.styles': string[];

  /**
   * Enable path suggestions while writing links in Markdown files.
   */
  'markdown.suggest.paths.enabled': boolean;

  /**
   * Enable suggestions for headers in other Markdown files in the current workspace. Accepting one of these suggestions inserts the full path to header in that file, for example: `[link text](/path/to/file.md#header)`.
   *  - never: Disable workspace header suggestions.
   *  - onDoubleHash: Enable workspace header suggestions after typing `#` in a path, for example: `[link text](#_`.
   *  - onSingleOrDoubleHash: Enable workspace header suggestions after typing either `#` or `#` in a path, for example: `[link text](#_` or `[link text](#_`.
   */
  'markdown.suggest.paths.includeWorkspaceHeaderCompletions': string;

  /**
   * Enable debug logging for the Markdown extension.
   */
  'markdown.trace.extension': string;

  /**
   * Try to update links in Markdown files when a file is renamed/moved in the workspace. Use `markdown.updateLinksOnFileMove.include` to configure which files trigger link updates.
   *  - prompt: Prompt on each file move.
   *  - always: Always update links automatically.
   *  - never: Never try to update link and don't prompt.
   */
  'markdown.updateLinksOnFileMove.enabled': string;

  /**
   * Enable updating links when a directory is moved or renamed in the workspace.
   */
  'markdown.updateLinksOnFileMove.enableForDirectories': boolean;

  /**
   * Glob patterns that specifies files that trigger automatic link updates. See `markdown.updateLinksOnFileMove.enabled` for details about this feature.
   */
  'markdown.updateLinksOnFileMove.include': string[];

  /**
   * Validate duplicated definitions in the current file.
   */
  'markdown.validate.duplicateLinkDefinitions.enabled': string;

  /**
   * Enable all error reporting in Markdown files.
   */
  'markdown.validate.enabled': boolean;

  /**
   * Validate links to other files in Markdown files, for example `[link](/path/to/file.md)`. This checks that the target files exists. Requires enabling `markdown.validate.enabled`.
   */
  'markdown.validate.fileLinks.enabled': string;

  /**
   * Validate the fragment part of links to headers in other files in Markdown files, for example: `[link](/path/to/file.md#header)`. Inherits the setting value from `markdown.validate.fragmentLinks.enabled` by default.
   */
  'markdown.validate.fileLinks.markdownFragmentLinks': string;

  /**
   * Validate fragment links to headers in the current Markdown file, for example: `[link](#_header)`. Requires enabling `markdown.validate.enabled`.
   */
  'markdown.validate.fragmentLinks.enabled': string;

  /**
   * Configure links that should not be validated. For example adding `/about` would not validate the link `[about](/about)`, while the glob `/assets/**\/*.svg` would let you skip validation for any link to `.svg` files under the `assets` directory.
   */
  'markdown.validate.ignoredLinks': string[];

  /**
   * Validate reference links in Markdown files, for example: `[link][ref]`. Requires enabling `markdown.validate.enabled`.
   */
  'markdown.validate.referenceLinks.enabled': string;

  /**
   * Validate link definitions that are unused in the current file.
   */
  'markdown.validate.unusedLinkDefinitions.enabled': string;

  // PHP

  /**
   * Controls whether the built-in PHP language suggestions are enabled. The support suggests PHP globals and variables.
   */
  'php.suggest.basic': boolean;

  /**
   * Enable/disable built-in PHP validation.
   */
  'php.validate.enable': boolean;

  /**
   * Points to the PHP executable.
   */
  'php.validate.executablePath': unknown | null;

  /**
   * Whether the linter is run on save or on type.
   */
  'php.validate.run': string;

  // TypeScript

  /**
   * Enable/disable automatic closing of JSX tags.
   */
  'javascript.autoClosingTags': boolean;

  /**
   * Enable/disable default JavaScript formatter.
   */
  'javascript.format.enable': boolean;

  /**
   * Defines space handling after a comma delimiter.
   */
  'javascript.format.insertSpaceAfterCommaDelimiter': boolean;

  /**
   * Defines space handling after the constructor keyword.
   */
  'javascript.format.insertSpaceAfterConstructor': boolean;

  /**
   * Defines space handling after function keyword for anonymous functions.
   */
  'javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions': boolean;

  /**
   * Defines space handling after keywords in a control flow statement.
   */
  'javascript.format.insertSpaceAfterKeywordsInControlFlowStatements': boolean;

  /**
   * Defines space handling after opening and before closing empty braces.
   */
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces': boolean;

  /**
   * Defines space handling after opening and before closing JSX expression braces.
   */
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces': boolean;

  /**
   * Defines space handling after opening and before closing non-empty braces.
   */
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces': boolean;

  /**
   * Defines space handling after opening and before closing non-empty brackets.
   */
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets': boolean;

  /**
   * Defines space handling after opening and before closing non-empty parenthesis.
   */
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis': boolean;

  /**
   * Defines space handling after opening and before closing template string braces.
   */
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces': boolean;

  /**
   * Defines space handling after a semicolon in a for statement.
   */
  'javascript.format.insertSpaceAfterSemicolonInForStatements': boolean;

  /**
   * Defines space handling after a binary operator.
   */
  'javascript.format.insertSpaceBeforeAndAfterBinaryOperators': boolean;

  /**
   * Defines space handling before function argument parentheses.
   */
  'javascript.format.insertSpaceBeforeFunctionParenthesis': boolean;

  /**
   * Defines whether an open brace is put onto a new line for control blocks or not.
   */
  'javascript.format.placeOpenBraceOnNewLineForControlBlocks': boolean;

  /**
   * Defines whether an open brace is put onto a new line for functions or not.
   */
  'javascript.format.placeOpenBraceOnNewLineForFunctions': boolean;

  /**
   * Defines handling of optional semicolons.
   *  - ignore: Don't insert or remove any semicolons.
   *  - insert: Insert semicolons at statement ends.
   *  - remove: Remove unnecessary semicolons.
   */
  'javascript.format.semicolons': string;

  /**
   * Enable/disable inlay hints for member values in enum declarations:
   */
  'javascript.inlayHints.enumMemberValues.enabled': boolean;

  /**
   * Enable/disable inlay hints for implicit return types on function signatures:
   */
  'javascript.inlayHints.functionLikeReturnTypes.enabled': boolean;

  /**
   * Enable/disable inlay hints for parameter names:
   */
  'javascript.inlayHints.parameterNames.enabled': string;

  /**
   * Suppress parameter name hints on arguments whose text is identical to the parameter name.
   */
  'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': boolean;

  /**
   * Enable/disable inlay hints for implicit parameter types:
   */
  'javascript.inlayHints.parameterTypes.enabled': boolean;

  /**
   * Enable/disable inlay hints for implicit types on property declarations:
   */
  'javascript.inlayHints.propertyDeclarationTypes.enabled': boolean;

  /**
   * Enable/disable inlay hints for implicit variable types:
   */
  'javascript.inlayHints.variableTypes.enabled': boolean;

  /**
   * Suppress type hints on variables whose name is identical to the type name.
   */
  'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': boolean;

  /**
   * Specify glob patterns of files to exclude from auto imports.
   */
  'javascript.preferences.autoImportFileExcludePatterns': string[];

  /**
   * Preferred path style for auto imports.
   *  - shortest: Prefers a non-relative import only if one is available that has fewer path segments than a relative import.
   *  - relative: Prefers a relative path to the imported file location.
   *  - non-relative: Prefers a non-relative import based on the `baseUrl` or `paths` configured in your `jsconfig.json` / `tsconfig.json`.
   *  - project-relative: Prefers a non-relative import only if the relative import path would leave the package or project directory.
   */
  'javascript.preferences.importModuleSpecifier': string;

  /**
   * Preferred path ending for auto imports.
   *  - auto: Use project settings to select a default.
   *  - minimal: Shorten `./component/index.js` to `./component`.
   *  - index: Shorten `./component/index.js` to `./component/index`.
   *  - js: Do not shorten path endings; include the `.js` or `.ts` extension.
   */
  'javascript.preferences.importModuleSpecifierEnding': string;

  /**
   * Preferred style for JSX attribute completions.
   *  - auto: Insert `={}` or `=""` after attribute names based on the prop type. See `javascript.preferences.quoteStyle` to control the type of quotes used for string attributes.
   *  - braces: Insert `={}` after attribute names.
   *  - none: Only insert attribute names.
   */
  'javascript.preferences.jsxAttributeCompletionStyle': string;

  /**
   * Preferred quote style to use for Quick Fixes.
   *  - auto: Infer quote type from existing code
   *  - single: Always use single quotes: `'`
   *  - double: Always use double quotes: `"`
   */
  'javascript.preferences.quoteStyle': string;

  /**
   * When on a JSX tag, try to rename the matching tag instead of renaming the symbol.
   */
  'javascript.preferences.renameMatchingJsxTags': boolean;

  /**
   * The setting 'typescript.preferences.renameShorthandProperties' has been deprecated in favor of 'typescript.preferences.useAliasesForRenames'
   * Enable/disable introducing aliases for object shorthand properties during renames.
   */
  'javascript.preferences.renameShorthandProperties': boolean;

  /**
   * Enable/disable introducing aliases for object shorthand properties during renames.
   */
  'javascript.preferences.useAliasesForRenames': boolean;

  /**
   * Makes Go to Definition avoid type declaration files when possible by triggering Go to Source Definition instead. This allows Go to Source Definition to be triggered with the mouse gesture.
   */
  'javascript.preferGoToSourceDefinition': boolean;

  /**
   * Enable/disable references CodeLens in JavaScript files.
   */
  'javascript.referencesCodeLens.enabled': boolean;

  /**
   * Enable/disable references CodeLens on all functions in JavaScript files.
   */
  'javascript.referencesCodeLens.showOnAllFunctions': boolean;

  /**
   * Enable/disable auto import suggestions.
   */
  'javascript.suggest.autoImports': boolean;

  /**
   * Enable/disable snippet completions for class members.
   */
  'javascript.suggest.classMemberSnippets.enabled': boolean;

  /**
   * Complete functions with their parameter signature.
   */
  'javascript.suggest.completeFunctionCalls': boolean;

  /**
   * Enable/disable suggestion to complete JSDoc comments.
   */
  'javascript.suggest.completeJSDocs': boolean;

  /**
   * Enabled/disable autocomplete suggestions.
   */
  'javascript.suggest.enabled': boolean;

  /**
   * Enable/disable showing completions on potentially undefined values that insert an optional chain call. Requires strict null checks to be enabled.
   */
  'javascript.suggest.includeAutomaticOptionalChainCompletions': boolean;

  /**
   * Enable/disable auto-import-style completions on partially-typed import statements.
   */
  'javascript.suggest.includeCompletionsForImportStatements': boolean;

  /**
   * Enable/disable generating `@returns` annotations for JSDoc templates.
   */
  'javascript.suggest.jsdoc.generateReturns': boolean;

  /**
   * Enable/disable including unique names from the file in JavaScript suggestions. Note that name suggestions are always disabled in JavaScript code that is semantically checked using `@ts-check` or `checkJs`.
   */
  'javascript.suggest.names': boolean;

  /**
   * Enable/disable suggestions for paths in import statements and require calls.
   */
  'javascript.suggest.paths': boolean;

  /**
   * Enable/disable suggestion diagnostics for JavaScript files in the editor.
   */
  'javascript.suggestionActions.enabled': boolean;

  /**
   * Enable/disable automatic updating of import paths when you rename or move a file in VS Code.
   *  - prompt: Prompt on each rename.
   *  - always: Always update paths automatically.
   *  - never: Never rename paths and don't prompt.
   */
  'javascript.updateImportsOnFileMove.enabled': string;

  /**
   * Enable/disable JavaScript validation.
   */
  'javascript.validate.enable': boolean;

  /**
   * Enable/disable semantic checking of JavaScript files. Existing `jsconfig.json` or `tsconfig.json` files override this setting.
   */
  'js/ts.implicitProjectConfig.checkJs': boolean;

  /**
   * Sets the module system for the program.
   */
  'js/ts.implicitProjectConfig.module': string;

  /**
   * Enable/disable strict function types in JavaScript and TypeScript files that are not part of a project. Existing `jsconfig.json` or `tsconfig.json` files override this setting.
   */
  'js/ts.implicitProjectConfig.strictFunctionTypes': boolean;

  /**
   * Enable/disable strict null checks in JavaScript and TypeScript files that are not part of a project. Existing `jsconfig.json` or `tsconfig.json` files override this setting.
   */
  'js/ts.implicitProjectConfig.strictNullChecks': boolean;

  /**
   * Set target JavaScript language version for emitted JavaScript and include library declarations.
   */
  'js/ts.implicitProjectConfig.target': string;

  /**
   * Enable/disable automatic closing of JSX tags.
   */
  'typescript.autoClosingTags': boolean;

  /**
   * Check if npm is installed for Automatic Type Acquisition.
   */
  'typescript.check.npmIsInstalled': boolean;

  /**
   * Disables automatic type acquisition. Automatic type acquisition fetches `@types` packages from npm to improve IntelliSense for external libraries.
   */
  'typescript.disableAutomaticTypeAcquisition': boolean;

  /**
   * Enables prompting of users to use the TypeScript version configured in the workspace for Intellisense.
   */
  'typescript.enablePromptUseWorkspaceTsdk': boolean;

  /**
   * Enable/disable default TypeScript formatter.
   */
  'typescript.format.enable': boolean;

  /**
   * Indent case clauses in switch statements.
   */
  'typescript.format.indentSwitchCase': boolean;

  /**
   * Defines space handling after a comma delimiter.
   */
  'typescript.format.insertSpaceAfterCommaDelimiter': boolean;

  /**
   * Defines space handling after the constructor keyword.
   */
  'typescript.format.insertSpaceAfterConstructor': boolean;

  /**
   * Defines space handling after function keyword for anonymous functions.
   */
  'typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions': boolean;

  /**
   * Defines space handling after keywords in a control flow statement.
   */
  'typescript.format.insertSpaceAfterKeywordsInControlFlowStatements': boolean;

  /**
   * Defines space handling after opening and before closing empty braces.
   */
  'typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces': boolean;

  /**
   * Defines space handling after opening and before closing JSX expression braces.
   */
  'typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces': boolean;

  /**
   * Defines space handling after opening and before closing non-empty braces.
   */
  'typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces': boolean;

  /**
   * Defines space handling after opening and before closing non-empty brackets.
   */
  'typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets': boolean;

  /**
   * Defines space handling after opening and before closing non-empty parenthesis.
   */
  'typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis': boolean;

  /**
   * Defines space handling after opening and before closing template string braces.
   */
  'typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces': boolean;

  /**
   * Defines space handling after a semicolon in a for statement.
   */
  'typescript.format.insertSpaceAfterSemicolonInForStatements': boolean;

  /**
   * Defines space handling after type assertions in TypeScript.
   */
  'typescript.format.insertSpaceAfterTypeAssertion': boolean;

  /**
   * Defines space handling after a binary operator.
   */
  'typescript.format.insertSpaceBeforeAndAfterBinaryOperators': boolean;

  /**
   * Defines space handling before function argument parentheses.
   */
  'typescript.format.insertSpaceBeforeFunctionParenthesis': boolean;

  /**
   * Defines whether an open brace is put onto a new line for control blocks or not.
   */
  'typescript.format.placeOpenBraceOnNewLineForControlBlocks': boolean;

  /**
   * Defines whether an open brace is put onto a new line for functions or not.
   */
  'typescript.format.placeOpenBraceOnNewLineForFunctions': boolean;

  /**
   * Defines handling of optional semicolons.
   *  - ignore: Don't insert or remove any semicolons.
   *  - insert: Insert semicolons at statement ends.
   *  - remove: Remove unnecessary semicolons.
   */
  'typescript.format.semicolons': string;

  /**
   * Enable/disable implementations CodeLens. This CodeLens shows the implementers of an interface.
   */
  'typescript.implementationsCodeLens.enabled': boolean;

  /**
   * Enable/disable inlay hints for member values in enum declarations:
   */
  'typescript.inlayHints.enumMemberValues.enabled': boolean;

  /**
   * Enable/disable inlay hints for implicit return types on function signatures:
   */
  'typescript.inlayHints.functionLikeReturnTypes.enabled': boolean;

  /**
   * Enable/disable inlay hints for parameter names:
   */
  'typescript.inlayHints.parameterNames.enabled': string;

  /**
   * Suppress parameter name hints on arguments whose text is identical to the parameter name.
   */
  'typescript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': boolean;

  /**
   * Enable/disable inlay hints for implicit parameter types:
   */
  'typescript.inlayHints.parameterTypes.enabled': boolean;

  /**
   * Enable/disable inlay hints for implicit types on property declarations:
   */
  'typescript.inlayHints.propertyDeclarationTypes.enabled': boolean;

  /**
   * Enable/disable inlay hints for implicit variable types:
   */
  'typescript.inlayHints.variableTypes.enabled': boolean;

  /**
   * Suppress type hints on variables whose name is identical to the type name.
   */
  'typescript.inlayHints.variableTypes.suppressWhenTypeMatchesName': boolean;

  /**
   * Sets the locale used to report JavaScript and TypeScript errors. Defaults to use VS Code's locale.
   */
  'typescript.locale': string;

  /**
   * Specifies the path to the npm executable used for Automatic Type Acquisition.
   */
  'typescript.npm': string;

  /**
   * Specify glob patterns of files to exclude from auto imports.
   */
  'typescript.preferences.autoImportFileExcludePatterns': string[];

  /**
   * Preferred path style for auto imports.
   *  - shortest: Prefers a non-relative import only if one is available that has fewer path segments than a relative import.
   *  - relative: Prefers a relative path to the imported file location.
   *  - non-relative: Prefers a non-relative import based on the `baseUrl` or `paths` configured in your `jsconfig.json` / `tsconfig.json`.
   *  - project-relative: Prefers a non-relative import only if the relative import path would leave the package or project directory.
   */
  'typescript.preferences.importModuleSpecifier': string;

  /**
   * Preferred path ending for auto imports.
   *  - auto: Use project settings to select a default.
   *  - minimal: Shorten `./component/index.js` to `./component`.
   *  - index: Shorten `./component/index.js` to `./component/index`.
   *  - js: Do not shorten path endings; include the `.js` or `.ts` extension.
   */
  'typescript.preferences.importModuleSpecifierEnding': string;

  /**
   * Enable/disable searching `package.json` dependencies for available auto imports.
   *  - auto: Search dependencies based on estimated performance impact.
   *  - on: Always search dependencies.
   *  - off: Never search dependencies.
   */
  'typescript.preferences.includePackageJsonAutoImports': string;

  /**
   * Preferred style for JSX attribute completions.
   *  - auto: Insert `={}` or `=""` after attribute names based on the prop type.
   *  - braces: Insert `={}` after attribute names.
   *  - none: Only insert attribute names.
   */
  'typescript.preferences.jsxAttributeCompletionStyle': string;

  /**
   * Preferred quote style to use for Quick Fixes.
   *  - auto: Infer quote type from existing code
   *  - single: Always use single quotes: `'`
   *  - double: Always use double quotes: `"`
   */
  'typescript.preferences.quoteStyle': string;

  /**
   * When on a JSX tag, try to rename the matching tag instead of renaming the symbol.
   */
  'typescript.preferences.renameMatchingJsxTags': boolean;

  /**
   * Enable/disable introducing aliases for object shorthand properties during renames.
   */
  'typescript.preferences.useAliasesForRenames': boolean;

  /**
   * Makes Go to Definition avoid type declaration files when possible by triggering Go to Source Definition instead. This allows Go to Source Definition to be triggered with the mouse gesture.
   */
  'typescript.preferGoToSourceDefinition': boolean;

  /**
   * Enable/disable references CodeLens in TypeScript files.
   */
  'typescript.referencesCodeLens.enabled': boolean;

  /**
   * Enable/disable references CodeLens on all functions in TypeScript files.
   */
  'typescript.referencesCodeLens.showOnAllFunctions': boolean;

  /**
   * Report style checks as warnings.
   */
  'typescript.reportStyleChecksAsWarnings': boolean;

  /**
   * Enable/disable auto import suggestions.
   */
  'typescript.suggest.autoImports': boolean;

  /**
   * Enable/disable snippet completions for class members.
   */
  'typescript.suggest.classMemberSnippets.enabled': boolean;

  /**
   * Complete functions with their parameter signature.
   */
  'typescript.suggest.completeFunctionCalls': boolean;

  /**
   * Enable/disable suggestion to complete JSDoc comments.
   */
  'typescript.suggest.completeJSDocs': boolean;

  /**
   * Enabled/disable autocomplete suggestions.
   */
  'typescript.suggest.enabled': boolean;

  /**
   * Enable/disable showing completions on potentially undefined values that insert an optional chain call. Requires strict null checks to be enabled.
   */
  'typescript.suggest.includeAutomaticOptionalChainCompletions': boolean;

  /**
   * Enable/disable auto-import-style completions on partially-typed import statements.
   */
  'typescript.suggest.includeCompletionsForImportStatements': boolean;

  /**
   * Enable/disable generating `@returns` annotations for JSDoc templates.
   */
  'typescript.suggest.jsdoc.generateReturns': boolean;

  /**
   * Enable/disable snippet completions for methods in object literals.
   */
  'typescript.suggest.objectLiteralMethodSnippets.enabled': boolean;

  /**
   * Enable/disable suggestions for paths in import statements and require calls.
   */
  'typescript.suggest.paths': boolean;

  /**
   * Enable/disable suggestion diagnostics for TypeScript files in the editor.
   */
  'typescript.suggestionActions.enabled': boolean;

  /**
   * Controls auto detection of tsc tasks.
   *  - on: Create both build and watch tasks.
   *  - off: Disable this feature.
   *  - build: Only create single run compile tasks.
   *  - watch: Only create compile and watch tasks.
   */
  'typescript.tsc.autoDetect': string;

  /**
   * Specifies the folder path to the tsserver and `lib*.d.ts` files under a TypeScript install to use for IntelliSense, for example: `./node_modules/typescript/lib`.
   * - When specified as a user setting, the TypeScript version from `typescript.tsdk` automatically replaces the built-in TypeScript version.
   * - When specified as a workspace setting, `typescript.tsdk` allows you to switch to use that workspace version of TypeScript for IntelliSense with the `TypeScript: Select TypeScript version` command.
   */
  'typescript.tsdk': string;

  /**
   * Enables tracing TS server performance to a directory. These trace files can be used to diagnose TS Server performance issues. The log may contain file paths, source code, and other potentially sensitive information from your project.
   */
  'typescript.tsserver.enableTracing': boolean;

  /**
   * Enables logging of the TS server to a file. This log can be used to diagnose TS Server issues. The log may contain file paths, source code, and other potentially sensitive information from your project.
   */
  'typescript.tsserver.log': string;

  /**
   * The maximum amount of memory (in MB) to allocate to the TypeScript server process.
   */
  'typescript.tsserver.maxTsServerMemory': number;

  /**
   * Run TS Server on a custom Node installation. This can be a path to a Node executable, or 'node' if you want VS Code to detect a Node installation.
   */
  'typescript.tsserver.nodePath': string;

  /**
   * Additional paths to discover TypeScript Language Service plugins.
   */
  'typescript.tsserver.pluginPaths': string[];

  /**
   * Controls if TypeScript launches a dedicated server to more quickly handle syntax related operations, such as computing code folding.
   *  - always: Use a lighter weight syntax server to handle all IntelliSense operations. This syntax server can only provide IntelliSense for opened files.
   *  - never: Don't use a dedicated syntax server. Use a single server to handle all IntelliSense operations.
   *  - auto: Spawn both a full server and a lighter weight server dedicated to syntax operations. The syntax server is used to speed up syntax operations and provide IntelliSense while projects are loading.
   */
  'typescript.tsserver.useSyntaxServer': string;

  /**
   * Configure which watching strategies should be used to keep track of files and directories.
   */
  'typescript.tsserver.watchOptions': { [K in string]?: unknown };

  /**
   * Enable/disable project-wide IntelliSense on web.
   */
  'typescript.tsserver.web.projectWideIntellisense.enabled': boolean;

  /**
   * Suppresses semantic errors.
   */
  'typescript.tsserver.web.projectWideIntellisense.suppressSemanticErrors': boolean;

  /**
   * Enable/disable automatic updating of import paths when you rename or move a file in VS Code.
   *  - prompt: Prompt on each rename.
   *  - always: Always update paths automatically.
   *  - never: Never rename paths and don't prompt.
   */
  'typescript.updateImportsOnFileMove.enabled': string;

  /**
   * Enable/disable TypeScript validation.
   */
  'typescript.validate.enable': boolean;

  /**
   * Exclude symbols that come from library files in Go to Symbol in Workspace results.
   */
  'typescript.workspaceSymbols.excludeLibrarySymbols': boolean;

  /**
   * Controls which files are searched by Go to Symbol in Workspace.
   *  - allOpenProjects: Search all open JavaScript or TypeScript projects for symbols.
   *  - currentProject: Only search for symbols in the current JavaScript or TypeScript project.
   */
  'typescript.workspaceSymbols.scope': string;

  // Testing

  /**
   * Always reveal the executed test when `testing.followRunningTest` is on. If this setting is turned off, only failed tests will be revealed.
   */
  'testing.alwaysRevealTestOnStateChange': boolean;

  /**
   * Configures when the error Peek view is automatically opened.
   *  - failureAnywhere: Open automatically no matter where the failure is.
   *  - failureInVisibleDocument: Open automatically when a test fails in a visible document.
   *  - never: Never automatically open.
   */
  'testing.automaticallyOpenPeekView': string;

  /**
   * Controls whether to automatically open the Peek view during continuous run mode.
   */
  'testing.automaticallyOpenPeekViewDuringAutoRun': boolean;

  /**
   * How long to wait, in milliseconds, after a test is marked as outdated and starting a new run.
   */
  'testing.autoRun.delay': number;

  /**
   * Controls the count badge on the Testing icon on the Activity Bar.
   *  - failed: Show the number of failed tests
   *  - off: Disable the testing count badge
   *  - passed: Show the number of passed tests
   *  - skipped: Show the number of skipped tests
   */
  'testing.countBadge': string;

  /**
   * Controls the action to take when left-clicking on a test decoration in the gutter.
   *  - run: Run the test.
   *  - debug: Debug the test.
   *  - contextMenu: Open the context menu for more options.
   */
  'testing.defaultGutterClickAction': string;

  /**
   * Controls whether the running test should be followed in the Test Explorer view.
   */
  'testing.followRunningTest': boolean;

  /**
   * Controls whether test decorations are shown in the editor gutter.
   */
  'testing.gutterEnabled': boolean;

  /**
   * Controls when the testing view should open.
   *  - neverOpen: Never automatically open the testing views
   *  - openOnTestStart: Open the test results view when tests start
   *  - openOnTestFailure: Open the test result view on any test failure
   *  - openExplorerOnTestStart: Open the test explorer when tests start
   */
  'testing.openTesting': string;

  /**
   * Control whether save all dirty editors before running a test.
   */
  'testing.saveBeforeTest': boolean;

  /**
   * Controls whether to show messages from all test runs.
   */
  'testing.showAllMessages': boolean;

  // CSS

  /**
   * Insert semicolon at end of line when completing CSS properties.
   */
  'css.completion.completePropertyWithSemicolon': boolean;

  /**
   * By default, VS Code triggers property value completion after selecting a CSS property. Use this setting to disable this behavior.
   */
  'css.completion.triggerPropertyValueCompletion': boolean;

  /**
   * A list of relative file paths pointing to JSON files following the custom data format.
   * VS Code loads custom data on startup to enhance its CSS support for the custom CSS properties, at directives, pseudo classes and pseudo elements you specify in the JSON files.
   * The file paths are relative to workspace and only workspace folder settings are considered.
   */
  'css.customData': string[];

  /**
   * Put braces on the same line as rules (`collapse`) or put braces on own line (`expand`).
   */
  'css.format.braceStyle': string;

  /**
   * Enable/disable default CSS formatter.
   */
  'css.format.enable': boolean;

  /**
   * Maximum number of line breaks to be preserved in one chunk, when `css.format.preserveNewLines` is enabled.
   */
  'css.format.maxPreserveNewLines': number | null;

  /**
   * Separate rulesets by a blank line.
   */
  'css.format.newlineBetweenRules': boolean;

  /**
   * Separate selectors with a new line.
   */
  'css.format.newlineBetweenSelectors': boolean;

  /**
   * Whether existing line breaks before elements should be preserved.
   */
  'css.format.preserveNewLines': boolean;

  /**
   * Ensure a space character around selector separators '>', '+', '~' (e.g. `a > b`).
   */
  'css.format.spaceAroundSelectorSeparator': boolean;

  /**
   * Show tag and attribute documentation in CSS hovers.
   */
  'css.hover.documentation': boolean;

  /**
   * Show references to MDN in CSS hovers.
   */
  'css.hover.references': boolean;

  /**
   * Invalid number of parameters.
   */
  'css.lint.argumentsInColorFunction': string;

  /**
   * Do not use `width` or `height` when using `padding` or `border`.
   */
  'css.lint.boxModel': string;

  /**
   * When using a vendor-specific prefix make sure to also include all other vendor-specific properties.
   */
  'css.lint.compatibleVendorPrefixes': string;

  /**
   * Do not use duplicate style definitions.
   */
  'css.lint.duplicateProperties': string;

  /**
   * Do not use empty rulesets.
   */
  'css.lint.emptyRules': string;

  /**
   * Avoid using `float`. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
   */
  'css.lint.float': string;

  /**
   * `@font-face` rule must define `src` and `font-family` properties.
   */
  'css.lint.fontFaceProperties': string;

  /**
   * Hex colors must consist of three or six hex numbers.
   */
  'css.lint.hexColorLength': string;

  /**
   * Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
   */
  'css.lint.idSelector': string;

  /**
   * IE hacks are only necessary when supporting IE7 and older.
   */
  'css.lint.ieHack': string;

  /**
   * Avoid using `!important`. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
   */
  'css.lint.important': string;

  /**
   * Import statements do not load in parallel.
   */
  'css.lint.importStatement': string;

  /**
   * Property is ignored due to the display. E.g. with `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect.
   */
  'css.lint.propertyIgnoredDueToDisplay': string;

  /**
   * The universal selector (`*`) is known to be slow.
   */
  'css.lint.universalSelector': string;

  /**
   * Unknown at-rule.
   */
  'css.lint.unknownAtRules': string;

  /**
   * Unknown property.
   */
  'css.lint.unknownProperties': string;

  /**
   * Unknown vendor specific property.
   */
  'css.lint.unknownVendorSpecificProperties': string;

  /**
   * A list of properties that are not validated against the `unknownProperties` rule.
   */
  'css.lint.validProperties': string[];

  /**
   * When using a vendor-specific prefix, also include the standard property.
   */
  'css.lint.vendorPrefix': string;

  /**
   * No unit for zero needed.
   */
  'css.lint.zeroUnits': string;

  /**
   * Traces the communication between VS Code and the CSS language server.
   */
  'css.trace.server': string;

  /**
   * Enables or disables all validations.
   */
  'css.validate': boolean;

  // LESS

  /**
   * Insert semicolon at end of line when completing CSS properties.
   */
  'less.completion.completePropertyWithSemicolon': boolean;

  /**
   * By default, VS Code triggers property value completion after selecting a CSS property. Use this setting to disable this behavior.
   */
  'less.completion.triggerPropertyValueCompletion': boolean;

  /**
   * Put braces on the same line as rules (`collapse`) or put braces on own line (`expand`).
   */
  'less.format.braceStyle': string;

  /**
   * Enable/disable default LESS formatter.
   */
  'less.format.enable': boolean;

  /**
   * Maximum number of line breaks to be preserved in one chunk, when `less.format.preserveNewLines` is enabled.
   */
  'less.format.maxPreserveNewLines': number | null;

  /**
   * Separate rulesets by a blank line.
   */
  'less.format.newlineBetweenRules': boolean;

  /**
   * Separate selectors with a new line.
   */
  'less.format.newlineBetweenSelectors': boolean;

  /**
   * Whether existing line breaks before elements should be preserved.
   */
  'less.format.preserveNewLines': boolean;

  /**
   * Ensure a space character around selector separators '>', '+', '~' (e.g. `a > b`).
   */
  'less.format.spaceAroundSelectorSeparator': boolean;

  /**
   * Show tag and attribute documentation in LESS hovers.
   */
  'less.hover.documentation': boolean;

  /**
   * Show references to MDN in LESS hovers.
   */
  'less.hover.references': boolean;

  /**
   * Invalid number of parameters.
   */
  'less.lint.argumentsInColorFunction': string;

  /**
   * Do not use `width` or `height` when using `padding` or `border`.
   */
  'less.lint.boxModel': string;

  /**
   * When using a vendor-specific prefix make sure to also include all other vendor-specific properties.
   */
  'less.lint.compatibleVendorPrefixes': string;

  /**
   * Do not use duplicate style definitions.
   */
  'less.lint.duplicateProperties': string;

  /**
   * Do not use empty rulesets.
   */
  'less.lint.emptyRules': string;

  /**
   * Avoid using `float`. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
   */
  'less.lint.float': string;

  /**
   * `@font-face` rule must define `src` and `font-family` properties.
   */
  'less.lint.fontFaceProperties': string;

  /**
   * Hex colors must consist of three or six hex numbers.
   */
  'less.lint.hexColorLength': string;

  /**
   * Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
   */
  'less.lint.idSelector': string;

  /**
   * IE hacks are only necessary when supporting IE7 and older.
   */
  'less.lint.ieHack': string;

  /**
   * Avoid using `!important`. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
   */
  'less.lint.important': string;

  /**
   * Import statements do not load in parallel.
   */
  'less.lint.importStatement': string;

  /**
   * Property is ignored due to the display. E.g. with `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect.
   */
  'less.lint.propertyIgnoredDueToDisplay': string;

  /**
   * The universal selector (`*`) is known to be slow.
   */
  'less.lint.universalSelector': string;

  /**
   * Unknown at-rule.
   */
  'less.lint.unknownAtRules': string;

  /**
   * Unknown property.
   */
  'less.lint.unknownProperties': string;

  /**
   * Unknown vendor specific property.
   */
  'less.lint.unknownVendorSpecificProperties': string;

  /**
   * A list of properties that are not validated against the `unknownProperties` rule.
   */
  'less.lint.validProperties': string[];

  /**
   * When using a vendor-specific prefix, also include the standard property.
   */
  'less.lint.vendorPrefix': string;

  /**
   * No unit for zero needed.
   */
  'less.lint.zeroUnits': string;

  /**
   * Enables or disables all validations.
   */
  'less.validate': boolean;

  // SCSS (Sass)

  /**
   * Insert semicolon at end of line when completing CSS properties.
   */
  'scss.completion.completePropertyWithSemicolon': boolean;

  /**
   * By default, VS Code triggers property value completion after selecting a CSS property. Use this setting to disable this behavior.
   */
  'scss.completion.triggerPropertyValueCompletion': boolean;

  /**
   * Put braces on the same line as rules (`collapse`) or put braces on own line (`expand`).
   */
  'scss.format.braceStyle': string;

  /**
   * Enable/disable default SCSS formatter.
   */
  'scss.format.enable': boolean;

  /**
   * Maximum number of line breaks to be preserved in one chunk, when `scss.format.preserveNewLines` is enabled.
   */
  'scss.format.maxPreserveNewLines': number | null;

  /**
   * Separate rulesets by a blank line.
   */
  'scss.format.newlineBetweenRules': boolean;

  /**
   * Separate selectors with a new line.
   */
  'scss.format.newlineBetweenSelectors': boolean;

  /**
   * Whether existing line breaks before elements should be preserved.
   */
  'scss.format.preserveNewLines': boolean;

  /**
   * Ensure a space character around selector separators '>', '+', '~' (e.g. `a > b`).
   */
  'scss.format.spaceAroundSelectorSeparator': boolean;

  /**
   * Show tag and attribute documentation in SCSS hovers.
   */
  'scss.hover.documentation': boolean;

  /**
   * Show references to MDN in SCSS hovers.
   */
  'scss.hover.references': boolean;

  /**
   * Invalid number of parameters.
   */
  'scss.lint.argumentsInColorFunction': string;

  /**
   * Do not use `width` or `height` when using `padding` or `border`.
   */
  'scss.lint.boxModel': string;

  /**
   * When using a vendor-specific prefix make sure to also include all other vendor-specific properties.
   */
  'scss.lint.compatibleVendorPrefixes': string;

  /**
   * Do not use duplicate style definitions.
   */
  'scss.lint.duplicateProperties': string;

  /**
   * Do not use empty rulesets.
   */
  'scss.lint.emptyRules': string;

  /**
   * Avoid using `float`. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
   */
  'scss.lint.float': string;

  /**
   * `@font-face` rule must define `src` and `font-family` properties.
   */
  'scss.lint.fontFaceProperties': string;

  /**
   * Hex colors must consist of three or six hex numbers.
   */
  'scss.lint.hexColorLength': string;

  /**
   * Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
   */
  'scss.lint.idSelector': string;

  /**
   * IE hacks are only necessary when supporting IE7 and older.
   */
  'scss.lint.ieHack': string;

  /**
   * Avoid using `!important`. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
   */
  'scss.lint.important': string;

  /**
   * Import statements do not load in parallel.
   */
  'scss.lint.importStatement': string;

  /**
   * Property is ignored due to the display. E.g. with `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect.
   */
  'scss.lint.propertyIgnoredDueToDisplay': string;

  /**
   * The universal selector (`*`) is known to be slow.
   */
  'scss.lint.universalSelector': string;

  /**
   * Unknown at-rule.
   */
  'scss.lint.unknownAtRules': string;

  /**
   * Unknown property.
   */
  'scss.lint.unknownProperties': string;

  /**
   * Unknown vendor specific property.
   */
  'scss.lint.unknownVendorSpecificProperties': string;

  /**
   * A list of properties that are not validated against the `unknownProperties` rule.
   */
  'scss.lint.validProperties': string[];

  /**
   * When using a vendor-specific prefix, also include the standard property.
   */
  'scss.lint.vendorPrefix': string;

  /**
   * No unit for zero needed.
   */
  'scss.lint.zeroUnits': string;

  /**
   * Enables or disables all validations.
   */
  'scss.validate': boolean;

  // Extensions

  /**
   * When enabled, automatically checks extensions for updates. If an extension has an update, it is marked as outdated in the Extensions view. The updates are fetched from a Microsoft online service.
   */
  'extensions.autoCheckUpdates': boolean;

  /**
   * Controls the automatic update behavior of extensions. The updates are fetched from a Microsoft online service.
   *  - true: Download and install updates automatically for all extensions except for those updates are ignored.
   *  - onlyEnabledExtensions: Download and install updates automatically only for enabled extensions except for those updates are ignored. Disabled extensions are not updated automatically.
   *  - false: Extensions are not automatically updated.
   */
  'extensions.autoUpdate': boolean;

  /**
   * When enabled, editors with extension details will be automatically closed upon navigating away from the Extensions View.
   */
  'extensions.closeExtensionDetailsOnViewChange': boolean;

  /**
   * When an extension is listed here, a confirmation prompt will not be shown when that extension handles a URI.
   */
  'extensions.confirmedUriHandlerExtensionIds': string[];

  /**
   * When enabled, the notifications for extension recommendations will not be shown.
   */
  'extensions.ignoreRecommendations': boolean;

  /**
   * Override the untrusted workspace support of an extension. Extensions using `true` will always be enabled. Extensions using `limited` will always be enabled, and the extension will hide functionality that requires trust. Extensions using `false` will only be enabled only when the workspace is trusted.
   */
  'extensions.supportUntrustedWorkspaces': { [K in string]?: boolean };

  /**
   * Override the virtual workspaces support of an extension.
   */
  'extensions.supportVirtualWorkspaces': { [K in string]?: boolean };

  // Output

  /**
   * Enable/disable the ability of smart scrolling in the output view. Smart scrolling allows you to lock scrolling automatically when you click in the output view and unlocks when you click in the last line.
   */
  'output.smartScroll.enabled': boolean;

  // Settings Sync

  /**
   * List of extensions to be ignored while synchronizing. The identifier of an extension is always `${publisher}.${name}`. For example: `vscode.csharp`.
   */
  'settingsSync.ignoredExtensions': string[];

  /**
   * Configure settings to be ignored while synchronizing.
   */
  'settingsSync.ignoredSettings': string[];

  /**
   * Synchronize keybindings for each platform.
   */
  'settingsSync.keybindingsPerPlatform': boolean;

  // Notebooks

  /**
   * Controls whether code cells in the interactive window are collapsed by default.
   */
  'interactiveWindow.collapseCellInputCode': string;

  /**
   * When enabled notebook breadcrumbs contain code cells.
   */
  'notebook.breadcrumbs.showCodeCells': boolean;

  /**
   * Controls where the focus indicator is rendered, either along the cell borders or on the left gutter.
   */
  'notebook.cellFocusIndicator': string;

  /**
   * Where the cell toolbar should be shown, or whether it should be hidden.
   */
  'notebook.cellToolbarLocation': {
    default?: string;
  };

  /**
   * Whether the cell toolbar should appear on hover or click.
   */
  'notebook.cellToolbarVisibility': string;

  /**
   * Run a series of Code Actions for a notebook on save.
   */
  'notebook.codeActionsOnSave': { [K in string]?: boolean };

  /**
   * Control whether the notebook editor should be rendered in a compact form. For example, when turned on, it will decrease the left margin width.
   */
  'notebook.compactView': boolean;

  /**
   * Control whether a confirmation prompt is required to delete a running cell.
   */
  'notebook.confirmDeleteRunningCell': boolean;

  /**
   * Control whether outputs action should be rendered in the output toolbar.
   */
  'notebook.consolidatedOutputButton': boolean;

  /**
   * Control whether extra actions are shown in a dropdown next to the run button.
   */
  'notebook.consolidatedRunButton': boolean;

  /**
   * Whether to use the enhanced text diff editor for notebook.
   */
  'notebook.diff.enablePreview': boolean;

  /**
   * Hide Metadata Differences
   */
  'notebook.diff.ignoreMetadata': boolean;

  /**
   * Hide Outputs Differences
   */
  'notebook.diff.ignoreOutputs': boolean;

  /**
   * Whether to render the overview ruler in the diff editor for notebook.
   */
  'notebook.diff.overviewRuler': boolean;

  /**
   * Priority list for output mime types
   */
  'notebook.displayOrder': string[];

  /**
   * Control whether the notebook editor should allow moving cells through drag and drop.
   */
  'notebook.dragAndDropEnabled': boolean;

  /**
   * Settings for code editors used in notebooks. This can be used to customize most editor.* settings.
   */
  'notebook.editorOptionsCustomizations': { [K in string]?: unknown };

  /**
   * Customize the Find Widget behavior for searching within notebook cells. When both markup source and markup preview are enabled, the Find Widget will search either the source code or preview based on the current state of the cell.
   */
  'notebook.find.scope': {
    markupSource?: boolean;
    markupPreview?: boolean;
    codeSource?: boolean;
    codeOutput?: boolean;
  };

  /**
   * Format a notebook cell upon execution. A formatter must be available.
   */
  'notebook.formatOnCellExecution': boolean;

  /**
   * Format a notebook on save. A formatter must be available, the file must not be saved after delay, and the editor must not be shutting down.
   */
  'notebook.formatOnSave.enabled': boolean;

  /**
   * Control whether to render a global toolbar inside the notebook editor.
   */
  'notebook.globalToolbar': boolean;

  /**
   * Control whether the actions on the notebook toolbar should render label or not.
   */
  'notebook.globalToolbarShowLabel': string;

  /**
   * When enabled the Go to Symbol Quick Pick will display full code symbols from the notebook, as well as Markdown headers.
   */
  'notebook.gotoSymbols.showAllSymbols': boolean;

  /**
   * Control where the insert cell actions should appear.
   *  - betweenCells: A toolbar that appears on hover between cells.
   *  - notebookToolbar: The toolbar at the top of the notebook editor.
   *  - both: Both toolbars.
   *  - hidden: The insert actions don't appear anywhere.
   */
  'notebook.insertToolbarLocation': string;

  /**
   * Controls the display of line numbers in the cell editor.
   */
  'notebook.lineNumbers': string;

  /**
   * Controls the font size in pixels of rendered markup in notebooks. When set to `0`, 120% of `editor.fontSize` is used.
   */
  'notebook.markup.fontSize': number;

  /**
   * When enabled cursor can navigate to the next/previous cell when the current cursor in the cell editor is at the first/last line.
   */
  'notebook.navigation.allowNavigateToSurroundingCells': boolean;

  /**
   * When enabled notebook outline shows code cells.
   */
  'notebook.outline.showCodeCells': boolean;

  /**
   * The font family of the output text within notebook cells. When set to empty, the `editor.fontFamily` is used.
   */
  'notebook.output.fontFamily': string;

  /**
   * Font size for the output text within notebook cells. When set to 0, `editor.fontSize` is used.
   */
  'notebook.output.fontSize': number;

  /**
   * Line height of the output text within notebook cells.
   *  - When set to 0, editor line height is used.
   *  - Values between 0 and 8 will be used as a multiplier with the font size.
   *  - Values greater than or equal to 8 will be used as effective values.
   */
  'notebook.output.lineHeight': number;

  /**
   * Initially render notebook outputs in a scrollable region when longer than the limit.
   */
  'notebook.output.scrolling': boolean;

  /**
   * Controls how many lines of text are displayed in a text output.
   */
  'notebook.output.textLineLimit': number;

  /**
   * Controls whether the lines in output should wrap.
   */
  'notebook.output.wordWrap': boolean;

  /**
   * How far to scroll when revealing the next cell upon running notebook.cell.executeAndSelectBelow.
   *  - fullCell: Scroll to fully reveal the next cell.
   *  - firstLine: Scroll to reveal the first line of the next cell.
   *  - none: Do not scroll.
   */
  'notebook.scrolling.revealNextCellOnExecute': string;

  /**
   * Whether the cell status bar should be shown.
   *  - hidden: The cell Status bar is always hidden.
   *  - visible: The cell Status bar is always visible.
   *  - visibleAfterExecute: The cell Status bar is hidden until the cell has executed. Then it becomes visible to show the execution status.
   */
  'notebook.showCellStatusBar': string;

  /**
   * Controls when the Markdown header folding arrow is shown.
   *  - always: The folding controls are always visible.
   *  - never: Never show the folding controls and reduce the gutter size.
   *  - mouseover: The folding controls are visible only on mouseover.
   */
  'notebook.showFoldingControls': string;

  /**
   * Whether to use separate undo/redo stack for each cell.
   */
  'notebook.undoRedoPerCell': boolean;

  /**
   * Automatically scroll the interactive window to show the output of the last statement executed. If this value is false, the window will only scroll if the last cell was already the one scrolled to.
   */
  'interactiveWindow.alwaysScrollOnNewCell': boolean;

  // Terminal

  /**
   * When opening a file from the Explorer in a terminal, determines what kind of terminal will be launched
   *  - integrated: Use VS Code's integrated terminal.
   *  - external: Use the configured external terminal.
   *  - both: Use the other two together.
   */
  'terminal.explorerKind': string;

  /**
   * Customizes which terminal to run on Linux.
   */
  'terminal.external.linuxExec': string;

  /**
   * Customizes which terminal application to run on macOS.
   */
  'terminal.external.osxExec': string;

  /**
   * Customizes which terminal to run on Windows.
   */
  'terminal.external.windowsExec': string;

  /**
   * When opening a repository from the Source Control Repositories view in a terminal, determines what kind of terminal will be launched
   *  - integrated: Use VS Code's integrated terminal.
   *  - external: Use the configured external terminal.
   *  - both: Use the other two together.
   */
  'terminal.sourceControlRepositoriesKind': string;

  /**
   * Preserve the cursor position on reopen of the terminal's accessible view rather than setting it to the bottom of the buffer.
   */
  'terminal.integrated.accessibleViewPreserveCursorPosition': boolean;

  /**
   * Whether or not to allow chord keybindings in the terminal. Note that when this is true and the keystroke results in a chord it will bypass `terminal.integrated.commandsToSkipShell`, setting this to false is particularly useful when you want ctrl+k to go to your shell (not VS Code).
   */
  'terminal.integrated.allowChords': boolean;

  /**
   * Whether to allow menubar mnemonics (for example Alt+F) to trigger the open of the menubar. Note that this will cause all alt keystrokes to skip the shell when true. This does nothing on macOS.
   */
  'terminal.integrated.allowMnemonics': boolean;

  /**
   * If enabled, alt/option + click will reposition the prompt cursor to underneath the mouse when `editor.multiCursorModifier` is set to `'alt'` (the default value). This may not work reliably depending on your shell.
   */
  'terminal.integrated.altClickMovesCursor': boolean;

  /**
   * The terminal profile to use on Linux for automation-related terminal usage like tasks and debug.
   */
  'terminal.integrated.automationProfile.linux': unknown | null;

  /**
   * The terminal profile to use on macOS for automation-related terminal usage like tasks and debug.
   */
  'terminal.integrated.automationProfile.osx': unknown | null;

  /**
   * The terminal profile to use for automation-related terminal usage like tasks and debug.
   */
  'terminal.integrated.automationProfile.windows': unknown | null;

  /**
   * A set of messages that, when encountered in the terminal, will be automatically responded to. Provided the message is specific enough, this can help automate away common responses.
   */
  'terminal.integrated.autoReplies': { [K in string]?: unknown };

  /**
   * The number of milliseconds to show the bell within a terminal tab when triggered.
   */
  'terminal.integrated.bellDuration': number;

  /**
   * A set of command IDs whose keybindings will not be sent to the shell but instead always be handled by VS Code. This allows keybindings that would normally be consumed by the shell to act instead the same as when the terminal is not focused, for example `Ctrl+P` to launch Quick Open.
   */
  'terminal.integrated.commandsToSkipShell': string[];

  /**
   * Controls whether to confirm when the window closes if there are active terminal sessions.
   *  - never: Never confirm.
   *  - always: Always confirm if there are terminals.
   *  - hasChildProcesses: Confirm if there are any terminals that have child processes.
   */
  'terminal.integrated.confirmOnExit': string;

  /**
   * Controls whether to confirm killing terminals when they have child processes. When set to editor, terminals in the editor area will be marked as changed when they have child processes. Note that child process detection may not work well for shells like Git Bash which don't run their processes as child processes of the shell.
   *  - never: Never confirm.
   *  - editor: Confirm if the terminal is in the editor.
   *  - panel: Confirm if the terminal is in the panel.
   *  - always: Confirm if the terminal is either in the editor or panel.
   */
  'terminal.integrated.confirmOnKill': string;

  /**
   * Controls whether text selected in the terminal will be copied to the clipboard.
   */
  'terminal.integrated.copyOnSelection': boolean;

  /**
   * Controls whether the terminal cursor blinks.
   */
  'terminal.integrated.cursorBlinking': boolean;

  /**
   * Controls the style of terminal cursor when the terminal is focused.
   */
  'terminal.integrated.cursorStyle': string;

  /**
   * Controls the style of terminal cursor when the terminal is not focused.
   */
  'terminal.integrated.cursorStyleInactive': string;

  /**
   * Controls the width of the cursor when `terminal.integrated.cursorStyle` is set to `line`.
   */
  'terminal.integrated.cursorWidth': number;

  /**
   * Whether to draw custom glyphs for block element and box drawing characters instead of using the font, which typically yields better rendering with continuous lines. Note that this doesn't work when `terminal.integrated.gpuAcceleration` is disabled.
   */
  'terminal.integrated.customGlyphs': boolean;

  /**
   * An explicit start path where the terminal will be launched, this is used as the current working directory (cwd) for the shell process. This may be particularly useful in workspace settings if the root directory is not a convenient cwd.
   */
  'terminal.integrated.cwd': string;

  /**
   * Controls where newly created terminals will appear.
   *  - editor: Create terminals in the editor
   *  - view: Create terminals in the terminal view
   */
  'terminal.integrated.defaultLocation': string;

  /**
   * The default terminal profile on Linux.
   */
  'terminal.integrated.defaultProfile.linux': string | null;

  /**
   * The default terminal profile on macOS.
   */
  'terminal.integrated.defaultProfile.osx': string | null;

  /**
   * The default terminal profile on Windows.
   */
  'terminal.integrated.defaultProfile.windows': string | null;

  /**
   * Controls whether to detect and set the `$LANG` environment variable to a UTF-8 compliant option since VS Code's terminal only supports UTF-8 encoded data coming from the shell.
   *  - auto: Set the `$LANG` environment variable if the existing variable does not exist or it does not end in `'.UTF-8'`.
   *  - off: Do not set the `$LANG` environment variable.
   *  - on: Always set the `$LANG` environment variable.
   */
  'terminal.integrated.detectLocale': string;

  /**
   * Controls whether bold text in the terminal will always use the "bright" ANSI color variant.
   */
  'terminal.integrated.drawBoldTextInBrightColors': boolean;

  /**
   * Controls whether the terminal bell is enabled. This shows up as a visual bell next to the terminal's name.
   */
  'terminal.integrated.enableBell': boolean;

  /**
   * Whether to enable file links in terminals. Links can be slow when working on a network drive in particular because each file link is verified against the file system. Changing this will take effect only in new terminals.
   *  - off: Always off.
   *  - on: Always on.
   *  - notRemote: Enable only when not in a remote workspace.
   */
  'terminal.integrated.enableFileLinks': string;

  /**
   * Enables image support in the terminal.
   */
  'terminal.integrated.enableImages': boolean;

  /**
   * Show a warning dialog when pasting multiple lines into the terminal. The dialog does not show when:
   * - Bracketed paste mode is enabled (the shell supports multi-line paste natively)
   * - The paste is handled by the shell's readline (in the case of pwsh)
   */
  'terminal.integrated.enableMultiLinePasteWarning': boolean;

  /**
   * Persist terminal sessions/history for the workspace across window reloads.
   */
  'terminal.integrated.enablePersistentSessions': boolean;

  /**
   * Object with environment variables that will be added to the VS Code process to be used by the terminal on Linux. Set to `null` to delete the environment variable.
   */
  'terminal.integrated.env.linux': { [K in string]?: string | null };

  /**
   * Object with environment variables that will be added to the VS Code process to be used by the terminal on macOS. Set to `null` to delete the environment variable.
   */
  'terminal.integrated.env.osx': { [K in string]?: string | null };

  /**
   * Object with environment variables that will be added to the VS Code process to be used by the terminal on Windows. Set to `null` to delete the environment variable.
   */
  'terminal.integrated.env.windows': { [K in string]?: string | null };

  /**
   * Whether to display the environment changes indicator on each terminal which explains whether extensions have made, or want to make changes to the terminal's environment.
   *  - off: Disable the indicator.
   *  - on: Enable the indicator.
   *  - warnonly: Only show the warning indicator when a terminal's environment is 'stale', not the information indicator that shows a terminal has had its environment modified by an extension.
   */
  'terminal.integrated.environmentChangesIndicator': string;

  /**
   * Whether to relaunch terminals automatically if extensions want to contribute to their environment and have not been interacted with yet.
   */
  'terminal.integrated.environmentChangesRelaunch': boolean;

  /**
   * Scrolling speed multiplier when pressing `Alt`.
   */
  'terminal.integrated.fastScrollSensitivity': number;

  /**
   * Controls whether the terminal, accessible buffer, or neither will be focused after `Terminal: Run Selected Text In Active Terminal` has been run.
   *  - terminal: Always focus the terminal.
   *  - accessible-buffer: Always focus the accessible buffer.
   *  - none: Do nothing.
   */
  'terminal.integrated.focusAfterRun': string;

  /**
   * Controls the font family of the terminal. Defaults to `editor.fontFamily`'s value.
   */
  'terminal.integrated.fontFamily': string;

  /**
   * Controls the font size in pixels of the terminal.
   */
  'terminal.integrated.fontSize': number;

  /**
   * The font weight to use within the terminal for non-bold text. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.
   */
  'terminal.integrated.fontWeight': string;

  /**
   * The font weight to use within the terminal for bold text. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.
   */
  'terminal.integrated.fontWeightBold': string;

  /**
   * Controls whether the terminal will leverage the GPU to do its rendering.
   *  - auto: Let VS Code detect which renderer will give the best experience.
   *  - on: Enable GPU acceleration within the terminal.
   *  - off: Disable GPU acceleration within the terminal.
   *  - canvas: Use the terminal's fallback canvas renderer which uses a 2d context instead of webgl which may perform better on some systems.
   */
  'terminal.integrated.gpuAcceleration': string;

  /**
   * Whether to hide the terminal view on startup, avoiding creating a terminal when there are no persistent sessions.
   *  - never: Never hide the terminal view on startup.
   *  - whenEmpty: Only hide the terminal when there are no persistent sessions restored.
   *  - always: Always hide the terminal, even when there are persistent sessions restored.
   */
  'terminal.integrated.hideOnStartup': string;

  /**
   * Controls whether the terminal will ignore bracketed paste mode even if the terminal was put into the mode, omitting the `\x1b[200~` and `\x1b[201~` sequences when pasting. This is useful when the shell is not respecting the mode which can happen in sub-shells for example.
   */
  'terminal.integrated.ignoreBracketedPasteMode': boolean;

  /**
   * A set of process names to ignore when using the `terminal.integrated.confirmOnKill` setting.
   */
  'terminal.integrated.ignoreProcessNames': string[];

  /**
   * Whether new shells should inherit their environment from VS Code, which may source a login shell to ensure $PATH and other development variables are initialized. This has no effect on Windows.
   */
  'terminal.integrated.inheritEnv': boolean;

  /**
   * Controls the letter spacing of the terminal. This is an integer value which represents the number of additional pixels to add between characters.
   */
  'terminal.integrated.letterSpacing': number;

  /**
   * Controls the line height of the terminal. This number is multiplied by the terminal font size to get the actual line-height in pixels.
   */
  'terminal.integrated.lineHeight': number;

  /**
   * When local echo should be enabled. This will override `terminal.integrated.localEchoLatencyThreshold`
   *  - on: Always enabled
   *  - off: Always disabled
   *  - auto: Enabled only for remote workspaces
   */
  'terminal.integrated.localEchoEnabled': string;

  /**
   * Local echo will be disabled when any of these program names are found in the terminal title.
   */
  'terminal.integrated.localEchoExcludePrograms': string[];

  /**
   * Length of network delay, in milliseconds, where local edits will be echoed on the terminal without waiting for server acknowledgement. If '0', local echo will always be on, and if '-1' it will be disabled.
   */
  'terminal.integrated.localEchoLatencyThreshold': number;

  /**
   * Terminal style of locally echoed text; either a font style or an RGB color.
   */
  'terminal.integrated.localEchoStyle': string;

  /**
   * Controls whether to force selection when using Option+click on macOS. This will force a regular (line) selection and disallow the use of column selection mode. This enables copying and pasting using the regular terminal selection, for example, when mouse mode is enabled in tmux.
   */
  'terminal.integrated.macOptionClickForcesSelection': boolean;

  /**
   * Controls whether to treat the option key as the meta key in the terminal on macOS.
   */
  'terminal.integrated.macOptionIsMeta': boolean;

  /**
   * When set, the foreground color of each cell will change to try meet the contrast ratio specified. Example values:
   * - 1: Do nothing and use the standard theme colors.
   * - 4.5: WCAG AA compliance (minimum).
   * - 7: WCAG AAA compliance (enhanced).
   * - 21: White on black or black on white.
   */
  'terminal.integrated.minimumContrastRatio': number;

  /**
   * A multiplier to be used on the `deltaY` of mouse wheel scroll events.
   */
  'terminal.integrated.mouseWheelScrollSensitivity': number;

  /**
   * When the terminal process must be shut down (for example on window or application close), this determines when the previous terminal session contents/history should be restored and processes be recreated when the workspace is next opened.
   *  - onExit: Revive the processes after the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu).
   *  - onExitAndWindowClose: Revive the processes after the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu), or when the window is closed.
   *  - never: Never restore the terminal buffers or recreate the process.
   */
  'terminal.integrated.persistentSessionReviveProcess': string;

  /**
   * Controls the maximum amount of lines that will be restored when reconnecting to a persistent terminal session. Increasing this will restore more lines of scrollback at the cost of more memory and increase the time it takes to connect to terminals on start up. This setting requires a restart to take effect and should be set to a value less than or equal to `terminal.integrated.scrollback`.
   */
  'terminal.integrated.persistentSessionScrollback': number;

  /**
   * A set of terminal profile customizations for Linux which allows adding, removing or changing how terminals are launched. Profiles are made up of a mandatory path, optional arguments and other presentation options.
   */
  'terminal.integrated.profiles.linux': { [K in string]?: unknown };

  /**
   * A set of terminal profile customizations for Mac which allows adding, removing or changing how terminals are launched. Profiles are made up of a mandatory path, optional arguments and other presentation options.
   */
  'terminal.integrated.profiles.osx': { [K in string]?: unknown };

  /**
   * A set of terminal profile customizations for Windows which allows adding, removing or changing how terminals are launched. Profiles are made up of a mandatory path, optional arguments and other presentation options.
   */
  'terminal.integrated.profiles.windows': { [K in string]?: unknown };

  /**
   * Controls how terminal reacts to right click.
   *  - default: Show the context menu.
   *  - copyPaste: Copy when there is a selection, otherwise paste.
   *  - paste: Paste on right click.
   *  - selectWord: Select the word under the cursor and show the context menu.
   *  - nothing: Do nothing and pass event to terminal.
   */
  'terminal.integrated.rightClickBehavior': string;

  /**
   * Controls the maximum number of lines the terminal keeps in its buffer.
   */
  'terminal.integrated.scrollback': number;

  /**
   * Dispatches most keybindings to the terminal instead of the workbench, overriding `terminal.integrated.commandsToSkipShell`, which can be used alternatively for fine tuning.
   */
  'terminal.integrated.sendKeybindingsToShell': boolean;

  /**
   * When shell integration is enabled, adds a decoration for each command.
   *  - both: Show decorations in the gutter (left) and overview ruler (right)
   *  - gutter: Show gutter decorations to the left of the terminal
   *  - overviewRuler: Show overview ruler decorations to the right of the terminal
   *  - never: Do not show decorations
   */
  'terminal.integrated.shellIntegration.decorationsEnabled': string;

  /**
   * Determines whether or not shell integration is auto-injected to support features like enhanced command tracking and current working directory detection.
   */
  'terminal.integrated.shellIntegration.enabled': boolean;

  /**
   * Controls the number of recently used commands to keep in the terminal command history. Set to 0 to disable terminal command history.
   */
  'terminal.integrated.shellIntegration.history': number;

  /**
   * Controls whether to show the alert "The terminal process terminated with exit code" when exit code is non-zero.
   */
  'terminal.integrated.showExitAlert': boolean;

  /**
   * Whether to show hovers for links in the terminal output.
   */
  'terminal.integrated.showLinkHover': boolean;

  /**
   * Controls whether the terminal will scroll using an animation.
   */
  'terminal.integrated.smoothScrolling': boolean;

  /**
   * Controls the working directory a split terminal starts with.
   *  - workspaceRoot: A new split terminal will use the workspace root as the working directory. In a multi-root workspace a choice for which root folder to use is offered.
   *  - initial: A new split terminal will use the working directory that the parent terminal started with.
   *  - inherited: On macOS and Linux, a new split terminal will use the working directory of the parent terminal. On Windows, this behaves the same as initial.
   */
  'terminal.integrated.splitCwd': string;

  /**
   * A theme color ID to associate with terminal icons by default.
   */
  'terminal.integrated.tabs.defaultColor': string | null;

  /**
   * A codicon ID to associate with terminal icons by default.
   */
  'terminal.integrated.tabs.defaultIcon': string;

  /**
   * Controls the terminal description, which appears to the right of the title. Variables are substituted based on the context:
   * - `${cwd}`: the terminal's current working directory
   * - `${cwdFolder}`: the terminal's current working directory, displayed for multi-root workspaces or in a single root workspace when the value differs from the initial working directory. On Windows, this will only be displayed when shell integration is enabled.
   * - `${workspaceFolder}`: the workspace in which the terminal was launched
   * - `${local}`: indicates a local terminal in a remote workspace
   * - `${process}`: the name of the terminal process
   * - `${separator}`: a conditional separator (` - `) that only shows when surrounded by variables with values or static text.
   * - `${sequence}`: the name provided to the terminal by the process
   * - `${task}`: indicates this terminal is associated with a task
   */
  'terminal.integrated.tabs.description': string;

  /**
   * Controls whether terminal tab statuses support animation (eg. in progress tasks).
   */
  'terminal.integrated.tabs.enableAnimation': boolean;

  /**
   * Controls whether terminal tabs display as a list to the side of the terminal. When this is disabled a dropdown will display instead.
   */
  'terminal.integrated.tabs.enabled': boolean;

  /**
   * Controls whether focusing the terminal of a tab happens on double or single click.
   *  - singleClick: Focus the terminal when clicking a terminal tab
   *  - doubleClick: Focus the terminal when double-clicking a terminal tab
   */
  'terminal.integrated.tabs.focusMode': string;

  /**
   * Controls whether the terminal tabs view will hide under certain conditions.
   *  - never: Never hide the terminal tabs view
   *  - singleTerminal: Hide the terminal tabs view when there is only a single terminal opened
   *  - singleGroup: Hide the terminal tabs view when there is only a single terminal group opened
   */
  'terminal.integrated.tabs.hideCondition': string;

  /**
   * Controls the location of the terminal tabs, either to the left or right of the actual terminal(s).
   *  - left: Show the terminal tabs view to the left of the terminal
   *  - right: Show the terminal tabs view to the right of the terminal
   */
  'terminal.integrated.tabs.location': string;

  /**
   * Separator used by `terminal.integrated.tabs.title` and `terminal.integrated.tabs.description`.
   */
  'terminal.integrated.tabs.separator': string;

  /**
   * Controls whether terminal split and kill buttons are displays next to the new terminal button.
   *  - always: Always show the actions
   *  - singleTerminal: Show the actions when it is the only terminal opened
   *  - singleTerminalOrNarrow: Show the actions when it is the only terminal opened or when the tabs view is in its narrow textless state
   *  - never: Never show the actions
   */
  'terminal.integrated.tabs.showActions': string;

  /**
   * Shows the active terminal information in the view.
   *  - always: Always show the active terminal
   *  - singleTerminal: Show the active terminal when it is the only terminal opened
   *  - singleTerminalOrNarrow: Show the active terminal when it is the only terminal opened or when the tabs view is in its narrow textless state
   *  - never: Never show the active terminal
   */
  'terminal.integrated.tabs.showActiveTerminal': string;

  /**
   * Controls the terminal title. Variables are substituted based on the context:
   * - `${cwd}`: the terminal's current working directory
   * - `${cwdFolder}`: the terminal's current working directory, displayed for multi-root workspaces or in a single root workspace when the value differs from the initial working directory.
   * - `${workspaceFolder}`: the workspace in which the terminal was launched
   * - `${local}`: indicates a local terminal in a remote workspace
   * - `${process}`: the name of the terminal process
   * - `${separator}`: a conditional separator (` - `) that only shows when surrounded by variables with values or static text.
   * - `${sequence}`: the name provided to the terminal by the process
   * - `${task}`: indicates this terminal is associated with a task
   */
  'terminal.integrated.tabs.title': string;

  /**
   * The number of cells in a tab stop.
   */
  'terminal.integrated.tabStopWidth': number;

  /**
   * Controls what version of Unicode to use when evaluating the width of characters in the terminal. If you experience emoji or other wide characters not taking up the right amount of space or backspace either deleting too much or too little then you may want to try tweaking this setting.
   *  - 6: Version 6 of Unicode. This is an older version which should work better on older systems.
   *  - 11: Version 11 of Unicode. This version provides better support on modern systems that use modern versions of Unicode.
   */
  'terminal.integrated.unicodeVersion': string;

  /**
   * Controls whether or not WSL distros are shown in the terminal dropdown
   */
  'terminal.integrated.useWslProfiles': boolean;

  /**
   * Whether to use ConPTY for Windows terminal process communication (requires Windows 10 build number 18309+). Winpty will be used if this is false.
   */
  'terminal.integrated.windowsEnableConpty': boolean;

  /**
   * A string containing all characters to be considered word separators when double-clicking to select word and in the fallback 'word' link detection.
   */
  'terminal.integrated.wordSeparators': string;

  // Tasks

  /**
   * Enable automatic tasks.
   *  - on: Always
   *  - off: Never
   */
  'task.allowAutomaticTasks': string;

  /**
   * Controls enablement of `provideTasks` for all task provider extension. If the Tasks: Run Task command is slow, disabling auto detect for task providers may help. Individual extensions may also provide settings that disable auto detection.
   */
  'task.autoDetect': string;

  /**
   * Configures whether to show the problem matcher prompt when running a task. Set to `true` to never prompt, or use a dictionary of task types to turn off prompting only for specific task types.
   */
  'task.problemMatchers.neverPrompt': boolean;

  /**
   * Controls whether to show the task detail for tasks that have a detail in task quick picks, such as Run Task.
   */
  'task.quickOpen.detail': boolean;

  /**
   * Controls the number of recent items tracked in task quick open dialog.
   */
  'task.quickOpen.history': number;

  /**
   * Causes the Tasks: Run Task command to use the slower "show all" behavior instead of the faster two level picker where tasks are grouped by provider.
   */
  'task.quickOpen.showAll': boolean;

  /**
   * Controls whether the task quick pick is skipped when there is only one task to pick from.
   */
  'task.quickOpen.skip': boolean;

  /**
   * On window reload, reconnect to tasks that have problem matchers.
   */
  'task.reconnection': boolean;

  /**
   * Save all dirty editors before running a task.
   *  - always: Always saves all editors before running.
   *  - never: Never saves editors before running.
   *  - prompt: Prompts whether to save editors before running.
   */
  'task.saveBeforeRun': string;

  /**
   * Configures whether a warning is shown when a provider is slow
   */
  'task.slowProviderWarning': boolean;

  // Problems

  /**
   * Controls whether Problems view should automatically reveal files when opening them.
   */
  'problems.autoReveal': boolean;

  /**
   * Show Errors & Warnings on files and folder.
   */
  'problems.decorations.enabled': boolean;

  /**
   * Controls the default view mode of the Problems view.
   */
  'problems.defaultViewMode': string;

  /**
   * When enabled shows the current problem in the status bar.
   */
  'problems.showCurrentInStatus': boolean;

  /**
   * Controls the order in which problems are navigated.
   *  - severity: Navigate problems ordered by severity
   *  - position: Navigate problems ordered by position
   */
  'problems.sortOrder': string;

  // Breadcrumb Navigation

  /**
   * Enable/disable navigation breadcrumbs.
   */
  'breadcrumbs.enabled': boolean;

  /**
   * Controls whether and how file paths are shown in the breadcrumbs view.
   *  - on: Show the file path in the breadcrumbs view.
   *  - off: Do not show the file path in the breadcrumbs view.
   *  - last: Only show the last element of the file path in the breadcrumbs view.
   */
  'breadcrumbs.filePath': string;

  /**
   * Render breadcrumb items with icons.
   */
  'breadcrumbs.icons': boolean;

  /**
   * When enabled breadcrumbs show `array`-symbols.
   */
  'breadcrumbs.showArrays': boolean;

  /**
   * When enabled breadcrumbs show `boolean`-symbols.
   */
  'breadcrumbs.showBooleans': boolean;

  /**
   * When enabled breadcrumbs show `class`-symbols.
   */
  'breadcrumbs.showClasses': boolean;

  /**
   * When enabled breadcrumbs show `constant`-symbols.
   */
  'breadcrumbs.showConstants': boolean;

  /**
   * When enabled breadcrumbs show `constructor`-symbols.
   */
  'breadcrumbs.showConstructors': boolean;

  /**
   * When enabled breadcrumbs show `enumMember`-symbols.
   */
  'breadcrumbs.showEnumMembers': boolean;

  /**
   * When enabled breadcrumbs show `enum`-symbols.
   */
  'breadcrumbs.showEnums': boolean;

  /**
   * When enabled breadcrumbs show `event`-symbols.
   */
  'breadcrumbs.showEvents': boolean;

  /**
   * When enabled breadcrumbs show `field`-symbols.
   */
  'breadcrumbs.showFields': boolean;

  /**
   * When enabled breadcrumbs show `file`-symbols.
   */
  'breadcrumbs.showFiles': boolean;

  /**
   * When enabled breadcrumbs show `function`-symbols.
   */
  'breadcrumbs.showFunctions': boolean;

  /**
   * When enabled breadcrumbs show `interface`-symbols.
   */
  'breadcrumbs.showInterfaces': boolean;

  /**
   * When enabled breadcrumbs show `key`-symbols.
   */
  'breadcrumbs.showKeys': boolean;

  /**
   * When enabled breadcrumbs show `method`-symbols.
   */
  'breadcrumbs.showMethods': boolean;

  /**
   * When enabled breadcrumbs show `module`-symbols.
   */
  'breadcrumbs.showModules': boolean;

  /**
   * When enabled breadcrumbs show `namespace`-symbols.
   */
  'breadcrumbs.showNamespaces': boolean;

  /**
   * When enabled breadcrumbs show `null`-symbols.
   */
  'breadcrumbs.showNull': boolean;

  /**
   * When enabled breadcrumbs show `number`-symbols.
   */
  'breadcrumbs.showNumbers': boolean;

  /**
   * When enabled breadcrumbs show `object`-symbols.
   */
  'breadcrumbs.showObjects': boolean;

  /**
   * When enabled breadcrumbs show `operator`-symbols.
   */
  'breadcrumbs.showOperators': boolean;

  /**
   * When enabled breadcrumbs show `package`-symbols.
   */
  'breadcrumbs.showPackages': boolean;

  /**
   * When enabled breadcrumbs show `property`-symbols.
   */
  'breadcrumbs.showProperties': boolean;

  /**
   * When enabled breadcrumbs show `string`-symbols.
   */
  'breadcrumbs.showStrings': boolean;

  /**
   * When enabled breadcrumbs show `struct`-symbols.
   */
  'breadcrumbs.showStructs': boolean;

  /**
   * When enabled breadcrumbs show `typeParameter`-symbols.
   */
  'breadcrumbs.showTypeParameters': boolean;

  /**
   * When enabled breadcrumbs show `variable`-symbols.
   */
  'breadcrumbs.showVariables': boolean;

  /**
   * Controls whether and how symbols are shown in the breadcrumbs view.
   *  - on: Show all symbols in the breadcrumbs view.
   *  - off: Do not show symbols in the breadcrumbs view.
   *  - last: Only show the current symbol in the breadcrumbs view.
   */
  'breadcrumbs.symbolPath': string;

  /**
   * Controls how symbols are sorted in the breadcrumbs outline view.
   *  - position: Show symbol outline in file position order.
   *  - name: Show symbol outline in alphabetical order.
   *  - type: Show symbol outline in symbol type order.
   */
  'breadcrumbs.symbolSortOrder': string;

  // Outline

  /**
   * Controls whether Outline items are collapsed or expanded.
   *  - alwaysCollapse: Collapse all items.
   *  - alwaysExpand: Expand all items.
   */
  'outline.collapseItems': string;

  /**
   * Render Outline elements with icons.
   */
  'outline.icons': boolean;

  /**
   * Use badges for errors and warnings on Outline elements.
   */
  'outline.problems.badges': boolean;

  /**
   * Use colors for errors and warnings on Outline elements.
   */
  'outline.problems.colors': boolean;

  /**
   * Show errors and warnings on Outline elements.
   */
  'outline.problems.enabled': boolean;

  /**
   * When enabled, Outline shows `array`-symbols.
   */
  'outline.showArrays': boolean;

  /**
   * When enabled, Outline shows `boolean`-symbols.
   */
  'outline.showBooleans': boolean;

  /**
   * When enabled, Outline shows `class`-symbols.
   */
  'outline.showClasses': boolean;

  /**
   * When enabled, Outline shows `constant`-symbols.
   */
  'outline.showConstants': boolean;

  /**
   * When enabled, Outline shows `constructor`-symbols.
   */
  'outline.showConstructors': boolean;

  /**
   * When enabled, Outline shows `enumMember`-symbols.
   */
  'outline.showEnumMembers': boolean;

  /**
   * When enabled, Outline shows `enum`-symbols.
   */
  'outline.showEnums': boolean;

  /**
   * When enabled, Outline shows `event`-symbols.
   */
  'outline.showEvents': boolean;

  /**
   * When enabled, Outline shows `field`-symbols.
   */
  'outline.showFields': boolean;

  /**
   * When enabled, Outline shows `file`-symbols.
   */
  'outline.showFiles': boolean;

  /**
   * When enabled, Outline shows `function`-symbols.
   */
  'outline.showFunctions': boolean;

  /**
   * When enabled, Outline shows `interface`-symbols.
   */
  'outline.showInterfaces': boolean;

  /**
   * When enabled, Outline shows `key`-symbols.
   */
  'outline.showKeys': boolean;

  /**
   * When enabled, Outline shows `method`-symbols.
   */
  'outline.showMethods': boolean;

  /**
   * When enabled, Outline shows `module`-symbols.
   */
  'outline.showModules': boolean;

  /**
   * When enabled, Outline shows `namespace`-symbols.
   */
  'outline.showNamespaces': boolean;

  /**
   * When enabled, Outline shows `null`-symbols.
   */
  'outline.showNull': boolean;

  /**
   * When enabled, Outline shows `number`-symbols.
   */
  'outline.showNumbers': boolean;

  /**
   * When enabled, Outline shows `object`-symbols.
   */
  'outline.showObjects': boolean;

  /**
   * When enabled, Outline shows `operator`-symbols.
   */
  'outline.showOperators': boolean;

  /**
   * When enabled, Outline shows `package`-symbols.
   */
  'outline.showPackages': boolean;

  /**
   * When enabled, Outline shows `property`-symbols.
   */
  'outline.showProperties': boolean;

  /**
   * When enabled, Outline shows `string`-symbols.
   */
  'outline.showStrings': boolean;

  /**
   * When enabled, Outline shows `struct`-symbols.
   */
  'outline.showStructs': boolean;

  /**
   * When enabled, Outline shows `typeParameter`-symbols.
   */
  'outline.showTypeParameters': boolean;

  /**
   * When enabled, Outline shows `variable`-symbols.
   */
  'outline.showVariables': boolean;

  // Timeline

  /**
   * The number of items to show in the Timeline view by default and when loading more items. Setting to `null` (the default) will automatically choose a page size based on the visible area of the Timeline view.
   */
  'timeline.pageSize': number | null;

  // Audio cues

  /**
   * Plays a sound when a chat request is made.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.chatRequestSent': string;

  /**
   * Plays a sound on loop while the response is pending.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.chatResponsePending': string;

  /**
   * Plays a sound on loop while the response has been received.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.chatResponseReceived': string;

  /**
   * Plays a sound when a feature is cleared (for example, the terminal, Debug Console, or Output channel). When this is disabled, an ARIA alert will announce 'Cleared'.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.clear': string;

  /**
   * Whether or not position changes should be debounced
   */
  'audioCues.debouncePositionChanges': boolean;

  /**
   * Plays a sound when the focus moves to a deleted line in Accessible Diff Viewer mode or to the next/previous change.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.diffLineDeleted': string;

  /**
   * Plays a sound when the focus moves to an inserted line in Accessible Diff Viewer mode or to the next/previous change.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.diffLineInserted': string;

  /**
   * Plays a sound when the focus moves to a modified line in Accessible Diff Viewer mode or to the next/previous change.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.diffLineModified': string;

  /**
   * Plays a sound when a file or notebook is formatted. Also see `accessibility.alert.format`
   *  - userGesture: Plays the audio cue when a user explicitly formats a file.
   *  - always: Plays the audio cue whenever a file is formatted, including if it is set to format on save, type, or, paste, or run of a cell.
   *  - never: Never plays the audio cue.
   */
  'audioCues.format': string;

  /**
   * Plays a sound when the active line has a breakpoint.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.lineHasBreakpoint': string;

  /**
   * Plays a sound when the active line has an error.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.lineHasError': string;

  /**
   * Plays a sound when the active line has a folded area that can be unfolded.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.lineHasFoldedArea': string;

  /**
   * Plays a sound when the active line has an inline suggestion.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.lineHasInlineSuggestion': string;

  /**
   * Plays a sound when the active line has a warning.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.lineHasWarning': string;

  /**
   * Plays a sound when trying to read a line with inlay hints that has no inlay hints.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.noInlayHints': string;

  /**
   * Plays a sound when a notebook cell execution is successfully completed.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.notebookCellCompleted': string;

  /**
   * Plays a sound when a notebook cell execution fails.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.notebookCellFailed': string;

  /**
   * Plays a sound when the debugger stopped on a breakpoint.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.onDebugBreak': string;

  /**
   * Plays a sound when a file is saved. Also see `accessibility.alert.save`
   *  - userGesture: Plays the audio cue when a user explicitly saves a file.
   *  - always: Plays the audio cue whenever a file is saved, including auto save.
   *  - never: Never plays the audio cue.
   */
  'audioCues.save': string;

  /**
   * Plays a sound when a task is completed.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.taskCompleted': string;

  /**
   * Plays a sound when a task fails (non-zero exit code).
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.taskFailed': string;

  /**
   * Plays a sound when a terminal command fails (non-zero exit code).
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.terminalCommandFailed': string;

  /**
   * Plays a sound when terminal Quick Fixes are available.
   *  - auto: Enable audio cue when a screen reader is attached.
   *  - on: Enable audio cue.
   *  - off: Disable audio cue.
   */
  'audioCues.terminalQuickFix': string;

  /**
   * The volume of the audio cues in percent (0-100).
   */
  'audioCues.volume': number;

  // Remote

  /**
   * The name under which the remote tunnel access is registered. If not set, the host name is used.
   */
  'remote.tunnels.access.hostNameOverride': string;

  /**
   * Prevent the computer from sleeping when remote tunnel access is turned on.
   */
  'remote.tunnels.access.preventSleep': boolean;

  /**
   * When enabled, new running processes are detected and ports that they listen on are automatically forwarded. Disabling this setting will not prevent all ports from being forwarded. Even when disabled, extensions will still be able to cause ports to be forwarded, and opening some URLs will still cause ports to forwarded.
   */
  'remote.autoForwardPorts': boolean;

  /**
   * Sets the source from which ports are automatically forwarded when `remote.autoForwardPorts` is true. On Windows and Mac remotes, the `process` and `hybrid` options have no effect and `output` will be used. Requires a reload to take effect.
   *  - process: Ports will be automatically forwarded when discovered by watching for processes that are started and include a port.
   *  - output: Ports will be automatically forwarded when discovered by reading terminal and debug output. Not all processes that use ports will print to the integrated terminal or debug console, so some ports will be missed. Ports forwarded based on output will not be "un-forwarded" until reload or until the port is closed by the user in the Ports view.
   *  - hybrid: Ports will be automatically forwarded when discovered by reading terminal and debug output. Not all processes that use ports will print to the integrated terminal or debug console, so some ports will be missed. Ports will be "un-forwarded" by watching for processes that listen on that port to be terminated.
   */
  'remote.autoForwardPortsSource': string;

  /**
   * When enabled extensions are downloaded locally and installed on remote.
   */
  'remote.downloadExtensionsLocally': boolean;

  /**
   * Override the kind of an extension. `ui` extensions are installed and run on the local machine while `workspace` extensions are run on the remote. By overriding an extension's default kind using this setting, you specify if that extension should be installed and enabled locally or remotely.
   */
  'remote.extensionKind': {
    'pub.name'?: ['ui'];
  };

  /**
   * Controls whether local URLs with a port will be forwarded when opened from the terminal and the debug console.
   */
  'remote.forwardOnOpen': boolean;

  /**
   * Specifies the local host name that will be used for port forwarding.
   */
  'remote.localPortHost': string;

  /**
   * Set default properties that are applied to all ports that don't get properties from the setting `remote.portsAttributes`.
   */
  'remote.otherPortsAttributes': { [K in string]?: unknown };

  /**
   * Set properties that are applied when a specific port number is forwarded.
   */
  'remote.portsAttributes': { [K in string]?: unknown };

  /**
   * Restores the ports you forwarded in a workspace.
   */
  'remote.restoreForwardedPorts': boolean;

  // Accessibility

  /**
   * When in screen reader mode, alerts when a file or notebook cell is formatted. Note that this will be ignored when `audioCues.format` is enabled.
   *  - userGesture: Alerts when a file is formatted via user gesture.
   *  - always: Alerts whenever is a file is formatted, including auto save, on cell execution, and more.
   *  - never: Never alerts.
   */
  'accessibility.alert.format': string;

  /**
   * When in screen reader mode, alerts when a file is saved. Note that this will be ignored when `audioCues.save` is enabled.
   *  - userGesture: Alerts when a file is saved via user gesture.
   *  - always: Alerts whenever is a file is saved, including auto save.
   *  - never: Never alerts.
   */
  'accessibility.alert.save': string;

  /**
   * Provide information about actions that can be taken in the comment widget or in a file which contains comments.
   */
  'accessibility.verbosity.comments': boolean;

  /**
   * Provide information about how to navigate changes in the diff editor when it is focused.
   */
  'accessibility.verbosity.diffEditor': boolean;

  /**
   * Provide information about relevant actions in an empty text editor.
   */
  'accessibility.verbosity.emptyEditorHint': boolean;

  /**
   * Provide information about how to open the hover in an accessible view.
   */
  'accessibility.verbosity.hover': boolean;

  /**
   * Provide information about how to access the inline editor chat accessibility help menu and alert with hints that describe how to use the feature when the input is focused.
   */
  'accessibility.verbosity.inlineChat': boolean;

  /**
   * Provide information about how to access the inline completions hover and accessible view.
   */
  'accessibility.verbosity.inlineCompletions': boolean;

  /**
   * Provide information about how to change a keybinding in the keybindings editor when a row is focused.
   */
  'accessibility.verbosity.keybindingsEditor': boolean;

  /**
   * Provide information about how to focus the cell container or inner editor when a notebook cell is focused.
   */
  'accessibility.verbosity.notebook': boolean;

  /**
   * Provide information about how to open the notification in an accessible view.
   */
  'accessibility.verbosity.notification': boolean;

  /**
   * Provide information about how to access the chat help menu when the chat input is focused.
   */
  'accessibility.verbosity.panelChat': boolean;

  /**
   * Provide information about how to access the terminal accessibility help menu when the terminal is focused.
   */
  'accessibility.verbosity.terminal': boolean;

  // Merge Editor

  /**
   *  - legacy: Uses the legacy diffing algorithm.
   *  - advanced: Uses the advanced diffing algorithm.
   */
  'mergeEditor.diffAlgorithm': string;

  /**
   * Controls if deletions in base or one of the inputs should be indicated by a vertical bar.
   */
  'mergeEditor.showDeletionMarkers': boolean;

  // Emmet

  /**
   * An array of languages where Emmet abbreviations should not be expanded.
   */
  'emmet.excludeLanguages': ['markdown'];

  /**
   * An array of paths, where each path can contain Emmet syntaxProfiles and/or snippet files.
   * In case of conflicts, the profiles/snippets of later paths will override those of earlier paths.
   */
  'emmet.extensionsPath': string[];

  /**
   * Enable Emmet abbreviations in languages that are not supported by default. Add a mapping here between the language and Emmet supported language.
   *  For example: `{"vue-html": "html", "javascript": "javascriptreact"}`
   */
  'emmet.includeLanguages': { [K in string]?: unknown };

  /**
   * When set to `false`, the whole file is parsed to determine if current position is valid for expanding Emmet abbreviations. When set to `true`, only the content around the current position in CSS/SCSS/Less files is parsed.
   */
  'emmet.optimizeStylesheetParsing': boolean;

  /**
   * Preferences used to modify behavior of some actions and resolvers of Emmet.
   */
  'emmet.preferences': { [K in string]?: unknown };

  /**
   * Shows possible Emmet abbreviations as suggestions. Not applicable in stylesheets or when emmet.showExpandedAbbreviation is set to `"never"`.
   */
  'emmet.showAbbreviationSuggestions': boolean;

  /**
   * Shows expanded Emmet abbreviations as suggestions.
   * The option `"inMarkupAndStylesheetFilesOnly"` applies to html, haml, jade, slim, xml, xsl, css, scss, sass, less and stylus.
   * The option `"always"` applies to all parts of the file regardless of markup/css.
   */
  'emmet.showExpandedAbbreviation': string;

  /**
   * If `true`, then Emmet suggestions will show up as snippets allowing you to order them as per `editor.snippetSuggestions` setting.
   */
  'emmet.showSuggestionsAsSnippets': boolean;

  /**
   * Define profile for specified syntax or use your own profile with specific rules.
   */
  'emmet.syntaxProfiles': { [K in string]?: unknown };

  /**
   * When enabled, Emmet abbreviations are expanded when pressing TAB.
   */
  'emmet.triggerExpansionOnTab': boolean;

  /**
   * If `true`, Emmet will use inline completions to suggest expansions.
   */
  'emmet.useInlineCompletions': boolean;

  /**
   * Variables to be used in Emmet snippets.
   */
  'emmet.variables': { [K in string]?: unknown };

  // Git

  /**
   * Controls whether force push (with or without lease) is enabled.
   */
  'git.allowForcePush': boolean;

  /**
   * Controls whether commits without running pre-commit and commit-msg hooks are allowed.
   */
  'git.allowNoVerifyCommit': boolean;

  /**
   * Always show the Staged Changes resource group.
   */
  'git.alwaysShowStagedChangesResourceGroup': boolean;

  /**
   * Controls the signoff flag for all commits.
   */
  'git.alwaysSignOff': boolean;

  /**
   * When set to true, commits will automatically be fetched from the default remote of the current Git repository. Setting to `all` will fetch from all remotes.
   */
  'git.autofetch': boolean;

  /**
   * Duration in seconds between each automatic git fetch, when `git.autofetch` is enabled.
   */
  'git.autofetchPeriod': number;

  /**
   * Whether auto refreshing is enabled.
   */
  'git.autorefresh': boolean;

  /**
   * Configures when repositories should be automatically detected.
   *  - true: Scan for both subfolders of the current opened folder and parent folders of open files.
   *  - false: Disable automatic repository scanning.
   *  - subFolders: Scan for subfolders of the currently opened folder.
   *  - openEditors: Scan for parent folders of open files.
   */
  'git.autoRepositoryDetection': boolean;

  /**
   * Stash any changes before pulling and restore them after successful pull.
   */
  'git.autoStash': boolean;

  /**
   * Prefix used when creating a new branch.
   */
  'git.branchPrefix': string;

  /**
   * List of protected branches. By default, a prompt is shown before changes are committed to a protected branch. The prompt can be controlled using the `git.branchProtectionPrompt`  setting.
   */
  'git.branchProtection': string[];

  /**
   * Controls whether a prompt is being shown before changes are committed to a protected branch.
   *  - alwaysCommit: Always commit changes to the protected branch.
   *  - alwaysCommitToNewBranch: Always commit changes to a new branch.
   *  - alwaysPrompt: Always prompt before changes are committed to a protected branch.
   */
  'git.branchProtectionPrompt': string;

  /**
   * List of dictionaries used for the randomly generated branch name. Each value represents the dictionary used to generate the segment of the branch name. Supported dictionaries: `adjectives`, `animals`, `colors` and `numbers`.
   *  - adjectives: A random adjective
   *  - animals: A random animal name
   *  - colors: A random color name
   *  - numbers: A random number between 100 and 999
   */
  'git.branchRandomName.dictionary': string[];

  /**
   * Controls whether a random name is generated when creating a new branch.
   */
  'git.branchRandomName.enable': boolean;

  /**
   * Controls the sort order for branches.
   */
  'git.branchSortOrder': string;

  /**
   * A regular expression to validate new branch names.
   */
  'git.branchValidationRegex': string;

  /**
   * The character to replace whitespace in new branch names, and to separate segments of a randomly generated branch name.
   */
  'git.branchWhitespaceChar': string;

  /**
   * Controls what type of Git refs are listed when running `Checkout to...`.
   *  - local: Local branches
   *  - tags: Tags
   *  - remote: Remote branches
   */
  'git.checkoutType': string[];

  /**
   * Controls whether the diff editor should be automatically closed when changes are stashed, committed, discarded, staged, or unstaged.
   */
  'git.closeDiffOnOperation': boolean;

  /**
   * List of git commands (ex: commit, push) that would have their `stdout` logged to the git output. If the git command has a client-side hook configured, the client-side hook's `stdout` will also be logged to the git output.
   */
  'git.commandsToLog': string[];

  /**
   * Always confirm the creation of empty commits for the 'Git: Commit Empty' command.
   */
  'git.confirmEmptyCommits': boolean;

  /**
   * Controls whether to ask for confirmation before force-pushing.
   */
  'git.confirmForcePush': boolean;

  /**
   * Controls whether to ask for confirmation before committing without verification.
   */
  'git.confirmNoVerifyCommit': boolean;

  /**
   * Confirm before synchronizing Git repositories.
   */
  'git.confirmSync': boolean;

  /**
   * Controls the Git count badge.
   *  - all: Count all changes.
   *  - tracked: Count only tracked changes.
   *  - off: Turn off counter.
   */
  'git.countBadge': string;

  /**
   * Controls whether Git contributes colors and badges to the Explorer and the Open Editors view.
   */
  'git.decorations.enabled': boolean;

  /**
   * The name of the default branch (example: main, trunk, development) when initializing a new Git repository. When set to empty, the default branch name configured in Git will be used.
   */
  'git.defaultBranchName': string;

  /**
   * The default location to clone a Git repository.
   */
  'git.defaultCloneDirectory': string | null;

  /**
   * Controls whether to automatically detect Git submodules.
   */
  'git.detectSubmodules': boolean;

  /**
   * Controls the limit of Git submodules detected.
   */
  'git.detectSubmodulesLimit': number;

  /**
   * Enables commit signing with GPG or X.509.
   */
  'git.enableCommitSigning': boolean;

  /**
   * Whether Git is enabled.
   */
  'git.enabled': boolean;

  /**
   * Commit all changes when there are no staged changes.
   */
  'git.enableSmartCommit': boolean;

  /**
   * Controls whether the Git Sync command appears in the status bar.
   */
  'git.enableStatusBarSync': boolean;

  /**
   * When enabled, fetch all branches when pulling. Otherwise, fetch just the current one.
   */
  'git.fetchOnPull': boolean;

  /**
   * Push all annotated tags when running the sync command.
   */
  'git.followTagsWhenSync': boolean;

  /**
   * List of Git repositories to ignore.
   */
  'git.ignoredRepositories': string[];

  /**
   * Ignores the legacy Git warning.
   */
  'git.ignoreLegacyWarning': boolean;

  /**
   * Ignores the warning when there are too many changes in a repository.
   */
  'git.ignoreLimitWarning': boolean;

  /**
   * Ignores the warning when Git is missing.
   */
  'git.ignoreMissingGitWarning': boolean;

  /**
   * Ignores the warning when it looks like the branch might have been rebased when pulling.
   */
  'git.ignoreRebaseWarning': boolean;

  /**
   * Ignore modifications to submodules in the file tree.
   */
  'git.ignoreSubmodules': boolean;

  /**
   * Ignores the warning when Git 2.25 - 2.26 is installed on Windows.
   */
  'git.ignoreWindowsGit27Warning': boolean;

  /**
   * Controls when to show commit message input validation.
   */
  'git.inputValidation': string;

  /**
   * Controls the commit message length threshold for showing a warning.
   */
  'git.inputValidationLength': number;

  /**
   * Controls the commit message subject length threshold for showing a warning. Unset it to inherit the value of `git.inputValidationLength`.
   */
  'git.inputValidationSubjectLength': number;

  /**
   * Open the merge editor for files that are currently under conflict.
   */
  'git.mergeEditor': boolean;

  /**
   * Controls whether to open a repository automatically after cloning.
   *  - always: Always open in current window.
   *  - alwaysNewWindow: Always open in a new window.
   *  - whenNoFolderOpen: Only open in current window when no folder is opened.
   *  - prompt: Always prompt for action.
   */
  'git.openAfterClone': string;

  /**
   * Controls whether the diff editor should be opened when clicking a change. Otherwise the regular editor will be opened.
   */
  'git.openDiffOnClick': boolean;

  /**
   * Control whether a repository in parent folders of workspaces or open files should be opened.
   *  - always: Always open a repository in parent folders of workspaces or open files.
   *  - never: Never open a repository in parent folders of workspaces or open files.
   *  - prompt: Prompt before opening a repository the parent folders of workspaces or open files.
   */
  'git.openRepositoryInParentFolders': string;

  /**
   * Controls whether to optimistically update the state of the Source Control view after running git commands.
   */
  'git.optimisticUpdate': boolean;

  /**
   * Path and filename of the git executable, e.g. `C:\Program Files\Git\bin\git.exe` (Windows). This can also be an array of string values containing multiple paths to look up.
   */
  'git.path': string | null;

  /**
   * Run a git command after a successful commit.
   *  - none: Don't run any command after a commit.
   *  - push: Run 'git push' after a successful commit.
   *  - sync: Run 'git pull' and 'git push' after a successful commit.
   */
  'git.postCommitCommand': string;

  /**
   * Controls whether Git should check for unsaved files before committing.
   *  - always: Check for any unsaved files.
   *  - staged: Check only for unsaved staged files.
   *  - never: Disable this check.
   */
  'git.promptToSaveFilesBeforeCommit': string;

  /**
   * Controls whether Git should check for unsaved files before stashing changes.
   *  - always: Check for any unsaved files.
   *  - staged: Check only for unsaved staged files.
   *  - never: Disable this check.
   */
  'git.promptToSaveFilesBeforeStash': string;

  /**
   * Prune when fetching.
   */
  'git.pruneOnFetch': boolean;

  /**
   * Controls whether a branch that does not have outgoing commits is fast-forwarded before it is checked out.
   */
  'git.pullBeforeCheckout': boolean;

  /**
   * Fetch all tags when pulling.
   */
  'git.pullTags': boolean;

  /**
   * Force Git to use rebase when running the sync command.
   */
  'git.rebaseWhenSync': boolean;

  /**
   * Remember the last git command that ran after a commit.
   */
  'git.rememberPostCommitCommand': boolean;

  /**
   * List of folders that are ignored while scanning for Git repositories when `git.autoRepositoryDetection` is set to `true` or `subFolders`.
   */
  'git.repositoryScanIgnoredFolders': string[];

  /**
   * Controls the depth used when scanning workspace folders for Git repositories when `git.autoRepositoryDetection` is set to `true` or `subFolders`. Can be set to `-1` for no limit.
   */
  'git.repositoryScanMaxDepth': number;

  /**
   * Controls whether to require explicit Git user configuration or allow Git to guess if missing.
   */
  'git.requireGitUserConfig': boolean;

  /**
   * List of paths to search for Git repositories in.
   */
  'git.scanRepositories': string[];

  /**
   * Controls whether an action button is shown in the Source Control view.
   */
  'git.showActionButton': {
    commit?: boolean;
    publish?: boolean;
    sync?: boolean;
  };

  /**
   * Controls whether to show the commit input in the Git source control panel.
   */
  'git.showCommitInput': boolean;

  /**
   * Controls whether to show an inline Open File action in the Git changes view.
   */
  'git.showInlineOpenFileAction': boolean;

  /**
   * Controls whether Git actions should show progress.
   */
  'git.showProgress': boolean;

  /**
   * Controls whether to show a notification when a push is successful.
   */
  'git.showPushSuccessNotification': boolean;

  /**
   * Controls the threshold of the similarity index (the amount of additions/deletions compared to the file's size) for changes in a pair of added/deleted files to be considered a rename.
   */
  'git.similarityThreshold': number;

  /**
   * Control which changes are automatically staged by Smart Commit.
   *  - all: Automatically stage all changes.
   *  - tracked: Automatically stage tracked changes only.
   */
  'git.smartCommitChanges': string;

  /**
   * Controls how to limit the number of changes that can be parsed from Git status command. Can be set to 0 for no limit.
   */
  'git.statusLimit': 10_000;

  /**
   * Suggests to enable smart commit (commit all changes when there are no staged changes).
   */
  'git.suggestSmartCommit': boolean;

  /**
   * Controls whether a notification comes up when running the Sync action, which allows the user to cancel the operation.
   */
  'git.supportCancellation': boolean;

  /**
   * Controls whether to enable VS Code to be the authentication handler for Git processes spawned in the Integrated Terminal. Note: Terminals need to be restarted to pick up a change in this setting.
   */
  'git.terminalAuthentication': boolean;

  /**
   * Controls whether to enable VS Code to be the Git editor for Git processes spawned in the integrated terminal. Note: Terminals need to be restarted to pick up a change in this setting.
   */
  'git.terminalGitEditor': boolean;

  /**
   * Controls which date to use for items in the Timeline view.
   *  - committed: Use the committed date
   *  - authored: Use the authored date
   */
  'git.timeline.date': string;

  /**
   * Controls whether to show the commit author in the Timeline view.
   */
  'git.timeline.showAuthor': boolean;

  /**
   * Controls whether to show uncommitted changes in the Timeline view.
   */
  'git.timeline.showUncommitted': boolean;

  /**
   * Controls how untracked changes behave.
   *  - mixed: All changes, tracked and untracked, appear together and behave equally.
   *  - separate: Untracked changes appear separately in the Source Control view. They are also excluded from several actions.
   *  - hidden: Untracked changes are hidden and excluded from several actions.
   */
  'git.untrackedChanges': string;

  /**
   * Controls whether to use the message from the commit input box as the default stash message.
   */
  'git.useCommitInputAsStashMessage': boolean;

  /**
   * Controls whether a full text editor will be used to author commit messages, whenever no message is provided in the commit input box.
   */
  'git.useEditorAsCommitInput': boolean;

  /**
   * Controls whether force pushing uses the safer force-if-includes variant.
   */
  'git.useForcePushIfIncludes': boolean;

  /**
   * Controls whether force pushing uses the safer force-with-lease variant.
   */
  'git.useForcePushWithLease': boolean;

  /**
   * Controls whether GIT_ASKPASS should be overwritten to use the integrated version.
   */
  'git.useIntegratedAskPass': boolean;

  /**
   * Enable verbose output when `git.useEditorAsCommitInput` is enabled.
   */
  'git.verboseCommit': boolean;

  /**
   * Controls whether to query repository rules for GitHub repositories
   */
  'github.branchProtection': boolean;

  /**
   * Controls whether to enable automatic GitHub authentication for git commands within VS Code.
   */
  'github.gitAuthentication': boolean;

  /**
   * Controls which protocol is used to clone a GitHub repository
   */
  'github.gitProtocol': string;

  /**
   * GitHub Enterprise Server URI
   */
  'github-enterprise.uri': string;

  // Grunt

  /**
   * Controls enablement of Grunt task detection. Grunt task detection can cause files in any open workspace to be executed.
   */
  'grunt.autoDetect': string;

  // Gulp

  /**
   * Controls enablement of Gulp task detection. Gulp task detection can cause files in any open workspace to be executed.
   */
  'gulp.autoDetect': string;

  // Jake

  /**
   * Controls enablement of Jake task detection. Jake task detection can cause files in any open workspace to be executed.
   */
  'jake.autoDetect': string;

  // Media Previewer

  /**
   * Start playing videos on mute automatically.
   */
  'mediaPreview.video.autoPlay': boolean;

  /**
   * Loop videos over again automatically.
   */
  'mediaPreview.video.loop': boolean;

  // Merge Conflict

  /**
   * Whether to automatically navigate to the next merge conflict after resolving a merge conflict.
   */
  'merge-conflict.autoNavigateNextConflict.enabled': boolean;

  /**
   * Create a CodeLens for merge conflict blocks within editor.
   */
  'merge-conflict.codeLens.enabled': boolean;

  /**
   * Create decorators for merge conflict blocks within editor.
   */
  'merge-conflict.decorators.enabled': boolean;

  /**
   * Controls where the diff view should be opened when comparing changes in merge conflicts.
   *  - Current: Open the diff view in the current editor group.
   *  - Beside: Open the diff view next to the current editor group.
   *  - Below: Open the diff view below the current editor group.
   */
  'merge-conflict.diffViewPosition': string;

  // Microsoft Sovereign Cloud

  /**
   * The custom configuration for the Sovereign Cloud to use with the Microsoft Sovereign Cloud authentication provider. This along with setting `microsoft-sovereign-cloud.environment` to `custom` is required to use this feature.
   */
  'microsoft-sovereign-cloud.customEnvironment': { [K in string]?: unknown };

  /**
   * The Sovereign Cloud to use for authentication. If you select `custom`, you must also set the `microsoft-sovereign-cloud.customEnvironment` setting.
   *  - ChinaCloud: Azure China
   *  - USGovernment: Azure US Government
   *  - custom: A custom Microsoft Sovereign Cloud
   */
  'microsoft-sovereign-cloud.environment': string;

  // JavaScript Debugger

  /**
   * Configures which processes to automatically attach and debug when `debug.node.autoAttach` is on. A Node process launched with the `--inspect` flag will always be attached to, regardless of this setting.
   *  - always: Auto attach to every Node.js process launched in the terminal.
   *  - smart: Auto attach when running scripts that aren't in a node_modules folder.
   *  - onlyWithFlag: Only auto attach when the `--inspect` is given.
   *  - disabled: Auto attach is disabled and not shown in status bar.
   */
  'debug.javascript.autoAttachFilter': string;

  /**
   * Configures glob patterns for determining when to attach in "smart" `debug.javascript.autoAttachFilter` mode. `$KNOWN_TOOLS$` is replaced with a list of names of common test and code runners.
   */
  'debug.javascript.autoAttachSmartPattern': string[];

  /**
   * When debugging a remote web app, configures whether to automatically tunnel the remote server to your local machine.
   */
  'debug.javascript.automaticallyTunnelRemoteServer': boolean;

  /**
   * Whether to stop when conditional breakpoints throw an error.
   */
  'debug.javascript.breakOnConditionalError': boolean;

  /**
   * Where a "Run" and "Debug" code lens should be shown in your npm scripts. It may be on "all", scripts, on "top" of the script section, or "never".
   */
  'debug.javascript.codelens.npmScripts': string;

  /**
   * Options used when debugging open links clicked from inside the JavaScript Debug Terminal. Can be set to "off" to disable this behavior, or "always" to enable debugging in all terminals.
   */
  'debug.javascript.debugByLinkOptions': string;

  /**
   * The default `runtimeExecutable` used for launch configurations, if unspecified. This can be used to config custom paths to Node.js or browser installations.
   */
  'debug.javascript.defaultRuntimeExecutable': { [K in string]?: string };

  /**
   * Default options used when debugging a process through the `Debug: Attach to Node.js Process` command.
   */
  'debug.javascript.pickAndAttachOptions': { [K in string]?: unknown };

  /**
   * Request options to use when loading resources, such as source maps, in the debugger. You may need to configure this if your sourcemaps require authentication or use a self-signed certificate, for instance. Options are used to create a request using the `got` library.
   * A common case to disable certificate verification can be done by passing `{ "https": { "rejectUnauthorized": false } }`.
   */
  'debug.javascript.resourceRequestOptions': { [K in string]?: unknown };

  /**
   * Default launch options for the JavaScript debug terminal and npm scripts.
   */
  'debug.javascript.terminalOptions': { [K in string]?: unknown };

  /**
   * Configures whether sourcemapped file where the original file can't be read will automatically be unmapped. If this is false (default), a prompt is shown.
   */
  'debug.javascript.unmapMissingSources': boolean;

  // Npm

  /**
   * Controls whether npm scripts should be automatically detected.
   */
  'npm.autoDetect': string;

  /**
   * Enable running npm scripts contained in a folder from the Explorer context menu.
   */
  'npm.enableRunFromFolder': boolean;

  /**
   * The NPM Script Explorer is now available in 'Views' menu in the Explorer in all folders.
   * Enable an explorer view for npm scripts when there is no top-level 'package.json' file.
   */
  'npm.enableScriptExplorer': boolean;

  /**
   * Configure glob patterns for folders that should be excluded from automatic script detection.
   */
  'npm.exclude': string;

  /**
   * Fetch data from https: *registry.npmjs.org and https: *registry.bower.io to provide auto-completion and information on hover features on npm dependencies.
   */
  'npm.fetchOnlinePackageInfo': boolean;

  /**
   * The package manager used to run scripts.
   *  - auto: Auto-detect which package manager to use for running scripts based on lock files and installed package managers.
   *  - npm: Use npm as the package manager for running scripts.
   *  - yarn: Use yarn as the package manager for running scripts.
   *  - pnpm: Use pnpm as the package manager for running scripts.
   */
  'npm.packageManager': string;

  /**
   * Run npm commands with the `--silent` option.
   */
  'npm.runSilent': boolean;

  /**
   * The default click action used in the NPM Scripts Explorer: `open` or `run`, the default is `open`.
   */
  'npm.scriptExplorerAction': string;

  /**
   * An array of regular expressions that indicate which scripts should be excluded from the NPM Scripts view.
   */
  'npm.scriptExplorerExclude': string[];

  /**
   * Display hover with 'Run' and 'Debug' commands for scripts.
   */
  'npm.scriptHover': boolean;

  // References Search View

  /**
   * Controls whether 'Peek References' or 'Find References' is invoked when selecting CodeLens references.
   *  - peek: Show references in peek editor.
   *  - view: Show references in separate view.
   */
  'references.preferredLocation': string;
}>;
