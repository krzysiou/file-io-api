CREATE TABLE users (
   id         VARCHAR(255) NOT NULL PRIMARY KEY,
   username   VARCHAR(255) NOT NULL, 
   password   VARCHAR(255) NOT NULL
);

CREATE TABLE files (
    id               VARCHAR(255) NOT NULL PRIMARY KEY,
    title            VARCHAR(255) NOT NULL,
    type             VARCHAR(255) NOT NULL,
    date_of_creation NUMERIC NOT NULL,
    date_of_update   NUMERIC,
    user_id          VARCHAR(255)  NOT NULL,
    CONSTRAINT fk_user_file FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE wypis_forms (
    name            VARCHAR(255) NOT NULL,
    surname         VARCHAR(255) NOT NULL,
    album_number    VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    field_of_study  VARCHAR(255) NOT NULL,
    faculty         VARCHAR(255) NOT NULL,
    dean            VARCHAR(255) NOT NULL,
    file_id         VARCHAR(255) NOT NULL,
    CONSTRAINT fk_file_wypis FOREIGN KEY (file_id) REFERENCES files(id)
);