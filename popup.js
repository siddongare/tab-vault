// Tab Vault — Apple Sequoia / Ferrari Fast Popup Controller

// --- SVG Icons (SF Symbols Inspired) ---
const ICONS = {
  chevron: `<svg viewBox="0 0 16 16" fill="none"><path d="M4.5 6L8 9.5L11.5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  restore: `<svg viewBox="0 0 16 16" fill="none"><path d="M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C10.1508 2.5 12.0193 3.73468 12.9238 5.5M13.5 2.5V5.5H10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C5.84918 13.5 3.98066 12.2653 3.0762 10.5M2.5 13.5V10.5H5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5l1.9 4.1 4.5.6-3.3 3.1.8 4.5L8 11.6l-3.9 2.2.8-4.5-3.3-3.1 4.5-.6L8 1.5z"/></svg>`,
  starOutline: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 2l1.8 3.8 4.2.6-3 3 .7 4.2L8 11.6l-3.7 2 .7-4.2-3-3 4.2-.6L8 2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  more: `<svg viewBox="0 0 16 16" fill="currentColor"><circle cx="3" cy="8" r="1.4"/><circle cx="8" cy="8" r="1.4"/><circle cx="13" cy="8" r="1.4"/></svg>`,
  rename: `<svg viewBox="0 0 16 16" fill="none"><path d="M11.5 2.5L13.5 4.5L5 13H3V11L11.5 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  trash: `<svg viewBox="0 0 16 16" fill="none"><path d="M3 4.5H13M6 4.5V3C6 2.44772 6.44772 2 7 2H9C9.55228 2 10 2.44772 10 3V4.5M4.5 4.5L5.2 12.8C5.25 13.4 5.75 14 6.35 14H9.65C10.25 14 10.75 13.4 10.8 12.8L11.5 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 16 16" fill="none"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  markdown: `<svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M4.5 10.5V5.5L6.5 8L8.5 5.5V10.5M12.5 8.5L10.5 10.5V6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  newWindow: `<svg viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3.5" width="11" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M2.5 6.5H13.5" stroke="currentColor" stroke-width="1.4"/></svg>`,
  currentWindow: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 3V13M3 8L8 13L13 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  incognitoMask: `<svg viewBox="0 0 16 16" fill="none"><path d="M2.5 8C4.5 4.5 11.5 4.5 13.5 8C11.5 11.5 4.5 11.5 2.5 8Z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="2" fill="currentColor"/></svg>`,
  dedup: `<svg viewBox="0 0 16 16" fill="none"><path d="M5 4.5h7.5a1 1 0 011 1v7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><rect x="2.5" y="2.5" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.4"/></svg>`,
  link: `<svg viewBox="0 0 16 16" fill="none"><path d="M6.5 9.5a3 3 0 004.24 0l2-2a3 3 0 00-4.24-4.24L7.5 4.26" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9.5 6.5a3 3 0 00-4.24 0l-2 2a3 3 0 004.24 4.24L8.5 11.74" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  download: `<svg viewBox="0 0 16 16" fill="none"><path d="M8 2.5v7M5.5 7L8 9.5 10.5 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 11.5v1a1 1 0 001 1h9a1 1 0 001-1v-1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
};

const FAVICON_FALLBACK = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#71717A" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a14.5 14.5 0 0 0 0 18M12 3a14.5 14.5 0 0 1 0 18M3 12h18"/></svg>`
);

// DOM Elements
const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");
const searchClearBtn = document.getElementById("searchClearBtn");
const saveBtn = document.getElementById("saveBtn");
const stashBtn = document.getElementById("stashBtn");
const statsPill = document.getElementById("statsPill");
const sortBtn = document.getElementById("sortBtn");
const sortLabel = document.getElementById("sortLabel");
const exportBtn = document.getElementById("exportBtn");
const importFile = document.getElementById("importFile");
const copyAllMdBtn = document.getElementById("copyAllMdBtn");
const dedupAllBtn = document.getElementById("dedupAllBtn");
const toastEl = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const toastActions = document.getElementById("toastActions");
const menuLayer = document.getElementById("menuLayer");
const emptyTemplate = document.getElementById("emptyState");
const noMatchesTemplate = document.getElementById("noMatchesState");
const skeletonTemplate = document.getElementById("skeletonState");

