import { spawn } from "node:child_process";
import { access, rename } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const apiDir = path.join(root, "app", "api");
const hiddenApiDir = path.join(root, ".api-pages-disabled");

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

let movedApi = false;

try {
  if (await exists(apiDir)) {
    await rename(apiDir, hiddenApiDir);
    movedApi = true;
  }

  const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
  const code = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [nextBin, "build"], {
      cwd: root,
      stdio: "inherit",
      env: { ...process.env, GITHUB_PAGES: "true" },
    });
    child.on("error", reject);
    child.on("exit", (status) => resolve(status ?? 1));
  });

  if (code !== 0) {
    process.exitCode = code;
  }
} finally {
  if (movedApi && (await exists(hiddenApiDir))) {
    await rename(hiddenApiDir, apiDir);
  }
}
