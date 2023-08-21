
const categories = document.getElementById("categories");
console.log(categories);

const categoryAmount = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryAmount.length}`);

categoryAmount.forEach((categoryItem) => {
     const categoryTitle = categoryItem.querySelector("h2").textContent;
     const elementInCategory = categoryItem.querySelectorAll("li");

     console.log(`Category; ${categoryTitle}`);
     console.log(`Elements: ${elementInCategory.length}`);
});