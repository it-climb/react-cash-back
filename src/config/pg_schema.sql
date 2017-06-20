-- Language=PostgreSQL
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
-- 1
CREATE TABLE IF NOT EXISTS banks  (
  bank_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  mfo       INTEGER       NOT NULL UNIQUE,
  name      VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- 2
CREATE TABLE IF NOT EXISTS bank_products  (
  bank_product_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  bank_id   UUID NOT NULL REFERENCES banks(bank_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  name      VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- 3
CREATE TABLE IF NOT EXISTS professions (
  profession_id        uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  name           character varying(50) NOT NULL UNIQUE,
  created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
  updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
);
--3a
CREATE TABLE IF NOT EXISTS roles (
  role_id        uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  name           character varying(50) NOT NULL UNIQUE,
  title          character varying(100) NOT NULL,
  description    text,
  created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
  updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
);
--4
CREATE TABLE IF NOT EXISTS cost_groups  (
  cost_group_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  name      VARCHAR(70) NOT NULL,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- 5
CREATE TABLE IF NOT EXISTS costs  (
  cost_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  cost_group_id   UUID NOT NULL REFERENCES cost_groups(cost_group_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  name      VARCHAR(70) NOT NULL,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- 6
CREATE TABLE IF NOT EXISTS users (
  user_id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  profession_id UUID NOT NULL REFERENCES professions(profession_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  email VARCHAR(100) NOT NULL UNIQUE,
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  login VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  role_id UUID NOT NULL REFERENCES roles(role_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
  updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
);
-- 7
CREATE TYPE CARD_TYPE AS ENUM (
  'Дебетная',
  'Кредитная'
);
CREATE TABLE IF NOT EXISTS cash_back  (
  cash_back_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  bank_product_id   UUID NOT NULL REFERENCES bank_products(bank_product_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  bank_percent      NUMERIC(3, 3) NOT NULL,
  limit_sum      NUMERIC(10, 2) NOT NULL,
  remain_percent      NUMERIC(3, 3) NOT NULL,
  card_type      CARD_TYPE NOT NULL,
  cost_id   UUID NOT NULL REFERENCES costs(cost_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  category_percent      NUMERIC(3, 3) NOT NULL,
  limit_category_sum      NUMERIC(10, 2) NOT NULL,
  card_commision      NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- 8
CREATE TABLE IF NOT EXISTS user_costs  (
  user_cost_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  date TIMESTAMPTZ NOT NULL,
  cost_id   UUID NOT NULL REFERENCES costs(cost_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  user_id   UUID NOT NULL REFERENCES users(user_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  sum      NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- 9
CREATE TABLE IF NOT EXISTS advice_products  (
  advice_product_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  date TIMESTAMPTZ NOT NULL,
  bank_product_id   UUID NOT NULL REFERENCES bank_products(bank_product_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  commision      NUMERIC(10, 2) NOT NULL,
  banks_sum      NUMERIC(10, 2) NOT NULL,
  sum      NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
-- test
CREATE TABLE IF NOT EXISTS test (
  test_id  uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  test_name VARCHAR(30) NOT NULL,
  test_lastname VARCHAR(30) NOT NULL
);

--
-- CREATE UNIQUE INDEX attachments_id_uindex ON attachments USING btree (id);
--
-- CREATE TABLE credits
-- (
--     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
--     bank_id UUID NOT NULL,
--     client_id UUID NOT NULL,
--     sum INTEGER NOT NULL,
--     confirm BOOLEAN,
--     request_date TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
--     CONSTRAINT credits_bank_id_fk FOREIGN KEY (bank_id) REFERENCES banks (id),
--     CONSTRAINT credits_client_id_fk FOREIGN KEY (client_id) REFERENCES clients (id)
-- );
-- ALTER TABLE credits
--   ADD CONSTRAINT credits_bank_id_fk FOREIGN KEY (bank_id) REFERENCES banks (id) ON UPDATE NO ACTION ON DELETE CASCADE,
--   ADD CONSTRAINT credits_client_id_fk FOREIGN KEY (client_id) REFERENCES clients (id) ON UPDATE NO ACTION ON DELETE CASCADE;
--
--
-- REVOKE ALL ON SCHEMA public FROM PUBLIC;
-- REVOKE ALL ON SCHEMA public FROM postgres;
-- GRANT ALL ON SCHEMA public TO postgres;
-- GRANT ALL ON SCHEMA public TO PUBLIC;