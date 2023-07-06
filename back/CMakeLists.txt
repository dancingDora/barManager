cmake_minimum_required(VERSION 3.10)

project(back)

set(CMAKE_CXX_STANDARD 14)

include_directories(C:\Program Files\MySQL\Connector C++ 8.0\include)

add_executable(back src/main.cpp src/DatabaseManager.cpp)

target_link_libraries(back C:/Program Files/MySQL/Connector C++ 8.0/lib64/vs14/mysqlcppconn.lib)
