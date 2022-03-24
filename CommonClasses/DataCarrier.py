"""
@author : istiklal
    The object definitions in this file will carry a singleton model that will carry the data that
    will be kept in the cache as long as the modules are running and that the same object can be accessed
    from other modules.
"""
from datetime import datetime
from Settings.settings import logger


class DataCarrier:
    """
    Singleton Object to hold cache datas
    attributes :

    """
    _instance = None
    knownList = []
    whiteList = []
    created = None

    # attributes

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DataCarrier, cls).__new__(cls)
            # I'll use here as initializer method
            logger.info("Creating new DataCarrier object")
            cls.created = datetime.strftime(datetime.now(), "%Y-%m-%d %H:%M:%S")
            cls.knownList = ["istiklal"]
        return cls._instance

    def __str__(self):
        return f'Data object created at {self.created} '
