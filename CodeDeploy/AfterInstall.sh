#!/usr/bin/env bash

cd $HOME/apps/csrt
poetry install
poetry run python manage.py migrate --noinput
poetry run python manage.py collectstatic --noinput
