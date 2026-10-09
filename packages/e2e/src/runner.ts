/**
 * In-process selection. `list` collects and selects as `e2e list` does and
 * stops before any app, engine, or worker starts. Importing `e2e` does not
 * load this module.
 *
 * `ConfigurationError` is also on `e2e/engine`. A caller of `list` matches
 * `error.code` from here, without importing the engine contract.
 */
export { ConfigurationError, isE2EError } from './internal/errors.ts';
export { list, type ListOptions, type ListResult, type ListedPair } from './run/runner.ts';
