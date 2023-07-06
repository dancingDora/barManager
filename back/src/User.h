#ifndef USER_H
#define USER_H

#include "DatabaseManager.h"

class User
{
    DatabaseManager &db;

public:
    User(DatabaseManager &db) : db(db) {}

    void create(/* parameters */);
    void read(/* parameters */);
    void update(/* parameters */);
    void remove(/* parameters */);
};

#endif
