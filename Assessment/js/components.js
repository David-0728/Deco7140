function handleFormSubmit() {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const studentNumber = "s4778459";
      const uqcloudZoneId = "2dc2a6c5";

      const myHeaders = new Headers();
      myHeaders.append("student_number", "s4778459");
      myHeaders.append("uqcloud_zone_id", "2dc2a6c5");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchatt/",
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            return response.json().then((err) => {
              console.error("Server error response", err);
              throw new Error("Something went wrong");
            });
          }
          return response.json();
        })
        .then((result) => {
          console.log(result);
          document.getElementById("submitResponse").innerHTML =
            "Submission successful!";
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          document.getElementById("submitResponse").innerHTML =
            "Submission failed: " + error.message;
        });
    });
}

export { handleFormSubmit };