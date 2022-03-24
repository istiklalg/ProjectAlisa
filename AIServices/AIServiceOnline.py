"""
@author: istiklal
"""
import tensorflow as tf
from keras.layers import Dense, Input, LSTM, TimeDistributed, RepeatVector
from keras.layers import Embedding
from keras.models import Model
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model, save_model
from sklearn.model_selection import train_test_split
from nltk.tokenize import sent_tokenize, word_tokenize
import pandas as pd
import re
import numpy as np
from urllib.parse import urlparse, unquote
import time
import os
from os import listdir
from os.path import isfile, join
import gc
import pickle
import csv
from Settings.settings import logger, BASE_DIR


logger.info(tf.__version__)
logger.info(tf.test.gpu_device_name())
