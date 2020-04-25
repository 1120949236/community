$(function(){
	$(".follow-btn").click(follow);
});

function follow() {
	var btn = this;
	if($(btn).hasClass("btn-info")) {
		// 关注TA
		$.post(
		    CONTEXT_PATH + "/follow",
            {"entityType":3,"entityId":$(btn).prev().val()},
            function (data) {
		        data = $.parseJSON(data);
		        if (data.code==0) {
                    $("#hintBody").text("已成功关注!");
                } else {
                    $("#hintBody").text(data.msg);
                }
            }
        );
		// $(btn).text("已关注").removeClass("btn-info").addClass("btn-secondary");
	} else {
		// 取消关注
        $.post(
            CONTEXT_PATH + "/unfollow",
            {"entityType":3,"entityId":$(btn).prev().val()},
            function (data) {
                data = $.parseJSON(data);
                if (data.code==0) {
                    $("#hintBody").text("已取消关注！");
                } else {
                    $("#hintBody").text(data.msg);
                }
            }
        );
		// $(btn).text("关注TA").removeClass("btn-secondary").addClass("btn-info");
	}
    $("#hintModal").modal("show");
    setTimeout(function(){
        $("#hintModal").modal("hide");
        location.reload();
    }, 1000);
}