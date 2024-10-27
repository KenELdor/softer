document.getElementById('getFactBtn').addEventListener('click', () => {
    const factType = document.getElementById('factType').value;
    const numberInput = document.getElementById('numberInput').value.trim();
    const resultDiv = document.getElementById('result');
    const factText = document.getElementById('factText');
  
    
    resultDiv.classList.add('hidden');
  
  
    if (numberInput && isNaN(numberInput)) {
      factText.textContent = "error: число должно быть в виде цифры";
      resultDiv.classList.remove('hidden');
      return;
    }
  
    
    const number = numberInput || "random";
    const url = `http://numbersapi.com/${number}/${factType}`;
  
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return response.text();
      })
      .then(data => {
        factText.textContent = data;
        resultDiv.classList.remove('hidden');
      })
      .catch(error => {
        factText.textContent = "произошла ошибка: " + error.message;
        resultDiv.classList.remove('hidden');
      });
  });
