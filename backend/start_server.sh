#!/bin/bash
cd /home/ubuntu/app/backend
source venv/bin/activate
exec gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000 app.main:app
