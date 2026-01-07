# OctoFit Tracker - GitHub Copilot Agent Mode Instructions

## Project Overview
This repository contains a GitHub Skills workshop for building **OctoFit Tracker**, a fitness tracking application using Copilot agent mode. The app enables users to log activities, form teams, compete on leaderboards, and receive personalized workout suggestions.

## Architecture
- **Frontend**: React.js with Bootstrap styling and React Router
- **Backend**: Django REST Framework with MongoDB (via Djongo)
- **Database**: MongoDB (no authentication required)
- **Structure**: `octofit-tracker/backend/` (Django) and `octofit-tracker/frontend/` (React)

## Setup Workflow
1. Create Python virtual environment: `python3 -m venv octofit-tracker/backend/venv`
2. Activate and install: `source octofit-tracker/backend/venv/bin/activate && pip install -r octofit-tracker/backend/requirements.txt`
3. Create Django project: `django-admin startproject octofit_tracker octofit-tracker/backend/`
4. Configure MongoDB connection in `settings.py` with Djongo
5. Enable CORS for all origins in Django settings
6. Run migrations and populate database using management command

## Development Environment
- **Ports**: 8000 (Django API), 3000 (React frontend), 27017 (MongoDB)
- **Launch configs**: Use VS Code debugger configurations for both frontend and backend
- **Codespace URLs**: Use `CODESPACE_NAME` environment variable for dynamic URLs
- **MongoDB**: Check status with `ps aux | grep mongod`, interact with `mongosh`

## Django Backend Patterns
- **Settings**: Always include codespace URL in `ALLOWED_HOSTS`: `f"{os.environ.get('CODESPACE_NAME')}-8000.app.github.dev"`
- **Serializers**: Convert MongoDB ObjectId fields to strings
- **URLs**: Use codespace-aware base URLs in `urls.py`
- **Testing**: Use `curl` to test REST API endpoints
- **Database**: Use Django ORM exclusively (not direct MongoDB scripts)

## React Frontend Patterns
- **Creation**: `npx create-react-app octofit-tracker/frontend --template cra-template --use-npm`
- **Styling**: Import Bootstrap CSS in `src/index.js`: `import 'bootstrap/dist/css/bootstrap.min.css';`
- **Routing**: Install and use `react-router-dom`
- **Assets**: Use app logo from `docs/octofitapp-small.png`

## Data Patterns
- **Test Data**: Populate with superhero-themed data (Marvel vs DC teams)
- **Collections**: users, teams, activities, leaderboard, workouts
- **Indexes**: Unique index on user email field
- **Population**: Use Django management command `populate_db.py` for test data

## Key Files
- **Instructions**: `.github/instructions/` contains component-specific guidelines
- **Prompts**: `.github/prompts/` has agent mode prompts for setup tasks
- **Launch Config**: `.vscode/launch.json` for debugging both services
- **Dev Container**: Pre-configured with Node.js, Python, Docker, and Copilot extensions

## Commands Reference
- **Backend**: `cd octofit-tracker/backend && source venv/bin/activate && python manage.py <command>`
- **Frontend**: `cd octofit-tracker/frontend && npm <command>`
- **Database**: `mongosh` for MongoDB shell, check service with `ps aux | grep mongod`</content>
<parameter name="filePath">/workspaces/skills-build-applications-w-copilot-agent-mode/.github/copilot-instructions.md