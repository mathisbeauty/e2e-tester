import { GanacheChainAdapter } from 'src/types';

export default class GanacheChain implements GanacheChainAdapter {
  start(dbPath?: string | undefined) {}
  stop() {}
  getInstance() {
    return null;
  }
  getRPCPath() {
    return '';
  }
}
