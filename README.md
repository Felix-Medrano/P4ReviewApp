# 🧩 P4ReviewApp

> IMPORTANT: This repository is an educational, workspace-specific reference. It is not intended as a turnkey project for reproduction on other machines or environments. The code, configuration, and workflow documented here reflect a local Perforce-centric setup and certain environment-specific assumptions that may not work or be appropriate outside the original development workspace. Treat examples and scripts as illustrative rather than production-ready; reproduce at your own discretion and adapt configurations before using in a different environment.

**P4ReviewApp** is a project inspired by **Helix Swarm**, designed to manage and review *Change Lists* from Perforce (**P4**) through a modern web interface and a .NET-based REST API.

---

## 📁 Project Structure

This repository currently contains the initial setup of two main projects — representing the starting point of the system architecture.

| Project | Type | Description |
|----------|------|-------------|
| **P4ReviewApp.Api** | ASP.NET Core Web API | Provides REST endpoints to communicate with the Perforce server and the frontend application. |
| **P4ReviewApp.Web** | React + TypeScript | Web frontend that will allow users to view, create, and manage *Change List* review requests. |

---

## 🧭 Development Roadmap

For detailed progress tracking and upcoming tasks, visit the Trello board:  
🔗 [P4ReviewApp Development Board](https://trello.com/b/In1bhMxc/p4-revoew-app)

> **Note:**  
> This section officially replaces the former **“Current Project Status”** block.  
> The change was made to improve practicality and transparency, allowing project updates, milestones, and ongoing tasks to be managed dynamically through the Trello board rather than manual edits in this document.

---

## 🌿 Branch Information

- **`main`** → Stable branch containing the latest verified version of both backend and frontend.
  This branch mirrors synchronized changes from the **local Perforce (P4)** workspace after validation.
  It represents the **production-ready state** of the project, updated via the synchronization workflow.

---

## 🔄 Workflow: Perforce to GitHub Synchronization

### 🧱 Development Workflow

#### **Phase 1: Local Development in Perforce**
- All development activities occur within a **local Perforce (P4) workspace**.
- Developers work on files, make changes, and validate functionality locally.
- Once changes are completed and tested, they are **submitted to Perforce**.

#### **Phase 2: Automated Synchronization Process**
Upon successful submission in Perforce, a server-side trigger runs the **`P4ReviewAppGit.bat`** script, which handles synchronization to GitHub through the following automated steps:

### ⚙️ Synchronization Script Execution

#### **1. Environment Configuration**
- Validates the provided changelist number and retrieves its complete description.

#### **2. Change Detection & Validation**
- Verifies the existence of modified files within the Git environment.

#### **3. Commit Preparation**
- Generates a commit message following the standardized convention:
  ```
  P4 CL <number>: <first line of changelist description>
  <remaining changelist description>
  ```
- Maintains complete traceability between **P4 changelists** and **GitHub commits**.

#### **4. Repository Update**
- Executes the commit with the prepared message.
- Pushes the changes to the **GitHub repository (`main` branch)**.

### 🚀 Workflow Characteristics

#### ✅ **Benefits**
- **Optimized Repository Management:** Maintains a clean, well-structured history in GitHub.
- **Automated Traceability:** Each GitHub commit directly references its corresponding P4 changelist.
- **Streamlined Process:** Reduces manual synchronization efforts and potential human error.
- **Consistent Documentation:** Standardized commit messages improve readability and tracking.

#### ⚠️ **Considerations**
- **Non-Parallel Committing:** A single P4 submit may bundle multiple changes into one GitHub commit.
- **Change Management:** Developers should maintain focused file modifications to prevent unintended syncs.
- **Selective Synchronization:** Only files actively worked on should be modified to avoid unnecessary updates.

### 🔧 Future Enhancements
We are actively exploring solutions to implement **parallel commit capabilities** between P4 and GitHub, allowing for more granular synchronization and enhanced change tracking.

### 🧭 Best Practices
- Keep changelist descriptions **clear and comprehensive**.
- Maintain **focused work** within specific file sets.
- Validate all changes locally before submitting to Perforce. 
- Monitor synchronization results to ensure expected outcomes.

This workflow ensures **robust synchronization** between Perforce and GitHub.

---

## 🛠️ Technologies

- **Backend:** ASP.NET Core 8 Web API
- **Frontend:** React + TypeScript
- **Version Control:** Perforce (P4) for local development + GitHub for remote sync
- **Internationalization:** i18next integration with automatic language detection
- **AI:** AI tools (such as ChatGPT, Deepseek) to complement development, accelerate deployment, and improve efficiency.

---

## ✒️ Resource Attribution

### **Application Icons**
- **Favicon & App Icons:** The application icons were obtained from [Flaticon](https://www.flaticon.es/icono-gratis/customer-review_9490135), created by [juicy-fish](https://www.flaticon.es/autores/juicy-fish). This includes:
  - `favicon.ico` (multi-size: 16x16, 24x24, 32x32, 48x48, 64x64)
  - `icon-192.png` (for PWA and mobile devices)
  - `icon-512.png` (high density and 4K displays)
- **Default Avatar:** The image(512x512) were obtained from [Flaticon](https://www.flaticon.es/icono-gratis/customer-review_4651823), created by [Freepik](https://www.flaticon.es/autores/juicy-freepik).

---

> _Repository initialized as the foundation for future integration between Perforce review management and a collaborative web environment._