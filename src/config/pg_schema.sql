-- Language=PostgreSQL
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
-- 1
CREATE TABLE IF NOT EXISTS banks  (
  bank_id         UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  mfo       INTEGER       NOT NULL,
  name      VARCHAR(100) NOT NULL,
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
  name           character varying(50) NOT NULL,
  created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
  updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
);
--3a
CREATE TABLE IF NOT EXISTS roles (
  role_id        uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  name           character varying(50) NOT NULL,
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
  user_id  uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  profession_id UUID NOT NULL REFERENCES professions(profession_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
  email VARCHAR(100) NOT NULL,
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

--   id             UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
--   email          citext                          NOT NULL CONSTRAINT users_email_idx UNIQUE,
--   email_verified BOOLEAN                         NOT NULL DEFAULT FALSE,
--   password       VARCHAR(100)                    NOT NULL,
--   role_id        uuid                            NOT NULL,
--   created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
--   updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
-- );
--
-- CREATE UNIQUE INDEX user_id_uindex ON users USING btree (id);
--
-- ALTER TABLE users OWNER TO postgres;
--

--
-- ALTER TABLE roles OWNER TO postgres;
--
-- CREATE UNIQUE INDEX roles_id_uindex ON roles USING btree (id);
--
-- ALTER TABLE   users
--   ADD CONSTRAINT users_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
--
-- CREATE TABLE clients (
--   id             UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
--   user_id        UUID                            NOT NULL UNIQUE,
--   logo_id        UUID,
--   first_name     VARCHAR(50)                     NOT NULL DEFAULT '',
--   last_name      VARCHAR(50)                     NOT NULL DEFAULT '',
--   business_name  VARCHAR(50)                     NOT NULL DEFAULT '',
--   phone          VARCHAR(20),
--   location       JSONB                           NOT NULL DEFAULT '{}' :: JSONB,
--   billing_data   JSONB                           NOT NULL DEFAULT '{}' :: JSONB,
--   has_billing    BOOLEAN                         NOT NULL DEFAULT FALSE,
--   settings       JSONB                           NOT NULL DEFAULT '{}' :: JSONB,
--   created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
--   updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
-- );
--
-- CREATE UNIQUE INDEX clients_id_uindex ON users USING btree (id);
--
-- ALTER TABLE ONLY clients
--   ADD CONSTRAINT clients_users_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
--
-- ALTER TABLE ONLY clients
--   ADD CONSTRAINT clients_images_id_fk FOREIGN KEY (logo_id) REFERENCES images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
--
-- CREATE TABLE banks (
--   id             UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
--   user_id        UUID                            NOT NULL UNIQUE,
--   logo_id        UUID,
--   first_name     VARCHAR(50)                     NOT NULL DEFAULT '',
--   last_name      VARCHAR(50)                     NOT NULL DEFAULT '',
--   business_name  VARCHAR(50)                     NOT NULL DEFAULT '',
--   phone          VARCHAR(20),
--   billing_data   JSONB                           NOT NULL DEFAULT '{}' :: JSONB,
--   location       JSONB                           NOT NULL DEFAULT '{}' :: JSONB,
--   has_billing    BOOLEAN                         NOT NULL DEFAULT FALSE,
--   settings       JSONB                           NOT NULL DEFAULT '{}' :: JSONB,
--   created_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
--   updated_at     TIMESTAMPTZ DEFAULT NOW()       NOT NULL
-- );
--
-- CREATE UNIQUE INDEX banks_id_uindex ON users USING btree (id);
--
-- ALTER TABLE ONLY banks
--   ADD CONSTRAINT banks_users_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
--
-- ALTER TABLE ONLY banks
--   ADD CONSTRAINT banks_images_id_fk FOREIGN KEY (logo_id) REFERENCES images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
--
-- CREATE TABLE schedules (
--   id             UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
--   sunday         BOOLEAN DEFAULT FALSE NOT NULL,
--   monday         BOOLEAN DEFAULT FALSE NOT NULL,
--   tuesday        BOOLEAN DEFAULT FALSE NOT NULL,
--   wednesday      BOOLEAN DEFAULT FALSE NOT NULL,
--   thursday       BOOLEAN DEFAULT FALSE NOT NULL,
--   friday         BOOLEAN DEFAULT FALSE NOT NULL,
--   saturday       BOOLEAN DEFAULT FALSE NOT NULL,
--   created_at     TIMESTAMPTZ DEFAULT NOW() NOT NULL,
--   updated_at     TIMESTAMPTZ DEFAULT NOW() NOT NULL
-- );
--
-- CREATE UNIQUE INDEX schedules_id_uindex ON schedules USING btree (id);
--
-- CREATE TABLE bank_ratings (
--   id          UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
--   bank_id   UUID                            NOT NULL,
--   client_id UUID                            NOT NULL,
--   rating      JSONB                           NOT NULL DEFAULT '[]' :: JSONB,
--   comment     TEXT                            NOT NULL DEFAULT '',
--   created_at  TIMESTAMPTZ DEFAULT NOW()       NOT NULL,
--   updated_at  TIMESTAMPTZ DEFAULT NOW()       NOT NULL
-- );
--
-- ALTER TABLE bank_ratings
--   ADD CONSTRAINT bank_ratings_bank_id_fk FOREIGN KEY (bank_id) REFERENCES banks (id) ON UPDATE NO ACTION ON DELETE CASCADE,
--   ADD CONSTRAINT bank_ratings_client_id_fk FOREIGN KEY (client_id) REFERENCES clients (id) ON UPDATE NO ACTION ON DELETE CASCADE;
--
-- CREATE TABLE attachments (
--   id          UUID          NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
--   type        image_type    NOT NULL,
--   path        VARCHAR(1024) NOT NULL,
--   alt         VARCHAR(1024) DEFAULT '',
--   name        VARCHAR(256)  NOT NULL,
--   size        INTEGER       NOT NULL DEFAULT 0,
--   mime_type   VARCHAR(40),
--   created_at  TIMESTAMPTZ   NOT NULL DEFAULT now(),
--   updated_at  TIMESTAMPTZ   NOT NULL DEFAULT now()
-- );
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