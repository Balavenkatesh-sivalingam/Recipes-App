## 1. Create a Recipe

POST /api/recipes
------------------
## Request Body:
{
  "title": "Paneer Butter Masala",
  "ingredients": ["Paneer", "Tomato", "Butter", "Spices"],
  "instructions": "Cook onions and tomatoes, grind, add spices and paneer, simmer.",
  "tags": ["Indian", "Vegetarian"]
}
Response (201 Created):
{
  "_id": "66d987f6fc13ae5a3b000001",
  "title": "Paneer Butter Masala",
  "ingredients": ["Paneer", "Tomato", "Butter", "Spices"],
  "instructions": "Cook onions and tomatoes, grind, add spices and paneer, simmer.",
  "tags": ["Indian", "Vegetarian"],
  "createdAt": "2025-08-29T07:21:38.123Z",
  "__v": 0
}

## 2️.Get All Recipes

GET /api/recipes
------------------
## Response (200 OK):
{
        "_id": "68b06a4a481648934235f7d8",
        "title": "pizza",
        "ingredients": [
            "bread",
            "chilly flakes",
            "oninon",
            "chicken",
            "tomato",
            "pepproni",
            "butter"
        ],
        "instructions": "To make pizza first make dough, cook chicken, bake dough, add butter, oninon and tomato",
        "tags": [
            "non-veg",
            "chicken-pizza",
            "pizza"
        ],
        "createdAt": "2025-08-28T14:40:10.936Z",
        "__v": 0}

## 3️. Get Recipe by ID
------------------
## Response (200 OK):
{
  "_id": "66d987f6fc13ae5a3b000001",
  "title": "Paneer Butter Masala",
  "ingredients": ["Paneer", "Tomato", "Butter", "Spices"],
  "instructions": "Cook onions and tomatoes, grind, add spices and paneer, simmer.",
  "tags": ["Indian", "Vegetarian"],
  "createdAt": "2025-08-29T07:21:38.123Z"
}
Response (404 Not Found):
{ "message": "Recipe not found" }

## 4️. Update Recipe

PUT /api/recipes/:id
------------------
## Request Body: 
{ "title": "Paneer Butter Masala (Less Cream)" }

## Response (200 OK):
{
  "_id": "66d987f6fc13ae5a3b000001",
  "title": "Paneer Butter Masala (Less Cream)",
  "ingredients": ["Paneer", "Tomato", "Butter", "Spices"],
  "instructions": "Cook onions and tomatoes, grind, add spices and paneer, simmer.",
  "tags": ["Indian", "Vegetarian"],
  "createdAt": "2025-08-29T07:21:38.123Z",
  "__v": 0
}
Response (404 Not Found):
{ "message": "Recipe not found" }

## 5️.  Delete Recipe

DELETE /api/recipes/:id
------------------
## Response (200 OK):
{ "message": "Recipe deleted successfully" }

## Response (404 Not Found):
{ "message": "Recipe not found" }


