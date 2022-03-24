"""
@author: istiklal
    This file, in addition to being the root file of the module as a controller and the entry point of the module,
    will undertake tasks such as running, stopping, scheduling the python services within the project at the
    right time and in the right threads.
"""
from CommonClasses.DataCarrier import DataCarrier
from Settings.settings import BASE_DIR, logger


logger.debug("Hello from ALISA")
data1 = DataCarrier()
