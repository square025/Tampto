import sqlite3
import json

dbx = sqlite3.connect("db.sqlite3")
cursor = dbx.cursor()

jisajili = cursor.execute("SELECT * FROM TamptoProject_sajili").fetchall()
michango = cursor.execute("SELECT * FROM TamptoProject_michango").fetchall()

print(jisajili, michango)