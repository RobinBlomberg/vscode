# VS Code type definitions

Useful type definitions when generating VS Code grammars programmatically.

## Installation

```sh
npm install @robinblomberg/vscode
```

## Usage

```js
import { VSCodeSettings } from '@robinblomberg/vscode';

export const settings: VSCodeSettings = {
  'editor.tokenColorCustomizations': {
    '[One Dark Pro*]': {
      textMateRules: Object.values(scopes),
    },
  },
  // ...
};

export const packageJson: VSCodeExtensionPackageJson = {
  name: airdocLanguageConfig.id,
  displayName: airdocLanguageConfig.name,
  description: `Syntax highlighting for ${airdocLanguageConfig.name}`,
  // ...
};
```
