//SANITY SCHEMA customer.js

export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Customer Name',
          type: 'string',
          description: 'Name of customer'
        },
        {
          name: 'email',
          title: 'E-mail',
          type: 'string',
          description: 'Contact information for updates & surprices'
        },
        {
          name: 'address',
          title: 'Shipping Address',
          type: 'text',
          description: 'Where the shipment will be delivered'
        }
    ]
};