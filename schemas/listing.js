const Schema = require('mongoose').Schema;

const CostBasisSchema = new Schema({
  value: { type: Number, required: true, index: true },
  currencyCode: { type: String, required: true },
});

const ListingSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'property',
    index: true,
  },
  status: {
    type: String,
    required: true,
    enum: [ 'active', 'inactive' ],
    default: 'active',
    index: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
    index: true,
  },
  rent: { type: CostBasisSchema, required: true },
  fee: { type: CostBasisSchema, required: true },
  securityDeposit: { type: CostBasisSchema, required: true },
});

module.exports = ListingSchema;
