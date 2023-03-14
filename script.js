// $(document).ready(function() {
//     // hiển thị thông tin của một bộ phim
//     function showMovie(movie) {
//         $("#movie-title").text(movie.title);
//         $("#movie-year").text(movie.year);
//         $("#movie-director").text(movie.director);
//         $("#movie-genre").text(movie.genre);
//         $("#movie-plot").text(movie.plot);
//         $("#movie-poster").attr("src", movie.poster);
//     }

//     // tìm kiếm phim
//     $("#search-form").submit(function(event) {
//         event.preventDefault();
//         var query = $("#search-query").val();
//         $.ajax({
//             url: "/search",
//             type: "GET",
//             data: {"query": query},
//             success: function(movies) {
//                 $("#search-results").empty();
//                 if (movies.length > 0) {
//                     for (var i = 0; i < movies.length; i++) {
//                         var movie = movies[i];
//                         var item = $("<li></li>");
//                         var link = $("<a></a>").attr("href", "/movie/" + movie.id).text(movie.title);
//                         item.append(link);
//                         $("#search-results").append(item);
//                     }
//                 } else {
//                     var item = $("<li></li>").text("No movies found");
//                     $("#search-results").append(item);
//                 }
//             }
//         });
//     });

//     // đăng nhập
//     $("#login-form").submit(function(event) {
//         event.preventDefault();
//         var email = $("#email").val();
//         var password = $("#password").val();
//         $.ajax({
//             url: "/login",
//             type: "POST",
//             data: {"email": email, "password": password},
//             success: function(response) {
//                 if (response.status == "success") {
//                     window.location.href = "/";
//                 } else {
//                     $("#login-error").text(response.message);
//                 }
//             }
//         });
//     });

//     // đăng ký
//     $("#register-form").submit(function(event) {
//         event.preventDefault();
//         var name = $("#name").val();
//         var email = $("#email").val();
//         var password = $("#password").val();
//         $.ajax({
//             url: "/register",
//             type: "POST",
//             data: {"name": name, "email": email, "password": password},
//             success: function(response) {
//                 if (response.status == "success") {
//                     window.location.href = "/";
//                 } else {
//                     $("#register-error").text(response.message);
//                 }
//             }
//         });
//     });

//     // đăng đánh giá
//     $("#review-form").submit(function(event) {
//         event.preventDefault();
//         var movieId = $("#movie-id").val();
//         var rating = $("input[name='rating']:checked").val();
//         var comment = $("#comment").val();
//         $.ajax({
//             url: "/review",
//             type: "POST",
//             data: {"movieId": movieId, "rating": rating, "comment": comment},
//             success: function(response) {
//                 if (response.status == "success") {
//                     window.location.href = "/movie/" + movieId;
//                 } else {
//                     $("#review-error").text(response.message);
//                 }
//             }
//         });
//     });

// // Lấy thông tin đăng nhập từ form và gửi request đến server
// function login() {
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;

// // Gửi request đến server để đăng nhập
// fetch("/login", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({
// email: email,
// password: password,
// }),
// })
// .then((response) => response.json())
// .then((data) => {
// // Nếu đăng nhập thành công, chuyển hướng về trang chủ
// if (data.success) {
// window.location.href = "/";
// }
// // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
// else {
// const errorElement = document.getElementById("error");
// errorElement.innerText = data.error;
// }
// });
// }

// // Lấy thông tin đăng ký từ form và gửi request đến server
// function register() {
// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;

// // Gửi request đến server để đăng ký
// fetch("/register", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({
// name: name,
// email: email,
// password: password,
// }),
// })
// .then((response) => response.json())
// .then((data) => {
// // Nếu đăng ký thành công, chuyển hướng về trang đăng nhập
// if (data.success) {
// window.location.href = "/login";
// }
// // Nếu đăng ký thất bại, hiển thị thông báo lỗi
// else {
// const errorElement = document.getElementById("error");
// errorElement.innerText = data.error;
// }
// });
// }

