// Reads the JSON output of `eas workflow:run .eas/workflows/publish-preview-update.yml`,
// builds the shareable expo.dev update link (the same page `eas update` prints
// a QR for when run interactively), regenerates docs/latest-build-qr.png, and
// rewrites the README.md section between the LATEST_BUILD markers.
//
// Usage: node .github/scripts/publish-update-readme.js <path-to-workflow-run-output.json>
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const EXPO_ACCOUNT = process.env.EXPO_ACCOUNT || "arberh";

const runJsonPath = process.argv[2];
if (!runJsonPath) {
  console.error("Usage: node publish-update-readme.js <workflow-run.json>");
  process.exit(1);
}

const run = JSON.parse(fs.readFileSync(runJsonPath, "utf8"));
const job = run.jobs && run.jobs[0];
const group = job && job.outputs && job.outputs.first_update_group_id;

if (!group) {
  console.error(
    "Could not find jobs[0].outputs.first_update_group_id in workflow run output:",
    JSON.stringify(run, null, 2)
  );
  process.exit(1);
}

const appJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "..", "app.json"), "utf8")
);
const slug = appJson.expo.slug;

const updateUrl = `https://expo.dev/accounts/${EXPO_ACCOUNT}/projects/${slug}/updates/${group}`;

const docsDir = path.join(__dirname, "..", "..", "docs");
fs.mkdirSync(docsDir, { recursive: true });
const qrPath = path.join(docsDir, "latest-build-qr.png");
execFileSync(
  "npx",
  ["--yes", "qrcode", updateUrl, "-o", qrPath, "-t", "png", "-w", "300"],
  { stdio: "inherit" }
);

const section = `<!-- LATEST_BUILD:START -->
[![Open in Expo Go](docs/latest-build-qr.png)](${updateUrl})
<!-- LATEST_BUILD:END -->`;

const readmePath = path.join(__dirname, "..", "..", "README.md");
const readme = fs.readFileSync(readmePath, "utf8");
const markerRegex = /<!-- LATEST_BUILD:START -->[\s\S]*?<!-- LATEST_BUILD:END -->/;

if (!markerRegex.test(readme)) {
  console.error("README.md is missing the LATEST_BUILD:START/END markers.");
  process.exit(1);
}

fs.writeFileSync(readmePath, readme.replace(markerRegex, section));

console.log("Updated README with:", updateUrl);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `### 📱 Published update\n\n[${updateUrl}](${updateUrl})\n`
  );
}
