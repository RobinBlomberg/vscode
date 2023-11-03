/**
 * @see https://raw.githubusercontent.com/microsoft/vscode/main/src/vs/workbench/services/extensions/common/extensionsRegistry.ts
 * @see https://transform.tools/json-schema-to-typescript
 */
export type VSCodeExtensionSchema = {
  /**
   * Engine compatibility.
   */
  engines?: {
    /**
     * For VS Code extensions, specifies the VS Code version that the extension is compatible with. Cannot be *. For example: ^0.10.5 indicates compatibility with a minimum VS Code version of 0.10.5.
     */
    vscode?: string;
    [k: string]: unknown;
  };
  /**
   * The publisher of the VS Code extension.
   */
  publisher?: string;
  /**
   * The display name for the extension used in the VS Code gallery.
   */
  displayName?: string;
  /**
   * The categories used by the VS Code gallery to categorize the extension.
   */
  categories?: (
    | (
        | 'Azure'
        | 'Data Science'
        | 'Debuggers'
        | 'Extension Packs'
        | 'Education'
        | 'Formatters'
        | 'Keymaps'
        | 'Language Packs'
        | 'Linters'
        | 'Machine Learning'
        | 'Notebooks'
        | 'Programming Languages'
        | 'SCM Providers'
        | 'Snippets'
        | 'Testing'
        | 'Themes'
        | 'Visualization'
        | 'Other'
      )
    /**
     * @deprecated Use \'Programming  Languages\' instead
     */
    | 'Languages'
  )[];
  /**
   * Banner used in the VS Code marketplace.
   */
  galleryBanner?: {
    /**
     * The banner color on the VS Code marketplace page header.
     */
    color?: string;
    /**
     * The color theme for the font used in the banner.
     */
    theme?: 'dark' | 'light';
    [k: string]: unknown;
  };
  /**
   * All contributions of the VS Code extension represented by this package.
   */
  contributes?: {
    [k: string]: unknown;
  };
  /**
   * Sets the extension to be flagged as a Preview in the Marketplace.
   */
  preview?: boolean;
  /**
   * @deprecated Use `enabledApiProposals` instead.
   */
  enableProposedApi?: boolean;
  enabledApiProposals?: (
    | 'aiRelatedInformation'
    | 'authGetSessions'
    | 'authSession'
    | 'canonicalUriProvider'
    | 'chat'
    | 'chatAgents'
    | 'chatAgents2'
    | 'chatAgents2Additions'
    | 'chatProvider'
    | 'chatRequestAccess'
    | 'chatTab'
    | 'chatVariables'
    | 'codeActionAI'
    | 'codiconDecoration'
    | 'commentsDraftState'
    | 'contribCommentEditorActionsMenu'
    | 'contribCommentPeekContext'
    | 'contribCommentThreadAdditionalMenu'
    | 'contribEditSessions'
    | 'contribEditorContentMenu'
    | 'contribLabelFormatterWorkspaceTooltip'
    | 'contribMenuBarHome'
    | 'contribMergeEditorMenus'
    | 'contribNotebookStaticPreloads'
    | 'contribRemoteHelp'
    | 'contribShareMenu'
    | 'contribStatusBarItems'
    | 'contribViewsRemote'
    | 'contribViewsWelcome'
    | 'createFileSystemWatcher'
    | 'customEditorMove'
    | 'debugFocus'
    | 'defaultChatAgent'
    | 'diffCommand'
    | 'diffContentOptions'
    | 'documentFiltersExclusive'
    | 'documentPaste'
    | 'dropMetadata'
    | 'editSessionIdentityProvider'
    | 'editorInsets'
    | 'extensionRuntime'
    | 'extensionsAny'
    | 'externalUriOpener'
    | 'fileComments'
    | 'fileSearchProvider'
    | 'findTextInFiles'
    | 'fsChunks'
    | 'handleIssueUri'
    | 'idToken'
    | 'inlineCompletionsAdditions'
    | 'interactive'
    | 'interactiveUserActions'
    | 'interactiveWindow'
    | 'ipc'
    | 'languageStatusText'
    | 'mappedEditsProvider'
    | 'notebookCellExecutionState'
    | 'notebookControllerAffinityHidden'
    | 'notebookDeprecated'
    | 'notebookExecution'
    | 'notebookKernelSource'
    | 'notebookLiveShare'
    | 'notebookMessaging'
    | 'notebookMime'
    | 'portsAttributes'
    | 'profileContentHandlers'
    | 'quickDiffProvider'
    | 'quickPickItemTooltip'
    | 'quickPickSortByLabel'
    | 'readonlyMessage'
    | 'resolvers'
    | 'saveEditor'
    | 'scmActionButton'
    | 'scmHistoryProvider'
    | 'scmInputBoxActionButton'
    | 'scmSelectedProvider'
    | 'scmTextDocument'
    | 'scmValidation'
    | 'shareProvider'
    | 'showLocal'
    | 'speech'
    | 'tabInputTextMerge'
    | 'taskPresentationGroup'
    | 'telemetry'
    | 'terminalDataWriteEvent'
    | 'terminalDimensions'
    | 'terminalExecuteCommandEvent'
    | 'terminalQuickFixProvider'
    | 'terminalSelection'
    | 'testCoverage'
    | 'testObserver'
    | 'textSearchProvider'
    | 'timeline'
    | 'tokenInformation'
    | 'treeViewActiveItem'
    | 'treeViewMarkdownMessage'
    | 'treeViewReveal'
    | 'tunnelFactory'
    | 'tunnels'
    | 'windowActivity'
    | 'workspaceTrust'
  )[];
  api?: 'none';
  /**
   * Activation events for the VS Code extension.
   */
  activationEvents?: string[];
  /**
   * Array of badges to display in the sidebar of the Marketplace's extension page.
   */
  badges?: {
    /**
     * Badge image URL.
     */
    url: string;
    /**
     * Badge link.
     */
    href: string;
    /**
     * Badge description.
     */
    description: string;
    [k: string]: unknown;
  }[];
  /**
   * Controls the Markdown rendering engine used in the Marketplace. Either github (default) or standard.
   */
  markdown?: 'github' | 'standard';
  /**
   * Controls the Q&A link in the Marketplace. Set to marketplace to enable the default Marketplace Q & A site. Set to a string to provide the URL of a custom Q & A site. Set to false to disable Q & A altogether.
   */
  qna?: ('marketplace' | false) | string;
  /**
   * Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.
   */
  extensionDependencies?: string[];
  /**
   * A set of extensions that can be installed together. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.
   */
  extensionPack?: string[];
  /**
   * Define the kind of an extension. `ui` extensions are installed and run on the local machine while `workspace` extensions run on the remote.
   */
  extensionKind?: ('ui' | 'workspace')[];
  /**
   * Declare the set of supported capabilities by the extension.
   */
  capabilities?: {
    /**
     * Declares whether the extension should be enabled in virtual workspaces. A virtual workspace is a workspace which is not backed by any on-disk resources. When false, this extension will be automatically disabled in virtual workspaces. Default is true.
     */
    virtualWorkspaces?:
      | boolean
      | {
          supported?: 'limited' | true | false;
          description?: string;
          [k: string]: unknown;
        };
    /**
     * Declares how the extension should be handled in untrusted workspaces.
     */
    untrustedWorkspaces?: {
      supported: 'limited' | true | false;
      /**
       * A list of configuration keys contributed by the extension that should not use workspace values in untrusted workspaces.
       */
      restrictedConfigurations?: string[];
      description?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Specify the location from where users can sponsor your extension.
   */
  sponsor?: {
    /**
     * URL from where users can sponsor your extension. It must be a valid URL with a HTTP or HTTPS protocol. Example value: https://github.com/sponsors/nvaccess
     */
    url?: string;
    [k: string]: unknown;
  };
  scripts?: {
    /**
     * Script executed before the package is published as a VS Code extension.
     */
    'vscode:prepublish'?: string;
    /**
     * Uninstall hook for VS Code extension. Script that gets executed when the extension is completely uninstalled from VS Code which is when VS Code is restarted (shutdown and start) after the extension is uninstalled. Only Node scripts are supported.
     */
    'vscode:uninstall'?: string;
    [k: string]: unknown;
  };
  /**
   * The path to a 128x128 pixel icon.
   */
  icon?: string;
  /**
   * The relative path to a folder containing localization (bundle.l10n.*.json) files. Must be specified if you are using the vscode.l10n API.
   */
  l10n?: string;
  pricing?: 'Free' | 'Trial';
  [k: string]: unknown;
};