// App State
let sessions = [];
let openIds = new Set();
let query = "";
let filterMode = "all"; // 'all' | 'pinned' | 'normal' | 'incognito'
let sortMode = "newest"; // 'newest' | 'tabs' | 'alpha'
let activeDomainFilters = new Map(); // sessionId -> domain string or null
let openMenuId = null;
let restoringId = null;
let loaded = false;
let recentlyDeleted = null;

// Initialize
init();

async function init() {
  listEl.innerHTML = "";
  listEl.appendChild(skeletonTemplate.content.cloneNode(true));

  sessions = await loadSessions();
  loaded = true;
  updateStats();
  render();
}

function loadSessions() {
  return chrome.storage.local.get("sessions").then((r) => r.sessions || []);
}

function persist() {
  updateStats();
  return chrome.storage.local.set({ sessions });
}

function updateStats() {
  const totalVaults = sessions.length;
  const totalTabs = sessions.reduce((acc, s) => acc + (s.tabs ? s.tabs.length : 0), 0);
  const estRamMb = totalTabs * 75; // average ~75MB RAM saved per tab
  const ramDisplay = estRamMb >= 1000 ? (estRamMb / 1024).toFixed(1) + " GB" : estRamMb + " MB";

  statsPill.innerHTML = `${totalVaults} ${totalVaults === 1 ? "vault" : "vaults"} · ${totalTabs} tabs · <span class="stats-ram-text" title="Estimated RAM freed">${ramDisplay} saved</span>`;
}

