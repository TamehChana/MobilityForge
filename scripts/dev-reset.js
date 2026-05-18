/**
 * Safe dev restart: stop port 3000 → delete .next → start next dev.
 * Use this when you see Cannot find module './611.js' or 500 errors.
 */
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

require("./kill-port.js");

const nextDir = path.join(root, ".next");
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log("Removed .next cache");
}

console.log("Starting dev server...\n");

const child = spawn("npm", ["run", "dev"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
