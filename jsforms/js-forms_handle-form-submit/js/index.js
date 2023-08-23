console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Create an object to store form data
  const formData = {
    firstName: form.querySelector("#first-name").value,
    lastName: form.querySelector("#last-name").value,
    age: form.querySelector("#age").value,
    email: form.querySelector("#email").value,
    complaint: form.querySelector("#complaint").value,
    details: form.querySelector("#details").value,
    badness: form.querySelector("#badness").value,
    orderDate: form.querySelector("#order-date").value,
    tos: form.querySelector("#tos").checked,
  };

  console.log("Form Data:", formData);

  const ageBadnessSum = parseInt(formData.age) + parseInt(formData.badness);

  console.log(
    `The age-badness-sum of "${formData.firstName}" is "${ageBadnessSum}"`
  );
});
