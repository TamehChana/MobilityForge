/**
 * Frees port 3000 (or PORT env) so .next can be deleted safely.
 * Run before `npm run clean` when dev was left running.
 */
const { execSync } = require("child_process");

const port = process.env.PORT || "3000";

function killWindows() {
  let out = "";
  try {
    out = execSync(`netstat -ano | findstr :${port}`, { encoding: "utf8" });
  } catch {
    return;
  }
  const pids = new Set();
  for (const line of out.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.includes("LISTENING") && !trimmed.includes("ESTABLISHED")) continue;
    const parts = trimmed.split(/\s+/);
    const pid = parts[parts.length - 1];
    if (pid && /^\d+$/.test(pid) && pid !== "0") pids.add(pid);
  }
  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
      console.log(`Stopped process ${pid} on port ${port}`);
    } catch {
      /* already gone */
    }
  }
}

function killUnix() {
  try {
    execSync(`lsof -ti:${port} | xargs -r kill -9`, { stdio: "ignore" });
  } catch {
    /* none */
  }
}

if (process.platform === "win32") {
  killWindows();
} else {
  killUnix();
}