// Helpers
function escapeHtml(str) {
  return (str || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function getDomain(urlStr) {
  try {
    const parsed = new URL(urlStr);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getFaviconUrl(url, existingFavicon) {
  if (existingFavicon && !existingFavicon.startsWith("chrome://")) {
    return existingFavicon;
  }
  const dom = getDomain(url);
  if (dom) {
    return `https://www.google.com/s2/favicons?domain=${dom}&sz=32`;
  }
  return FAVICON_FALLBACK;
}

function relativeTime(ts) {
  const diff = Date.now() - ts;
  const min = Math.round(diff / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.round(hr / 24);
  if (day < 7) return `${day}d ago`;
  return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function defaultSessionName(isIncognito, tabCount) {
  const d = new Date();
  const time = d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
  return `${isIncognito ? "Incognito" : "Vault"} · ${time} (${tabCount} tabs)`;
}

function highlightMatch(text, q) {
  if (!q) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return escaped.replace(regex, `<mark class="search-match">$1</mark>`);
}

// Toast System
function showToast(message, options = {}) {
  const { timeout = 2400, undoCallback = null } = options;

  clearTimeout(showToast._timer);
  clearTimeout(hideToast._leaveTimer);
  toastEl.classList.remove("toast-out");
  toastMsg.innerHTML = message;
  toastActions.innerHTML = "";

  if (undoCallback) {
    const undoBtn = document.createElement("button");
    undoBtn.className = "toast-undo-btn";
    undoBtn.textContent = "Undo";
    undoBtn.addEventListener("click", () => {
      hideToast(true);
      undoCallback();
    });
    toastActions.appendChild(undoBtn);
  }

  toastEl.hidden = false;
  showToast._timer = setTimeout(() => hideToast(false), timeout);
}

function hideToast(instant = false) {
  clearTimeout(showToast._timer);
  clearTimeout(hideToast._leaveTimer);
  if (toastEl.hidden) return;

  if (instant) {
    toastEl.hidden = true;
    toastEl.classList.remove("toast-out");
    return;
  }

  toastEl.classList.add("toast-out");
  hideToast._leaveTimer = setTimeout(() => {
    toastEl.hidden = true;
    toastEl.classList.remove("toast-out");
  }, 220);
}

// Clicking toast dismisses it instantly
toastEl.addEventListener("click", (e) => {
  if (!e.target.closest(".toast-undo-btn")) {
    hideToast(false);
  }
});

// Filter Navigation Tabs
document.querySelectorAll(".filter-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    filterMode = btn.dataset.filter;
    document.querySelectorAll(".filter-tab").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", String(active));
    });
    render();
  });
});

// Sort Toggle Cycle (Newest -> Tabs Count -> Alphabetical)
if (sortBtn) {
  sortBtn.addEventListener("click", () => {
    if (sortMode === "newest") {
      sortMode = "tabs";
      sortLabel.textContent = "Tabs ↓";
    } else if (sortMode === "tabs") {
      sortMode = "alpha";
      sortLabel.textContent = "A-Z";
    } else {
      sortMode = "newest";
      sortLabel.textContent = "Newest";
    }
    render();
  });
}

// Rendering Engine
function render() {
  if (!loaded) return;

  const q = query.trim().toLowerCase();

  // Sorting: Pinned items always float to the top
  let sorted = [...sessions].sort((a, b) => {
    if (!!b.pinned !== !!a.pinned) return b.pinned ? 1 : -1;
    if (sortMode === "tabs") return (b.tabs ? b.tabs.length : 0) - (a.tabs ? a.tabs.length : 0);
    if (sortMode === "alpha") return (a.name || "").localeCompare(b.name || "");
    return b.createdAt - a.createdAt;
  });

  // Filter Mode
  if (filterMode === "pinned") sorted = sorted.filter((s) => s.pinned);
  else if (filterMode === "normal") sorted = sorted.filter((s) => !s.incognito);
  else if (filterMode === "incognito") sorted = sorted.filter((s) => s.incognito);

  // Deep Search: search across session names, tab titles, and tab URLs
  if (q) {
    sorted = sorted.filter((s) => {
      const nameMatch = s.name.toLowerCase().includes(q);
      const tabMatch = s.tabs.some(
        (t) => (t.title && t.title.toLowerCase().includes(q)) || (t.url && t.url.toLowerCase().includes(q))
      );
      return nameMatch || tabMatch;
    });
  }

  if (sessions.length === 0) {
    listEl.innerHTML = "";
    listEl.appendChild(emptyTemplate.content.cloneNode(true));
    return;
  }

  if (sorted.length === 0) {
    listEl.innerHTML = "";
    const node = noMatchesTemplate.content.cloneNode(true);
    node.getElementById("noMatchQuery").textContent = q;
    listEl.appendChild(node);
    return;
  }

  listEl.innerHTML = sorted.map((s) => sessionCardHtml(s, q)).join("");
  renderFloatingMenu();
}

function sessionCardHtml(s, q) {
  const isOpen = openIds.has(s.id);
  const isRestoring = restoringId === s.id;
  const isPinned = !!s.pinned;

  // Duplicate tab detection
  const urls = s.tabs.map((t) => t.url);
  const dupCount = urls.length - new Set(urls).size;

  // Favicons stack: pick up to 3 valid favicons
  const stackTabs = (s.tabs || []).slice(0, 3);
  const stackHtml = stackTabs
    .map(
      (t, idx) => `
      <div class="stack-item" style="z-index: ${4 - idx};">
        <img src="${getFaviconUrl(t.url, t.favIconUrl)}" onerror="this.src='${FAVICON_FALLBACK}'" alt="" />
      </div>`
    )
    .join("");

  // Domain chip breakdown for open vault
  let domainChipsHtml = "";
  let displayTabs = s.tabs;
  const selectedDomain = activeDomainFilters.get(s.id);

  if (isOpen && s.tabs.length > 2) {
    const domainCounts = {};
    s.tabs.forEach((t) => {
      const d = getDomain(t.url);
      if (d) domainCounts[d] = (domainCounts[d] || 0) + 1;
    });

    const domains = Object.entries(domainCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
    if (domains.length > 1) {
      domainChipsHtml = `
      <div class="domain-chips-bar">
        <button class="domain-chip ${!selectedDomain ? "active" : ""}" data-action="filter-domain" data-session="${s.id}" data-domain="">All (${s.tabs.length})</button>
        ${domains.map(([dom, count]) => `
          <button class="domain-chip ${selectedDomain === dom ? "active" : ""}" data-action="filter-domain" data-session="${s.id}" data-domain="${escapeHtml(dom)}">
            ${escapeHtml(dom)} (${count})
          </button>
        `).join("")}
      </div>`;
    }
  }

  if (selectedDomain) {
    displayTabs = s.tabs.filter((t) => getDomain(t.url) === selectedDomain);
  }

  return `
  <article class="vault-card ${isOpen ? "open" : ""} ${isPinned ? "pinned" : ""}" data-id="${s.id}" role="listitem">
    <div class="vault-header">
      <button class="vault-clickable-info" data-action="toggle" aria-expanded="${isOpen}" aria-label="Toggle ${escapeHtml(s.name)}">
        <div class="favicon-stack" aria-hidden="true">
          ${stackHtml}
        </div>
        <div class="vault-title-group">
          <span class="vault-title" title="${escapeHtml(s.name)}">${highlightMatch(s.name, q)}</span>
          <div class="vault-sub">
            <span class="tab-count-tag">${s.tabs.length} tabs</span>
            ${dupCount > 0 ? `<span class="dup-badge" data-action="dedup-vault" title="Click to remove ${dupCount} duplicate tab(s)">${dupCount} dup${dupCount > 1 ? "s" : ""}</span>` : ""}
            <span>·</span>
            <span>${relativeTime(s.createdAt)}</span>
            ${
              s.incognito
                ? `<span>·</span><span class="incognito-chip">${ICONS.incognitoMask} Private</span>`
                : ""
            }
          </div>
        </div>
      </button>

      <div class="vault-actions">
        <!-- Pin Button -->
        <button class="icon-btn star ${isPinned ? "pinned" : ""}" data-action="toggle-pin" title="${isPinned ? "Unpin vault" : "Pin vault to top"}" aria-label="Toggle pin">
          ${isPinned ? ICONS.star : ICONS.starOutline}
        </button>

        <!-- Restore Button -->
        <button class="icon-btn restore" data-action="restore" title="Restore all tabs in new window" aria-label="Restore vault" ${isRestoring ? "disabled" : ""}>
          ${isRestoring ? `<span class="spinner"></span>` : ICONS.restore}
        </button>

        <!-- More Options Menu -->
        <button class="icon-btn more" data-action="open-menu" title="More vault options" aria-label="Vault options">
          ${ICONS.more}
        </button>

        <!-- Accordion Chevron -->
        <button class="chevron-btn" data-action="toggle" aria-hidden="true" tabindex="-1">
          ${ICONS.chevron}
        </button>
      </div>
    </div>

    <!-- Smooth Accordion Body -->
    <div class="vault-body-collapse" id="body-${s.id}">
      <div class="vault-body-inner">
        ${domainChipsHtml}
        <div class="tab-list-items">
          ${displayTabs.map((tab, idx) => tabItemHtml(s.id, tab, s.tabs.indexOf(tab), q)).join("")}
        </div>
      </div>
    </div>
  </article>`;
}

function tabItemHtml(sessionId, tab, index, q) {
  const domain = getDomain(tab.url);
  const iconSrc = getFaviconUrl(tab.url, tab.favIconUrl);
  return `
  <div class="tab-item-row" data-index="${index}">
    <img class="tab-favicon" src="${iconSrc}" onerror="this.src='${FAVICON_FALLBACK}'" alt="" />
    <a class="tab-link-content" href="${escapeHtml(tab.url)}" target="_blank" title="${escapeHtml(tab.url)}">
      <span class="tab-link-title">${highlightMatch(tab.title || tab.url, q)}</span>
      ${domain ? `<span class="tab-domain-pill">${escapeHtml(domain)}</span>` : ""}
    </a>
    <div class="tab-item-actions">
      <button class="tab-action-btn copy" data-action="copy-tab-url" data-url="${escapeHtml(tab.url)}" title="Copy URL to clipboard">
        ${ICONS.link}
      </button>
      <button class="tab-action-btn remove" data-action="remove-single-tab" data-session="${sessionId}" data-index="${index}" title="Remove tab from vault">
        ${ICONS.close}
      </button>
    </div>
  </div>`;
}

// Floating Portal Menu
function renderFloatingMenu() {
  if (!openMenuId) {
    menuLayer.innerHTML = "";
    return;
  }

  const trigger = listEl.querySelector(`.vault-card[data-id="${openMenuId}"] [data-action="open-menu"]`);
  if (!trigger) {
    menuLayer.innerHTML = "";
    return;
  }

  // Hide toast when menu opens so there is zero overlap
  hideToast();

  const rect = trigger.getBoundingClientRect();
  const menuWidth = 195;
  const left = Math.min(Math.max(10, rect.right - menuWidth), window.innerWidth - menuWidth - 10);

  // Approximate menu height
  const menuHeight = 310;
  let top;
  // If opening downwards would clip off screen or overlap bottom bar, flip UPWARDS above trigger!
  if (rect.bottom + menuHeight > window.innerHeight - 15) {
    top = Math.max(10, rect.top - menuHeight - 4);
  } else {
    top = rect.bottom + 4;
  }

  menuLayer.innerHTML = `
    <div class="portal-menu" role="menu" style="top:${top}px; left:${Math.max(10, left)}px;">
      <button class="menu-action-item" data-action="restore-current" role="menuitem">
        ${ICONS.currentWindow} Open in Current Window
      </button>
      <button class="menu-action-item" data-action="restore-new" role="menuitem">
        ${ICONS.newWindow} Open in New Window
      </button>
      <button class="menu-action-item" data-action="restore-incognito" role="menuitem">
        ${ICONS.incognitoMask} Open in Incognito Window
      </button>
      <div class="menu-separator"></div>
      <button class="menu-action-item" data-action="dedup-vault" role="menuitem">
        ${ICONS.dedup} Remove Duplicate Tabs
      </button>
      <button class="menu-action-item" data-action="merge-current" role="menuitem">
        ${ICONS.plus} Add Current Tabs
      </button>
      <button class="menu-action-item" data-action="copy-urls" role="menuitem">
        ${ICONS.link} Copy Raw URLs List
      </button>
      <button class="menu-action-item" data-action="copy-md" role="menuitem">
        ${ICONS.markdown} Copy as Markdown
      </button>
      <button class="menu-action-item" data-action="export-single" role="menuitem">
        ${ICONS.download} Export This Vault (.json)
      </button>
      <button class="menu-action-item" data-action="start-rename" role="menuitem">
        ${ICONS.rename} Rename Vault
      </button>
      <div class="menu-separator"></div>
      <button class="menu-action-item danger" data-action="delete-vault" role="menuitem">
        ${ICONS.trash} Delete Vault
      </button>
    </div>`;
}

// Action Handlers
async function saveCurrentWindow(closeTabsAfter = false) {
  const targetBtn = closeTabsAfter ? stashBtn : saveBtn;
  targetBtn.disabled = true;
  const originalHtml = targetBtn.innerHTML;
  targetBtn.innerHTML = `<span class="spinner"></span>`;

  try {
    const win = await chrome.windows.getCurrent({ populate: true });
    if (!win.tabs || win.tabs.length === 0) {
      showToast("No active tabs found to save.");
      return;
    }

    // Filter valid tabs (ignore chrome:// and extensions)
    const validTabs = win.tabs.filter((t) => t.url && !t.url.startsWith("chrome://extensions"));
    if (validTabs.length === 0) {
      showToast("No savable tabs in this window.");
      return;
    }

    const session = {
      id: crypto.randomUUID(),
      name: defaultSessionName(win.incognito, validTabs.length),
      incognito: !!win.incognito,
      pinned: false,
      createdAt: Date.now(),
      tabs: validTabs.map((t) => ({
        title: t.title || t.url,
        url: t.url,
        favIconUrl: t.favIconUrl || ""
      }))
    };

    sessions.unshift(session);
    openIds.add(session.id);
    await persist();
    render();

    if (closeTabsAfter) {
      await chrome.tabs.create({ url: "chrome://newtab" });
      const tabIdsToClose = validTabs.map((t) => t.id).filter(Boolean);
      if (tabIdsToClose.length > 0) {
        await chrome.tabs.remove(tabIdsToClose);
      }
      showToast(`Stashed and closed ${validTabs.length} tabs! Workspace decluttered.`);
    } else {
      showToast(`Saved ${validTabs.length} tabs to Tab Vault!`);
    }
  } catch (err) {
    showToast("Failed to save window tabs.");
  } finally {
    targetBtn.disabled = false;
    targetBtn.innerHTML = originalHtml;
  }
}

async function restoreSession(id, mode = "new") {
  const s = sessions.find((x) => x.id === id);
  if (!s || !s.tabs || s.tabs.length === 0) return;

  restoringId = id;
  render();

  const urls = s.tabs.map((t) => t.url);

  try {
    if (mode === "current") {
      for (const url of urls) {
        await chrome.tabs.create({ url });
      }
      showToast(`Restored ${urls.length} tabs in this window.`);
    } else if (mode === "incognito") {
      await chrome.windows.create({ url: urls, incognito: true });
      showToast(`Opened ${urls.length} tabs in Incognito window.`);
    } else {
      await chrome.windows.create({ url: urls, incognito: s.incognito });
      showToast(`Restored ${urls.length} tabs in a new window.`);
    }
  } catch (err) {
    if (mode === "incognito" || s.incognito) {
      showToast(`Please enable "Allow in Incognito" in extension details.`);
    } else {
      showToast("Could not restore vault tabs.");
    }
  } finally {
    restoringId = null;
    render();
  }
}

// Deduplicate single vault
async function dedupSession(id) {
  const s = sessions.find((x) => x.id === id);
  if (!s || !s.tabs) return;

  const seen = new Set();
  const originalCount = s.tabs.length;
  s.tabs = s.tabs.filter((t) => {
    if (seen.has(t.url)) return false;
    seen.add(t.url);
    return true;
  });

  const removed = originalCount - s.tabs.length;
  await persist();
  render();

  if (removed > 0) {
    showToast(`Cleaned ${removed} duplicate tab${removed === 1 ? "" : "s"}!`);
  } else {
    showToast("No duplicates found in this vault.");
  }
}

// Deduplicate across all vaults
async function dedupAllVaults() {
  let totalRemoved = 0;
  sessions.forEach((s) => {
    if (s.tabs) {
      const seen = new Set();
      const orig = s.tabs.length;
      s.tabs = s.tabs.filter((t) => {
        if (seen.has(t.url)) return false;
        seen.add(t.url);
        return true;
      });
      totalRemoved += orig - s.tabs.length;
    }
  });

  if (totalRemoved > 0) {
    await persist();
    render();
    showToast(`Cleaned ${totalRemoved} duplicate tab${totalRemoved === 1 ? "" : "s"} across all vaults!`);
  } else {
    showToast("All vaults are already clean of duplicates!");
  }
}

function copySessionUrls(id) {
  const s = sessions.find((x) => x.id === id);
  if (!s || !s.tabs) return;

  const urlsText = s.tabs.map((t) => t.url).join("\n");
  navigator.clipboard.writeText(urlsText).then(() => {
    showToast(`Copied ${s.tabs.length} URLs to clipboard!`);
  });
}

function exportSingleSession(id) {
  const s = sessions.find((x) => x.id === id);
  if (!s) return;

  const blob = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const cleanName = (s.name || "vault").replace(/[^a-z0-9]/gi, "_").toLowerCase();
  a.href = url;
  a.download = `${cleanName}-${Date.now()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`Exported "${s.name}" to JSON!`);
}

async function togglePin(id) {
  const s = sessions.find((x) => x.id === id);
  if (!s) return;
  s.pinned = !s.pinned;
  await persist();
  render();
  showToast(s.pinned ? `Pinned "${s.name}" to top` : `Unpinned "${s.name}"`);
}

async function deleteSessionWithUndo(id) {
  const index = sessions.findIndex((x) => x.id === id);
  if (index === -1) return;

  const [removed] = sessions.splice(index, 1);
  openIds.delete(id);
  activeDomainFilters.delete(id);
  await persist();
  render();

  recentlyDeleted = { session: removed, index };
  showToast(`Deleted "${removed.name}"`, {
    timeout: 5000,
    undoCallback: async () => {
      if (recentlyDeleted && recentlyDeleted.session) {
        sessions.splice(recentlyDeleted.index, 0, recentlyDeleted.session);
        await persist();
        render();
        showToast(`Restored "${recentlyDeleted.session.name}"`);
        recentlyDeleted = null;
      }
    }
  });
}

async function removeTab(sessionId, tabIndex) {
  const s = sessions.find((x) => x.id === sessionId);
  if (!s || !s.tabs) return;

  const [removedTab] = s.tabs.splice(tabIndex, 1);
  if (s.tabs.length === 0) {
    sessions = sessions.filter((x) => x.id !== sessionId);
    openIds.delete(sessionId);
    activeDomainFilters.delete(sessionId);
  }

  await persist();
  render();
  showToast(`Removed tab "${(removedTab.title || "").slice(0, 24)}..."`);
}

async function mergeCurrentTabs(id) {
  const s = sessions.find((x) => x.id === id);
  if (!s) return;

  const win = await chrome.windows.getCurrent({ populate: true });
  const additions = win.tabs.map((t) => ({
    title: t.title || t.url,
    url: t.url,
    favIconUrl: t.favIconUrl || ""
  }));

  s.tabs = s.tabs.concat(additions);
  openIds.add(id);
  await persist();
  render();
  showToast(`Added ${additions.length} tabs to "${s.name}"`);
}

function copySessionMarkdown(id) {
  const s = sessions.find((x) => x.id === id);
  if (!s) return;

  const lines = [`### ${s.name} (${s.tabs.length} tabs)`];
  s.tabs.forEach((t) => {
    lines.push(`- [${t.title || t.url}](${t.url})`);
  });

  navigator.clipboard.writeText(lines.join("\n")).then(() => {
    showToast(`Copied Markdown for "${s.name}" to clipboard!`);
  });
}

function copyAllMarkdown() {
  if (sessions.length === 0) {
    showToast("No vaults to copy.");
    return;
  }

  const lines = ["# Tab Vault Export\n"];
  sessions.forEach((s) => {
    lines.push(`## ${s.name} (${s.tabs.length} tabs) · ${new Date(s.createdAt).toLocaleDateString()}`);
    s.tabs.forEach((t) => {
      lines.push(`- [${t.title || t.url}](${t.url})`);
    });
    lines.push("");
  });

  navigator.clipboard.writeText(lines.join("\n")).then(() => {
    showToast(`Copied all ${sessions.length} vaults as Markdown!`);
  });
}

function startRename(id) {
  const card = listEl.querySelector(`.vault-card[data-id="${id}"]`);
  if (!card) return;
  const s = sessions.find((x) => x.id === id);
  if (!s) return;

  const titleEl = card.querySelector(".vault-title");
  if (!titleEl) return;
  const input = document.createElement("input");
  input.className = "name-input";
  input.value = s.name;
  input.setAttribute("aria-label", "Rename vault");

  titleEl.replaceWith(input);
  input.focus();
  input.select();

  let committed = false;
  const commit = async () => {
    if (committed) return;
    committed = true;
    const val = input.value.trim();
    if (val) s.name = val;
    await persist();
    render();
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commit();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      committed = true;
      render();
    }
  });
  input.addEventListener("blur", commit);
}

