module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      itemId: String,
      name: String,
      weight: Number,
      tags: [String]
    },
    { timestamps: true }
  )

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Item = mongoose.model("item", schema);
  return Item;
};
