# Monitoring Project

This project provides **monitoring capabilities** for applications and services using the **Godspeed Framework**.
It performs periodic service status checks and sends email alerts if any services become unreachable.

Service status checks are scheduled via a **Cron expression** defined in:
📄 `src/events/checkServiceStatus.yaml`

This triggers a monitoring function every **2 minutes**, verifying service availability and sending alerts as needed.

## 🚀 Features
* ⏱️ **Periodic service checks** using Cron
* 📧 **Email alerts** when services are down
* ⚙️ **Schema-driven configuration** with `.env` + YAML mapping
* 🔌 **Plugin-based architecture** using Axios, Mailer, and Cron

---
## ⚙️ Install Godspeed & Prerequisites

To streamline setup, use the platform-specific one-step installation script below. This will install all required tools and the Godspeed CLI.

### 🪟 For Windows Users

Open **PowerShell as Administrator** and run:

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/zero8dotdev/install-godspeed-daemon/main/CompleteInstall.ps1" -OutFile "install.ps1"; Start-Process powershell -ArgumentList "-File .\install.ps1" -Verb RunAs
```

### 🐧 For macOS / Linux Users

```bash
curl -fsSL https://raw.githubusercontent.com/zero8dotdev/install-godspeed-daemon/main/CompleteInstall.sh | bash
```

✅ The script installs:

* `nvm` (Node Version Manager)
* `node.js` (v18+ via `nvm`)
* `git`
* `corepack` (comes with Node.js)
* `pnpm` (enabled via `corepack enable pnpm`)
---

### Manual Installation
You can install the Godspeed CLI manually via:
```bash
npm install -g @godspeedsystems/godspeed
```
Verify installation:
```bash
godspeed --version
```
---
## 📦 Getting Started with the Monitoring Project

1. **Clone the repository** and navigate into the project:

   ```bash
   git clone https://github.com/godspeedsystems/gs-node-templates.git
   cd gs-node-templates/monitoring
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Configure the project**:

   * Open `.env` and `config/custom-environment-variables.yaml`
   * Add your monitoring URLs and email credentials

4. **Start the server**:
   ```bash
   godspeed serve
   ```
---

## 🔧 Configuration Overview
You’ll need to update these two files:

### `.env`

```env
# Services to monitor
SERVICE_A_URL=https://example-service-a.com
SERVICE_B_URL=https://example-service-b.com

# Sender email credentials
SENDER_MAIL= youremail@example.com
MAIL_PASSWORD= your app specific password

# Alert recipient
MAIL_USER= alerts@example.com
```

### `config/custom-environment-variables.yaml`

```yaml
services:
  serviceA: SERVICE_A_URL
  serviceB: SERVICE_B_URL

# sender email and password
sender_mail: SENDER_MAIL
mail_password: MAIL_PASSWORD

# receiver email
notify_user: MAIL_USER
---

## ✅ Notes & Best Practices
* Keep `.env` out of version control to protect credentials.
* All plugins (Mailer, Axios, Cron) are configured declaratively via YAML.
* Function logic resides in `src/functions/checkServiceStatus.ts` for maintainability.
* Cron events follow the format: `cron.<expression>.<timezone>` for precision.
---

## 🎥 Demo

We’re sharing a short demo video on [LinkedIn](https://www.linkedin.com/company/godspeed-systems) — check it out once it's live!

