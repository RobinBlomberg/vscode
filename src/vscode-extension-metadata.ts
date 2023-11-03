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

export enum VSCodeTargetPlatform {
  WIN32_X64 = 'win32-x64',
  WIN32_ARM64 = 'win32-arm64',

  LINUX_X64 = 'linux-x64',
  LINUX_ARM64 = 'linux-arm64',
  LINUX_ARMHF = 'linux-armhf',

  ALPINE_X64 = 'alpine-x64',
  ALPINE_ARM64 = 'alpine-arm64',

  DARWIN_X64 = 'darwin-x64',
  DARWIN_ARM64 = 'darwin-arm64',

  WEB = 'web',

  UNIVERSAL = 'universal',
  UNKNOWN = 'unknown',
  UNDEFINED = 'undefined',
}
