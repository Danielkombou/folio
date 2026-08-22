import assert from "node:assert/strict";
import {
  formatDate,
  getProject,
  getWriting,
  projects,
  writings,
} from "../lib/data";

assert.ok(getProject("certigen"), "certigen project should exist");
assert.ok(getWriting("read-your-error-messages"), "writing should exist");
assert.equal(projects.items[0]?.slug, "readit", "ReadIt should be first");
assert.ok(projects.items.some((p) => p.slug === "certigen"), "CertiGen present");
assert.ok(writings.items.some((w) => w.slug === "why-i-built-readit"), "ReadIt writing present");
assert.equal(formatDate("2026-08-12"), "12 Aug 2026");
assert.ok(writings.items.every((w) => /^\d{4}-\d{2}-\d{2}$/.test(w.date)));

console.log("smoke ok");
