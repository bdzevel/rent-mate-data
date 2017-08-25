const Schema = require('mongoose').Schema;

const AddressSchema = new Schema({
  line1: { type: String, required: true },
  line2: String,
  city: { type: String, required: true, index: true },
  region: { type: String, required: true, index: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true, index: true },
});

const PropertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
    index: true,
  },
  name: { type: String, required: true },
  description: String,
  address: { type: AddressSchema, required: true },
  avatarUrl: String,
  pictureUrls: [ String ],
  bedrooms: Number,
  bathrooms: Number,
  size: Number,
});

module.exports = PropertySchema;
