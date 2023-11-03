/**
 * @see https://github.com/microsoft/vscode/blob/60eeeb5e4307b019b1f2ed7c837511201d31a783/src/vs/platform/extensions/common/extensions.ts#L291
 */
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
