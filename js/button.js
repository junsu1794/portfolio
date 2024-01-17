function collapse(element){
    var before = document.getElementsByClassName("actives")[0]
    if (before && document.getElementsByClassName("actives")[0] != element){
        before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
        before.classList.remove("actives");                  // 버튼 비활성화
    }
    element.classList.toggle("actives");
    var content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null;         // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
    }
}