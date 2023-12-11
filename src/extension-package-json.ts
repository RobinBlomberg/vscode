import { PackageJson } from 'type-fest';
import { VSCodeExtensionMetadata } from './extension-metadata.js';
import { VSCodeExtensionSchema } from './extension-schema.js';

export type VSCodeExtensionPackageJson = PackageJson &
  VSCodeExtensionSchema & {
    __metadata: VSCodeExtensionMetadata;
  };
