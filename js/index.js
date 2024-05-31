var SiteList = [];

if (localStorage.getItem("list") !== null) {
  SiteList = JSON.parse(localStorage.getItem("list"));
  showData(SiteList);
}

function addSite() {
  var bookmarkName = document.getElementById("BookmarkName").value;
  var websiteURL = document.getElementById("WebsiteURL").value;
  var Site = {
    name: bookmarkName,
    url: websiteURL,
  };
  if (
    Site.name.length > 3 &&
    Site.url.startsWith("www.") &&
    Site.url.endsWith(".com")
  ) {
    SiteList.push(Site);
    localStorage.setItem("list", JSON.stringify(SiteList));
    showData(SiteList);
    clearForm();
  } else {
    document.getElementById("boxMessage").style.display = "block";
  }
}

function showData(list) {
  var contain = "";
  for (var i = 0; i < list.length; i++) {
    contain += `
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${list[i].name}</td>
        <td>
            <a href="http://${list[i].url}" target="_blank">
                <button class="btn-visit">Visit <i class="fa-regular fa-eye"></i>
                </button>
           </a>
        </td>
        <td>
            <button class="btn-delete" onclick="deleteSite(${i})">Delete <i class="fa-solid fa-trash"></i>
        </button>
        </td>
      </tr>
    </tbody>
  </table>
    `;
  }
  document.getElementById("data").innerHTML = contain;
}

function clearForm() {
  var bookmarkName = document.getElementById("BookmarkName");
  var websiteURL = document.getElementById("WebsiteURL");
  bookmarkName.value = " ";
  websiteURL.value = " ";
}

function deleteSite(index) {
  SiteList.splice(index, 1);
  showData(SiteList);
  localStorage.setItem("list", JSON.stringify(SiteList));
}

function closeBoxMessage() {
  document.getElementById("boxMessage").style.display = "none";
}
