/**
 * Logger
 */
function log(options?: {
  message?: string;
  context?: string;
  verbose?: boolean;
  error?: boolean;
}) {
  const { message = "", context = "", verbose, error } = options || {};
  if (error) {
    console.error(message.padEnd(40), context);
    return;
  }
  if (verbose) {
    console.log(message.padEnd(40), context);
  }
}
export { log };
