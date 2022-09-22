db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tip: "calorias",
      quantidade: { $lt: 500 },
    },
  },
}, { 
  _id: 0,
  nome: 1,
});