import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../content/issues.js", import.meta.url), "utf8");
const encoded = Buffer.from(source).toString("base64");
const { issues } = await import(`data:text/javascript;base64,${encoded}`);

const fail = (message) => {
  throw new Error(message);
};

const requiredText = (item, fields, label) => {
  for (const field of fields) {
    if (typeof item[field] !== "string" || !item[field].trim()) {
      fail(`${label} is missing ${field}`);
    }
  }
};

const validateHttpsUrl = (url, label) => {
  if (typeof url !== "string" || !url.startsWith("https://")) {
    fail(`${label} must use an HTTPS URL`);
  }
};

const validateSources = (item, label) => {
  if (!Array.isArray(item.sources) || item.sources.length < 2) {
    fail(`${label} must include at least two sources`);
  }
  item.sources.forEach((sourceItem, index) => {
    requiredText(sourceItem, ["label", "url"], `${label} source ${index + 1}`);
    validateHttpsUrl(sourceItem.url, `${label} source ${index + 1}`);
  });
};

const validateMedia = (item, label) => {
  const mediaUrls = [item.videoUrl, item.videoEmbedUrl, item.image, ...(item.images || [])].filter(Boolean);
  if (!mediaUrls.length) fail(`${label} must include official media`);
  mediaUrls.forEach((url, index) => validateHttpsUrl(url, `${label} media ${index + 1}`));
};

const dateParts = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).formatToParts(new Date());

const datePart = (type) => dateParts.find((part) => part.type === type)?.value;
const clockDate = `${datePart("year")}-${datePart("month")}-${datePart("day")}`;
const today = process.env.DAILY_EXPECTED_DATE || clockDate;
if (!/^\d{4}-\d{2}-\d{2}$/.test(today)) fail("DAILY_EXPECTED_DATE must use YYYY-MM-DD");
const [year, month, day] = today.split("-").map(Number);
const expectedDateLabel = `${year}年${month}月${day}日`;
const weekdayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const expectedWeekday = weekdayNames[new Date(`${today}T12:00:00+08:00`).getUTCDay()];

if (!Array.isArray(issues) || !issues.length) fail("issues must be a non-empty array");

const latest = issues[0];
requiredText(latest, ["slug", "isoDate", "dateLabel", "weekday", "oneSentence"], "latest issue");

if (latest.slug !== today || latest.isoDate !== today) fail(`latest issue must use today's date ${today}`);
if (latest.dateLabel !== expectedDateLabel) fail(`dateLabel must be ${expectedDateLabel}`);
if (latest.weekday !== expectedWeekday) fail(`weekday must be ${expectedWeekday}`);
if (/[。.!！?？]$/.test(latest.oneSentence)) fail("oneSentence must not end with punctuation");

if (!Array.isArray(latest.products) || latest.products.length !== 5) fail("latest issue must contain exactly 5 products");
if (!Array.isArray(latest.industryEvents) || latest.industryEvents.length !== 5) fail("latest issue must contain exactly 5 industry events");
if (!Array.isArray(latest.trends) || latest.trends.length !== 3) fail("latest issue must contain exactly 3 trends");

if (issues[1]) {
  if (latest.products === issues[1].products) fail("latest products must use a date-specific array");
  if (latest.industryEvents === issues[1].industryEvents) fail("latest industry events must use a date-specific array");
  if (latest.trends === issues[1].trends) fail("latest trends must use a date-specific array");
}

latest.products.forEach((product, index) => {
  const label = `product ${index + 1}`;
  requiredText(product, [
    "slug", "name", "tag", "tagline", "positioning", "killerFeature", "experience",
    "growth", "businessModel", "insight"
  ], label);
  if (/[。.!！?？]$/.test(product.tagline)) fail(`${label} tagline must not end with punctuation`);
  if (!Array.isArray(product.audience) || !product.audience.length || product.audience.some((item) => typeof item !== "string" || !item.trim())) {
    fail(`${label} must include a non-empty audience`);
  }
  validateMedia(product, label);
  validateSources(product, label);
});

latest.industryEvents.forEach((event, index) => {
  const label = `industry event ${index + 1}`;
  requiredText(event, ["slug", "name", "summary", "impact", "insight"], label);
  if (/[。.!！?？]$/.test(event.summary)) fail(`${label} summary must not end with punctuation`);
  validateMedia(event, label);
  validateSources(event, label);
});

latest.trends.forEach((trend, index) => requiredText(trend, ["title", "text"], `trend ${index + 1}`));

const assertUnique = (items, field, label) => {
  const values = items.map((item) => item[field]);
  if (new Set(values).size !== values.length) fail(`${label} ${field} values must be unique`);
};

assertUnique(latest.products, "slug", "product");
assertUnique(latest.products, "name", "product");
assertUnique(latest.industryEvents, "slug", "industry event");
assertUnique(latest.industryEvents, "name", "industry event");
assertUnique(issues, "slug", "issue");

const providerTokens = new Set([
  "ai", "app", "openai", "google", "meta", "microsoft", "anthropic", "mistral", "moonshot",
  "perplexity", "notion", "canva", "xai", "labs", "studio"
]);

const coreTokens = (value) => value
  .normalize("NFKC")
  .toLowerCase()
  .replace(/[^a-z0-9\u4e00-\u9fff]+/g, " ")
  .trim()
  .split(/\s+/)
  .filter((token) => token && !providerTokens.has(token));

for (const product of latest.products) {
  const productTokens = coreTokens(`${product.slug} ${product.name}`);
  for (const event of latest.industryEvents) {
    const eventTokens = coreTokens(`${event.slug} ${event.name}`);
    const shared = productTokens.filter((token) => token.length >= 4 && eventTokens.includes(token));
    const productCore = productTokens.join("-");
    const eventCore = eventTokens.join("-");
    if (shared.length >= 2 || (productCore.length >= 4 && eventCore.length >= 4 && (productCore.includes(eventCore) || eventCore.includes(productCore)))) {
      fail(`possible duplicate across modules: ${product.name} / ${event.name}`);
    }
  }
}

console.log(`Validated ${today}: 5 products, 5 industry events, 3 trends`);
