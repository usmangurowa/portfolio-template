const close_ = window.location.origin + "/static/close.svg";
const open_ = window.location.origin + "/static/menu.svg";

$(document).ready(Ready);

function Ready() {
  $("#menu-icon").click(IconClick);
}

function IconClick(e) {
  if (e.target.src === close_) {
    $(this).attr("src", open_);
  } else {
    $(this).attr("src", close_);
  }
  $("#sliding").slideToggle("slow");
}
