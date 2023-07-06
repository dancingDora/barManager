#ifndef DATABASE_MANAGER_H
#define DATABASE_MANAGER_H

#include <mysql_driver.h>
#include <mysql_connection.h>

class DatabaseManager {
    sql::mysql::MySQL_Driver *driver;
    sql::Connection *con;
public:
    DatabaseManager();
    ~DatabaseManager();
    
    // Add methods for CRUD operations
    void createUser(/* parameters */);
    void readUser(/* parameters */);
    void updateUser(/* parameters */);
    void deleteUser(/* parameters */);
};

#endif
