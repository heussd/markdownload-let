javascript:(function()%7B%22use%20strict%22%3Bfunction%20getSelectionText()%7Bvar%20e%3D%22%22%3Breturn%20window.getSelection%3Fe%3Dwindow.getSelection().toString()%3Adocument.selection%26%26%22Control%22!%3Ddocument.selection.type%26%26(e%3Ddocument.selection.createRange().text)%2Ce%7Dfunction%20download(e%2Ct)%7Bvar%20n%3Ddocument.createElement(%22a%22)%3Bn.setAttribute(%22href%22%2C%22data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C%22%2BencodeURIComponent(t))%2Cn.setAttribute(%22download%22%2Ce)%2Cn.style.display%3D%22none%22%2Cdocument.body.appendChild(n)%2Cn.click()%2Cdocument.body.removeChild(n)%7Dfunction%20quote(e)%7Breturn%22%3E%20%22%2Be.replace(%2F%5Cn%2Fg%2C%22%5Cn%3E%20%22)%7Dfunction%20addReference()%7Breturn%22%5Cn%5Cn%5B%22%2Bwindow.location.href%2B%22%5D(%22%2Bwindow.location.href%2B%22)%20(Last%20access%20%22%2B(new%20Date).toISOString()%2B%22)%22%7Dfunction%20doit()%7Bdownload(document.title%2B%22.md%22%2Cquote(getSelectionText())%2BaddReference())%7Ddownload(document.title%2B%22.md%22%2Cquote(getSelectionText())%2BaddReference())%3B%7D)()