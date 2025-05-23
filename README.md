# personal-website

## Pre-Commit Hooks

The repository uses [pre-commit](https://pre-commit.com/) to run formatting
checks with [Black](https://black.readthedocs.io/). After installing the
dependencies listed in `BE/requirements.txt`, install the git hooks and run
them:

```zsh
pre-commit install
pre-commit run --all-files
```

## Backend

This repository now includes a minimal FastAPI backend located in the `BE` directory.

### Running the development server

Before installing dependencies, create and activate a Python virtual
environment:

```zsh
cd BE
python -m venv .venv
source .venv/bin/activate
```

Install dependencies

```zsh
pip install -r requirements.txt
```

Run the development server

```zsh
uvicorn app.main:app --reload
```

### Running tests

```zsh
cd BE
pytest -q
```

### Building the Docker image

```zsh
cd BE
docker build -t personal-website-backend .
```

## Frontend

A basic React app lives in the `FE` directory.

### Installing dependencies

```zsh
cd FE
npm install
```

### Running the development server

```zsh
cd FE
npm start
```

### Running tests

```zsh
cd FE
npm test -- --watchAll=false
```

### Building the app

```zsh
cd FE
npm run build
```
