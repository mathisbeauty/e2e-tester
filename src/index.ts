import GanacheChain from './chains/eth';

const startTests = async () => {
  // Create adapter
  const chainAdapter = new GanacheChain();
  // Set DB path to create/load a checkpoint for the chain
  // Start chain process
  chainAdapter.start();

  // Get chain process instance
  const chainInstance = chainAdapter.getInstance();

  setTimeout(() => {
    chainAdapter.stop();
    // process.exit(0);
  }, 3000);
};

startTests();
