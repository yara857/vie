const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'shop',
  port: 5432,
  user: "postgres",
  password: "123",
});

const getProduct = (req, res) => {
  pool.query(
    'SELECT * FROM public.product'
    ,
    (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        res.status(500).send('Error inserting product');
      } else {
        res.status(201).send('Product selected successfully');
      }
    }
  );
};

const createProduct = (req, res) => {
  // const q = "INSERT INTO public.product (product_name, product_desc , product_img , stock , price) values (?)"
  // const values = [
  //   req.body.product_name,
  //   req.body.product_desc,
  //   req.body.product_img,
  //   req.body.stock,
  //   req.body.price,
  // ]
  pool.query("INSERT INTO public.product (product_name) values (?)",
    [req.body.product_name],
    (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Error inserting product');
      } else {
        res.status(201).send('Product selected successfully', result);
      }
    }
  );
};

const updateProduct = (req, res) => {
  pool.query(
    `UPDATE public.product
    SET  product_name= 'SNAKE PIE', stock=10
    WHERE ID = 5` ,
    (err, result) => {
      if (err) {
        console.error('Error updating product:', err);
        res.status(500).send('Error updating product');
      } else {
        res.status(201).send('Product updated successfully');
      }
    }
  )
}

const deleteProduct = (req, res) => {
  pool.query(
    `DELETE FROM public.product
    WHERE id = 5`,
    (err, result) => {
      if (err) {
        console.error('Error in deleting product:', err);
        res.status(500).send('Error in deleting product');
      } else {
        res.status(201).send('Product deleted successfully');
      }
    }
  )
}
module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};