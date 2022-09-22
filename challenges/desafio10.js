db.produtos.find({ 
    valoresNutricionais: {
      $elemMatch: {
        tip: "proteínas",
        percentual: { $gte: 30, $lte: 40 },
      },
    },
  }, {
    _id: 0,
    nome: 1,
});