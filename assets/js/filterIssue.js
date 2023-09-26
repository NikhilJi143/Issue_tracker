// get the form
let filter_Issue_Form = document.getElementById('filter-issue-form');

// issues of the project in json
let issues_Json = document.getElementById('issue-data').getAttribute('data');

// parse the data
let issues = JSON.parse(issues_Json);

// issues will be shown
let issue_List = document.getElementById('issues-list');

filter_Issue_Form.addEventListener('submit', function (e) {
  e.preventDefault();

  //create empty array where result will be stored
  let filtered_Issues = [];

  //get all form data
  let labelsList = filter_Issue_Form.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

  let authorVal = filter_Issue_Form.querySelector(
    'input[type=radio][name=author]:checked'
  ).value;

  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  //add issue 
  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filtered_Issues.includes(el)) {
        filtered_Issues.push(el);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filtered_Issues.includes(el)) {
          filtered_Issues.push(el);
        }
      }
    });
  });
  
  //create a div and add details of the filtered issues
  issue_List.innerHTML = '';
  for (let issue of filtered_Issues) {
    let Div = document.createElement('div');
    Div.style = 'none';
    Div.innerHTML = `
      <div class="card w-100" >
    <div class="card-body" >
      <h4 class="card-title">Title : ${issue.title} </h4>
      <h5 class="card-title">Author : ${issue.author}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Description : ${issue.description}
      </h6>
    </div>
  </div>
  `;
  issue_List.appendChild(Div);
  }
});