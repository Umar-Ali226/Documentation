//SANITY SCHEMA shipment.js

export default {
    name: 'shipment',
    title: 'Delivery',
    type: 'document',
    fields: [
        {
          name: 'trackingID',
          title: 'Tracking ID',
          type: 'string',
          description: 'The Shipment Tracking ID'
        },
        {
          name: 'carrier',
          title: 'Carrier',
          type: 'reference',
          description: 'Which carrier is delivering the shipment?'
        },
        {
          name: 'stautus',
          title: 'Delivert Status',
          type: 'string',
          options: {
            list: ['In Transit ', 'Out for Delivery', 'Delivered', 'Cancelled', 'Lost', 'Returned']
          },
          description: 'Where is the product now?'
        },
        {
          name: 'order',
          title: 'Associated Order',
          type: 'reference',
          to: [{type: 'order'}],
          description: 'Links to the associated order for tracking and reference.'
        },
    ]
};