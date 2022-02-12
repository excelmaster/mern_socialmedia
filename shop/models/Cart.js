const Moongose = require("mongoose");

const CartSchema = new Moongose.Schema(
    {
        userId: { type: String, required:true},
        products : [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    {timestamps: true}
);

module.exports = Moongose.model("Cart", CartSchema);