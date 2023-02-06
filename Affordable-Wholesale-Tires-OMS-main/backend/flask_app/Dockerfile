# syntax=docker/dockerfile:1
FROM python:3.8-alpine

WORKDIR /flask_app

COPY requirements.txt requirements.txt

RUN set -e; \
	apk add --no-cache --virtual .build-deps \
		gcc \
		libc-dev \
		linux-headers \
        libffi-dev \
        build-base \
        python3-dev \
	; \
	pip install -r requirements.txt; \
	apk del .build-deps;

COPY . .

CMD [ "uwsgi", "--ini" , "app.ini"]