// // Lấy thông tin đánh giá từ form và gửi request đến server
// function submitReview() {
// const rating = document.getElementById("rating").value;
// const comment = document.getElementById("comment").value;
// const movieId = document.getElementById("movieId").value;

// // Gửi request đến server để đăng đánh giá
// fetch("/review", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({
// rating: rating,
// comment: comment,
// movieId: movieId,
// }),
// })
// .then((response) => response.json())
// .then((data) => {
// // Nếu đăng đánh giá thành công, tải lại trang để hiển thị đánh giá mới
// if (data.success) {
// location.reload();
// }
// // Nếu đăng đánh giá thất bại, hiển thị thông báo lỗi
// else {
// const errorElement = document.getElementById("error");
// errorElement.innerText = data.error;
// }
// });
// }

// // Function to display search results
// function displaySearchResults(movies) {
// const searchResultsContainer = document.getElementById("search-results");
// searchResultsContainer.innerHTML = "";

// // If no movies found, display message
// if (movies.length === 0) {
// const noResults = document.createElement("p");
// noResults.innerText = "No results found.";
// searchResultsContainer.appendChild(noResults);
// } else {
// // Loop through movies and create cards to display them
// for (let i = 0; i < movies.length; i++) {
// const movie = movies[i];
// const movieCard = createMovieCard(movie);
// searchResultsContainer.appendChild(movieCard);
// }
// }
// }

// // Function to create a card for a movie
// function createMovieCard(movie) {
// const movieCard = document.createElement("div");
// movieCard.classList.add("movie-card");

// // Add image
// const movieImage = document.createElement("img");
// movieImage.src = movie.image_url;
// movieImage.alt = movie.title;
// movieCard.appendChild(movieImage);

// // Add title
// const movieTitle = document.createElement("h2");
// movieTitle.innerText = movie.title;
// movieCard.appendChild(movieTitle);

// // Add description
// const movieDescription = document.createElement("p");
// movieDescription.innerText = movie.description;
// movieCard.appendChild(movieDescription);

// // Add button to view details
// const viewDetailsButton = document.createElement("button");
// viewDetailsButton.innerText = "View Details";
// viewDetailsButton.addEventListener("click", function () {
// window.location.href = /movies/${movie.id};
// });
// movieCard.appendChild(viewDetailsButton);

// return movieCard;
// }
// function toggleForm() {
// const form = document.querySelector(".review-form");
// form.classList.toggle("hidden");
// }

// function handleFormSubmit(event) {
// event.preventDefault();
// const form = event.target;
// const movieId = form.querySelector('input[name="movie_id"]').value;
// const rating = form.querySelector('input[name="rating"]').value;
// const review = form.querySelector('textarea[name="review"]').value;

// const data = {
// movie_id: movieId,
// rating: rating,
// review: review,
// };

// fetch("/submit_review", {
// method: "POST",
// body: JSON.stringify(data),
// headers: {
// "Content-Type": "application/json",
// },
// })
// .then((response) => response.json())
// .then((data) => {
// console.log(data);
// if (data.success) {
// const reviewsList = document.querySelector(".reviews-list");
// const newReview = createReviewElement(data.review);
// reviewsList.prepend(newReview);
// form.reset();
// toggleForm();
// } else {
// alert("There was an error submitting your review. Please try again.");
// }
// });
// }

// function createReviewElement(review) {
// const container = document.createElement("div");
// container.classList.add("review");

// const header = document.createElement("div");
// header.classList.add("review-header");
// const rating = document.createElement("span");
// rating.classList.add("review-rating");
// rating.textContent = review.rating;
// header.appendChild(rating);

// const body = document.createElement("div");
// body.classList.add("review-body");
// const text = document.createElement("p");
// text.classList.add("review-text");
// text.textContent = review.review;
// body.appendChild(text);

