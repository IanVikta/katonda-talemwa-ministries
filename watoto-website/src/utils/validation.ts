/**
 * Common form validation & sanitization helpers
 */

export function sanitizeName(name: string): string {
  if (!name || typeof name !== 'string') return '';
  // Strip all numeric digits (0-9) immediately
  return name.replace(/\d/g, '');
}

/**
 * Intercepts keystrokes in name input fields to prevent entering numbers
 */
export function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
  if (/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
}

export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  const trimmed = name.trim();
  if (trimmed.length < 2) return false;
  // Disallow any numeric digits
  if (/\d/.test(trimmed)) return false;
  // Allow unicode letters, spaces, hyphens, apostrophes, and periods
  return /^[\p{L}\s\-'.]+$/u.test(trimmed);
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  // Standard RFC 5322 simplified email regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Checks for at least 7 digits, allowing +, -, spaces, parentheses
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function isNonEmpty(val: string | null | undefined): boolean {
  return typeof val === 'string' && val.trim().length > 0;
}
