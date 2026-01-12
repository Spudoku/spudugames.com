
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
        blogEntries = shuffle(blogEntries);
    }

    // clear blogContainer
    blogContainer.innerHTML = "";

    // re-append blog entry elements
    for (let i = 0; i < blogEntries.length; i++) {
        blogContainer.appendChild(blogEntries[i]);
    }


    displayCategory(selectedCategory);
}



function displayCategory(category) {
    if (category === "all") {
        blogEntries.forEach(item => {
            item.style.display = "flex";
        });
    } else {
        // hide all blog entries except the ones that are supposed to be visible
        let visible = blogEntries.filter((item) => {
            return item.dataset.category === category;
        });

        let hidden = blogEntries.filter((item) => {
            return item.dataset.category !== category;
        });

        // change display settings of each blog element
        visible.forEach(item => {
            item.style.display = 'flex';
        });

        hidden.forEach(item => {
            item.style.display = 'none';
        })

    }
}


// Collect and process each blog entry element
function getBlogEntries() {
    let entries = Array.from(blogContainer.querySelectorAll(".blog-entry"))
    entries.forEach(item => {
        let blogMetaInfo = item.querySelector(".blog-meta-info");
        blogMetaInfo.innerHTML += `<p class="blog-meta-text">${item.dataset.date}</p>`;

        // Insert a p element with author category and class
        switch (item.dataset.category) {
            case "games":
                blogMetaInfo.innerHTML += `<p class="blog-meta-text games">Game Discussions</p>`;
                break;
            case "author-update":
                blogMetaInfo.innerHTML += `<p class="blog-meta-text author-update">Author Update</p>`;
                break;
            case "brain-leak":
                blogMetaInfo.innerHTML += `<p class="blog-meta-text brain-leak">Brain Leak</p>`;
                break;
            default:
                break;
        }
    });
    return entries;
}

// shuffle an array in-place using the Fisher-Yates Shuffle
// code based off of https://www.geeksforgeeks.org/javascript/how-to-shuffle-an-array-using-javascript/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate Random index
        const j = Math.floor(Math.random() * (i + 1));

        // swap elements at indices i and j
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}