const Schema = require('mongoose').Schema;

const PictureSchema = new Schema({
  url: String,
  data: { type: Buffer, required: true },
  mimeType: { type: String, required: true },
  targetProperty: {
    type: Schema.Types.ObjectId,
    ref: 'property',
    index: true,
  },
});

module.exports = PictureSchema;
