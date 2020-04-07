"""
Django settings for csrt_project project.

Generated by 'django-admin startproject' using Django 1.8.19.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import json
import os
import random
import string
from datetime import timedelta
from pathlib import Path

from django.core.urlresolvers import reverse_lazy
from trefoil.render.renderers.stretched import StretchedRenderer
from trefoil.utilities.color import Color

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CONFIG = {}
config_file = os.environ.get('CSRT_CONF_FILE') or os.path.join(BASE_DIR, 'config.json')
if config_file and os.path.isfile(config_file):
    with open(config_file) as f:
        CONFIG = json.loads(f.read())


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = CONFIG.get(
    'secret-key', ''.join(
            [random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(50)]
    ))  # This results in a random secret key every time the settings are loaded. Not appropriate for production.

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = CONFIG.get('debug', True)

ALLOWED_HOSTS = CONFIG.get('allowed-hosts', ['127.0.0.1', 'localhost'])
INTERNAL_IPS = CONFIG.get('internal-ips', ['127.0.0.1'])
MBTILESERVER_ROOT = CONFIG.get('mbtileserverRoot')

PORT = CONFIG.get('port', 80)

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'ncdjango',
    'rest_framework',
    'tastypie',
    'django_celery_results',
    'social_django',
    'webpack_loader',

    'seedsource_core.django.seedsource',
    'seedsource_core.django.accounts',
    'seedsource_core.django.preview',
    'csrt'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'seedsource_core.django.preview.middleware.PreviewAccessMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'csrt_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
                'csrt_project.context_processors.google_analytics'
            ],
        },
    },
]

WSGI_APPLICATION = 'csrt_project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': CONFIG.get('db_name', 'csrt'),
        'USER': CONFIG.get('db_user', 'csrt'),
        'PASSWORD': CONFIG.get('db_password', 'csrt'),
        'HOST': CONFIG.get('db_host', '127.0.0.1')
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'stream': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler'
        }
    },
    'loggers': {
        'seedsource_core': {
            'handlers': ['stream'],
            'level': 'DEBUG',
            'propagate': True
        },
        'django': {
            'handlers': ['stream'],
            'level': 'ERROR',
            'propagate': True
        },
        'django.server': {
            'handlers': ['stream'],
            'level': 'ERROR',
            'propagate': True
        }
    }
}

AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
    'social_core.backends.twitter.TwitterOAuth',
    'seedsource_core.django.accounts.backends.EmailAuthenticationBackend',
    'seedsource_core.django.accounts.backends.IdentityBackend',
)

SOCIAL_AUTH_USERNAME_IS_FULL_EMAIL = False
SOCIAL_AUTH_RAISE_EXCEPTIONS = False
SOCIAL_AUTH_LOGIN_REDIRECT_URL = reverse_lazy('tool_page')
SOCIAL_AUTH_LOGIN_ERROR_URL = reverse_lazy('tool_page')
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = CONFIG.get('google_oauth2_key', '')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = CONFIG.get('google_oauth2_secret', '')
SOCIAL_AUTH_FACEBOOK_KEY = CONFIG.get('facebook_key', '')
SOCIAL_AUTH_FACEBOOK_SECRET = CONFIG.get('facebook_secret', '')
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
  'fields': 'id, name, email'
}
SOCIAL_AUTH_TWITTER_KEY = CONFIG.get('twitter_key', '')
SOCIAL_AUTH_TWITTER_SECRET = CONFIG.get('twitter_secret', '')
SOCIAL_AUTH_PIPELINE = (
    'social_core.pipeline.social_auth.social_details',
    'social_core.pipeline.social_auth.social_uid',
    'social_core.pipeline.social_auth.auth_allowed',
    'social_core.pipeline.social_auth.social_user',
    'social_core.pipeline.user.get_username',
    'social_core.pipeline.social_auth.associate_by_email',
    'social_core.pipeline.user.create_user',
    'social_core.pipeline.social_auth.associate_user',
    'social_core.pipeline.social_auth.load_extra_data',
    'social_core.pipeline.user.user_details'
)

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend' if DEBUG else 'django.core.mail.backends.smtp.EmailBackend'

GOOGLE_ANALYTICS_ID = CONFIG.get('ga_id')
ENABLE_GOOGLE_ANALYTICS = bool(GOOGLE_ANALYTICS_ID)

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 100
}

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = CONFIG.get('static-root', '/var/www/static/')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'javascript/build')
]

CELERY_TASK_TRACK_STARTED = True
CELERY_RESULT_BACKEND = 'django-db'
CELERYBEAT_SCHEDULE = {
    'cleanup_temporary_services': {
        'task': 'ncdjango.geoprocessing.celery_tasks.cleanup_temporary_services',
        'schedule': timedelta(hours=1),
        'options': {
            'expires': 7200  # 2 hrs
        }
    },
    'cleanup_password_reset_tokens': {
        'task': 'accounts.tasks.cleanup_password_reset_tokens',
        'schedule': timedelta(hours=1),
        'options': {
            'expires': 7200  # 2 hrs
        }
    },
    'cleanup_temp_tif_files': {
        'task': 'seedsource.tasks.cleanup_tifs.cleanup_temp_tif_files',
        'schedule': timedelta(hours=1),
        'options': {
            'expires': 7200  # 2 hrs
        },
        'kwargs': {'age': 7200},
    },

}

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'webpack_bundles/',  # must end with slash
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': ['.+\.hot-update.js', '.+\.map']
    }
}

if not DEBUG:
    WEBPACK_LOADER['DEFAULT']['BUNDLE_DIR_NAME'] = '/'

NC_REGISTERED_JOBS = {
    'generate_scores': {
        'type': 'task',
        'task': 'seedsource_core.django.seedsource.tasks.generate_scores.GenerateScores',
        'publish_raster_results': True,
        'results_renderer': StretchedRenderer([
            (100, Color(240, 59, 32)),
            (50, Color(254, 178, 76)),
            (0, Color(255, 237, 160))
        ])
    },
    'write_tif': {
        'type': 'task',
        'task': 'seedsource_core.django.seedsource.tasks.write_tif.WriteTIF',
    },

}

NC_INSTALLED_INTERFACES = (
    'ncdjango.interfaces.data',
    'ncdjango.interfaces.arcgis_extended',
    'ncdjango.interfaces.arcgis',
    'seedsource_core.interfaces.tiles'
)

NC_ENABLE_STRIDING = True
NC_SERVICE_DATA_ROOT = 'data/ncdjango/services/'
DATASET_DOWNLOAD_DIR = Path(BASE_DIR) / 'data' / 'downloads'

SEEDSOURCE_TITLE = 'Climate Smart Restoration Tool'
REPORT_PDF_TEMPLATE = 'pdf/csrt-report.html'

PREVIEW_MODE = CONFIG.get('preview', False)
PREVIEW_PASSWORD = 'csrtearlyaccess'
