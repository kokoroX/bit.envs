# Legacy Note 

This compiler is kept for legacy reasons so veteran bit users will still get typescript updates. 
If you are new user go a head and use https://bit.dev/bit/envs/compilers/typescript directly. 

# A Component compiler for React components using TypeScript.
Compiles a React component for [TypeScript](https://www.typescriptlang.org/).

## How to use?

Import the environment
```bash
bit import bit.envs/compilers/react-typescript -c
```

Then build using [bit build](https://docs.bitsrc.io/docs/cli-build.html).
```bash
bit build
```

 ## What's inside

- Compiles `ts` and `tsx` files.
- Emit `d.ts` files.
- In order to see which typescript config are used, take a look at the [`tsconfig.json`](https://bit.dev/bit/envs/compilers/react-typescript/~code#tsconfig.json) file.

## Reconfiguring this environment

In case the configuration presets in the `tsconfig` file of this component are not well suited to your needs, follow [these steps](https://discourse.bit.dev/t/can-i-modify-a-build-test-environments/28) to modify it.

## Got any issues or questions?

Collaboration on this Bit environment happens in [this repository](https://github.com/teambit/bit.envs). Please open an issue or submit pull request there.