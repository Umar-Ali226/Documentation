//SANITY SCHEMA product.js

export default {
    name: 'product',
    title: 'Aura',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Watch Name',
          type: 'string',
          description: 'Aura One: Timeless elegance and precision, designed for every moment.'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          description: 'Describe about product'
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
          description: 'Price of product'
        },
        {
          name: 'image',
          title: 'Product Image',
          type: 'image',
          description: 'A high-quality image of the product'
        },
        {
          category: 'category',
          title: 'Category',
          type: 'string',
          description: 'type of product (e.g. watch,bracelet, mini perfume)'  
        },
    ]
};