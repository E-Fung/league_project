CREATE TABLE "Users"(
  id BIGSERIAL PRIMARY KEY NOT NULL, 
  name VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  "createdAt" timestamp,
  "updatedAt" timestamp
);