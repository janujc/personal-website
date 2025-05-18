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
