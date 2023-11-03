import { VSCodeTargetPlatform } from './target-platform';

/**
 * @see https://github.com/microsoft/vscode/blob/main/src/vs/platform/extensionManagement/common/extensionManagement.ts
 */
export type VSCodeExtensionMetadata = {
  id?: string;
  publisherId?: string;
  publisherDisplayName?: string;
  isPreReleaseVersion?: boolean;
  targetPlatform?: VSCodeTargetPlatform | 'undefined';
  isApplicationScoped?: boolean;
  isMachineScoped?: boolean;
  isBuiltin?: boolean;
  isSystem?: boolean;
  updated?: boolean;
  preRelease?: boolean;
  installedTimestamp?: number;
  pinned?: boolean;
};
