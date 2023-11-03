import { PackageJson } from 'type-fest';
import { VSCodeExtensionMetadata } from './extension-metadata';
import { VSCodeExtensionSchema } from './extension-schema';

export type VSCodeExtensionPackageJson = PackageJson &
  VSCodeExtensionSchema & {
    __metadata: VSCodeExtensionMetadata;
  };
