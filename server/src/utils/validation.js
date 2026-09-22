/**
 * Server-side validation and sanitization utilities
 * Enforces strict name validation: strictly no numbers allowed.
 */

/**
 * Sanitizes a name by stripping numeric digits, control characters,
 * and collapsing consecutive spaces.
 */
export function sanitizeName(name) {
  if (!name || typeof name !== 'string') return '';
  return name
    .replace(/\d/g, '') // remove numbers
    .replace(/[<>'"/\\;`]/g, '') // strip potential injection characters
    .replace(/\s+/g, ' ') // collapse multiple spaces
    .trim();
}

/**
 * Validates a name string.
 * Strictly rejects any string containing numeric digits (0-9).
 * 
 * @param {string} name - Input name
 * @param {string} fieldName - Human-readable field name for errors
 * @param {boolean} isRequired - Whether the field is mandatory
 * @returns {{ isValid: boolean, error?: string, sanitized?: string }}
 */
export function validateName(name, fieldName = 'Name', isRequired = true) {
  if (!name || typeof name !== 'string' || !name.trim()) {
    if (isRequired) {
      return { isValid: false, error: `${fieldName} is required.` };
    }
    return { isValid: true, sanitized: null };
  }

  const trimmed = name.trim();

  // Explicit check: strictly reject any numbers
  if (/\d/.test(trimmed)) {
    return {
      isValid: false,
      error: `${fieldName} cannot contain numbers. Only letters are allowed.`
    };
  }

  if (trimmed.length < 2) {
    return {
      isValid: false,
      error: `${fieldName} must be at least 2 characters long.`
    };
  }

  if (trimmed.length > 100) {
    return {
      isValid: false,
      error: `${fieldName} must not exceed 100 characters.`
    };
  }

  // Allow international unicode letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[\p{L}\s\-'.]+$/u;
  if (!nameRegex.test(trimmed)) {
    return {
      isValid: false,
      error: `${fieldName} contains invalid characters. Only letters, spaces, hyphens, and apostrophes are allowed.`
    };
  }

  return {
    isValid: true,
    sanitized: sanitizeName(trimmed)
  };
}

/**
 * Validates an email address.
 */
export function validateEmail(email, isRequired = true) {
  if (!email || typeof email !== 'string' || !email.trim()) {
    if (isRequired) {
      return { isValid: false, error: 'Email address is required.' };
    }
    return { isValid: true, sanitized: null };
  }

  const trimmed = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed) || trimmed.length > 255) {
    return { isValid: false, error: 'Please provide a valid email address.' };
  }

  return { isValid: true, sanitized: trimmed };
}

/**
 * Validates general text fields.
 */
export function validateText(text, fieldName = 'Field', minLength = 1, maxLength = 5000, isRequired = true) {
  if (!text || typeof text !== 'string' || !text.trim()) {
    if (isRequired) {
      return { isValid: false, error: `${fieldName} is required.` };
    }
    return { isValid: true, sanitized: null };
  }

  const trimmed = text.trim();
  if (trimmed.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters long.` };
  }
  if (trimmed.length > maxLength) {
    return { isValid: false, error: `${fieldName} must not exceed ${maxLength} characters.` };
  }

  return { isValid: true, sanitized: trimmed };
}
