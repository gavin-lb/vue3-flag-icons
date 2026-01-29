import { countryCodes } from '../types/CountryCode'

/**
 * Get the display name of a country from its code.
 * @param code The country code (case insensitive).
 * @returns The country name in English, or 'Unknown' if invalid.
 */
export function getCountryName(code: string): string {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code.toUpperCase()) || 'Unknown'
  } catch {
    return 'Unknown'
  }
}

/**
 * Check if a country code is valid (has a corresponding flag).
 * @param code The country code (case insensitive).
 * @returns True if valid, false otherwise.
 */
export function isValidCountryCode(code: string): boolean {
  return countryCodes.includes(code.toLowerCase() as typeof countryCodes[number])
}

/**
 * Get all available country codes.
 * @returns An array of all valid country codes in lowercase.
 */
export function getAllCountryCodes(): readonly string[] {
  return countryCodes
}