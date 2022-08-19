import storageApp from "./storage"
console.log(storageApp);

const formRef = document.querySelector(".feedback-form");
console.log(formRef);
formRef.addEventListener('input', handleInput);

const formData = {};

function handleInput(event) {
    const {name, value} = event.target;
    formData[name] = value;
    console.log(formData);
}
