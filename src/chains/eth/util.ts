export const getGanacheCommand = (
  dbPath?: string
): { command: string; args: string[] } => {
  const command = 'npx';
  const args = ['ganache-cli'];
  if (dbPath) {
    args.push(`--db="${dbPath}"`);
  }
  return {
    command,
    args
  };
};
