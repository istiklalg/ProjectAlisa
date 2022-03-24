"""
@author : istiklal
    This file will contain key adjustments and variables that will apply throughout the project.
"""

import logging
import os

# to manage production and development environmental requirements
# for example some methods will not work on windows machine during development
PRODUCTION_ENVIRONMENT = False

# root directory path of project ;
BASE_DIR = (os.path.join(os.getcwd(), ".."))
# BASE_DIR = os.path.abspath(os.path.join(os.path.abspath(os.getcwd()), ".."))

# logger settings ;
logFile = '' if PRODUCTION_ENVIRONMENT else os.path.join(BASE_DIR, 'Logs/alisa-logs.log')
logLevel = logging.INFO if PRODUCTION_ENVIRONMENT else logging.DEBUG
logging.basicConfig(
    format='[%(levelname)s - %(name)s - %(asctime)s - %(filename)s - '
           'line %(lineno)d - process %(process)d - thread %(thread)d] : %(message)s',
    handlers=[logging.StreamHandler(), logging.FileHandler(logFile, 'a')],
    level=logLevel
)
logger = logging.getLogger("ALISA")

