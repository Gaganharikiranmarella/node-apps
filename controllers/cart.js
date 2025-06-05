import Cart from "../models/cartModel.js";

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCart = async (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items) {
    return res.status(400).json({ error: "Missing userId or items" });
  }

  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { items },
      { new: true, upsert: true }
    );
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
