import { NextResponse } from 'next/server'
import { google } from 'googleapis'

const GOOGLE_SERVICE_ACCOUNT_EMAIL = "domain-access@whois-work.iam.gserviceaccount.com"
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzQQ5UnGU+1ELS\n7t9Kf2hko7Tj6v8+KfpVU5nutXEmqkaSsE9fBxWXACqteqTCZnmXYQ306tqO6paw\nchxL/5m+oSCF9YJLuXE9nra7M0Dpzvy8NsxvjN23rdEKvRSYYHrVXZG8CWShQeYR\nj2SJEp5Efdnm4q2vDP05T3bqoGxLCZUeAenp19XAYmHM5ewJPJV/v4meFWLQObmz\nMlJA4G3rrTCjclwAYIK+jQ75Ij4KKG5WIPoRtBpzMXz37EsjZX6SFtgmhbCMzSqr\nFZ22mHCyWHRbaUzvJeUuTYxkGO2VF1SZOUbLxU3DNmqCLjmt2l5/1TQgO0yRalIc\n7HHYqhzvAgMBAAECggEAAYUUBbGhxiDvRByUYMGodUSnZvtPbgvVvIgjQ6aJhBC+\nMnDeQL8C9tnLLYIJsurtgv68AI9GinRWEhRARdYFTAbPth25HMKWFuCpSfhgR4Xi\nwgcblU02IArlkoK8kaItHcas/VF9vJmeGsNYJeALiXx2WYJ4gzByq9wO9Q770Whg\nFYmfWBO/JUS2cPjP4oGJdrEmnzdjSEUQWjAp+uZOW/4fI71DiC+ddD2PJEbDrrC/\ncn8w6/DwqHA13aDqzEFSaGbrCtWXbWn1U8tiEGYTj1gCBSpRP64EdQovhWEC8CI+\nSM6NMm7ngqzhOzpKHE+4hVNGMh03ztUCt8GQAkWAIQKBgQDlQdsuN8SOjrIl3AJ2\nmgn7poSo56oGYlzj24pbDF6di/yOm1XrjQZRMi7tLgLK1B1bB2CZp1rPwfPW9H5E\n7Vgiwscgvk7rPyaNpfgYv/TOn7oF6bFphTUjlMk69boszStPmYMtaf2EE4Chxrls\nNTY1jK+NPxggGg7KlXZCnl+I8QKBgQDIKf4Xg88k8PKOZkCWdXQJFK9yIIgAmVEb\nma7zzBoJDomQvg70KM2wnd5XARGl1T/+TzmoOZPVMOrjXJmYVGdaGBtMVGsru0Zx\n08ynT1ZoIxiokTK04jdVxIb6QDUksAkBSkScE5Eko7SZOtUWmbyATzrCCS6S37b0\n+lscakcD3wKBgQC6DUIVNgj8MG3/L5eILOahJbhPYwKm/7im6opT7avza6HhEcse\nyGoyBunybf6yIIZaU5hf2mNma965ud2njn6SZ0Q3HHrri2p8Vg8L9uxzq0jKd6cV\nHZfMcnkEslsO9MqLZOgCORwWzcT8hUwBtwVxW+U0Wdn4Y21Rlw5Mbj7V4QKBgQDG\nIgsKa8bX4km2+zBjvs+lTXx9lAYL0befgnjTiu0amfFB/V///4Pbl+lGZiB57qTx\nrqp8AsJ6/XkEpdzEFIhZfhNHcyjCmRYaBnVGCBqX6mW2NkPjGSl9FJQnkvcH4diI\nFmPjutqpUgKqyrmzLWqR99tJxpz7dcc8p7UYY3r4MQKBgBSZBTWMXh6t1xnUd47c\nYVBHLl16mSeidnHNoL7ZIy2NDtSvtn8rQzezVuvlk9Xsv0nIMP/Ji+P+TTtYIMhh\nK4bnyvTdfLFrGTRcTCVi4gxMRpvvg/0hpp66ksXgO9NEZxr6eGmb1mshB2h6pgZU\nece7Yc4IJRPAF3L3etfh5S6U\n-----END PRIVATE KEY-----\n"
const GOOGLE_SHEET_ID = "1Mupy1WP-TUVZWmoeDwao8W1UtzF1n8D10mtOqkbKBRw"

// Updated to A:E to store: Date, Name, Email, Phone, Message
const GOOGLE_SHEET_RANGE = 'Sheet1!A:E'

function formatPrivateKey(key) {
  if (!key) return undefined
  return key.includes('\\n') ? key.replace(/\\n/g, '\n') : key
}

function formatDateForEnquiry(date = new Date()) {
  // Format: DD/MM/YYYY hh:mm AM/PM in Asia/Kolkata timezone
  try {
    const opts = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    }
    // e.g. "17/09/2025, 12:52 PM" -> we will remove the comma
    const parts = new Intl.DateTimeFormat('en-GB', opts).format(date)
    // parts will be like "17/09/2025, 12:52 PM" — remove comma and ensure space
    return parts.replace(',', '')
  } catch (e) {
    // fallback manual formatting (UTC-based) if Intl fails
    const d = new Date(date)
    const pad = (n) => String(n).padStart(2, '0')
    let hours = d.getHours()
    const minutes = pad(d.getMinutes())
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    if (hours === 0) hours = 12
    const day = pad(d.getDate())
    const month = pad(d.getMonth() + 1)
    const year = d.getFullYear()
    return `${day}/${month}/${year} ${pad(hours)}:${minutes} ${ampm}`
  }
}

async function appendToSheet(name, email, phone, message, country) {
  const privateKey = formatPrivateKey(GOOGLE_PRIVATE_KEY)
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !privateKey) {
    throw new Error('Google service account credentials are not set.')
  }

  const jwtClient = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  await jwtClient.authorize()

  const sheets = google.sheets({ version: 'v4', auth: jwtClient })

  // Date formatted as "DD/MM/YYYY hh:mm AM/PM" (Asia/Kolkata)
  const formattedDate = formatDateForEnquiry(new Date())

  // Order: Date, Name, Email, Phone, Message
  const values = [[formattedDate, name, email, phone, message, country]]

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: GOOGLE_SHEET_RANGE,
    valueInputOption: 'RAW',
    requestBody: { values },
  })

  return res.data
}

export async function POST(request) {
  try {
    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      return NextResponse.json({ error: 'Server not configured. Missing Google Sheets credentials.' }, { status: 500 })
    }

    const contentType = request.headers.get('content-type') || ''
    let body = {}

    if (contentType.includes('application/json')) {
      body = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData()
      body = Object.fromEntries(formData.entries())
    } else {
      try {
        body = await request.json()
      } catch (e) {
        return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 })
      }
    }

    const { enquiry_data } = body || {}

    // Accept name, email, phone, message
    const { name, email, countryCode, phone, message, country } = enquiry_data || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, message' }, { status: 400 })
    }

    // phone is optional validation: if provided ensure string
    const phoneStr = phone ? `${countryCode.value}${String(phone)}` : ''

    const result = await appendToSheet(String(name), String(email), phoneStr, String(message), String(country))

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('Error in /api/contact POST:', err?.message || err)
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 })
  }
}
