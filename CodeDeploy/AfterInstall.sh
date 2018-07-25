#!/usr/bin/env bash

source $HOME/.local/share/virtualenvs/csrt-n9DhGV0q/bin/activate

cd $HOME/apps/csrt
pipenv install
python manage.py migrate --noinput
python manage.py collectstatic --noinput
