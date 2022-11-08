function component() {
    const element = document.createElement('div');
  
    element.innerHTML = "Проверка";
  
    return element;
  }
  
  document.body.appendChild(component());