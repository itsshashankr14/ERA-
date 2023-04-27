const searchInput = document.querySelector('.search-container input[type="text"]');
const resultsList = document.querySelector('.search-container .results');

const searchData = [
  { title: 'Result 1', url: 'www.google.com' },
  { title: 'Result 2', url: 'https://example.com/result2' },
  { title: 'Result 3', url: 'https://example.com/result3' },
  { title: 'Result 4', url: 'https://example.com/result4' },
  { title: 'Result 5', url: 'https://example.com/result5' },
];

function search() {
  const query = searchInput.value.toLowerCase();
  const matchingResults = searchData.filter(data => data.title.toLowerCase().includes(query));
  resultsList.innerHTML = '';
  if (matchingResults.length > 0) {
    matchingResults.forEach(result => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = result.url;
      a.textContent = result.title;
      li.appendChild(a);
      resultsList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No results found.';
    resultsList.appendChild(li);
  }
}

searchInput.addEventListener('input', search);
