fetch("https://efren-resume-api-cxbtbjdfeaavgsgr.centralus-01.azurewebsites.net/api/GetVisitorCount")
.then(response => response.text())
.then(data => {
document.getElementById("visitor-count").innerText = data;
});