// Event Delegation
saveBtn.addEventListener("click", () => saveCurrentWindow(false));
stashBtn.addEventListener("click", () => saveCurrentWindow(true));

searchEl.addEventListener("input", (e) => {
  query = e.target.value;
  searchClearBtn.hidden = !query;
  render();
});

searchClearBtn.addEventListener("click", () => {
  searchEl.value = "";
  query = "";
  searchClearBtn.hidden = true;
  searchEl.focus();
  render();
});

exportBtn.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(sessions, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `tab-vault-backup-${Date.now()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Vaults exported to JSON!");
});

copyAllMdBtn.addEventListener("click", copyAllMarkdown);
if (dedupAllBtn) dedupAllBtn.addEventListener("click", dedupAllVaults);

importFile.addEventListener("change", async () => {
  const file = importFile.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const incoming = JSON.parse(text);
    if (!Array.isArray(incoming) && typeof incoming === "object") {
      // Single vault import
      if (incoming.name && Array.isArray(incoming.tabs)) {
        sessions.unshift(incoming);
        await persist();
        render();
        showToast(`Imported vault "${incoming.name}"!`);
        return;
      }
    }
    if (!Array.isArray(incoming)) throw new Error("bad format");

    const cleaned = incoming
      .filter((s) => s && typeof s.name === "string" && Array.isArray(s.tabs))
      .map((s) => ({
        id: s.id || crypto.randomUUID(),
        name: s.name,
        incognito: !!s.incognito,
        pinned: !!s.pinned,
        createdAt: s.createdAt || Date.now(),
        tabs: s.tabs
          .filter((t) => t && t.url)
          .map((t) => ({
            title: t.title || t.url,
            url: t.url,
            favIconUrl: t.favIconUrl || ""
          }))
      }));

    sessions = cleaned.concat(sessions);
    await persist();
    render();
    showToast(`Imported ${cleaned.length} vaults successfully!`);
  } catch {
    showToast("Invalid JSON file format.");
  } finally {
    importFile.value = "";
  }
});

function handleAction(actionEl, id) {
  const action = actionEl.dataset.action;

  if (action === "toggle") {
    if (openIds.has(id)) openIds.delete(id);
    else openIds.add(id);
    render();
  } else if (action === "toggle-pin") {
    togglePin(id);
  } else if (action === "restore") {
    restoreSession(id, "new");
  } else if (action === "open-menu") {
    openMenuId = openMenuId === id ? null : id;
    render();
  } else if (action === "restore-new") {
    openMenuId = null;
    restoreSession(id, "new");
  } else if (action === "restore-current") {
    openMenuId = null;
    restoreSession(id, "current");
  } else if (action === "restore-incognito") {
    openMenuId = null;
    restoreSession(id, "incognito");
  } else if (action === "dedup-vault") {
    openMenuId = null;
    dedupSession(id);
  } else if (action === "merge-current") {
    openMenuId = null;
    mergeCurrentTabs(id);
  } else if (action === "copy-urls") {
    openMenuId = null;
    copySessionUrls(id);
  } else if (action === "copy-md") {
    openMenuId = null;
    copySessionMarkdown(id);
  } else if (action === "export-single") {
    openMenuId = null;
    exportSingleSession(id);
  } else if (action === "start-rename") {
    openMenuId = null;
    render();
    startRename(id);
  } else if (action === "delete-vault") {
    openMenuId = null;
    deleteSessionWithUndo(id);
  }
}

// Double-click to rename vault
listEl.addEventListener("dblclick", (e) => {
  const titleEl = e.target.closest(".vault-title");
  if (!titleEl) return;
  const card = titleEl.closest(".vault-card");
  if (card && card.dataset.id) {
    startRename(card.dataset.id);
  }
});

listEl.addEventListener("click", (e) => {
  // Copy individual tab URL
  const copyTabBtn = e.target.closest('[data-action="copy-tab-url"]');
  if (copyTabBtn) {
    const u = copyTabBtn.dataset.url;
    if (u) {
      navigator.clipboard.writeText(u).then(() => showToast("Copied link to clipboard!"));
    }
    return;
  }

  // Domain chip filter click
  const domainChip = e.target.closest('[data-action="filter-domain"]');
  if (domainChip) {
    const sId = domainChip.dataset.session;
    const dom = domainChip.dataset.domain;
    if (!dom) activeDomainFilters.delete(sId);
    else activeDomainFilters.set(sId, dom);
    render();
    return;
  }

  // Remove single tab button
  const removeTabBtn = e.target.closest('[data-action="remove-single-tab"]');
  if (removeTabBtn) {
    const sId = removeTabBtn.dataset.session;
    const tIdx = Number(removeTabBtn.dataset.index);
    removeTab(sId, tIdx);
    return;
  }

  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  const card = e.target.closest(".vault-card");
  if (!card) return;
  handleAction(actionEl, card.dataset.id);
});

// Portaled menu handler
menuLayer.addEventListener("click", (e) => {
  const actionEl = e.target.closest("[data-action]");
  if (!actionEl || !openMenuId) return;
  handleAction(actionEl, openMenuId);
});

// Click outside closes menu
document.addEventListener("click", (e) => {
  if (openMenuId && !e.target.closest(".portal-menu") && !e.target.closest('[data-action="open-menu"]')) {
    openMenuId = null;
    render();
  }
});

listEl.addEventListener("scroll", () => {
  if (openMenuId) {
    openMenuId = null;
    render();
  }
});

// Global Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && document.activeElement !== searchEl)) {
    e.preventDefault();
    searchEl.focus();
    searchEl.select();
  } else if (e.key === "Escape") {
    if (openMenuId) {
      openMenuId = null;
      render();
    } else if (query) {
      searchEl.value = "";
      query = "";
      searchClearBtn.hidden = true;
      render();
    }
  }
});
