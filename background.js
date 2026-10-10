// Tab Vault — background service worker
// Handles the quick-save keyboard command (⌥⇧S / Alt+Shift+S).

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

async function quickSave() {
  const win = await chrome.windows.getCurrent({ populate: true });
  if (!win || !win.tabs || win.tabs.length === 0) return;

  const validTabs = win.tabs.filter((t) => t.url && !t.url.startsWith("chrome://extensions"));
  if (validTabs.length === 0) return;

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

  const { sessions = [] } = await chrome.storage.local.get("sessions");
  sessions.unshift(session);
  await chrome.storage.local.set({ sessions });

  chrome.action.setBadgeText({ text: "✓" });
  chrome.action.setBadgeBackgroundColor({ color: "#27272A" });
  setTimeout(() => chrome.action.setBadgeText({ text: "" }), 1400);
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "quick-save") quickSave();
});

