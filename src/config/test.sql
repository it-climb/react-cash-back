CREATE TABLE IF NOT EXISTS tests  (
  test_id         UUID            NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name      VARCHAR(30)     NOT NULL,
  last_name      VARCHAR(30)     NOT NULL
);

INSERT INTO tests
VALUES
  (uuid_generate_v4(), 'Admin', 'Admin'),
  (uuid_generate_v4(), 'Manager', 'Manager'),
  (uuid_generate_v4(), 'Client', 'Client');