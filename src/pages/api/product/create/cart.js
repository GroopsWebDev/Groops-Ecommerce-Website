 

async function CreateCart(req, res) {
  try {
    const { product_id, quantity, userId } = req.body;

    const product = await prisma.product.findFirst({
      where: { skuid: product_id },
    });

    if (!product) {
      throw new Error(`Product with ID ${product_id} not found`);
    }

    const cartItem = await prisma.cart.create({
      data: {
        productId: product_id,
        userId: userId,
        qty: quantity,
      },
    });

    res.json({ status: 200, cartItem });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default CreateCart;
