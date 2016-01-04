# -*- coding: utf-8 -*-
import ConfigParser
import os

__author__ = 'xlliu'


def init(app):


    table_date = os.path.join(os.path.dirname(__file__), 'title_data.cfg')
    config = ConfigParser.ConfigParser()
    config.read(table_date)

    @app.context_processor
    def show_title():
        return config.sections()

    @app.context_processor
    def show_key(section):
        return config.options(section)

