#include <mysql_driver.h>
#include <mysql_connection.h>
#include <cppconn/resultset.h>
#include <cppconn/statement.h>

int main()
{
    sql::mysql::MySQL_Driver *driver;
    sql::Connection *con;
    sql::Statement *stmt;
    sql::ResultSet *res;

    // Create a MySQL driver instance
    driver = sql::mysql::get_mysql_driver_instance();

    // Establish a connection to the MySQL database
    con = driver->connect("tcp://127.0.0.1:3306", "root", "pass");

    // Connect to a specific database
    con->setSchema("barmanager");

    // Execute a simple query
    stmt = con->createStatement();
    res = stmt->executeQuery("SELECT * FROM users");

    // Process the result set
    while (res->next())
    {
        // Extract data from the result set
        std::string column1 = res->getString("username");
        int column2 = res->getInt("password");

        // Do something with the extracted data
        // For example, print the values
        std::cout << "Column 1: " << column1 << std::endl;
        std::cout << "Column 2: " << column2 << std::endl;
    }

    // Clean up resources
    delete res;
    delete stmt;
    delete con;

    return 0;
}
