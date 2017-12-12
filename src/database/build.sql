BEGIN;
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL

);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    size  INTEGER,
    price  INTEGER
);

CREATE TABLE IF NOT EXISTS cart(
  user_id REFERENCES users(id),
  product_id REFERENCES products(id)
  PRIMARY KEY (user_id,product_id)
)





COMMIT;
