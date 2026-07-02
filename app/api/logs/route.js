import { google } from "googleapis";
import { Readable } from "stream";

export const runtime = "nodejs";

async function getDrive() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: "domain-access@whois-work.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzQQ5UnGU+1ELS\n7t9Kf2hko7Tj6v8+KfpVU5nutXEmqkaSsE9fBxWXACqteqTCZnmXYQ306tqO6paw\nchxL/5m+oSCF9YJLuXE9nra7M0Dpzvy8NsxvjN23rdEKvRSYYHrVXZG8CWShQeYR\nj2SJEp5Efdnm4q2vDP05T3bqoGxLCZUeAenp19XAYmHM5ewJPJV/v4meFWLQObmz\nMlJA4G3rrTCjclwAYIK+jQ75Ij4KKG5WIPoRtBpzMXz37EsjZX6SFtgmhbCMzSqr\nFZ22mHCyWHRbaUzvJeUuTYxkGO2VF1SZOUbLxU3DNmqCLjmt2l5/1TQgO0yRalIc\n7HHYqhzvAgMBAAECggEAAYUUBbGhxiDvRByUYMGodUSnZvtPbgvVvIgjQ6aJhBC+\nMnDeQL8C9tnLLYIJsurtgv68AI9GinRWEhRARdYFTAbPth25HMKWFuCpSfhgR4Xi\nwgcblU02IArlkoK8kaItHcas/VF9vJmeGsNYJeALiXx2WYJ4gzByq9wO9Q770Whg\nFYmfWBO/JUS2cPjP4oGJdrEmnzdjSEUQWjAp+uZOW/4fI71DiC+ddD2PJEbDrrC/\ncn8w6/DwqHA13aDqzEFSaGbrCtWXbWn1U8tiEGYTj1gCBSpRP64EdQovhWEC8CI+\nSM6NMm7ngqzhOzpKHE+4hVNGMh03ztUCt8GQAkWAIQKBgQDlQdsuN8SOjrIl3AJ2\nmgn7poSo56oGYlzj24pbDF6di/yOm1XrjQZRMi7tLgLK1B1bB2CZp1rPwfPW9H5E\n7Vgiwscgvk7rPyaNpfgYv/TOn7oF6bFphTUjlMk69boszStPmYMtaf2EE4Chxrls\nNTY1jK+NPxggGg7KlXZCnl+I8QKBgQDIKf4Xg88k8PKOZkCWdXQJFK9yIIgAmVEb\nma7zzBoJDomQvg70KM2wnd5XARGl1T/+TzmoOZPVMOrjXJmYVGdaGBtMVGsru0Zx\n08ynT1ZoIxiokTK04jdVxIb6QDUksAkBSkScE5Eko7SZOtUWmbyATzrCCS6S37b0\n+lscakcD3wKBgQC6DUIVNgj8MG3/L5eILOahJbhPYwKm/7im6opT7avza6HhEcse\nyGoyBunybf6yIIZaU5hf2mNma965ud2njn6SZ0Q3HHrri2p8Vg8L9uxzq0jKd6cV\nHZfMcnkEslsO9MqLZOgCORwWzcT8hUwBtwVxW+U0Wdn4Y21Rlw5Mbj7V4QKBgQDG\nIgsKa8bX4km2+zBjvs+lTXx9lAYL0befgnjTiu0amfFB/V///4Pbl+lGZiB57qTx\nrqp8AsJ6/XkEpdzEFIhZfhNHcyjCmRYaBnVGCBqX6mW2NkPjGSl9FJQnkvcH4diI\nFmPjutqpUgKqyrmzLWqR99tJxpz7dcc8p7UYY3r4MQKBgBSZBTWMXh6t1xnUd47c\nYVBHLl16mSeidnHNoL7ZIy2NDtSvtn8rQzezVuvlk9Xsv0nIMP/Ji+P+TTtYIMhh\nK4bnyvTdfLFrGTRcTCVi4gxMRpvvg/0hpp66ksXgO9NEZxr6eGmb1mshB2h6pgZU\nece7Yc4IJRPAF3L3etfh5S6U\n-----END PRIVATE KEY-----\n",
    },
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  return google.drive({
    version: "v3",
    auth,
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
        fileName = false,
        email,
        user_object,
    } = body;

    const drive = await getDrive();

    const folderId = "1HQsQx4bOsLGYTGm6zEG-Uvo8iBNRZXMA";

    if (fileName) {
      if (!email) {
        return Response.json(
          {
            success: false,
            message: "email is required",
          },
          { status: 400 }
        );
      }

      // const cleanEmail = email.replace(/[@.]/g, "_");

      const jsonFileName = `data_access-${email}.json`;

      const existing = await drive.files.list({
        q: `'${folderId}' in parents and name='${jsonFileName}' and trashed=false`,
        fields: "files(id,name)",
      });

      const file = existing.data.files?.[0];

      if (!file) {
        return Response.json({
          success: false,
          message: "File not found",
        });
      }

      const response = await drive.files.get(
        {
          fileId: file.id,
          alt: "media",
        },
        {
          responseType: "stream",
        }
      );

      let content = "";

      await new Promise((resolve, reject) => {
        response.data.on("data", (chunk) => {
          content += chunk.toString();
        });

        response.data.on("end", resolve);
        response.data.on("error", reject);
      });

      return Response.json(JSON.parse(content));
    }

    if (!user_object) {
        return Response.json(
            {
            success: false,
            message: "user_object is required",
            },
            { status: 400 }
        );
    }

    const userEmail = user_object?.email;

    if (!userEmail) {
      return Response.json(
        {
          success: false,
          message: "Email not found in jsonData",
        },
        { status: 400 }
      );
    }

    // const cleanEmail = userEmail.replace(/[@.]/g, "_");

    const jsonFileName = `data_access-${userEmail}.json`;

    const jsonString = JSON.stringify(user_object, null, 2);

    const stream = Readable.from(Buffer.from(jsonString));

    const existing = await drive.files.list({
      q: `'${folderId}' in parents and name='${jsonFileName}' and trashed=false`,
      fields: "files(id,name)",
    });

    const files = existing.data.files || [];

    let result;

    if (files.length > 0) {
      result = await drive.files.update({
        fileId: files[0].id,
        media: {
          mimeType: "application/json",
          body: stream,
        },
        fields: "id,name",
      });
    } else {
      result = await drive.files.create({
        requestBody: {
          name: jsonFileName,
          mimeType: "application/json",
          parents: [folderId],
        },
        media: {
          mimeType: "application/json",
          body: stream,
        },
        fields: "id,name",
      });
    }

    return Response.json({
      success: true,
      action: files.length ? "updated" : "created",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}