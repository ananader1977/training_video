# Al Bonian — Ground Technicians Training Video Portal
### Field Operations Micro-Learning Platform (HVAC, Plumbing, Electrical, Civil, Fire Systems)

Welcome to the **Al Bonian Ground Technician Training Video Portal**, an all-in-one responsive web platform engineered specifically for facilities management, MEP maintenance, and ground technical staff in the field.

---

## 1. Authentication & Access Credentials

The portal features an authentication gate with session persistence ("Stay signed in on this mobile"):

| Role | Username | Password | Privileges |
| :--- | :--- | :--- | :--- |
| **Ground Technician** | `technician` | `techpass2026` | Full video library access, video playback, SOP execution checklists, WhatsApp sharing, offline bookmarks |
| **Supervisor / Admin** | `supervisor` | `AlBonian@2026` | Full technician access + **Supervisor Control Center**, video deletion/removal, weekly video additions, bulk purge, and trash restoration |

> **Supervisor Mode Elevation:**  
> If logged in as a technician, tapping the **"Supervisor Control"** tab in the top header will prompt for the supervisor password (`AlBonian@2026`) to unlock administrative controls on the fly without logging out.

---

## 2. Supervisor Control Center (Video Removal & Management)

Supervisors have a dedicated control dashboard accessible via the **"Supervisor Control"** tab:

1. **Remove Unwanted Videos**:
   - In the Supervisor Control table, click the **"Remove"** button (red trash icon) next to any video.
   - An in-page confirmation modal appears: *"Remove Video from Training Portal?"*.
   - Confirming immediately unpublishes the video so technicians will no longer see it.
   - *Quick Removal from Library View:* When logged in as supervisor, every card in the standard library view also displays a direct red "Remove" button.
2. **Trash Bin & Restoration**:
   - Removed videos are moved to the **Trash Bin** tab rather than permanently destroyed.
   - Supervisors can review removed videos and click **"Restore"** at any time to return them to the active technicians' library.
3. **Bulk Video Removal**:
   - Use the table checkboxes to select multiple videos and click **"Remove Selected (N)"**.
4. **Weekly Additions & Spotlight**:
   - Click **"+ Add New Weekly Video"** to publish new SOP videos with PPE tags, checklists, and YouTube URLs.
   - Toggle **"⭐ Spotlight (ON)"** to flag priority modules for the current week.
5. **Reset Library**:
   - Click **"Reset Library to Default"** if you ever need to restore all original 25 MEP and civil training videos.

---

## 3. Quick Start & Deployment Options

The entire platform is bundled into a single standalone HTML file (`technician_training_portal.html`) with embedded Al Bonian branding and zero build dependencies:

### Option A: Free Cloud Hosting (Recommended for WhatsApp Sharing)
1. **GitHub Pages (Free)**:
   - Rename `technician_training_portal.html` to `index.html` and push to a GitHub repository.
   - Enable Pages in **Settings > Pages > Branch: main**.
   - Share the generated HTTPS link on WhatsApp.
2. **Netlify Drop (10 Seconds, Instant Live URL)**:
   - Drag and drop `technician_training_portal.html` into [Netlify Drop](https://www.google.com/search?q=https%3A%2F%2Fapp.netlify.com%2Fdrop).
   - Copy the live URL and broadcast it to your WhatsApp group.

### Option B: Local / Offline Smartphone Use
- Technicians can open `technician_training_portal.html` directly in mobile Safari, Chrome, or Samsung Internet without a server.

---

## 4. WhatsApp Sharing Features

- **Platform Broadcast Button**: Tap the **"Share on WhatsApp"** button in the header to open a pre-formatted group announcement containing portal links, credentials, and weekly highlights.
- **Single Video Share**: Tap the green WhatsApp icon on any card or inside the video modal to generate an on-site SOP card ready to send to specific field technicians.

---

## 5. Curated Launch Library (25 Modules)

* **HVAC Systems (5 SOPs)**: Dual Run Capacitor Testing, Digital Gauge Superheat/Subcooling, AHU Belt Tensioning & Alignment, 24V Thermostat Control Wiring, Chiller Condenser Tube Brushing.
* **Plumbing (5 SOPs)**: Copper Sweat Soldering, Commercial Water Heater T&P Relief Valves, Power Drain Auger Operation, PEX Crimping & Go/No-Go Gauge Testing, Booster Pump Mechanical Seal Priming.
* **Electrical (5 SOPs)**: Safe Lockout/Tagout (LOTO) Zero-Energy Verification, Breaker & RCD Tripping Diagnostics, 3-Phase Motor Megger Testing, Heavy Cable Lug Crimping & Torque Specs, Emergency Lighting Battery Pack Inspections.
* **Civil Jobs (5 SOPs)**: Drywall Hole Patching & Mudding, Concrete Crack Epoxy/Polyurethane Injection, Overhead Door Closer Speed Tuning, Ceramic Tile Replacement, Expansion Joint Silicone Weatherproofing.
* **Fire Systems (5 SOPs)**: Manual Pull Station Inspection & Key Reset, Optical Smoke Detector Aerosol Testing, Sprinkler Zone Valve & Tamper Switch Audits, Diesel Fire Pump Weekly Churn Runs, HVAC Fire/Smoke Damper Cycling.

---

## 6. Technical Specifications
- **Framework**: Semantic HTML5, Vanilla JavaScript (ES6+), Tailwind CSS 3.4.17 (CDN).
- **Branding**: Official Al Bonian logo embedded as a high-resolution base64 data URI.
- **Storage**: Browser `localStorage` for offline bookmarks, authentication tokens, custom added videos, and removed video trash archive.
- **Responsiveness**: 100% Mobile, Tablet, and Desktop optimized with high-contrast field daylight readability.