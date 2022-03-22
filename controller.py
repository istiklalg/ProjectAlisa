"""
@author : istiklal
    This file, in addition to being the root file of the module as a controller and the entry point of the module,
    will undertake tasks such as running, stopping, scheduling the python services within the project at the
    right time and in the right threads.
"""
import ipc
from cacheMemoryManager import DataCarrier

if __name__ == "__main__":
    print("Hello from ALISA")
    data1 = DataCarrier()
    print(data1, data1.knownList)
    data1.knownList.append("deniz")
    print(data1, data1.knownList)
    data2 = DataCarrier()
    print(data2 , data2.knownList)
