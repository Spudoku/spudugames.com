const blogSortSelect = document.getElementById("blog-sort-options");

const blogContainer = document.getElementById("blog-list");



let blogEntries = [];

let selectedCategory = "all"

// blog category selectors (and their event listeners)
const selectAll = document.getElementById("blog-select-all");
const selectGames = document.getElementById("blog-select-games");
const selectAuthorUpdate = document.getElementById("blog-select-author-update");
const selectBrainLeak = document.getElementById("blog-select-brain-leak");

selectAll.addEventListener("click", () => {
    displayCategory("all");
    selectedCategory = "all";
});

selectGames.addEventListener("click", () => {
    displayCategory("games");
    selectedCategory = "games";
});

selectAuthorUpdate.addEventListener("click", () => {
    displayCategory("author-update");
    selectedCategory = "author-update";
});

selectBrainLeak.addEventListener("click", () => {
    displayCategory("brain-leak");
    selectedCategory = "brain-leak";
});


// initialize the blog entries list
document.addEventListener("DOMContentLoaded", () => {
    blogEntries = getBlogEntries();
    sortBlogs("Newest", blogEntries);
    displayCategory("all");
});

// When select element is changed, sort the blogs accordingly
blogSortSelect.addEventListener("change", () => {
    sortBlogs(blogSortSelect.value, blogEntries);
});

function sortBlogs(sortBy, entries) {
    console.log(sortBy + "; " + entries);
    if (sortBy === "Newest") {
        // sort by most recent
        entries.sort((a, b) => {
            let aDate = new Date(a.dataset.date)
            let bDate = new Date(b.dataset.date);
            return bDate - aDate;
        });
    } else if (sortBy === "Oldest") {
        // sort by least recent
        entries.sort((a, b) => {
            let aDate = new Date(a.dataset.date)
            let bDate = new Date(b.dataset.date);
            return aDate - bDate;

        });
    } else {
        // random sort
    }
    blogContainer.innerHTML = "";
    blogEntries.forEach(item => {
        blogContainer.appendChild(item);
    });

    displayCategory(selectedCategory);
}



function displayCategory(category) {
    console.log(category);
    if (category === "all") {
        blogEntries.forEach(item => {
            item.style.display = "flex";
        });
    } else {
        // hide all blog entries except the ones that are supposed to be visible
        let visible = blogEntries.filter((item) => {
            console.log(item);
            return item.dataset.category === category;
        });
        let hidden = blogEntries.filter((item) => {
            console.log(item);
            return item.dataset.category !== category;
        });

        visible.forEach(item => {
            item.style.display = 'flex';
        });

        hidden.forEach(item => {
            item.style.display = 'none';
        })

        console.log(visible);
        console.log(hidden);
    }
}


function getBlogEntries() {
    // TODO: add meta stuff to each blog entry:
    // 1. get blog-meta container within each element
    // 2. add subcontainer with 2 p elements
    // 3. add category of blog post to p elements as classes
    let entries = Array.from(blogContainer.querySelectorAll(".blog-entry"))
    entries.forEach(item => {

    });
    return entries;
}