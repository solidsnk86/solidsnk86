const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

export function timeAgo(date) {
  const diff = date.getTime() - Date.now();
  const abs = Math.abs(diff);

  if (isNaN(abs)) return;

  const units = [
    { unit: "year", ms: 1000 * 60 * 60 * 24 * 365 },
    { unit: "month", ms: 1000 * 60 * 60 * 24 * 30 },
    { unit: "day", ms: 1000 * 60 * 60 * 24 },
    { unit: "hour", ms: 1000 * 60 * 60 },
    { unit: "minute", ms: 1000 * 60 },
    { unit: "second", ms: 1000 },
  ];

  for (const { unit, ms } of units) {
    if (abs >= ms || unit === "second") {
      const value = Math.round(diff / ms);
      return rtf.format(value, unit);
    }
  }
}
