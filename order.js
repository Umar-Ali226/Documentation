//SANITY SCHEMA order.js

export default {
    name: 'order',
    title: 'Orders',
    type: 'document',
    fields: [
        {
          id: 'orderID',
          title: 'Order ID',
          type: 'string',
          description: 'A unique ID for the order'
        },
        {
          name: 'customer',
          title: 'Customer Name',
          type: 'reference',
          to: [{type : 'customer'}],
          description: 'Whose order is this?'
        },
        {
          name: 'product',
          title: 'Delivert Product',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'product'}] }],
          description: 'Which products are being delivered?'
        },
        {
          name: 'status',
          title: 'Order Status',
          type: 'string',
          options: {
            list: ['Pending', 'Processing', 'Delivered', 'Cancelled']
          },
          description: 'Track the status of the order'
        },
    ]
};