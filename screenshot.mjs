import puppeteer from "puppeteer"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const url = process.argv[2] || "http://localhost:3000"
const label = process.argv[3] || ""
const width = parseInt(process.argv[4] || "1280", 10)
const height = parseInt(process.argv[5] || "900", 10)

const screenshotDir = path.join(__dirname, "temporary screenshots")
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true })
}

// Use project directory name as filename prefix
const projectName = path.basename(__dirname)

// Auto-increment filename — never overwrites previous screenshots
let n = 1
while (fs.existsSync(path.join(screenshotDir, `${projectName}-${n}${label ? `-${label}` : ""}.png`))) {
  n++
}
const filename = `${projectName}-${n}${label ? `-${label}` : ""}.png`
const outPath = path.join(screenshotDir, filename)

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
})
const page = await browser.newPage()
await page.setViewport({ width, height })
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 })
await page.screenshot({ path: outPath, fullPage: true })
await browser.close()

console.log(`Saved: temporary screenshots/${filename}`)
