# personal-website

## Backend

This repository now includes a minimal FastAPI backend located in the `BE` directory.

### Running the development server

```zsh
cd BE
pip install -r requirements.txt
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
