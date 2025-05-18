# personal-website

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

### Setting up pre-commit

The repository uses [pre-commit](https://pre-commit.com/) to run simple
formatting checks. After installing the dependencies listed in
`BE/requirements.txt`, install the git hooks and run them:

```zsh
pre-commit install
pre-commit run --all-files
```
