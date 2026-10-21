const movies = [];
const movieCountInput = prompt("How many movies would you like to rate?");
const movieCount = Number(movieCountInput);

if (Number.isInteger(movieCount) && movieCount > 0) {
  for (let i = 0; i < movieCount; i++) {
    const title = prompt(`Enter the title of movie ${i + 1}:`);

    if (title === null || title.trim() === "") {
      break;
    }

    let rating;

    while (true) {
      const ratingInput = prompt(`Enter a rating for "${title}" from 1.0 to 5.0:`);

      if (ratingInput === null || ratingInput.trim() === "") {
        rating = null;
        break;
      }

      const parsedRating = Number(ratingInput);

      if (Number.isFinite(parsedRating) && parsedRating >= 1 && parsedRating <= 5) {
        rating = parsedRating;
        break;
      }

      alert("Please enter a number from 1.0 to 5.0.");
    }

    if (rating === null) {
      break;
    }

    movies.push({ title: title.trim(), rating });
  }
}

movies.sort((a, b) => b.rating - a.rating);

const output = document.createElement("main");
const heading = document.createElement("h1");
heading.textContent = "Movie rankings";
output.appendChild(heading);

if (movies.length === 0) {
  const emptyMessage = document.createElement("p");
  emptyMessage.textContent = "No movie ratings were entered.";
  output.appendChild(emptyMessage);
}
else {
  const list = document.createElement("ol");

  for (const movie of movies) {
    const listItem = document.createElement("li");
    listItem.textContent = `${movie.title}: ${movie.rating}/5`;
    list.appendChild(listItem);
  }

  output.appendChild(list);

  const highestRatedMovie = movies[0];
  const highestRated = document.createElement("p");
  highestRated.textContent = `Highest-rated movie: ${highestRatedMovie.title} (${highestRatedMovie.rating}/5)`;
  output.appendChild(highestRated);
}

document.body.appendChild(output);