// container.appendChild(header);
// container.appendChild(body);

// return container;
// }

// const reviewForm = document.querySelector(".review-form");
// const toggleButton = document.querySelector(".toggle-button");

// reviewForm.addEventListener("submit", handleFormSubmit);
// toggleButton.addEventListener("click", toggleForm);

// Hiển thị thông tin của một bộ phim
const showMovie = (movie) => {
  const { title, year, director, genre, plot, poster } = movie;
  $("#movie-title").text(title);
  $("#movie-year").text(year);
  $("#movie-director").text(director);
  $("#movie-genre").text(genre);
  $("#movie-plot").text(plot);
  $("#movie-poster").attr("src", poster);
};

// Tìm kiếm phim
$("#search-form").submit((event) => {
  event.preventDefault();
  const query = $("#search-query").val();
  $.ajax({
    url: "/search",
    type: "GET",
    data: { query },
    success: (movies) => {
      $("#search-results").empty();
      if (movies.length > 0) {
        for (let i = 0; i < movies.length; i++) {
          const { id, title } = movies[i];
          const item = $("<li></li>");
          const link = $("<a></a>")
            .attr("href", `/movie/${id}`)
            .text(title);
          item.append(link);
          $("#search-results").append(item);
        }
      } else {
        const item = $("<li></li>").text("No movies found");
        $("#search-results").append(item);
      }
    },
  });
});

// Đăng nhập
$("#login-form").submit((event) => {
  event.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();
  $.ajax({
    url: "/login",
    type: "POST",
    data: { email, password },
    success: (response) => {
      if (response.status === "success") {
        window.location.href = "/";
      } else {
        $("#login-error").text(response.message);
      }
    },
  });
});

// Đăng ký
$("#register-form").submit((event) => {
  event.preventDefault();
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();
  $.ajax({
    url: "/register",
    type: "POST",
    data: { name, email, password },
    success: (response) => {
      if (response.status === "success") {
        window.location.href = "/login";
      } else {
        $("#register-error").text(response.message);
      }
    },
  });
});

// Đăng đánh giá
$("#review-form").submit((event) => {
  event.preventDefault();
  const movieId = $("#movie-id").val();
  const rating = $("input[name='rating']:checked").val();
  const comment = $("#comment").val();
  $.ajax({
    url: "/review",
    type: "POST",
    data: { movieId, rating, comment },
    success: (response) => {
      if (response.status === "success") {
        window.location.href = `/movie/${movieId}`;
      } else {
        $("#review-error").text(response.message);
      }
    },
  });
});

// Lấy thông tin đăng nhập từ form và gửi request đến server
const login = () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// Gửi request đến server để đăng nhập
fetch("url/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ email, password })
})
.then(response => {
if (!response.ok) {
throw new Error("Network response was not ok");
}
return response.json();
})
.then(data => {
console.log(data);
// Lưu thông tin đăng nhập vào local storage hoặc cookie
})
.catch(error => {
console.error("Error:", error);
});
}
  // Gửi request đến server để đăng nhập
function login() {
  // Lấy giá trị tên đăng nhập và mật khẩu từ các input field
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Tạo một đối tượng XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Cài đặt các tham số cho request
  xhr.open("POST", "/login");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  // Xử lý kết quả trả về từ server
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
        window.location.href = "/home";
      } else {
        // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
        const errorElement = document.getElementById("error-message");
        errorElement.innerHTML = response.message;
        errorElement.style.display = "block";
      }
    } else {
      // Nếu có lỗi xảy ra trong quá trình đăng nhập, hiển thị thông báo lỗi
      const errorElement = document.getElementById("error-message");
      errorElement.innerHTML = "Đã có lỗi xảy ra trong quá trình đăng nhập";
      errorElement.style.display = "block";
    }
  };

  // Gửi request đến server với dữ liệu đăng nhập
  const data = JSON.stringify({ username: username, password: password });
  xhr.send(data);
}