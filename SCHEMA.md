# SCHEMA

## Tables 

- movies
- reviews

### Movies:
- id INT AI PK UNSIGNED NOT NULL
- title VARCHAR(255) NOT NULL
- director VARCHAR(255) NOT NULL
- genre VARCHAR(255) 
- release_year YEAR
- abstract TEXT
- image VARCHAR(255)
- created_at DATETIME DEFAULT (NOW()) or DATESTAMP ?
- updated_at DATETIME DEFAULT (NOW()) or DATESTAMP ?
 
### Reviews
- id INT AI UNSIGNED PK NOT NULL
- movies_id INT UNSIGNED NOT NULL
- name VARCHAR(255) NOT NULL
- vote TINYINT 
- text  TEXT
- created_at DATETIME DEFAULT (NOW()) or TIMESTAMP ?
- updated_at DATETIME DEFAULT (NOW()) or TIMESTAMP ?

