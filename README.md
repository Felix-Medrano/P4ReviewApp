# 🧩 P4ReviewApp

**P4ReviewApp** is a project inspired by **Helix Swarm**, designed to manage and review *Change Lists* from Perforce (**P4**) through a modern web interface and a .NET-based REST API.

---

## 📁 Project Structure

This repository currently contains the initial setup of two main projects — representing the starting point of the system architecture.

| Project | Type | Description |
|----------|------|-------------|
| **P4ReviewApp.Api** | ASP.NET Core Web API | Provides REST endpoints to communicate with the Perforce server and the frontend application. |
| **P4ReviewApp.Web** | React + TypeScript | Web frontend that will allow users to view, create, and manage *Change List* review requests. |

---

## 🚀 Current Project Status

- **Stage:** Project initialization  
- **Progress:** Base templates created for both API and Web frontend  
- **Next Steps:**  
  - Implement backend endpoints and data models  
  - Connect frontend to API  
  - Add user authentication and review workflows  

---

## 🌿 Branch Information

- **`main`** → The stable branch containing the latest verified version of both backend and frontend.  
  This branch serves as the deployment base and represents synchronized changes from the local P4 workspace.

---

## 🔄 Local Development & Synchronization Flow

The project is primarily developed and maintained in **Perforce (P4)**, while **GitHub** is used as a synchronized public mirror for tracking and documentation purposes.

### Workflow Overview
1. All development takes place in a **local P4 workspace**.  
2. When changes are completed and validated, they are **submitted locally in P4**.  
3. A custom synchronization script — **`P4ReviewAppGit.bat`** — is then executed.  
   This script automatically:
   - Pulls the latest Git changes (if any)  
   - Copies or commits updated files from the P4 workspace  
   - Pushes the synchronized changes to the **GitHub repository**

This hybrid workflow allows maintaining the **speed and control of P4** for day-to-day development, while ensuring **visibility, version history, and backup** on GitHub.

---

## 🛠️ Technologies

- **Backend:** ASP.NET Core 8 Web API  
- **Frontend:** React + TypeScript  
- **Version Control:** Perforce (P4) for local development + GitHub for remote sync  

---

## 📅 Notes

This marks the **beginning of development** for P4ReviewApp.  
Both the **API** and **Web** projects were created from their respective default templates in Visual Studio 2022 (with HTTPS enabled).

---

> _Repository initialized as the foundation for future integration between Perforce review management and a collaborative web environment._
