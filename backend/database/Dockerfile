FROM postgres:16.1-alpine3.17

# Custom initialization scripts
ADD  DDL.sql /docker-entrypoint-initdb.d
COPY DDL.sql DDL.sql

RUN chmod +x /docker-entrypoint-initdb.d/DDL.sql
