const close_ = "http://127.0.0.1:5500/static/close.svg";
const open_ = "http://127.0.0.1:5500/static/menu.svg";

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
