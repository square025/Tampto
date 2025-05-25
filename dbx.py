import sqlite3

def clear_tables(db_path, table_names, reset_autoincrement=True):
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()

        for table in table_names:
            cursor.execute(f"DELETE FROM {table};")
            print(f"Cleared table: {table}")
            if reset_autoincrement:
                cursor.execute("DELETE FROM sqlite_sequence WHERE name=?;", (table,))
                print(f"Reset AUTOINCREMENT for: {table}")

        conn.commit()
    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
    finally:
        conn.close()


clear_tables("db.sqlite3", ["TamptoProject_sajili","TamptoProject_michango"])