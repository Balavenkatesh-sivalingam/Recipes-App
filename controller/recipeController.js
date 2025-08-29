const Recipe = require("../models/recipeModel");

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({
      message: "not created",
    });
  }
};
exports.insertManyRecipes = async (req, res) => {
  try {
    const newRecipe = req.body;

    const insertedRecipes = await Recipe.insertMany(newRecipe);
    res.status(201).json(insertedRecipes);
  } catch (error) {
    res.status(400).json({
      message: "not created",
    });
  }
};

exports.getAllRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.status(201).json(recipe);
  } catch (erorr) {
    res.status(400).json({
      message: "unable to get the recipes",
    });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipeId = await Recipe.findById(req.params.id);
    res.status(201).json(recipeId);
  } catch (error) {
    res.status(401).json({
      message: "unable to fine the recipe by ID",
    });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedRecipe);
  } catch (error) {
    res.status(401).json({
      message: "unable to update the recipe",
    });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const deltedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    res.status(201).json(deltedRecipe);
  } catch (error) {
    res.status(401).json({
      message: "unable to delete the recipe",
    });
  }
};
