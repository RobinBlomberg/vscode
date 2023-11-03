import { PackageJson } from 'type-fest';
import { VSCodeExtensionMetadata } from './vscode-extension-metadata';
import { VSCodeExtensionSchema } from './vscode-extension-schema';

export type VSCodeExtensionPackageJson = PackageJson &
  VSCodeExtensionSchema & {
    __metadata: VSCodeExtensionMetadata;
  };
