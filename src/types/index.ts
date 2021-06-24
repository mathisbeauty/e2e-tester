import { ChildProcessWithoutNullStreams } from 'child_process';

/**
 * Type that describes the high level API for interacting with a local blockchain
 */
type ChainAdapter<T> = {
  /** Start chain process */
  start: (dbPath?: string) => void;
  /** Stop chain process */
  stop: () => void;
  /** Get chain process instance */
  getInstance: () => T | null;
  /** Get RPC path */
  getRPCPath: () => string;
};

// Ganache

export type GanacheChainInstance = ChildProcessWithoutNullStreams;

export type GanacheChainAdapter = ChainAdapter<GanacheChainInstance>;
