"""
@author : istiklal
    The object definitions in this file will carry a singleton model that will carry the data that
    will be kept in the cache as long as the modules are running and that the same object can be accessed
    from other modules.
"""


class DataCarrier:
    """
    Singleton Object to hold cache datas
    attributes :

    """
    _instance = None
    knownList = []
    whiteList = []

    # attributes

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DataCarrier, cls).__new__(cls)
            # I'll use here as initializer method
            cls.knownList = ["istiklal"]
        return cls._instance
